<script setup lang="ts">
// Her adım ve dallanma sayfasının altında "Bu sayfa işine yaradı mı?" bloğu.
// Backend yok: geri bildirim GitHub issue formlarına (önceden doldurulmuş) bağlanan linklerdir.
import { computed, ref, watch } from "vue";
import { useData } from "vitepress";

const { page } = useData();
const REPO = "https://github.com/ardaerturkk/almanya-master-rehberi";

const gorunur = computed(() => /^(faz-\d+-[^/]+\/\d{2}-|dallanma\/(?!index))/.test(page.value.relativePath));
const baslik = computed(() => page.value.title);
const cevap = ref<"" | "evet" | "hayir">("");
watch(() => page.value.relativePath, () => (cevap.value = ""));

function issue(sablon: string, alanlar: Record<string, string>): string {
  const q = new URLSearchParams({ template: sablon, ...alanlar });
  return `${REPO}/issues/new?${q.toString()}`;
}

const guncelDegil = computed(() =>
  issue("guncel-olmayan-bilgi.yml", { title: `[Güncel değil] ${baslik.value}`, sayfa: baslik.value }),
);
const eksikKonu = computed(() =>
  issue("eksik-konu.yml", { title: `[Eksik konu] ${baslik.value}`, sayfa: baslik.value }),
);
</script>

<template>
  <section v-if="gorunur" class="amr-geri amr-no-print" aria-labelledby="amr-geri-baslik">
    <h2 id="amr-geri-baslik" class="amr-geri-baslik">Bu sayfa işine yaradı mı?</h2>
    <div class="amr-geri-butonlar">
      <button type="button" :aria-pressed="cevap === 'evet'" @click="cevap = 'evet'">Evet</button>
      <button type="button" :aria-pressed="cevap === 'hayir'" @click="cevap = 'hayir'">Hayır, eksik veya yanlış var</button>
    </div>
    <p v-if="cevap === 'evet'" class="amr-geri-mesaj" role="status">
      Sevindik. Bir yanlışlık görürsen aşağıdan bildirebilirsin.
    </p>
    <p v-if="cevap" class="amr-geri-linkler">
      <a :href="guncelDegil" target="_blank" rel="noopener">Güncel olmayan bilgiyi bildir</a>
      <span aria-hidden="true"> · </span>
      <a :href="eksikKonu" target="_blank" rel="noopener">Eksik konu öner</a>
    </p>
    <p class="amr-geri-not">Bildirimler GitHub issue olarak açılır; kişisel bilgi yazma.</p>
  </section>
</template>

<style scoped>
.amr-geri {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}
.amr-geri-baslik {
  margin: 0 0 8px;
  padding: 0;
  border: 0;
  font-size: 1.05rem;
  letter-spacing: 0;
}
.amr-geri-butonlar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
button {
  padding: 6px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  cursor: pointer;
}
button[aria-pressed="true"] {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
.amr-geri-mesaj,
.amr-geri-linkler,
.amr-geri-not {
  margin: 10px 0 0;
  font-size: 0.9rem;
}
.amr-geri-not {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
</style>
