<script setup lang="ts">
import { ref, computed } from "vue";
import { withBase } from "vitepress";
import { SORULAR, rotaHesapla, type Cevaplar } from "./rota";

const cevaplar = ref<Cevaplar>({});
const sira = ref(0);
const bitti = computed(() => sira.value >= SORULAR.length);
const soru = computed(() => SORULAR[sira.value]);
const rota = computed(() => (bitti.value ? rotaHesapla(cevaplar.value) : null));
const seciliDeger = computed(() => cevaplar.value[soru.value?.id]);

function sec(deger: string) {
  cevaplar.value = { ...cevaplar.value, [soru.value.id]: deger };
}
function ileri() {
  if (seciliDeger.value) sira.value += 1;
}
function geri() {
  if (sira.value > 0) sira.value -= 1;
}
function bastan() {
  cevaplar.value = {};
  sira.value = 0;
}
</script>

<template>
  <div class="amr-card amr-no-print">
    <h3>Kişisel rotanı bul</h3>

    <form v-if="!bitti" @submit.prevent="ileri">
      <p class="amr-sh-ilerleme" aria-live="polite">Soru {{ sira + 1 }} / {{ SORULAR.length }}</p>
      <fieldset class="amr-sh-set">
        <legend>{{ soru.soru }}</legend>
        <label v-for="s in soru.secenekler" :key="s.deger" class="amr-sh-secenek">
          <input type="radio" :name="soru.id" :value="s.deger" :checked="seciliDeger === s.deger" @change="sec(s.deger)" />
          <span>{{ s.etiket }}</span>
        </label>
      </fieldset>
      <div class="amr-sh-butonlar">
        <button type="button" :disabled="sira === 0" @click="geri">Geri</button>
        <button type="submit" class="amr-sh-ana" :disabled="!seciliDeger">
          {{ sira === SORULAR.length - 1 ? "Rotamı göster" : "İleri" }}
        </button>
      </div>
    </form>

    <div v-else-if="rota" aria-live="polite">
      <h4>Seni ilgilendiren sayfalar</h4>
      <ul>
        <li v-for="o in rota.sayfalar" :key="o.baglanti">
          <a :href="withBase(o.baglanti)">{{ o.baslik }}</a>: {{ o.neden }}
        </li>
      </ul>
      <h4>Atlayabileceğin veya kısaltabileceğin adımlar</h4>
      <ul>
        <li v-for="o in rota.adimlar" :key="o.baglanti + o.baslik">
          <a :href="withBase(o.baglanti)">{{ o.baslik }}</a>: {{ o.neden }}
        </li>
      </ul>
      <template v-if="rota.uyarilar.length">
        <h4>Dikkat</h4>
        <ul>
          <li v-for="u in rota.uyarilar" :key="u">{{ u }}</li>
        </ul>
      </template>
      <p>Tarih planı için <a :href="withBase('/takvim')">takvim hesaplayıcıyı</a> kullan; sırayla ilerlemek için <a :href="withBase('/faz-1-hazirlik/')">Faz 1</a>'den başla.</p>
      <div class="amr-sh-butonlar">
        <button type="button" @click="geri">Son cevabı değiştir</button>
        <button type="button" @click="bastan">Baştan başla</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.amr-sh-ilerleme {
  margin: 0 0 6px;
  font-size: 0.85em;
  color: var(--vp-c-text-2);
}
.amr-sh-set {
  margin: 0 0 12px;
  padding: 0;
  border: 0;
}
legend {
  margin-bottom: 8px;
  font-weight: 600;
}
.amr-sh-secenek {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 6px 0;
  cursor: pointer;
}
.amr-sh-secenek input {
  margin-top: 4px;
  accent-color: var(--vp-c-brand-1);
}
.amr-sh-butonlar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
button {
  padding: 6px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.amr-sh-ana:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
button:focus-visible,
input:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
h4 {
  margin: 14px 0 4px;
}
</style>
