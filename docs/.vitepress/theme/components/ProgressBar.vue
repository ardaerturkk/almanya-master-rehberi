<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { readChecked } from "./storage";

const props = defineProps<{
  storageKey: string;
  total: number;
  label?: string;
}>();

const checkedCount = ref(0);
const mounted = ref(false);

onMounted(() => {
  checkedCount.value = readChecked(props.storageKey).length;
  mounted.value = true;
  // Re-check periodically in case the checklist below updates the same key
  const interval = window.setInterval(() => {
    checkedCount.value = readChecked(props.storageKey).length;
  }, 500);
  window.addEventListener("beforeunload", () => window.clearInterval(interval));
});

const percent = computed(() => {
  if (props.total === 0) return 0;
  return Math.round((Math.min(checkedCount.value, props.total) / props.total) * 100);
});
</script>

<template>
  <div class="amr-card amr-no-print">
    <strong>{{ label || "İlerleme" }}</strong>
    <div class="amr-progress-track">
      <div class="amr-progress-fill" :style="{ width: (mounted ? percent : 0) + '%' }"></div>
    </div>
    <div>{{ mounted ? `${checkedCount} / ${total} tamamlandı (%${percent})` : "Yükleniyor…" }}</div>
  </div>
</template>
