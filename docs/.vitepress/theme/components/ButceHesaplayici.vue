<script setup lang="ts">
import { ref, computed } from "vue";

const kira = ref<number | null>(410);
const yemek = ref<number | null>(180);
const sigorta = ref<number | null>(140);
const materyal = ref<number | null>(31);
const diger = ref<number | null>(50);
const semesterbeitrag = ref<number | null>(308);

const SPERRKONTO_AYLIK = 992;

const aylikToplam = computed(() => {
  const vals = [kira.value, yemek.value, sigorta.value, materyal.value, diger.value];
  return vals.reduce((sum: number, v) => sum + (v || 0), 0);
});

const yillikToplam = computed(() => aylikToplam.value * 12 + (semesterbeitrag.value || 0) * 2);

const sperrkontoFarki = computed(() => aylikToplam.value - SPERRKONTO_AYLIK);
</script>

<template>
  <div class="amr-card">
    <h3>Bütçe Hesaplayıcı</h3>
    <p style="margin-top: 0; font-size: 0.9em; color: var(--vp-c-text-2)">
      Varsayılan değerler Almanya ortalaması tahminleridir (bkz. Adım 6 kaynakları) — kendi
      hedef şehrine göre güncelle, özellikle kira büyük şehirlerde çok daha yüksek olabilir.
    </p>

    <div class="amr-field">
      <label for="kira">Aylık kira (EUR)</label>
      <input id="kira" type="number" v-model.number="kira" />
    </div>
    <div class="amr-field">
      <label for="yemek">Aylık yemek (EUR)</label>
      <input id="yemek" type="number" v-model.number="yemek" />
    </div>
    <div class="amr-field">
      <label for="sigorta">Aylık sağlık sigortası (EUR)</label>
      <input id="sigorta" type="number" v-model.number="sigorta" />
    </div>
    <div class="amr-field">
      <label for="materyal">Aylık öğrenim materyali (EUR)</label>
      <input id="materyal" type="number" v-model.number="materyal" />
    </div>
    <div class="amr-field">
      <label for="diger">Aylık diğer (ulaşım, sosyal vb.) (EUR)</label>
      <input id="diger" type="number" v-model.number="diger" />
    </div>
    <div class="amr-field">
      <label for="semesterbeitrag">Dönem başına Semesterbeitrag (EUR)</label>
      <input id="semesterbeitrag" type="number" v-model.number="semesterbeitrag" />
    </div>

    <div class="amr-result">
      Aylık toplam: {{ aylikToplam.toFixed(0) }} EUR<br />
      Yıllık toplam (2 dönem Semesterbeitrag dahil): {{ yillikToplam.toFixed(0) }} EUR<br />
      Sperrkonto tutarıyla (992 EUR/ay) farkı:
      <span :style="{ color: sperrkontoFarki > 0 ? 'var(--vp-c-danger-1)' : 'var(--vp-c-success-1)' }">
        {{ sperrkontoFarki > 0 ? "+" : "" }}{{ sperrkontoFarki.toFixed(0) }} EUR/ay
      </span>
    </div>
    <p v-if="sperrkontoFarki > 0" style="font-size: 0.85em; color: var(--vp-c-text-2)">
      Tahmini harcaman Sperrkonto tutarını aşıyor — ek kaynak (burs, aile desteği, çalışma
      geliri) planlaman gerekebilir.
    </p>
  </div>
</template>
