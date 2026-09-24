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
