# Doğrulama Raporu

Faz 3 (doğrulama turu) çıktısı. Bu tablo, yazım sırasında (Faz 2) her sayfaya işlenmiş
"Doğrulanmadı/doğrulanamadı" işaretli iddiaların konsolide listesidir — sayfa yazılırken zaten
kaynağıyla eşleştirilip durumu (doğrulandı/belirsiz) işaretlendi, buradaki tablo o işaretlemenin
tek yerde toplanmış hali. "Belirsiz" satırlar, sitede de `::: warning Doğrulanmadı` kutusuyla
okura açıkça gösteriliyor — hiçbiri sessizce "kesin bilgi" gibi sunulmuyor.

**Metodoloji notu**: Sayfa yazımı sırasında (Faz 2) her iddia, araştırma raporlarındaki
kaynakla eşleştirilerek yazıldı — bu, ayrı bir "yaz, sonra doğrula" iki geçişli süreç yerine,
yazarken doğrulama durumu (dogrulandi/belirsiz) `data/degerler.yml`'e de işlendi. Bu tablo o
sürecin sonucudur; aşağıdaki "belirsiz" maddeler bir sonraki oturumda veya kullanıcı tarafından
öncelikli olarak kontrol edilmelidir.

## Durum özeti

| Durum | Sayı (yaklaşık) |
| --- | --- |
| Doğrulandı (birincil kaynak, net) | ~70 madde (`data/degerler.yml` ve adım sayfalarındaki kaynak listelerinde) |
| Belirsiz / doğrulanamadı (sayfada işaretli) | 38 madde (aşağıdaki tablo) |

## Belirsiz/doğrulanamayan maddeler

| Sayfa | İddia | Durum | Not |
| --- | --- | --- | --- |
| [Adım 7: Askerlik](/faz-1-hazirlik/07-askerlik) | Askerlik tecili yaş sınırı: 32 mi 35 mi | **Belirsiz — KRİTİK** | Resmi kaynaklar arası çelişki, geri dönüşü olmayan konu. Arda'nın kendi kontrolü şart. |
| [Adım 17: Sperrkonto](/faz-4-vize/17-sperrkonto) | 992 EUR/ay tutarının Mart 2026 BAföG güncellemesinden etkilenip etkilenmediği | Belirsiz | Yazım öncesi canlı kaynaktan tekrar kontrol edilmeli. |
| [Adım 17: Sperrkonto](/faz-4-vize/17-sperrkonto) | Coracle sağlayıcısının operasyonel durumu | Belirsiz | Sağlayıcıyla doğrudan teyit gerekiyor. |
| [Adım 16: Vize Türü](/faz-4-vize/16-vize-turu) | Vize başvuru ücreti: 75 EUR mi 90 EUR mu | Belirsiz | Ankara sayfasında karışıklık var. |
| [Adım 5: GRE/GMAT](/faz-1-hazirlik/05-gre-gmat) | GRE Türkiye sınav merkezlerinin tam listesi | Belirsiz | ETS resmi sayfasından teyit edilmeli. |
| [Almanca mı İngilizce mi](/dallanma/almanca-mi-ingilizce-mi) | TestDaF/Goethe/IELTS/TOEFL ücretleri | Belirsiz | Bot koruması nedeniyle hiçbir resmi sayfa açılamadı. |
| [Adım 6: Bütçe](/faz-1-hazirlik/06-butce) | Şehir bazlı kira karşılaştırması (München/Berlin/Frankfurt) | Belirsiz | Ayrı odaklı araştırma gerekiyor. |
| [Adım 6: Bütçe](/faz-1-hazirlik/06-butce) | DAAD ortalama yaşam maliyeti tahmini | Belirsiz | DAAD resmi sayfası 503 verdi, ikincil kaynaktan aktarıldı. |
| [Adım 3: Uygunluk Analizi](/faz-1-hazirlik/03-uygunluk-analizi) | "Çoğu Türk üniversitesi H+ statüsünde" | Belirsiz | Genelleme kaldırıldı, okura kendi kontrolü öneriliyor. |
| [Adım 2: Program Bulma](/faz-1-hazirlik/02-program-bulma) | DAAD arayüz detayları | Belirsiz | Sayfa sık 503 veriyor. |
| [Adım 9: Onay/Tercüme](/faz-2-belgeler/09-onay-tercume) | Apostil işlem süresi | Belirsiz | Kaymakamlıktan önceden sorulmalı. |
| [Adım 9: Onay/Tercüme](/faz-2-belgeler/09-onay-tercume) | Türkiye'de mi Almanya'da mı tercüme yaptırılmalı | **Belirsiz — kritik** | Başvuru sürecinin en riskli noktalarından biri. |
| [Adım 10: CV/Motivasyon](/faz-2-belgeler/10-cv-motivasyon) | CV uzunluğu, motivasyon mektubu standardı | Belirsiz | Resmi tek kaynak yok, üçüncü parti rehberlere dayanıyor. |
| [Adım 12: uni-assist](/faz-3-basvuru/12-uni-assist) | Türkiye'den ödeme yöntemi garantisi | Belirsiz | uni-assist kendi sayfası da net garanti vermiyor. |
| [Adım 13: Üniversite Portalı](/faz-3-basvuru/13-universite-portali) | HU Berlin ve LMU portal detayları | Belirsiz | Birincil kaynaktan tam teyit edilemedi. |
| [Adım 14: Beklemek](/faz-3-basvuru/14-beklemek) | Toplam bekleme süresi (uni-assist + üniversite) | Belirsiz | Genel bir rakam bulunamadı. |
| [Adım 15: Kabul](/faz-3-basvuru/15-kabul) | Dil belgesi eksikliğinde şartlı kabul verilir mi | Belirsiz | Üniversiteye göre değişiyor, genelleme yapılmadı. |
| [Adım 21: Konaklama](/faz-5-once/21-konaklama) | Yurt bekleme süresinin kesin ortalaması | Belirsiz | Her Studierendenwerk kendi tablosunu yayınlıyor. |
| [Adım 22: Türkiye Tarafı](/faz-5-once/22-turkiye-tarafi) | Çıkış harcı tutarı (1.250 TL) | Belirsiz | GİB resmi sayfası açılamadı. |
| [Adım 22: Türkiye Tarafı](/faz-5-once/22-turkiye-tarafi) | Pasaport harcı tam TL rakamları | Belirsiz | GİB resmi tarifesi doğrulanamadı, kaynaklar arası küçük fark var. |
| [Adım 26: Immatrikulation](/faz-6-ilk-haftalar/26-immatrikulation) | Anmeldebescheinigung'un ayrıca istenip istenmediği | Belirsiz | Kabul mektubuyla kontrol edilmeli. |
| [Adım 27: Banka/Vergi](/faz-6-ilk-haftalar/27-banka-vergi) | N26'nın Türk pasaportlu öğrenciler için belge listesi | Belirsiz | Uygulama içinden milliyete özel liste kontrol edilmeli. |
| [Adım 28: Ausländerbehörde](/faz-6-ilk-haftalar/28-auslanderbehorde) | Kiel'in tam belge listesi ve harç | Belirsiz | JS-ağırlıklı sayfa nedeniyle tam çekilemedi. |
| [Adım 29: Rundfunkbeitrag](/faz-6-ilk-haftalar/29-sozlesmeler) | Rundfunkbeitrag güncel tutar/muafiyet detayı | Belirsiz | Sayfa arama özeti üzerinden görüldü, doğrudan açılamadı. |
| [Adım 30: Çalışma Hakları](/faz-7-sonrasi/30-calisma-haklari) | "26 hafta" Werkstudent kuralı | Belirsiz | Birincil kaynaktan (TK Beratungsblatt) tam teyit edilemedi. |
| [Adım 32: Mezuniyet Sonrası](/faz-7-sonrasi/32-mezuniyet-sonrasi) | §20 ile Chancenkarte arasındaki tam sınır | Belirsiz | İki rotanın kesişimi netleşmedi. |
| [Adım 32: Mezuniyet Sonrası](/faz-7-sonrasi/32-mezuniyet-sonrasi) | Niederlassungserlaubnis süresi (21/33 ay) | Belirsiz | bamf.de'den birincil teyit alınamadı (bot engeli). |
| [Şartlı Kabul Aldım](/dallanma/sartli-kabul) | Bavyera eyaletindeki (FAU/TU Darmstadt) son tarih kuralları | Belirsiz | Birebir teyit edilemedi. |
| [uni-assist mi Doğrudan mı](/dallanma/uni-assist-mi-dogrudan-mi) | Hangi üniversitelerin uni-assist kullandığı tam listesi | Belirsiz | uni-assist'in güncel listesinden kontrol edilmeli. |
| [Finansman Kanıtları](/dallanma/finansman-kanitlari) | Ebeveyn geliri kanıtının bağımsız yol olarak kabulü | Belirsiz | Misyona göre değişebilir. |
| [Vize Reddi Aldım](/dallanma/vize-reddi) | Remonstration süresi ve süreç detayları | **Belirsiz — hiç araştırılmadı** | Bu sayfa için ayrı bir araştırma turu gerekiyor. |

