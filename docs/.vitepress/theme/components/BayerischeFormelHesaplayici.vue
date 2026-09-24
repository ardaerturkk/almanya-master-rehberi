<script setup lang="ts">
import { ref, computed } from "vue";

type Preset = { label: string; nmax: number; nmin: number; hint: string };

// Kaynak: DHBW resmi "Notenumrechnung Türkei" tablosu (Stand Haziran 2026)
// Adım 3: Uygunluk Analizi sayfasındaki tabloyla aynı.
const presets: Preset[] = [
  { label: "4,00 en iyi — 0,70 geçer (örn. İstanbul Kültür Ü.)", nmax: 4.0, nmin: 0.7, hint: "Sistem 1" },
  { label: "4,00 en iyi — 1,00 geçer, plus yok (örn. İstanbul Ü., Dokuz Eylül, Yeditepe)", nmax: 4.0, nmin: 1.0, hint: "Sistem 2" },
  { label: "4,00 en iyi — 1,00 geçer, plus/minus var (örn. Bilgi, Özyeğin)", nmax: 4.0, nmin: 1.0, hint: "Sistem 3" },
  { label: "100'lük sistem — 100 en iyi, 50 geçer (örn. Mersin Ü.)", nmax: 100, nmin: 50, hint: "Sistem 5" },
  { label: "Kendi sistemimi gireceğim", nmax: NaN, nmin: NaN, hint: "Manuel" },
];

const selectedIndex = ref(1);
const customNmax = ref<number | null>(4.0);
const customNmin = ref<number | null>(1.0);
const nd = ref<number | null>(null);

const isCustom = computed(() => presets[selectedIndex.value].hint === "Manuel");
const nmax = computed(() => (isCustom.value ? customNmax.value : presets[selectedIndex.value].nmax));
const nmin = computed(() => (isCustom.value ? customNmin.value : presets[selectedIndex.value].nmin));

const result = computed(() => {
  if (nmax.value == null || nmin.value == null || nd.value == null) return null;
  if (nmax.value === nmin.value) return null;
  const x = 1 + (3 * (nmax.value - nd.value)) / (nmax.value - nmin.value);
  return Math.round(x * 100) / 100;
});
</script>

<template>
  <div class="amr-card">
    <h3>Not Dönüştürücü (Modifiye Edilmiş Bayerische Formel)</h3>
    <p style="margin-top: 0; font-size: 0.9em; color: var(--vp-c-text-2)">
      Bu hesaplama yönlendiricidir, bağlayıcı değil — nihai değerlendirme uni-assist veya
      üniversite tarafından yapılır.
    </p>

    <div class="amr-field">
      <label for="preset">Not sistemin</label>
      <select id="preset" v-model="selectedIndex">
        <option v-for="(p, i) in presets" :key="p.label" :value="i">{{ p.label }}</option>
      </select>
    </div>

    <template v-if="isCustom">
      <div class="amr-field">
        <label for="nmax">En iyi not (Nmax)</label>
        <input id="nmax" type="number" step="0.01" v-model.number="customNmax" />
      </div>
      <div class="amr-field">
        <label for="nmin">Geçer notun en düşük değeri (Nmin)</label>
        <input id="nmin" type="number" step="0.01" v-model.number="customNmin" />
      </div>
    </template>

    <div class="amr-field">
      <label for="nd">Senin notun (Nd)</label>
      <input id="nd" type="number" step="0.01" v-model.number="nd" placeholder="örn. 3.4" />
    </div>

    <div v-if="result !== null" class="amr-result">
      Yaklaşık Alman notu: {{ result }} (1,0 en iyi — 4,0 geçer)
    </div>
  </div>
</template>
