// İlerleme verisi tek yerde: localStorage.
//   amr-checklist:ana-adimlar   → tamamlanan adımlar ["adim-1", ...] (/checklist sayfası ve sidebar ✓)
//   amr-kontrol:<sayfa yolu>    → o sayfadaki işaretli onay kutuları ["kontrol-0", "liste-2", ...]
import { readChecked, writeChecked } from "./components/storage";

export const ANA_ANAHTAR = "ana-adimlar";
const KONTROL_ONEK = "amr-kontrol:";
const TUM_ONEKLER = ["amr-checklist:", KONTROL_ONEK];
export const DEGISIM_OLAYI = "amr-ilerleme-degisti";

function guvenli<T>(fn: () => T, yedek: T): T {
  try {
    return fn();
  } catch {
    return yedek;
  }
}

/** /almanya-master-rehberi/faz-3-basvuru/12-uni-assist → 12; adım sayfası değilse null. */
export function adimNumarasi(yol: string): number | null {
  const m = /\/faz-\d+-[^/]+\/(\d{2})-[^/]+?(?:\.html)?\/?$/.exec(yol);
  return m ? parseInt(m[1], 10) : null;
}

export function sayfaAnahtari(yol: string): string {
  return yol.replace(/\.html$/, "").replace(/\/$/, "").replace(/^.*?\/(faz-|dallanma|referans|takvim|uygun|baslamadan|checklist)/, "$1");
}

export function kontrolOku(yol: string): string[] {
  return guvenli(() => {
    const ham = window.localStorage.getItem(KONTROL_ONEK + sayfaAnahtari(yol));
    const v = ham ? JSON.parse(ham) : [];
    return Array.isArray(v) ? v : [];
  }, []);
}

export function kontrolYaz(yol: string, idler: string[]): void {
  guvenli(() => window.localStorage.setItem(KONTROL_ONEK + sayfaAnahtari(yol), JSON.stringify(idler)), undefined);
}

export function tamamlananAdimlar(): number[] {
  return readChecked(ANA_ANAHTAR)
    .map((id) => /^adim-(\d+)$/.exec(id)?.[1])
    .filter((n): n is string => !!n)
    .map(Number);
}

export function adimIsaretle(no: number, tamam: boolean): void {
  const id = `adim-${no}`;
  const mevcut = new Set(readChecked(ANA_ANAHTAR));
  if (tamam) mevcut.add(id);
  else mevcut.delete(id);
  writeChecked(ANA_ANAHTAR, Array.from(mevcut));
}

export function degisimBildir(): void {
  window.dispatchEvent(new CustomEvent(DEGISIM_OLAYI));
}

// ---- Dışa / içe aktarma ----

export interface IlerlemeDosyasi {
  surum: 1;
  tarih: string;
  veri: Record<string, string[]>;
}

export function ilerlemeTopla(): IlerlemeDosyasi {
  const veri: Record<string, string[]> = {};
  guvenli(() => {
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (!k || !TUM_ONEKLER.some((o) => k.startsWith(o))) continue;
      const v = JSON.parse(window.localStorage.getItem(k) ?? "[]");
      if (Array.isArray(v) && v.every((x) => typeof x === "string")) veri[k] = v;
    }
  }, undefined);
  return { surum: 1, tarih: new Date().toISOString(), veri };
}

/** Geçersizse hata fırlatır. Yalnızca bilinen anahtar öneklerini ve string dizilerini kabul eder. */
export function ilerlemeDogrula(nesne: unknown): IlerlemeDosyasi {
  const o = nesne as Partial<IlerlemeDosyasi> | null;
  if (!o || o.surum !== 1 || typeof o.veri !== "object" || o.veri === null) {
    throw new Error("Bu dosya bir ilerleme yedeği değil.");
  }
  const temiz: Record<string, string[]> = {};
  for (const [k, v] of Object.entries(o.veri)) {
    if (!TUM_ONEKLER.some((on) => k.startsWith(on)) || k.length > 200) continue;
    if (!Array.isArray(v) || v.length > 500 || !v.every((x) => typeof x === "string" && x.length < 60)) continue;
    temiz[k] = v;
  }
  return { surum: 1, tarih: String(o.tarih ?? ""), veri: temiz };
}

/** birlestir: mevcut işaretleri korur, yenileri ekler. degistir: yalnızca dosyadakiler kalır. */
export function ilerlemeUygula(d: IlerlemeDosyasi, mod: "birlestir" | "degistir"): void {
  guvenli(() => {
    if (mod === "degistir") {
      const silinecek: string[] = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && TUM_ONEKLER.some((o) => k.startsWith(o))) silinecek.push(k);
      }
      silinecek.forEach((k) => window.localStorage.removeItem(k));
    }
    for (const [k, v] of Object.entries(d.veri)) {
      const onceki = mod === "birlestir" ? JSON.parse(window.localStorage.getItem(k) ?? "[]") : [];
      const birlesik = Array.from(new Set([...(Array.isArray(onceki) ? onceki : []), ...v]));
      window.localStorage.setItem(k, JSON.stringify(birlesik));
    }
  }, undefined);
  degisimBildir();
}

function b64urlKodla(s: string): string {
  const bayt = new TextEncoder().encode(s);
  let ikili = "";
  bayt.forEach((b) => (ikili += String.fromCharCode(b)));
  return btoa(ikili).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlCoz(s: string): string {
  const ikili = atob(s.replace(/-/g, "+").replace(/_/g, "/"));
  return new TextDecoder().decode(Uint8Array.from(ikili, (c) => c.charCodeAt(0)));
}

export const BAGLANTI_ANAHTARI = "ilerleme=";

export function baglantiUret(d: IlerlemeDosyasi, taban: string): string {
  const kucuk = { surum: 1, tarih: d.tarih, veri: d.veri };
  return `${taban}#${BAGLANTI_ANAHTARI}${b64urlKodla(JSON.stringify(kucuk))}`;
}

export function baglantidanOku(hash: string): IlerlemeDosyasi | null {
  const i = hash.indexOf(BAGLANTI_ANAHTARI);
  if (i < 0) return null;
  try {
    return ilerlemeDogrula(JSON.parse(b64urlCoz(hash.slice(i + BAGLANTI_ANAHTARI.length))));
  } catch {
    return null;
  }
}
