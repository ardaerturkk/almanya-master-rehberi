// Geriye doğru takvim hesabı. Tüm hesap gün bazlıdır (UTC tarihleriyle, yaz saati kaymasından etkilenmez).

export type Donem = "WiSe" | "SoSe";

export interface Girdi {
  baslangic: string; // YYYY-MM-DD, dönem başlangıcı
  sonBasvuru: string; // YYYY-MM-DD, programın başvuru son tarihi
  kuyrukAy: number; // vize randevu kuyruğu (Auswärtiges Amt: misyona göre 1-4 ay)
}

export interface Madde {
  id: string;
  tarih: Date;
  baslik: string;
  not: string;
  baglanti?: string;
}

// Varsayılan varsayımlar (kaynaklar için takvim sayfasına bak).
export const KUYRUK_GUN_AY = 30;
export const KARAR_MAKS_GUN = 45; // Auswärtiges Amt: karar süresi en az 15, bazen 45 güne kadar
export const TAMPON_GUN = 15;
export const UNI_ASSIST_ONCE_GUN = 56; // uni-assist: son tarihten en az 8 hafta önce

export function tarihCoz(s: string): Date {
  const [y, a, g] = s.split("-").map(Number);
  return new Date(Date.UTC(y, a - 1, g));
}

export function tarihYaz(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Tarihe gün ekler (negatif = geriye). Ay/yıl sınırlarını Date halleder. */
export function gunEkle(d: Date, gun: number): Date {
  return new Date(d.getTime() + gun * 86_400_000);
}

export function varsayilanTarihler(donem: Donem, yil: number): { baslangic: string; sonBasvuru: string } {
  return donem === "WiSe"
    ? { baslangic: `${yil}-10-01`, sonBasvuru: `${yil}-07-15` }
    : { baslangic: `${yil}-04-01`, sonBasvuru: `${yil}-01-15` };
}

export function goster(d: Date): string {
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export function planla(g: Girdi): { maddeler: Madde[]; uyarilar: string[] } {
  const S = tarihCoz(g.baslangic);
  const D = tarihCoz(g.sonBasvuru);
  const kuyrukGun = Math.round(g.kuyrukAy * KUYRUK_GUN_AY);
  const vizeKayit = gunEkle(S, -(kuyrukGun + KARAR_MAKS_GUN + TAMPON_GUN));
  const randevu = gunEkle(vizeKayit, kuyrukGun);
  const vizeKarar = gunEkle(randevu, KARAR_MAKS_GUN);

  const maddeler: Madde[] = [
    { id: "hazirlik", tarih: gunEkle(D, -330), baslik: "Program araştırması ve dil sınavı hazırlığı başlasın", not: "Faz 1", baglanti: "/faz-1-hazirlik/" },
    { id: "dil", tarih: gunEkle(D, -150), baslik: "Dil sınavı sonucu elinde olsun", not: "Sonuç haftalar sürebilir; TU Berlin geçici belge kabul etmiyor.", baglanti: "/faz-1-hazirlik/04-dil" },
    { id: "belge", tarih: gunEkle(D, -120), baslik: "Belge toplama ve yeminli tercüme", not: "Faz 2", baglanti: "/faz-2-belgeler/" },
    { id: "uniassist", tarih: gunEkle(D, -UNI_ASSIST_ONCE_GUN), baslik: "uni-assist'e başvur (uni-assist kullanan programlarda)", not: "uni-assist son tarihten en az 8 hafta önce öneriyor; Türkiye için işlem 2-3 hafta, genelde 4-6 hafta.", baglanti: "/faz-3-basvuru/12-uni-assist" },
    { id: "son", tarih: D, baslik: "Başvuru son tarihi", not: "Program bazlı değişir; kendi programının tarihini yukarıya gir.", baglanti: "/faz-3-basvuru/" },
    { id: "konaklama", tarih: D, baslik: "Yurt başvurusu için hedef tarih", not: "Şehre göre değişir (ör. Kiel için 15 Temmuz veya 15 Ocak hedefi, Münih için 15 Ağustos).", baglanti: "/faz-5-once/21-konaklama" },
    { id: "vizekayit", tarih: vizeKayit, baslik: "Auslandsportal'da vize randevu kaydını aç", not: "Randevular kayıt tarihine göre sırayla veriliyor, erken kayıt öneriliyor. Kabul mektubu olmadan kayıt açılıp açılamadığı doğrulanamadı; kabulü beklemeden denemeye değer.", baglanti: "/faz-4-vize/16-vize-turu" },
    { id: "sperrkonto", tarih: gunEkle(randevu, -14), baslik: "Sperrkonto ve sağlık sigortası onayı elinde olsun", not: "Randevudan en az 2 hafta önce.", baglanti: "/faz-4-vize/17-sperrkonto" },
    { id: "randevu", tarih: randevu, baslik: `Tahmini vize randevusu (kuyruk ${g.kuyrukAy} ay varsayımıyla)`, not: "Gerçek tarihi portalda göreceksin.", baglanti: "/faz-4-vize/19-vize-belgeleri" },
    { id: "karar", tarih: vizeKarar, baslik: "Vize kararı en geç bu tarihte (randevudan 45 gün sonra)", not: "Auswärtiges Amt: en az 15, bazen 45 güne kadar; bayramlarda daha uzun.", baglanti: "/faz-4-vize/20-vize-sonrasi" },
    { id: "turkiye", tarih: gunEkle(S, -21), baslik: "Türkiye tarafı işler, çıkış harcı, bavul", not: "Faz 5", baglanti: "/faz-5-once/22-turkiye-tarafi" },
    { id: "varis", tarih: gunEkle(S, -7), baslik: "Varış", not: "Anmeldung için taşınmadan itibaren 2 haftan var.", baglanti: "/faz-6-ilk-haftalar/24-varis" },
    { id: "baslangic", tarih: S, baslik: "Dönem başlangıcı", not: "Ders başlangıcı genelde 2-3 hafta sonra.", baglanti: "/faz-6-ilk-haftalar/26-immatrikulation" },
  ].sort((a, b) => a.tarih.getTime() - b.tarih.getTime());

  const uyarilar: string[] = [];
  if (vizeKarar.getTime() > gunEkle(S, -7).getTime()) {
    uyarilar.push("Bu varsayımlarla vize kararı dönem başlangıcına yetişmeyebilir. Kabulün bu döneme yetişmeyecekse bkz. SoSe ve erteleme sayfası.");
  }
  if (gunEkle(D, 0).getTime() >= vizeKayit.getTime()) {
    uyarilar.push("Vize randevu kaydını başvuru son tarihinden önce açman gerekiyor; kabul gelene kadar beklersen kuyrukta sıran gecikir.");
  }
  if (D.getTime() >= S.getTime()) uyarilar.push("Başvuru son tarihi dönem başlangıcından önce olmalı.");
  return { maddeler, uyarilar };
}

// ---- .ics ----

function ksucle(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

/** RFC 5545: satırlar 75 oktetten uzun olmamalı; devam satırları boşlukla başlar. */
function katla(satir: string): string {
  const enc = new TextEncoder();
  const parcalar: string[] = [];
  let akim = "";
  for (const ch of satir) {
    const sinir = parcalar.length === 0 ? 75 : 74;
    if (enc.encode(akim + ch).length > sinir) {
      parcalar.push(akim);
      akim = ch;
    } else {
      akim += ch;
    }
  }
  parcalar.push(akim);
  return parcalar.map((p, i) => (i === 0 ? p : " " + p)).join("\r\n");
}

function ymd(d: Date): string {
  return tarihYaz(d).replace(/-/g, "");
}

export function icsUret(maddeler: Madde[], simdi: Date = new Date()): string {
  const damga = simdi.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const satirlar = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Almanya Master Rehberi//TR", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "X-WR-CALNAME:Almanya Master Takvimi"];
  for (const m of maddeler) {
    satirlar.push(
      "BEGIN:VEVENT",
      `UID:${m.id}-${ymd(m.tarih)}@almanya-master-rehberi`,
      `DTSTAMP:${damga}`,
      `DTSTART;VALUE=DATE:${ymd(m.tarih)}`,
      `DTEND;VALUE=DATE:${ymd(gunEkle(m.tarih, 1))}`,
      `SUMMARY:${ksucle(m.baslik)}`,
      `DESCRIPTION:${ksucle(m.not)}`,
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      `DESCRIPTION:${ksucle(m.baslik)}`,
      "TRIGGER:-P7D",
      "END:VALARM",
      "END:VEVENT",
    );
  }
  satirlar.push("END:VCALENDAR");
  return satirlar.map(katla).join("\r\n") + "\r\n";
}
