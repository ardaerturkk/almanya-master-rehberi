import { data } from "../degerler.data";
import type { DegerKaydi } from "../degerler.data";

/** "grup.anahtar" ile kaydı bulur; yoksa hata fırlatır (build'i kırar, sessizce boş basmaz). */
export function degerBul(k: string): DegerKaydi {
  const [grup, anahtar, ...fazla] = k.split(".");
  const kayit = grup && anahtar && fazla.length === 0 ? data[grup]?.[anahtar] : undefined;
  if (!kayit) {
    throw new Error(`Bilinmeyen değer anahtarı "${k}". data/degerler.yml içinde "grup.anahtar" olarak tanımla.`);
  }
  return kayit;
}

export function degerSayi(k: string): number {
  const kayit = degerBul(k);
  if (typeof kayit.sayi !== "number") {
    throw new Error(`"${k}" için data/degerler.yml içinde sayısal "sayi" alanı yok.`);
  }
  return kayit.sayi;
}

export function kaynakListesi(kayit: DegerKaydi): string[] {
  return (kayit.kaynak ?? "")
    .split(";")
    .map((s) => s.trim())
    .filter((s) => /^https?:\/\//.test(s));
}

export const tumDegerler = data;

/** Kaynak linkinin görünen adı: alan adı. */
export function kaynakAdi(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
