// linkinator --format json çıktısından kırık dış linkleri Markdown olarak özetler.
// Kullanım: node scripts/link-ozeti.mjs linkler.json
import { readFileSync } from "node:fs";

const sonuc = JSON.parse(readFileSync(process.argv[2], "utf8"));
const kirik = (sonuc.links ?? []).filter((l) => l.state === "BROKEN" && !l.url.startsWith("http://localhost"));

const satirlar = [`KIRIK_SAYISI=${kirik.length}`, "", "## Kırık dış linkler", ""];
if (kirik.length === 0) {
  satirlar.push("Kırık dış link yok.");
} else {
  satirlar.push("Durum 0, bağlantı kurulamadı demek; bot koruması veya geçici ağ hatası olabilir. Tarayıcıda elle kontrol et.");
  satirlar.push("");
  satirlar.push("| Link | Durum | Bulunduğu sayfa |");
  satirlar.push("| --- | --- | --- |");
  for (const l of kirik) {
    satirlar.push(`| ${l.url} | ${l.status} | ${(l.parent ?? "").replace("http://localhost:4173", "")} |`);
  }
}
console.log(satirlar.join("\n"));
