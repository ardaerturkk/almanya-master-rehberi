<script setup lang="ts">
import { useData, withBase } from "vitepress";
const { site } = useData();
function aramaAc() {
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true, metaKey: true, bubbles: true }));
}
</script>

<template>
  <div class="amr-404">
    <p class="amr-404-kod">404</p>
    <h1>Sayfa bulunamadı</h1>
    <p>Aradığın sayfa taşınmış, adı değişmiş veya hiç var olmamış olabilir.</p>
    <p class="amr-404-linkler">
      <a class="amr-404-buton" :href="withBase('/')">Ana sayfaya dön</a>
      <button type="button" class="amr-404-buton" @click="aramaAc">Sitede ara</button>
      <a class="amr-404-buton" :href="withBase('/baslamadan-once')">Başlamadan önce</a>
    </p>
    <span hidden>{{ site.title }}</span>
  </div>
</template>

<style scoped>
.amr-404 {
  max-width: 480px;
  margin: 0 auto;
  padding: 64px 24px;
  text-align: center;
}
.amr-404-kod {
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  color: var(--vp-c-brand-1);
}
h1 {
  margin: 8px 0 12px;
  font-size: 1.5rem;
}
.amr-404-linkler {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 20px;
}
.amr-404-buton {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 20px;
  background: transparent;
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}
.amr-404-buton:hover {
  background: var(--vp-c-brand-soft);
}
</style>
