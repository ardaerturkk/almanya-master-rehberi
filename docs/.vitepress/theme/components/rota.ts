// "Uygun muyum?" sihirbazının soruları ve sonuç kuralları (saf fonksiyonlar).

export interface Secenek {
  deger: string;
  etiket: string;
}
export interface Soru {
  id: "lisans" | "yas" | "dil" | "sertifika" | "finans" | "donem" | "askerlik";
  soru: string;
  secenekler: Secenek[];
}

export const SORULAR: Soru[] = [
  {
    id: "lisans",
    soru: "Lisans diplomanın durumu nedir?",
    secenekler: [
      { deger: "bitti", etiket: "Lisansım bitti" },
      { deger: "bitmedi", etiket: "Lisansım henüz bitmedi (son sınıfım)" },
    ],
  },
  {
    id: "yas",
    soru: "Yaşın kaç?",
    secenekler: [
      { deger: "alti", etiket: "30'un altındayım" },
      { deger: "ustu", etiket: "30 veya üstüyüm" },
    ],
  },
  {
    id: "dil",
    soru: "Hangi dilde bir program düşünüyorsun?",
    secenekler: [
      { deger: "ingilizce", etiket: "İngilizce" },
      { deger: "almanca", etiket: "Almanca" },
      { deger: "bilmiyorum", etiket: "Henüz karar vermedim" },
    ],
  },
  {
    id: "sertifika",
    soru: "Geçerli bir dil sertifikan var mı?",
    secenekler: [
      { deger: "var", etiket: "Evet, var" },
      { deger: "yok", etiket: "Hayır, henüz yok" },
    ],
  },
  {
    id: "finans",
    soru: "Vize için finansman kanıtını nasıl sağlamayı düşünüyorsun?",
    secenekler: [
      { deger: "sperrkonto", etiket: "Sperrkonto (bloke hesap)" },
      { deger: "garantor", etiket: "Almanya'da yaşayan bir garantör (Verpflichtungserklärung)" },
      { deger: "burs", etiket: "Burs" },
      { deger: "bilmiyorum", etiket: "Henüz bilmiyorum" },
    ],
  },
  {
    id: "donem",
    soru: "Hedef dönem?",
    secenekler: [
      { deger: "wise", etiket: "Kış dönemi (WiSe, Ekim)" },
      { deger: "sose", etiket: "Yaz dönemi (SoSe, Nisan)" },
      { deger: "yetismiyor", etiket: "Kabulüm var ama vize kış dönemine yetişmeyecek gibi" },
    ],
  },
  {
    id: "askerlik",
    soru: "Askerlik yükümlülüğün var mı?",
    secenekler: [
      { deger: "var", etiket: "Evet, erkek T.C. vatandaşıyım" },
      { deger: "yok", etiket: "Hayır" },
    ],
  },
];

export type Cevaplar = Partial<Record<Soru["id"], string>>;

export interface Oneri {
  baglanti: string;
  baslik: string;
  neden: string;
}

export interface Rota {
  sayfalar: Oneri[];
  adimlar: Oneri[];
  uyarilar: string[];
}