## Öncelik sırası (bir sonraki oturum için)

1. **Askerlik tecili yaş sınırı** (32 vs 35) — geri dönüşü olmayan bir konu, en yüksek öncelik.
2. **Vize reddi/Remonstration süreci** — hiç araştırılmadı, ayrı bir agent turu gerekiyor.
3. **Türkiye'de mi Almanya'da mı tercüme** — başvuru sürecini doğrudan etkiliyor.
4. **Dil sınavı ücretleri** — bot korumasını aşacak farklı bir yöntem (örn. resmi PDF fiyat
   listesi arama) denenmeli.
5. Kalan "belirsiz" maddeler — çoğu tek bir hedefli WebFetch/WebSearch ile kapatılabilir.

## Doğrulanan (kesin/birincil kaynaklı) ana bulgular

Referans için — bu değerler `data/degerler.yml`'de kaynak ve tarihle birlikte kayıtlı, sayfada
"Doğrulanmadı" işareti taşımıyor:

- Sperrkonto: 992 EUR/ay (Auswärtiges Amt)
- Çalışma gün limiti: 140 tam gün / 280 yarım gün (AufenthG §16b, gesetze-im-internet.de)
- Asgari ücret: 13,90 EUR/saat 2026 (Bundesregierung)
- Minijob sınırı: 603 EUR/ay (Minijob-Zentrale)
- Anmeldung süresi: 2 hafta (BMG §17, gesetze-im-internet.de)
- İş arama izni: 18 ay (AufenthG §20)
- Mavi Kart eşikleri: 50.700 / 45.934,20 EUR (Bundesagentur für Arbeit ZAV)
- APS gerekmiyor (Deutsche Botschaft Ankara Merkblatt)
- Vize kanalı: iDATA (Deutsche Botschaft Ankara)
- BW öğrenci harcı: 1.500 EUR/dönem (MWK Baden-Württemberg)
- uni-assist ücretleri: 75/30 EUR (uni-assist.de)
- Rundfunkbeitrag: 18,36 EUR/ay, sadece BAföG alanlar muaf
- Kaution yasal üst sınırı: 3 aylık net kira (§551 BGB)
- Steuer-ID: Anmeldung sonrası otomatik, ~4-8 hafta (BZSt)
