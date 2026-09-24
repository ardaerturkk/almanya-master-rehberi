<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { withBase } from "vitepress";
import { goster, icsUret, planla, varsayilanTarihler, type Donem } from "./takvim";

const bugun = new Date();
const donem = ref<Donem>("WiSe");
const yil = ref<number>(bugun.getMonth() >= 6 ? bugun.getFullYear() + 1 : bugun.getFullYear());
const kuyrukAy = ref<number>(4);
const baslangic = ref<string>(varsayilanTarihler("WiSe", yil.value).baslangic);
const sonBasvuru = ref<string>(varsayilanTarihler("WiSe", yil.value).sonBasvuru);

const yillar = [0, 1, 2, 3].map((k) => bugun.getFullYear() + k);

watch([donem, yil], () => {
  const v = varsayilanTarihler(donem.value, yil.value);
  baslangic.value = v.baslangic;
  sonBasvuru.value = v.sonBasvuru;
});

const gecerli = computed(() => /^\d{4}-\d{2}-\d{2}$/.test(baslangic.value) && /^\d{4}-\d{2}-\d{2}$/.test(sonBasvuru.value));
const plan = computed(() =>
  gecerli.value ? planla({ baslangic: baslangic.value, sonBasvuru: sonBasvuru.value, kuyrukAy: kuyrukAy.value }) : null,
);

function gecmis(d: Date): boolean {
  return d.getTime() < Date.UTC(bugun.getFullYear(), bugun.getMonth(), bugun.getDate());
}

function indir() {
  if (!plan.value) return;
  const blob = new Blob([icsUret(plan.value.maddeler)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `almanya-master-takvim-${donem.value}-${yil.value}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

</script>

<template>
  <div class="amr-card">
    <h3>Geriye Doğru Takvim Hesaplayıcı</h3>
    <p class="amr-tk-not">
      Dönemi ve programının başvuru son tarihini seç; takvim hem uni-assist sürelerini hem de vize
      randevu kuyruğunu geriye doğru hesaplasın. Bu tahmini bir çizelge, her programın kendi son tarihi
      farklı olabilir.
    </p>

    <div class="amr-tk-alanlar">
      <div class="amr-field">
        <label for="tk-donem">Dönem</label>
        <select id="tk-donem" v-model="donem">
          <option value="WiSe">Kış dönemi (WiSe, Ekim)</option>
          <option value="SoSe">Yaz dönemi (SoSe, Nisan)</option>
        </select>
      </div>
      <div class="amr-field">
        <label for="tk-yil">Yıl</label>
        <select id="tk-yil" v-model.number="yil">
          <option v-for="y in yillar" :key="y" :value="y">{{ y }}</option>
        </select>
      </div>
      <div class="amr-field">
        <label for="tk-baslangic">Dönem başlangıcı</label>
        <input id="tk-baslangic" type="date" v-model="baslangic" />
      </div>
      <div class="amr-field">
        <label for="tk-son">Programın başvuru son tarihi</label>
        <input id="tk-son" type="date" v-model="sonBasvuru" />
      </div>
      <div class="amr-field">
        <label for="tk-kuyruk">Vize randevu kuyruğu varsayımı</label>
        <select id="tk-kuyruk" v-model.number="kuyrukAy">
          <option :value="1">1 ay</option>
          <option :value="2">2 ay</option>
          <option :value="3">3 ay</option>
          <option :value="4">4 ay (en kötü durum)</option>
        </select>
      </div>
    </div>

    <template v-if="plan">
      <ul v-if="plan.uyarilar.length" class="amr-tk-uyari" role="alert">
        <li v-for="u in plan.uyarilar" :key="u">{{ u }}</li>
      </ul>

      <div class="amr-tk-tablo-kap">
        <table class="amr-tk-tablo">
          <thead>
            <tr>
              <th scope="col">Tarih</th>
              <th scope="col">Ne yapmalısın</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in plan.maddeler" :key="m.id" :class="{ 'amr-tk-gecmis': gecmis(m.tarih) }">
              <td class="amr-tk-tarih">{{ goster(m.tarih) }}<span v-if="gecmis(m.tarih)" class="amr-tk-etiket">geçmiş</span></td>
              <td>
                <a v-if="m.baglanti" :href="withBase(m.baglanti)">{{ m.baslik }}</a>
                <template v-else>{{ m.baslik }}</template>
                <div class="amr-tk-madde-not">{{ m.not }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="amr-tk-not">
        Vize satırı: Auswärtiges Amt Studium vizesi için misyona göre 1-4 ay randevu bekleme, ardından en az 15,
        bazen 45 güne kadar karar süresi bildiriyor; hesaba 15 günlük tampon eklenir.
      </p>
      <button type="button" class="amr-tk-buton" @click="indir">Takvime ekle (.ics indir)</button>
    </template>
  </div>
</template>

<style scoped>
.amr-tk-not {
  margin: 0 0 8px;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}
.amr-tk-alanlar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0 12px;
}
.amr-tk-uyari {
  margin: 12px 0;
  padding: 10px 10px 10px 26px;
  border-radius: 6px;
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-text-1);
  font-size: 0.9em;
}
.amr-tk-tablo-kap {
  overflow-x: auto;
  margin: 12px 0;
}
.amr-tk-tablo {
  display: table;
  width: 100%;
  margin: 0;
}
.amr-tk-tarih {
  white-space: nowrap;
  font-weight: 600;
}
.amr-tk-madde-not {
  font-size: 0.85em;
  color: var(--vp-c-text-2);
}
.amr-tk-gecmis {
  opacity: 0.6;
}
.amr-tk-etiket {
  margin-left: 6px;
  padding: 0 6px;
  border-radius: 8px;
  font-size: 0.75em;
  background: var(--vp-c-default-soft);
  font-weight: 400;
}
.amr-tk-buton {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 20px;
  background: transparent;
  color: var(--vp-c-brand-1);
  font-size: 0.9em;
  cursor: pointer;
}
.amr-tk-buton:hover {
  background: var(--vp-c-brand-soft);
}
.amr-tk-buton:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
</style>