export function rotaHesapla(c: Cevaplar): Rota {
  const sayfalar: Oneri[] = [];
  const adimlar: Oneri[] = [];
  const uyarilar: string[] = [];

  if (c.lisans === "bitmedi") {
    sayfalar.push({ baglanti: "/dallanma/lisans-bitmedi", baslik: "Lisansım henüz bitmedi", neden: "Son sınıftayken başvuru ve şartlı kabul süreci." });
    sayfalar.push({ baglanti: "/dallanma/sartli-kabul", baslik: "Şartlı kabul aldım", neden: "Diplomanı sonradan sunma şartlı kabullerde son tarih kritik." });
  }
  if (c.yas === "ustu") {
    sayfalar.push({ baglanti: "/dallanma/30-yas-ustu", baslik: "30 yaş üstüyüm", neden: "Öğrenci sağlık sigortası tarifesi 30 yaşında bitiyor." });
  }
  if (c.dil === "bilmiyorum") {
    sayfalar.push({ baglanti: "/dallanma/almanca-mi-ingilizce-mi", baslik: "Almanca mı, İngilizce mi?", neden: "Program dilini seçmeden dil sınavını seçemezsin." });
  }
  sayfalar.push({ baglanti: "/dallanma/uni-assist-mi-dogrudan-mi", baslik: "uni-assist mi, doğrudan mı?", neden: "Başvuru kanalı üniversiteye göre değişiyor." });
  sayfalar.push({ baglanti: "/dallanma/finansman-kanitlari", baslik: "Sperrkonto mu, Verpflichtungserklärung mı, Burs mu?", neden: "Finansman yolunu netleştirmek için karşılaştırma." });
  if (c.donem === "sose" || c.donem === "yetismiyor") {
    sayfalar.push({ baglanti: "/dallanma/sose-ve-erteleme", baslik: "Kabulüm WiSe'ye yetişmezse (SoSe ve erteleme)", neden: c.donem === "sose" ? "SoSe başvuru tarihleri ve takvimi." : "Kabulün kaç dönem geçerli olduğu ve kaydırma adımları." });
  }
  sayfalar.push({ baglanti: "/dallanma/vize-reddi", baslik: "Vize reddi aldım", neden: "Gerekirse: Remonstration artık yok, yeni başvuru veya dava yolu var." });

  // Adımlar
  if (c.sertifika === "var") {
    adimlar.push({ baglanti: "/faz-1-hazirlik/04-dil", baslik: "Adım 4: Dil sınavları", neden: "Sınava girmene gerek yok; sertifikanın hedef programın kabul listesinde olduğunu ve geçerliliğini (IELTS/TOEFL 2 yıl) kontrol et." });
  } else {
    uyarilar.push("Dil sertifikan yoksa Adım 4 en önce yapılacak iş: sonuç başvuru tarihine yetişmeli.");
  }
  adimlar.push({ baglanti: "/faz-1-hazirlik/05-gre-gmat", baslik: "Adım 5: GRE / GMAT", neden: "Programın istemiyorsa atla; çoğu program istemiyor, program sayfasından kontrol et." });
  if (c.askerlik === "yok") {
    adimlar.push({ baglanti: "/faz-1-hazirlik/07-askerlik", baslik: "Adım 7: Askerlik tecili", neden: "Askerlik yükümlülüğün yoksa atlayabilirsin." });
  } else if (c.askerlik === "var") {
    uyarilar.push("Erkek T.C. vatandaşı olarak Adım 7'yi atlama: yüksek lisans için tecil yaş sınırı 32 (doğum yılına göre).");
  }
  if (c.finans === "burs") {
    adimlar.push({ baglanti: "/faz-4-vize/17-sperrkonto", baslik: "Adım 17: Sperrkonto", neden: "Burs belgen aylık tutarı kapsıyorsa Sperrkonto gerekmeyebilir; başvuracağın misyonla teyit et." });
  } else if (c.finans === "garantor") {
    adimlar.push({ baglanti: "/faz-4-vize/17-sperrkonto", baslik: "Adım 17: Sperrkonto", neden: "Garantör yolunda Sperrkonto'yu atlayabilirsin, ama garantör pratikte Almanya'da yaşamalı ve geliri orada olmalı; olmazsa Sperrkonto yedeğin." });
    uyarilar.push("Verpflichtungserklärung verecek kişiye 5 yıllık mali sorumluluğu açıkça anlat (bkz. finansman sayfası).");
  } else if (c.finans === "bilmiyorum") {
    uyarilar.push("Finansman yolunu vize randevusundan önce netleştir; Sperrkonto herkes için açık olan yol.");
  }
  if (c.donem === "yetismiyor") {
    uyarilar.push("Kabul mektubunun hangi dönemler için geçerli olduğunu üniversiteden yazılı öğren; kural üniversiteye göre değişiyor.");
  }
  if (c.donem === "wise") {
    uyarilar.push("Kış dönemi için vize randevu kuyruğu (1-4 ay) ve karar süresini (15-45 gün) hesaba kat: süreci en az 5-6 ay önceden başlat.");
  }
  return { sayfalar, adimlar, uyarilar };
}
