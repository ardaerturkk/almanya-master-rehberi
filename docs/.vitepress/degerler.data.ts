import { defineLoader } from "vitepress";
import { readFileSync } from "node:fs";
import { load as yamlYukle } from "js-yaml";

export interface DegerKaydi {
  etiket: string;
  deger: string;
  kisa?: string;
  sayi?: number;
  kaynak: string | null;
  dogrulama_tarihi: string;
  durum: "dogrulandi" | "belirsiz";
  not?: string;
}

export type DegerVerisi = Record<string, Record<string, DegerKaydi>>;

declare const data: DegerVerisi;
export { data };

// data/degerler.yml build zamanında okunur; dosya değişince dev sunucusu yeniden yükler.
export default defineLoader({
  watch: ["../../data/degerler.yml"],
  load(files: string[]): DegerVerisi {
    const parsed = yamlYukle(readFileSync(files[0], "utf8")) as DegerVerisi;
    const durumlar = ["dogrulandi", "belirsiz"];
    for (const [grup, kayitlar] of Object.entries(parsed)) {
      for (const [anahtar, kayit] of Object.entries(kayitlar)) {
        const ad = `${grup}.${anahtar}`;
        if (!kayit.etiket) throw new Error(`data/degerler.yml: ${ad} için etiket eksik`);
        if (!kayit.deger && !kayit.kisa) throw new Error(`data/degerler.yml: ${ad} için deger/kisa eksik`);
        if (!durumlar.includes(kayit.durum)) throw new Error(`data/degerler.yml: ${ad} için durum geçersiz (${kayit.durum})`);
        if (!/^\d{2}\.\d{2}\.\d{4}$/.test(String(kayit.dogrulama_tarihi))) {
          throw new Error(`data/degerler.yml: ${ad} için dogrulama_tarihi GG.AA.YYYY olmalı`);
        }
      }
    }
    return parsed;
  },
});
