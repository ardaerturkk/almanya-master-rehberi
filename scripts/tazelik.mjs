// data/degerler.yml içinde dogrulama_tarihi 120 günden eski olan değerleri listeler.
// Çıktı: Markdown (stdout). Çıkış kodu her zaman 0; eskimiş değer sayısı ilk satırda yazılır.
import { readFileSync } from "node:fs";
import { load } from "js-yaml";

const ESKI_GUN = 120;
const bugun = process.env.BUGUN ? new Date(process.env.BUGUN) : new Date();
const veri = load(readFileSync(new URL("../data/degerler.yml", import.meta.url), "utf8"));

const eskiler = [];
for (const [grup, kayitlar] of Object.entries(veri)) {
  for (const [anahtar, kayit] of Object.entries(kayitlar)) {
    const [g, a, y] = String(kayit.dogrulama_tarihi).split(".").map(Number);
    const tarih = new Date(Date.UTC(y, a - 1, g));
    const gun = Math.floor((bugun.getTime() - tarih.getTime()) / 86_400_000);
    if (gun > ESKI_GUN) {
      eskiler.push({ anahtar: `${grup}.${anahtar}`, etiket: kayit.etiket, tarih: kayit.dogrulama_tarihi, gun, kaynak: kayit.kaynak });
    }
  }
}

const satirlar = [];
satirlar.push(`ESKI_SAYISI=${eskiler.length}`);
satirlar.push("");
satirlar.push(`## Doğrulama tarihi ${ESKI_GUN} günden eski değerler`);
satirlar.push("");
if (eskiler.length === 0) {
  satirlar.push("Eskimiş değer yok.");
} else {
  satirlar.push("| Değer | Anahtar | Son doğrulama | Gün | Kaynak |");
  satirlar.push("| --- | --- | --- | --- | --- |");
  for (const e of eskiler.sort((x, y) => y.gun - x.gun)) {
    satirlar.push(`| ${e.etiket} | \`${e.anahtar}\` | ${e.tarih} | ${e.gun} | ${e.kaynak ?? "yok"} |`);
  }
  satirlar.push("");
  satirlar.push("Her değeri kaynağından kontrol edip `data/degerler.yml` içinde `dogrulama_tarihi` alanını güncelle.");
}
console.log(satirlar.join("\n"));
