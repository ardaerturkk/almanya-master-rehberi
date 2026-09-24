# Doğrulama Raporu

Son güncelleme: 24.09.2026 (v2, Paket 1). Bu rapor, sayfalarda "doğrulanmadı" diye işaretli olan
31 maddenin durumunu tutar. Ham bulgular, kaynak URL'leri ve doğrulama yöntemleri
`docs-internal/arastirma-notlari/v2-*.md` dosyalarında.

Önceki sürümde özet "38 belirsiz madde" diyordu; tablonun kendisi 31 satırdı. Doğru sayı 31'dir.

## Durum özeti

| Durum | Sayı |
| --- | --- |
| Doğrulandı (birincil kaynak, yasa metni veya resmi kurum) | 20 |
| Çelişkili, sayfada iki taraf kaynaklı gösteriliyor | 4 |
| Kısmen doğrulandı, kalan kısım sayfada işaretli | 5 |
| Bulunamadı, nedeni aşağıda | 2 |
| **Toplam** | **31** |

Açık kalan 11 madde (çelişkili + kısmen + bulunamadı) sayfada "Teyit etmen gerekenler" kutusu
veya metin içi uyarıyla işaretli.

Doğrulama yöntemleri: **doğrudan** (sayfa/yasa metni), **PDF** (resmi PDF), **Playwright**
(gerçek tarayıcı), **arşiv** (web.archive.org), **özet** (yalnızca arama/WebFetch özeti, düşük
güven).

## Kapanan maddeler (20)

| Sayfa | İddia | Sonuç | Kaynak / yöntem |
| --- | --- | --- | --- |
| Adım 7 Askerlik | Yaş sınırı 32 mi 35 mi | **Yüksek lisans 32, doktora 35, lisans 28** | 7179 sayılı Kanun md. 20/4, Yönetmelik md. 52-55; mevzuat.gov.tr PDF, doğrudan |
| Adım 17 Sperrkonto | 992 EUR/ay, Mart 2026 BAföG güncellemesi | **992 EUR/ay geçerli**, 2026/27 için yasada değişiklik yok | BAföG §13, §13a (475+380+102+35); yasa metni. AA sayfası tutar vermiyor, tutar Auslandsportal'da |
| Adım 16 Vize | 75 EUR mu 90 EUR mu | **75 EUR ulusal vize**, 90 EUR Schengen | AufenthV §46/2, yasa metni |
| Adım 6 Bütçe | DAAD yaşam maliyeti | **900-1.200 EUR/ay** | DAAD Finanzen sayfası, curl |
| Adım 3 Uygunluk | Türk üniversiteleri H+ mı | **231 kurumun 231'i H+** (24.09.2026) | anabin, Playwright |
| Adım 2 Program bulma | DAAD arayüz detayı | Eski `studienangebote` adresi yeni sayfaya yönleniyor | Doğrudan |
| Adım 9 Tercüme | Türkiye'de mi Almanya'da mı | **Türkiye'de "yeminli tercüman" kaşeli çeviri kabul** | uni-assist Türkiye sayfası; Kiel, TU Berlin, TUM, Hildesheim sayfaları |
| Adım 13 Portal | HU Berlin, LMU | HU: yurt dışı diplomada uni-assist; LMU: uni-assist yok, MoveIN/ayrı başvuru | HU arşiv kopyası (tarih teyidi gerekli), LMU sayfası |
| Adım 15 Kabul | Dil belgesi eksikse şartlı kabul | Üniversiteye göre değişiyor; Kiel, FAU, TU Berlin örnekleri | Üniversite sayfaları |
| Adım 21 Konaklama | Yurt bekleme süresi | München resmi PDF, Kiel kura, Berlin kategoriler | Studierendenwerk sayfaları |
| Adım 22 Türkiye tarafı | Çıkış harcı 1.250 TL | **Doğrulandı**, öğrenci muafiyeti yok | Resmî Gazete 31.12.2025, PDF |
| Adım 22 Türkiye tarafı | Pasaport harcı ve defter bedeli | **Defter bedeli 1.351 TL**; 1.424,31 TL yanlış hesap; harçlar NVİ tablosu | NVİ 2026 tablosu, Resmî Gazete Seri 98 |
| Adım 26 Immatrikulation | Anmeldebescheinigung isteniyor mu | İncelenen 4 üniversite listesinde yok | Kiel, TUM, FU Berlin, Tübingen |
| Adım 27 Banka | N26 belgeleri | Türk pasaportu kabul, Türk kimlik kartı kabul değil | N26 resmi PDF (Mayıs 2026) |
| Adım 29 Rundfunkbeitrag | Tutar/muafiyet | **18,36 EUR/hane**, BAföG dışında Härtefall genelde yok | rundfunkbeitrag.de, RBStV §4/6 |
| Adım 30 Çalışma | Werkstudent 26 hafta | 20 saati aşılan hafta sayısı yılda en fazla 26 | TK, DRV, SGB V §6 |
| Adım 32 Mezuniyet | Niederlassungserlaubnis 21/33 ay | **21 ay (B1) / 27 ay (basit Almanca)**; 33 ay yanlış | AufenthG §18c, yasa metni |
| Vize reddi | Remonstration | **1 Temmuz 2025'ten beri kaldırıldı**; yeni başvuru veya Klage (1 ay) | tuerkei.diplo.de, VwGO §74, VG Berlin Merkblatt |
| Şartlı kabul | Bavyera FAU/TU Darmstadt | Tarihler kapandı; **TU Darmstadt Hessen'de**, Bavyera'da değil | FAU ve TU Darmstadt sayfaları |
| uni-assist mi doğrudan mı | Üniversite listesi | ~160 üniversite; Kiel, HU, FU, TU Berlin, TUM listede; LMU, FAU, TU Darmstadt yok | uni-assist.de |

