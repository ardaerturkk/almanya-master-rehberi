<script setup lang="ts">
import { ref, computed } from "vue";
import { degerBul, kaynakListesi, kaynakAdi as ad } from "../degerler";

const props = defineProps<{ k: string }>();

// Bilinmeyen anahtar burada hata fırlatır ve build'i durdurur.
const kayit = degerBul(props.k);
const metin = computed(() => kayit.kisa ?? kayit.deger);
const kaynaklar = kaynakListesi(kayit);
const belirsiz = kayit.durum === "belirsiz";
const acik = ref(false);
const kimlik = `deger-${props.k.replace(/[^a-z0-9]/gi, "-")}`;

function kapatKaybolunca(e: FocusEvent) {
  const kap = e.currentTarget as HTMLElement;
  if (!kap.contains(e.relatedTarget as Node | null)) acik.value = false;
}
</script>

<template>
  <span
    class="deger"
    @mouseenter="acik = true"
    @mouseleave="acik = false"
    @focusout="kapatKaybolunca"
    @keydown.esc="acik = false"
  >
    <button
      type="button"
      class="deger-metin"
      :aria-describedby="acik ? kimlik : undefined"
      :aria-expanded="acik"
      @click="acik = !acik"
    >{{ metin }}</button><span v-if="belirsiz" class="deger-rozet" title="Bu değer tam doğrulanamadı">teyit et</span>
    <span v-if="acik" :id="kimlik" role="tooltip" class="deger-kutu">
      <strong>{{ kayit.etiket }}</strong>
      <span class="deger-satir">Son doğrulama: {{ kayit.dogrulama_tarihi }}</span>
      <span v-if="belirsiz" class="deger-satir deger-uyari">Kaynaklar çelişiyor veya tam doğrulanamadı; kullanmadan önce teyit et.</span>
      <span v-if="kaynaklar.length" class="deger-satir">
        Kaynak:
        <template v-for="(url, i) in kaynaklar" :key="url">
          <a :href="url" target="_blank" rel="noopener">{{ ad(url) }}</a><template v-if="i < kaynaklar.length - 1">, </template>
        </template>
      </span>
    </span>
  </span>
</template>

<style scoped>
.deger {
  position: relative;
  display: inline;
}
.deger-metin {
  all: unset;
  cursor: help;
  border-bottom: 1px dotted var(--vp-c-text-3);
  font-weight: inherit;
}
.deger-metin:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 2px;
}
.deger-rozet {
  margin-left: 4px;
  padding: 0 5px;
  border-radius: 8px;
  font-size: 0.7em;
  vertical-align: middle;
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
  white-space: nowrap;
}
.deger-kutu {
  position: absolute;
  z-index: 30;
  left: 0;
  top: 100%;
  margin-top: 4px;
  min-width: 220px;
  max-width: 300px;
  padding: 8px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.4;
  color: var(--vp-c-text-1);
  white-space: normal;
}
.deger-satir {
  display: block;
  margin-top: 2px;
  color: var(--vp-c-text-2);
}
.deger-uyari {
  color: var(--vp-c-warning-1);
}
</style>
