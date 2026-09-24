import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import PersistentChecklist from "./components/PersistentChecklist.vue";
import ProgressBar from "./components/ProgressBar.vue";
import BayerischeFormelHesaplayici from "./components/BayerischeFormelHesaplayici.vue";
import ButceHesaplayici from "./components/ButceHesaplayici.vue";
import GeriyeDoguTakvim from "./components/GeriyeDoguTakvim.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("PersistentChecklist", PersistentChecklist);
    app.component("ProgressBar", ProgressBar);
    app.component("BayerischeFormelHesaplayici", BayerischeFormelHesaplayici);
    app.component("ButceHesaplayici", ButceHesaplayici);
    app.component("GeriyeDoguTakvim", GeriyeDoguTakvim);
  },
} satisfies Theme;
