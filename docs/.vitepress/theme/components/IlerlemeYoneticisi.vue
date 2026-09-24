<script setup lang="ts">
// Görünmez bileşen: her sayfada bir kez çalışır.
// - Sayfadaki onay kutularını (.amr-task-cb) localStorage'dan geri yükler ve değişiklikleri kaydeder.
// - "Kontrol" listesi tamamen işaretlenince ilgili adımı /checklist'te tamamlandı sayar.
// - Sidebar'da tamamlanan adımların yanına ✓ koyar.
import { onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vitepress";
import {
  adimIsaretle,
  adimNumarasi,
  degisimBildir,
  DEGISIM_OLAYI,
  kontrolOku,
  kontrolYaz,
  tamamlananAdimlar,
} from "../ilerleme";

const route = useRoute();
let gozlemci: MutationObserver | null = null;
let bekliyor = false;

function kutular(): HTMLInputElement[] {
  return Array.from(document.querySelectorAll<HTMLInputElement>(".vp-doc .amr-task-cb"));
}

function kutulariYukle() {
  const kayitli = new Set(kontrolOku(route.path));
  for (const kutu of kutular()) {
    if (kutu.dataset.hazir) continue;
    kutu.dataset.hazir = "1";
    if (kayitli.has(kutu.dataset.id ?? "")) kutu.checked = true;
  }
}

function sidebarGuncelle() {
  const tamam = new Set(tamamlananAdimlar());
  document.querySelectorAll<HTMLAnchorElement>(".VPSidebar a.link").forEach((a) => {
    const no = adimNumarasi(new URL(a.href, location.href).pathname);
    const bitti = no !== null && tamam.has(no);
    a.classList.toggle("amr-tamam", bitti);
    if (bitti) a.setAttribute("aria-label", `${a.textContent?.trim() ?? ""} (tamamlandı)`);
    else if (a.hasAttribute("aria-label") && no !== null) a.removeAttribute("aria-label");
  });
}

function yenile() {
  kutulariYukle();
  sidebarGuncelle();
}

function planla() {
  if (bekliyor) return;
  bekliyor = true;
  requestAnimationFrame(() => {
    bekliyor = false;
    yenile();
  });
}

function degisti(e: Event) {
  const kutu = e.target as HTMLElement | null;
  if (!kutu?.classList.contains("amr-task-cb")) return;
  const hepsi = kutular();
  kontrolYaz(
    route.path,
    hepsi.filter((k) => k.checked).map((k) => k.dataset.id as string),
  );
  const no = adimNumarasi(route.path);
  const kontrol = hepsi.filter((k) => k.dataset.grup === "kontrol");
  if (no !== null && kontrol.length > 0) adimIsaretle(no, kontrol.every((k) => k.checked));
  degisimBildir();
  sidebarGuncelle();
}

onMounted(() => {
  yenile();
  document.addEventListener("change", degisti);
  window.addEventListener(DEGISIM_OLAYI, sidebarGuncelle);
  window.addEventListener("storage", sidebarGuncelle);
  gozlemci = new MutationObserver(planla);
  gozlemci.observe(document.body, { childList: true, subtree: true });
});

onBeforeUnmount(() => {
  document.removeEventListener("change", degisti);
  window.removeEventListener(DEGISIM_OLAYI, sidebarGuncelle);
  window.removeEventListener("storage", sidebarGuncelle);
  gozlemci?.disconnect();
});
</script>

<template>
  <span hidden></span>
</template>
