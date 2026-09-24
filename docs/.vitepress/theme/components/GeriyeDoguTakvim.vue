<script setup lang="ts">
import { ref, computed } from "vue";

const baslangic = ref<string>("");

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() - months);
  return d;
}

function fmt(d: Date): string {
  return d.toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });
}

const plan = computed(() => {
  if (!baslangic.value) return null;
  const start = new Date(baslangic.value);
  if (isNaN(start.getTime())) return null;

  return [
    { label: "Faz 1: Hazırlık başlangıcı (program araştırması, dil sınavı hazırlığı)", date: addMonths(start, 13) },
    { label: "Dil sınavı / gerekiyorsa GRE-GMAT", date: addMonths(start, 11) },
    { label: "Faz 2: Belge toplama, apostil, tercüme", date: addMonths(start, 9) },
    { label: "Faz 3: Başvuru son tarihi (tipik, program bazlı değişir!)", date: addMonths(start, 7) },
    { label: "Faz 4: Vize süreci başlangıcı (kabul sonrası)", date: addMonths(start, 4) },
    { label: "Faz 5: Konaklama, Türkiye tarafı işler, bavul", date: addMonths(start, 1.5) },
    { label: "Varış / Faz 6 başlangıcı", date: start },
  ];
});
</script>

<template>
  <div class="amr-card">
    <h3>Geriye Doğru Takvim Hesaplayıcı</h3>
    <p style="margin-top: 0; font-size: 0.9em; color: var(--vp-c-text-2)">
      Almanya'da programının başlamasını istediğin tarihi gir, sana genel bir zaman çizelgesi
      hesaplasın. Bu tahmini bir çizelge — her programın kendi son tarihi farklı olabilir,
      mutlaka hedef üniversitenin kendi tarihleriyle çapraz kontrol et.
    </p>

    <div class="amr-field">
      <label for="baslangic">Programının başlamasını istediğin tarih</label>
      <input id="baslangic" type="date" v-model="baslangic" />
    </div>

    <div v-if="plan" class="amr-result" style="display: flex; flex-direction: column; gap: 6px;">
      <div v-for="item in plan" :key="item.label">
        <strong>{{ fmt(item.date) }}</strong> — {{ item.label }}
      </div>
    </div>
  </div>
</template>
