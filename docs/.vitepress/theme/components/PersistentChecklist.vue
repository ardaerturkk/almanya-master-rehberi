<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { readChecked, writeChecked } from "./storage";

const props = defineProps<{
  storageKey: string;
  items: { id: string; text: string }[];
  title?: string;
}>();

const checked = ref<Set<string>>(new Set());
const mounted = ref(false);

onMounted(() => {
  checked.value = new Set(readChecked(props.storageKey));
  mounted.value = true;
});

function toggle(id: string) {
  if (checked.value.has(id)) {
    checked.value.delete(id);
  } else {
    checked.value.add(id);
  }
  checked.value = new Set(checked.value);
  writeChecked(props.storageKey, Array.from(checked.value));
}
</script>

<template>
  <div class="amr-card">
    <h3 v-if="title">{{ title }}</h3>
    <div v-if="!mounted">Yükleniyor…</div>
    <div v-else>
      <div
        v-for="item in items"
        :key="item.id"
        class="amr-row"
        :class="{ 'amr-checked': checked.has(item.id) }"
      >
        <input
          type="checkbox"
          :id="`${storageKey}-${item.id}`"
          :checked="checked.has(item.id)"
          @change="toggle(item.id)"
        />
        <label :for="`${storageKey}-${item.id}`">{{ item.text }}</label>
      </div>
    </div>
  </div>
</template>
