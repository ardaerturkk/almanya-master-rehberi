import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import PersistentChecklist from "./components/PersistentChecklist.vue";
import ProgressBar from "./components/ProgressBar.vue";
import BayerischeFormelHesaplayici from "./components/BayerischeFormelHesaplayici.vue";
import ButceHesaplayici from "./components/ButceHesaplayici.vue";
import GeriyeDoguTakvim from "./components/GeriyeDoguTakvim.vue";
import Deger from "./components/Deger.vue";
import DegerTablosu from "./components/DegerTablosu.vue";
import IlerlemeYoneticisi from "./components/IlerlemeYoneticisi.vue";
import IlerlemeYedek from "./components/IlerlemeYedek.vue";
import UygunMuyumSihirbazi from "./components/UygunMuyumSihirbazi.vue";
import NotFound404 from "./components/NotFound404.vue";
import SayfaGeriBildirim from "./components/SayfaGeriBildirim.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(IlerlemeYoneticisi),
      "doc-after": () => h(SayfaGeriBildirim),
      "not-found": () => h(NotFound404),
    }),
  enhanceApp({ app }) {
    app.component("PersistentChecklist", PersistentChecklist);
    app.component("ProgressBar", ProgressBar);
    app.component("BayerischeFormelHesaplayici", BayerischeFormelHesaplayici);
    app.component("ButceHesaplayici", ButceHesaplayici);
    app.component("GeriyeDoguTakvim", GeriyeDoguTakvim);
    app.component("Deger", Deger);
    app.component("DegerTablosu", DegerTablosu);
    app.component("IlerlemeYedek", IlerlemeYedek);
    app.component("UygunMuyumSihirbazi", UygunMuyumSihirbazi);
  },
} satisfies Theme;