## Çelişkili (4): sayfada iki taraf gösteriliyor

| Sayfa | Konu | İki taraf |
| --- | --- | --- |
| Adım 17 Sperrkonto | Coracle durumu | Coracle'ın yardım merkezi "yeni başvurular duraklatıldı" diyor, vitrin sayfası "Open Now / Coming Soon" gösteriyor. X-Patrio, Expatrio'nun eski adı; Coracle ayrı şirket (kaynak metinde hata düzeltildi) |
| Adım 10 CV/motivasyon | Uzunluk standardı | DAAD'ın kendi sayfaları 1, 2 ve 3 sayfa diyor; resmi tek standart yok, sayfa bunu söylüyor |
| Adım 32 Mezuniyet | §20 sonrası Chancenkarte | Tek ilk derece kararı (VG Cottbus, 10.03.2026) izin veriyor, içerik yalnızca ticari özetten; genel kural olarak alınmadı |
| Finansman kanıtları | Ebeveyn geliri | Yasa kaynağı kısıtlamıyor, AA genel SSS ebeveyn gelirini sayıyor; Türkiye misyonlarının güncel bilgi notu yalnızca Verpflichtungserklärung ve Sperrkonto diyor |

## Kısmen doğrulandı (5)

| Sayfa | Konu | Kapanan | Kalan |
| --- | --- | --- | --- |
| Almanca/İngilizce, Adım 4 | Sınav ücretleri | TestDaF (210/215 EUR, Türkiye merkezi 155 EUR), IELTS (12.210 TL), TOEFL (185 USD) | Goethe ve telc Türkiye TL ücreti: goethe.de fiyatları dinamik API, botla okunamadı; British Council Türkiye fiyatı Akamai 403 |
| Adım 6 Bütçe | Şehir bazlı kira | München 850, Berlin 650, Frankfurt 630 EUR (WG, ikincil kaynak) | Kiel için güvenilir rakam yok |
| Adım 12 uni-assist | Ödeme | Yöntemler (3D Secure kart, kişisel IBAN), Online-Überweisung Türkiye'de yok | Türkiye için çalışma garantisi yok, uni-assist da vermiyor |
| Adım 14 Beklemek | Toplam bekleme | uni-assist Türkiye 2-3 hafta (21.09.2026) | Üniversite kısmı için resmi toplam rakam yok |
| Adım 28 Ausländerbehörde | Kiel belge listesi ve harç | Harç: 100 EUR ilk, 93/96 EUR uzatma (AufenthV §45) | Kesin liste randevu davetiyesinde; Kiel'de Türk vatandaşı indirimi sayfada yazmıyor |

## Bulunamadı (2)

