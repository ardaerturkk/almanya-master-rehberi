# ROADMAP

Kaynak prompt: `ardavault` reposundaki `🏰 300-Projects/almanya-masters-guide/PROMPT.md`.
Bu dosya oturumlar arası ilerlemeyi takip eder — her iş bitince işaretlenir.

## Durum (2026-09-24, devam eden oturum)

Önceki oturumdaki network blokajı kalktı — hem WebFetch hem WebSearch çalışıyor. Faz 0
tamamlandı, Faz 1 (araştırma turu) tamamlandı — 7 paralel agent ile toplandı, `data/degerler.yml`
ve `SOURCES.md`'e işlendi. Ham raporlar `docs-internal/arastirma-notlari/` altında saklı.

**Önemli bulgu — PROMPT.md'deki bir örnek eski çıktı:** Öğrenci çalışma gün limiti artık
120/240 değil, **140/280** (01.03.2024'te güncellendi). Sayfa yazımında bu vurgulanmalı.

**Kritik, henüz çözülmemiş çelişkiler (yazım öncesi tekrar kontrol şart):**
- Askerlik tecili yaş sınırı: 32 mi 35 mi? (geri dönüşü olmayan konu)
- Sperrkonto 992 EUR'un olası Mart 2026 BAföG güncellemesinden etkilenip etkilenmediği
- Vize ücreti: 75 EUR mi 90 EUR mi (Ankara sayfasında karışıklık)
- Dil sınavı ücretleri (TestDaF/Goethe/IELTS/TOEFL) — bot koruması nedeniyle hiçbiri
  doğrulanamadı, resmi sayfalardan elle kontrol gerekiyor
- Çıkış harcı / pasaport harcı tam TL rakamları — GİB resmi sayfası açılamadı

## Faz 0: İlham analizi + iskelet — TAMAMLANDI
- [x] `docs-internal/ilham-analizi.md` — 3ds.hacks.guide analizi
- [x] `ROADMAP.md` oluşturuldu
- [x] `SOURCES.md` oluşturuldu
- [x] VitePress kurulumu, sidebar, boş sayfalar, şablon (önceki oturumdan hazırdı)
- [x] `.github/workflows/deploy.yml` — GitHub Pages Actions deploy workflow eklendi
- [x] `data/degerler.yml` scaffold oluşturuldu, sonra araştırma ile dolduruldu
- [x] Build'in geçtiğini doğrula — YAML frontmatter bug'ı düzeltildi (58 dosyada `title:` içindeki
      `:` karakteri quote'lanmadığı için build kırıktı), şimdi `npm run docs:build` temiz geçiyor

## Faz 1: Araştırma turu — TAMAMLANDI (7 paralel agent, 24.09.2026)
- [x] Sperrkonto tutarı ve belirlenme yöntemi
- [x] Öğrenci çalışma gün limiti ve istisnalar
- [x] Asgari ücret / Minijob sınırı
- [x] Anmeldung süresi ve belgeler
- [x] İş arama oturumu (§20 AufenthG) süresi, Mavi Kart eşikleri
- [x] APS belgesi — Türkiye için durum
- [x] Türkiye'de öğrenci vizesi başvuru kanalı (güncel: iDATA)
- [x] AB dışı öğrenci harcı olan eyaletler (BW kesin, Bayern kısmi, diğerleri belirsiz)
- [x] Yasal sağlık sigortası öğrenci tarifesi kuralları
- [x] Sperrkonto/sigorta sağlayıcı karşılaştırması
- [x] uni-assist ücretleri ve süreleri
- [x] Dil sınavı ücretleri/merkezleri (Türkiye) — çoğu doğrulanamadı, bot koruması
- [x] T.C. tarafı: askerlik tecili, çıkış harcı, apostil, tercüme, pasaport harcı
- [x] Rundfunkbeitrag tutarı ve muafiyet

## Faz 2: Yazım (Ana rota → dallanmalar → referans) — DEVAM EDİYOR
- [ ] Giriş: Ana sayfa, Get Started, Öz değerlendirme, Takvim
- [ ] Faz 1 (Hazırlık): adım 1–6 kaldı, **adım 7 (Askerlik) yazıldı** (yaş sınırı çelişkisiyle
      işaretli)
- [ ] Faz 2 (Belgeler): adım 8–10
- [ ] Faz 3 (Başvuru): adım 11–15
- [x] **Faz 4 (Vize): adım 16–20 TAMAMLANDI** (vize türü/kanalı, Sperrkonto, sağlık sigortası,
      belge listesi, vize sonrası)
- [ ] Faz 5 (Gitmeden önce): adım 21–23
- [ ] Faz 6 (İlk haftalar): adım 24, **25 (Anmeldung) yazıldı**, 26–29 kaldı
- [ ] Faz 7 (Okurken/sonrası): adım 30–32
- [ ] Dallanma sayfaları: **finansman-kanitlari.md yazıldı**, kalan 6 tanesi (30-yas-ustu,
      almanca-mi-ingilizce-mi, sartli-kabul, lisans-bitmedi, vize-reddi, uni-assist-mi-dogrudan-mi)
- [ ] Referans: Sözlük (≥80 terim), SSS, Troubleshooting, Şablonlar, Araçlar, Kaynaklar
- [ ] Etkileşimli Vue bileşenleri: Checklist, İlerleme çubuğu, Not dönüştürücü (Bayerische
      Formel), Bütçe hesaplayıcı, Geriye doğru takvim — henüz yok, sayfa içerikleri netleşince
      eklenecek

## Faz 3: Doğrulama turu (ayrı geçiş, zorunlu)
- [ ] `docs-internal/dogrulama-raporu.md` — her iddia kaynağıyla eşleştirilecek
- [ ] Yukarıdaki "kritik, çözülmemiş çelişkiler" listesi mutlaka bu turda kapatılmalı

## Faz 4: Acemi testi + eksiklik taraması
- [ ] Baştan sona okur gözüyle geçiş
- [ ] Takılma noktaları / süre hafife alma / geri dönüşsüz hatalar taraması

## Faz 5: Son kontrol
- [ ] Build temiz, kırık link yok, README tam, teslim kriterleri (PROMPT.md §8) karşılandı
- [ ] Repo ayarlarında GitHub Pages source'unun "GitHub Actions" olarak açık olduğu teyit
      edilmeli (bu ajan tarafından değiştirilemez, Arda'nın kontrolü gerekir)
