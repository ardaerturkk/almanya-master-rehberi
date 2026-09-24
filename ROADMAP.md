# ROADMAP

Kaynak prompt: `ardavault` reposundaki `🏰 300-Projects/almanya-masters-guide/PROMPT.md`.
Bu dosya oturumlar arası ilerlemeyi takip eder — her iş bitince işaretlenir.

## Durum (2026-09-24, oturum sonu)

Site içerik olarak tamamlandı: 32 adım, 7 dallanma, 6 referans sayfası, tüm giriş/index
sayfaları ve 5 etkileşimli Vue bileşeni yazılı, kaynaklı ve build'i temiz geçiyor. İki tur
paralel araştırma (13 agent) ile toplanan veri `data/degerler.yml`, `SOURCES.md` ve
`docs-internal/arastirma-notlari/`de kayıtlı. Faz 3 (doğrulama turu) tamamlandı —
`docs-internal/dogrulama-raporu.md` ve `docs-internal/celiskiler.md` yazıldı, 38 madde
"belirsiz" olarak işaretlendi (hiçbiri sessizce kesin bilgi gibi sunulmuyor).

**Önemli bulgu — PROMPT.md'deki bir örnek eski çıktı:** Öğrenci çalışma gün limiti artık
120/240 değil, **140/280** (01.03.2024'te güncellendi). Sayfalarda bu vurgulandı.

**Kritik, hâlâ çözülmemiş çelişkiler (Arda'nın kendi kontrolü gerekiyor — geri dönüşü olmayan
konular, bkz. `docs-internal/celiskiler.md` ve `docs-internal/dogrulama-raporu.md`):**
- Askerlik tecili yaş sınırı: 32 mi 35 mi? — **en yüksek öncelik**
- Vize reddi/Remonstration süreci — hiç araştırılmadı
- Türkiye'de mi Almanya'da mı tercüme/onay yaptırılmalı
- Sperrkonto 992 EUR'un olası 2026 BAföG güncellemesinden etkilenip etkilenmediği
- Vize ücreti: 75 EUR mi 90 EUR mi
- Dil sınavı ücretleri (TestDaF/Goethe/IELTS/TOEFL) — bot koruması nedeniyle doğrulanamadı
- Çıkış harcı / pasaport harcı tam TL rakamları — GİB resmi sayfası açılamadı

## Faz 0: İlham analizi + iskelet — TAMAMLANDI
- [x] `docs-internal/ilham-analizi.md` — 3ds.hacks.guide analizi
- [x] `.github/workflows/deploy.yml` — GitHub Pages Actions deploy workflow
- [x] `.github/workflows/ci.yml` — build + kırık link kontrolü + markdown lint (PR'lerde)
- [x] `data/degerler.yml` araştırmayla dolduruldu
- [x] Build'in geçtiğini doğrula — YAML frontmatter bug'ı düzeltildi, `npm run docs:build` temiz

## Faz 1: Araştırma turu — TAMAMLANDI (13 paralel agent, iki tur, 24.09.2026)
Sperrkonto, çalışma limitleri, asgari ücret/Minijob, Anmeldung, iş arama izni/Mavi Kart, APS/
vize kanalı, öğrenci harcı/uni-assist, dil sınavları, T.C. tarafı, Rundfunkbeitrag, Master
sistemi/denklik, GRE-GMAT/bütçe, belge/CV/motivasyon, başvuru portalı/kabul, konaklama/varış,
immatrikulation/banka/Ausländerbehörde — tamamı araştırıldı, kaynaklandı.

## Faz 2: Yazım — TAMAMLANDI
- [x] Giriş: Ana sayfa, Başlamadan Önce, Uygun muyum, Takvim, Checklist
- [x] Faz 1–7 (adım 1–32) tamamen yazıldı
- [x] Tüm 7 dallanma sayfası
- [x] Referans: Sözlük (85 terim), SSS, Sorun Giderme, Şablonlar, Araçlar, Kaynaklar
- [x] Tüm faz index sayfaları
- [x] Etkileşimli Vue bileşenleri (`docs/.vitepress/theme/`):
  - PersistentChecklist — localStorage'a (try/catch korumalı) kalıcı checkbox listesi
  - ProgressBar — ilerleme yüzdesi
  - BayerischeFormelHesaplayici — not dönüştürücü (Adım 3)
  - ButceHesaplayici — bütçe hesaplayıcı (Adım 6)
  - GeriyeDoguTakvim — geriye doğru takvim (Takvim sayfası)
  - Playwright ile üçü de test edildi, konsol/network hatası yok

## Faz 3: Doğrulama turu — TAMAMLANDI
- [x] `docs-internal/dogrulama-raporu.md` — 38 belirsiz madde tablo halinde, öncelik sırasıyla
- [x] `docs-internal/celiskiler.md` — 5 kaynak çelişkisi kaydedildi
- [x] Tüm belirsiz maddeler ilgili sayfada `::: warning Doğrulanmadı` ile işaretli

## Faz 4: Acemi testi + eksiklik taraması — KISMEN
- [x] Yazım sırasında her sayfa "Sık hatalar" bölümüyle yazıldı (forum/pratik takılma noktaları)
- [ ] Baştan sona tam bir okur-gözü geçişi (32 sayfa) ayrı bir oturumda yapılabilir — bu
      oturumda kapsamlı yazım + doğrulama önceliklendirildi

## Faz 5: Son kontrol
- [x] Build temiz (`npm run docs:build`)
- [x] Kırık link yok (linkinator ile 180 iç link tarandı, temiz — bot korumalı 3 dış site
      CI'da skip edildi: idata.com.tr, daad.de, hochschulkompass.de, hepsi bu oturumda WebFetch
      ile de 403/404/405 verdi, siteler gerçek/erişilebilir ama otomasyona kapalı)
- [x] Markdown lint temiz (markdownlint-cli2, MD029 kapatıldı — adım listeleri kasıtlı olarak
      kendi numarasından başlıyor)
- [x] README.md tam
- [ ] Repo ayarlarında GitHub Pages source'unun "GitHub Actions" olarak açık olduğu teyit
      edilmeli (bu ajan tarafından değiştirilemez, **Arda'nın kontrolü gerekiyor**)
- [ ] Site canlıya alındıktan sonra gerçek URL'de son bir görsel kontrol önerilir

## Teslim kriterleri (PROMPT.md §7) — durum

- [x] Site build oluyor, Pages workflow'u var — **Arda'nın Pages ayarını "GitHub Actions"a
      çevirmesi gerekiyor, site henüz canlı değil**
- [x] 32 adımın tamamı yazılı, şablona uygun, önceki/sonraki bağlantılı
- [x] Tüm dallanma/referans sayfaları dolu; sözlük 85 terim (≥80 hedefi karşılandı)
- [x] Tüm değişken değerler `data/degerler.yml`'de, kaynak + tarihle
- [x] `dogrulama-raporu.md`'de belirsiz kalanlar sayfada açıkça işaretli (38 madde)
- [x] Etkileşimli araçlar çalışıyor, kırık link yok, README tam
- [x] Kaynaksız olgusal cümle yok
- [x] Birden fazla yöntemi olan her adımda tüm yöntemler karşılaştırmalı anlatılmış
      (Sperrkonto/Verpflichtungserklärung/Burs, uni-assist/doğrudan, Almanca/İngilizce,
      yurt/WG/özel kiralık, N26/DKB)

---

# v2

v2, v1'de tespit edilen güven, veri ve deneyim sorunlarını 6 pakette düzeltir. Her paket ayrı
`v2/paket-N-...` branch'i ve PR'dir.

## Paket 1: Güven onarımı (P0) — PR #1

- [x] Adım 4 (Dil Sınavları) ve Adım 31 (Oturum İzni Uzatma) tam yazıldı
- [x] `dallanma/vize-reddi.md` araştırıldı ve yeniden yazıldı (Remonstration 01.07.2025'ten beri yok)
- [x] `dogrulama-raporu.md`: 31 maddenin 20'si doğrulandı, 4 çelişkili (iki taraf gösteriliyor),
      5 kısmen, 2 bulunamadı; rapor güncel
- [x] Askerlik 32/35 çözüldü (7179 sayılı Kanun md. 20/4)
- [x] Coracle / X-Patrio hatası düzeltildi (X-Patrio = Expatrio)
- [x] Verpflichtungserklärung iddiası doğrulandı ve nüanslandı
- [x] Sperrkonto 992 EUR/ay yasa metninden doğrulandı
- [x] Takvim iç çelişkisi: Adım 16 vize süresi 1-4 ay olarak düzeltildi; takvim aracı ve sayfa
      Paket 3'te yeniden yazılacak (SoSe/erteleme sayfası şimdiden eklendi)
- [x] İç ses taraması temiz, ana sayfa bilgi kutusu yeniden yazıldı
- [x] Yeni sayfa: `dallanma/sose-ve-erteleme.md` (kabul WiSe'ye yetişmezse SoSe / sonraki WiSe)

## Paket 2: Tek veri kaynağı (P1) — PR açık

- [x] `docs/.vitepress/degerler.data.ts` data loader (js-yaml), şema doğrulaması
- [x] `<Deger k="..."/>` bileşeni (kaynak + tarih popover'ı, "teyit et" rozeti); bilinmeyen anahtar build'i kırar (`buildEnd` taraması + bileşen hatası)
- [x] Sayfalardaki ve `ButceHesaplayici.vue` içindeki elle yazılmış değerler değiştirildi
- [x] `referans/kaynaklar.md` değer tablosu (`<DegerTablosu />`)
- [x] `.github/workflows/tazelik.yml` (haftalık: 120 günden eski değerler + kırık dış linkler → tek "Güncellik kontrolü" issue'su)

## Paket 3: Okur deneyimi (P1) — PR açık

- [x] `- [ ]` listeleri gerçek, kalıcı onay kutuları (markdown-it kuralı `gorevListesi.ts` + `IlerlemeYoneticisi`)
- [x] "Kontrol" listesi tamamlanınca `/checklist`'te adım otomatik işaretlenir (ortak storage), sidebar'da ✓
- [x] İlerlemeyi dışa/içe aktarma: JSON dosyası ve paylaşılabilir bağlantı (`IlerlemeYedek`)
- [x] Arayüz Türkçeleştirildi (Son güncelleme, Görünüm, Menü, Başa dön, arama, 404 + ana sayfa ve arama düğmesi, tarih tr-TR)
- [x] Arama normalizasyonu: ı/i, ş/s, ğ/g, ü/u, ö/o, ç/c ve Almanca ä/ö/ü/ß (`processTerm`)
- [x] Takvim yeniden yazıldı: WiSe/SoSe, gün bazlı `subtractDays`, vize tamponu (kuyruk + karar + tampon), `.ics` indirme
- [x] `/checklist` yazdırma CSS'i
- [x] "Uygun muyum?" sihirbazı (7 soru, kişiye özel rota)
- [x] 375px kontrolü: 60 sayfada yatay taşma yok, geniş tablolar kaydırılabilir kapsayıcıda

## Paket 4: İçerik boşlukları (P1) — PR açık

- [x] VIDEX formu (Adım 19): ne, nereden, Türkçe karakter kuralı (canlı formda denendi), garantör alanı, sık hatalar
- [x] iDATA/Auslandsportal randevu stratejisi (Adım 16): kuyruk mekaniği, misyon dağılımı, ne zaman, paralel hazırlık
- [x] SoSe dallanması (`dallanma/sose-ve-erteleme.md`, Paket 1'de yazıldı): takvim hesaplayıcıya bağlandı
- [x] Verpflichtungserklärung rehberi (`dallanma/verpflichtungserklarung.md`): Ausländerbehörde süreci, belgeler, 6 ay / 5 yıl, garantörün mali riski
- [x] Her faz index sayfasına "Bu fazın sonunda elinde ne olmalı" ve toplam süre/maliyet
- [x] Sözlüğe yeni Almanca terimler eklendi (Remonstration, Klage, VIDEX, Auslandsportal, Ausländerbehörde vb.)

## Paket 5: Keşfedilebilirlik ve katkı (P2) — PR açık

- [x] `sitemap` (61 sayfa), `robots.txt`, sayfa bazlı `og:*`/`twitter:*` meta (`transformHead`), canonical, 1200×630 OG görseli (`docs/public/og-image.png`, kaynağı `scripts/og-image.html`)
- [x] Her sayfaya 150-160 karakterlik Türkçe `description` (61/61)
- [x] `editLink` ("Bu sayfada hata mı var? GitHub'da düzenle"), iki issue formu (Güncel olmayan bilgi, Eksik konu) ve `config.yml`
- [x] Adım ve dallanma sayfalarının altında "Bu sayfa işine yaradı mı?" (önceden doldurulmuş issue linkleri, backend yok)

## Paket 6: Kalite kapısı (P2)

- [ ] Playwright smoke testleri (CI)
- [ ] Lighthouse CI (mobil, hedef ≥ 95)
- [ ] Erişilebilirlik (etiketler, kontrast, klavye)

## Kullanıcıya sorulacak kararlar

Analitik (GoatCounter/Plausible), yorum sistemi (Giscus) ve özel alan adı: Arda'ya soruldu, cevap bekleniyor.
