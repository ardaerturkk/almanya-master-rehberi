<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  baglantiUret,
  baglantidanOku,
  ilerlemeDogrula,
  ilerlemeTopla,
  ilerlemeUygula,
  type IlerlemeDosyasi,
} from "../ilerleme";

const mesaj = ref("");
const hata = ref(false);
const baglanti = ref("");
const gelen = ref<IlerlemeDosyasi | null>(null);
const dosya = ref<HTMLInputElement | null>(null);

function bildir(m: string, h = false) {
  mesaj.value = m;
  hata.value = h;
}

onMounted(() => {
  // Paylaşılan bağlantıdan gelindiyse içe aktarma önerisi göster.
  const d = baglantidanOku(location.hash);
  if (d) gelen.value = d;
});

function disaAktar() {
  const veri = JSON.stringify(ilerlemeTopla(), null, 2);
  const url = URL.createObjectURL(new Blob([veri], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "almanya-rehberi-ilerleme.json";
  a.click();
  URL.revokeObjectURL(url);
  bildir("Yedek dosyası indirildi.");
}

async function dosyadanAl(e: Event) {
  const f = (e.target as HTMLInputElement).files?.[0];
  if (!f) return;
  try {
    gelen.value = ilerlemeDogrula(JSON.parse(await f.text()));
    bildir("");
  } catch (err) {
    bildir(err instanceof Error ? err.message : "Dosya okunamadı.", true);
  } finally {
    if (dosya.value) dosya.value.value = "";
  }
}

async function baglantiUretVeKopyala() {
  const taban = `${location.origin}${location.pathname}`;
  baglanti.value = baglantiUret(ilerlemeTopla(), taban);
  try {
    await navigator.clipboard.writeText(baglanti.value);
    bildir("Bağlantı panoya kopyalandı. Diğer cihazda açınca içe aktarma önerilir.");
  } catch {
    bildir("Bağlantı aşağıda; elle kopyala.");
  }
}

function uygula(mod: "birlestir" | "degistir") {
  if (!gelen.value) return;
  ilerlemeUygula(gelen.value, mod);
  gelen.value = null;
  if (location.hash.includes("ilerleme=")) history.replaceState(null, "", location.pathname + location.search);
  bildir("İlerleme içe aktarıldı. Sayfa yenileniyor…");
  setTimeout(() => location.reload(), 600);
}
</script>

<template>
  <div class="amr-card amr-no-print">
    <h3>İlerlemeni taşı</h3>
    <p class="amr-yedek-aciklama">
      İlerlemen yalnızca bu tarayıcıda saklanıyor. Telefon ile bilgisayar arasında taşımak için bir yedek
      dosyası indir veya paylaşılabilir bağlantı üret.
    </p>

    <div v-if="gelen" class="amr-yedek-gelen" role="alert">
      <strong>İçe aktarılacak bir ilerleme bulundu</strong>
      ({{ Object.keys(gelen.veri).length }} liste{{ gelen.tarih ? `, ${gelen.tarih.slice(0, 10)}` : "" }}).
      <div class="amr-yedek-butonlar">
        <button type="button" @click="uygula('birlestir')">Mevcut ilerlemeyle birleştir</button>
        <button type="button" @click="uygula('degistir')">Mevcut ilerlemenin yerine koy</button>
        <button type="button" @click="gelen = null">Vazgeç</button>
      </div>
    </div>

    <div class="amr-yedek-butonlar">
      <button type="button" @click="disaAktar">Dışa aktar (JSON)</button>
      <button type="button" @click="dosya?.click()">İçe aktar (JSON)</button>
      <button type="button" @click="baglantiUretVeKopyala">Bağlantı oluştur</button>
      <input ref="dosya" type="file" accept="application/json,.json" hidden aria-label="İlerleme yedeği dosyası seç" @change="dosyadanAl" />
    </div>

    <p v-if="baglanti" class="amr-yedek-baglanti"><code>{{ baglanti }}</code></p>
    <p v-if="mesaj" :class="{ 'amr-yedek-hata': hata }" role="status">{{ mesaj }}</p>
  </div>
</template>

<style scoped>
.amr-yedek-aciklama {
  margin: 0 0 8px;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}
.amr-yedek-butonlar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
}
button {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 0.9em;
}
button:hover {
  border-color: var(--vp-c-brand-1);
}
button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
.amr-yedek-gelen {
  margin: 8px 0;
  padding: 10px;
  border-radius: 6px;
  background: var(--vp-c-brand-soft);
}
.amr-yedek-baglanti {
  overflow-wrap: anywhere;
  font-size: 0.8em;
}
.amr-yedek-hata {
  color: var(--vp-c-danger-1);
}
</style>