| Sayfa | Konu | Neden bulunamadı |
| --- | --- | --- |
| Adım 5 GRE | Türkiye test merkezi listesi | ETS merkez listesi dinamik kayıt ekranında; statik sayfa yok. Sayfa okura kayıt ekranını gösteriyor |
| Adım 9 Tercüme | Apostil işlem süresi | Kaymakamlık ve valilik sayfaları süre taahhüdü vermiyor; "aynı gün" yalnızca ticari sitelerde |

## Değerler (`data/degerler.yml`)

29 değerden 22'si doğrulandı, 7'si belirsiz: Sperrkonto sağlayıcı ücretleri (ticari kaynak), APS
durumu (dolaylı doğrulama), iDATA hizmet bedeli (AA sayfalarında tutarsız), öğrenci harcı
eyaletleri (yalnızca BW ve TUM), sağlık sigortası kasa bazlı tarifeler, Goethe Türkiye fiyatı,
apostil süresi.

## Bulunan ve düzeltilen olgusal hatalar

| Hata | Eski | Yeni | Kaynak |
| --- | --- | --- | --- |
| Askerlik tecili yüksek lisans | 35 (çelişkili) | 32 (doktora 35) | 7179 sayılı Kanun md. 20/4 |
| Lisans askerlik sınırı | 29 | 28 | Kanun md. 20/2 |
| Remonstration hakkı | "Genel olarak mevcuttur" | 01.07.2025'ten beri kaldırıldı | tuerkei.diplo.de |
| Dava süresi (Klage) | Yazılmamıştı | 1 ay (VwGO §74) | tuerkei.diplo.de, VwGO |
| Coracle "eski adıyla X-Patrio" | Coracle = X-Patrio | X-Patrio = Expatrio; Coracle ayrı şirket | x-patrio.com yönlendirmesi, Presseportal 2018 |
| "Türkiye'den biri Verpflichtungserklärung veremez" | Kesin yasak | Yasa yasaklamıyor; uygulama yönetmeliği Almanya'daki geliri istiyor | AufenthG §68, AVwV 68.1.2.1 |
| Vize başvuru kanalı | iDATA'da randevu | Auslandsportal (VIDEX form adımı dahil), iDATA randevu/kabul noktası | tuerkei.diplo.de |
| Randevu bekleme süresi | 1 hafta - 1 yıl | 1-4 ay | tuerkei.diplo.de |
| Niederlassungserlaubnis basit Almanca | 33 ay | 27 ay | AufenthG §18c |
| Pasaport defter bedeli | 1.351-1.424,31 TL | 1.351 TL | NVİ 2026 tablosu |
| Pasaport harçları | 2.960,81 / 4.328,65 / 7.066,84 / 10.039,20 TL | 2.806,50 / 4.103 / 6.698,50 / 9.516 TL | NVİ 2026 tablosu |
| Bedelli askerlik | "21 gün" | 300.000 gösterge x katsayı, 1 ay temel eğitim | 7179 md. 9 (7577 sayılı Kanunla değişti) |
| Tercüme | "Alman mahkemesince yeminli" | Türkiye'de yeminli tercüman kabul | uni-assist Türkiye sayfası |
| GRE ücreti | 220 USD (tr.ets.org) | 249 USD (01.08.2026'dan) | ets.org |
| Vize ücreti, 18 yaş altı | 37,50 EUR | Kaynak bulunamadı, kaldırıldı | |
| TU Darmstadt eyaleti | Bavyera | Hessen | tu-darmstadt.de |
| Askerlik yıllık bildirim tarihi | "Her yıl 31 Ekim" | Kaynak yok, kaldırıldı; müşavirlik notları dönem başı/sonu bildirimi yazıyor | Eğitim Müşavirlikleri |

## Sonraki paketlere kalanlar

- Kısmen doğrulanan 5 ve bulunamayan 2 maddenin kalanı Paket 2'deki haftalık tazelik ve link
  kontrolüyle izlenecek.
- 30. BAföG-Änderungsgesetz'in §13a'yı değiştirip değiştirmediği ve Sperrkonto tutarının ne
  zaman güncelleneceği izlenmeli.
- iDATA sitesi Cloudflare arkasında; 8 ofis listesi ve randevu iptal/değiştirme kuralları
  doğrulanamadı.
