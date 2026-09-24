# V2-04: Dil sınavları (Adım 4) ve GRE, ham araştırma notu

Araştırma tarihi: 24.09.2026. Sadece araştırma; docs/ altında hiçbir dosya değiştirilmedi.
Önceki notlar (`06-dil-sinavi-ucretleri.md`, `05-gre-gmat-butce.md`) "hiçbir rakam doğrulanamadı" diyordu. Bu turda
bot korumasını şu yollarla aştım: (a) `curl` + tarayıcı User-Agent'ı (testdaf.de, ets.org, uni siteleri, ielts.org),
(b) web.archive.org son snapshot'ı (goethe.de, britishcouncil.org.tr, daad.de), (c) sayfanın kendi JS'inin
çağırdığı JSON dosyası (ETS TOEFL ücret tablosu), (d) PDF (RO-DT, TestDaF Prüfungsordnung, Kiel
Studienqualifikationssatzung). Headless Chrome goethe.de'de de 403 aldı; Goethe/BC/Pearson'ın fiyat ve merkez
verisi bir REST API'den yükleniyor ve Akamai tarafından engelleniyor (aşağıda "BULUNAMADI" olarak işaretli).

Durum etiketleri: DOĞRULANDI / ÇELİŞKİLİ / BULUNAMADI. Kaynak türü: [yasa/RO] [resmi kurum] [üni] [ticari-sağlayıcı] [ikincil].

---

## 1. TestDaF

### 1.1 Ücret

| Bulgu | Kaynak (erişim 24.09.2026) | Yöntem | Durum |
| --- | --- | --- | --- |
| "Das TestDaF-Institut hat drei Ländergruppen mit unterschiedlichen Preisen festgelegt. Den Preis für das Land, in dem Sie den TestDaF ablegen möchten, erfahren Sie im Testzentrum, im TestDaF-Institut oder bei der Online-Anmeldung." | https://www.testdaf.de/de/teilnehmende/mein-testdaf/faq/faq-allgemein/ ("Wie viel kostet der TestDaF?") [resmi, g.a.s.t.] | doğrudan (curl) | DOĞRULANDI |
| "In Deutschland kostet der papierbasierte TestDaF 215,- €, der digitale TestDaF 210,- €." | aynı sayfa | doğrudan | DOĞRULANDI (Almanya fiyatı, Türkiye değil) |
| Goethe-Institut Almanya fiyat listesi 2026: "TestDaF € 215" (arşiv 12.06.2026) | https://www.goethe.de/ins/de/de/prf/pre.html (Wayback 20260612110428) | arşiv | DOĞRULANDI (yalnızca Almanya) |
| Türkiye'deki merkezlerden biri (İstanbul Üniversitesi-Cerrahpaşa Sınav Merkezi) her oturum için "Ücret: 155,00 €" gösteriyor: 25.08.2026, 22.09.2026, 12.11.2026, 10.12.2026 (TestDaF), kayıt "05.01.2026 - ..." | https://sinavmerkezi.iuc.edu.tr/testdaf-sinavlari [üni test merkezi] | doğrudan (curl) | DOĞRULANDI (İÜC için); kâğıt/dijital ayrımı sayfada belirtilmemiş |
| Önceki not "155 vs 210 EUR çelişki" | testdaf.de: 210 = dijital Almanya fiyatı; 155 = Türkiye grubu fiyatı (İÜC) | | ÇELİŞKİ ÇÖZÜLDÜ: iki rakam iki farklı ülke grubu. Türkiye için 155 EUR, ama "üç ülke grubu" olduğundan başka merkezde farklı çıkmadığı ayrıca doğrulanmadı. |

Uyarı: İÜC sayfasında TestAS oturumu da "155,00 €" görünüyor; sayfa şablonu tek fiyatı tüm satırlara yazmış olabilir. Sayfaya yazarken "155 EUR (İÜC merkezinde, 24.09.2026 itibarıyla; kayıtta gösterilen tutar geçerlidir)" biçimi güvenli.

Diğer TestDaF ücretleri (testdaf.de FAQ "Ergebnisse und Zertifikat", https://www.testdaf.de/de/teilnehmende/mein-testdaf/faq/faq-ergebnisse-und-zertifikat/):
- Sonuç itirazı: "Antragsbearbeitung inkl. Überprüfung eines Prüfungsteils: 40,00 €; jeder weitere Teil: 15,00 €; alle vier Teile: 85,00 €".
- Dijital TestDaF birleştirilmiş sertifika: "Gebühr von 29 €"; "aus mehreren Prüfungen ... innerhalb von maximal sechs Monaten"; "ab dem 12. Mai 2026". Tanınması kuruma bağlı ("obliegt der jeweiligen Hochschule"). DOĞRULANDI.
- İptal: kayıt süresi bitmeden çekilirsen ücret iade, "Verwaltungspauschale von maximal 15%" kesilebilir (faq-abmeldung). DOĞRULANDI.

### 1.2 Türkiye merkezleri

| Bulgu | Kaynak | Yöntem | Durum |
| --- | --- | --- | --- |
| "In Turkey, the exam is conducted by the Goethe Instituts, Bursa Uludag University, Marmara University and the Bilkent Erzurum Labarotuvar School." (DAAD Türkiye sayfası, arşiv 11.06.2026) | https://www.daad-turkiye.org/en/study-research-in-germany/learning-german/learn-german-in-turkey/ | arşiv (Wayback 20260611035604) | DOĞRULANDI (resmi kurum; ama liste tam olmayabilir, İÜC'yi anmıyor) |
| Marmara Üniversitesi YDYO TestDaF Sınav Merkezi, 2026-2027 **kâğıt tabanlı**: T133 15.10.2026, T134 02.02.2027, T135 13.05.2027, T138 07.10.2027, T139 11.11.2027. "Sınav kaydı ve ücret ödemesi yalnızca TestDaF'ın resmî internet sitesi üzerinden gerçekleştirilmektedir." (sayfa güncelleme 04.09.2026) | https://ydil.marmara.edu.tr/birimler/almanca-hazirlik-birimi/testdaf-sinav-merkezi [üni] | doğrudan | DOĞRULANDI |
| İstanbul Üniversitesi-Cerrahpaşa Sınav Merkezi TestDaF oturumları (yukarıda) | https://sinavmerkezi.iuc.edu.tr/testdaf-sinavlari | doğrudan | DOĞRULANDI |
| Goethe-Institut Türkiye TestDaF sayfası: "Sie können den TestDaF an über 500 lizenzierten Testzentren in 100 Ländern ablegen, unter anderem auch bei uns am Goethe-Institut"; "sechs festgelegten Terminen pro Jahr"; "Anmeldung ist nur direkt über die Webseite von TestDaF möglich"; Standorte Ankara/İstanbul/İzmir | https://www.goethe.de/ins/tr/de/spr/prf/testdaf.html (Wayback 20260520103456) | arşiv | DOĞRULANDI. Hangi Goethe şubesinin fiilen sınav yaptığı sayfada ayrı yazmıyor. |
| Ankara Üniversitesi TÖMER "TestDaF/TestAS/onSET" sayfası: TestAS için yetkili dijital merkez; TestDaF takvim/ücret için TÖMER Almanca koordinatörlüğüne yönlendiriyor | https://tomer.ankara.edu.tr/testdaf-testas-onset/ | doğrudan | KISMEN: TestDaF merkezi olduğu açıkça yazmıyor, "iletişime geçin" diyor |
| Eski nottaki "Ankara/Antalya/Bursa/Erzurum/Eskişehir/İstanbul/İzmir" listesi (TAÜ, İÜC, Marmara) | TAÜ sayfası 403 verdi; şehir listesi ikincil | | BULUNAMADI (tam resmi liste). Resmi kaynak: testdaf.de "Testzentrum finden" JS ile yükleniyor, curl/Chrome'da içerik gelmedi. |

Sayfaya yazım önerisi: "İstanbul (Marmara Ü., İstanbul Ü.-Cerrahpaşa), Bursa (Uludağ Ü.), Erzurum ve Goethe-Institut şubeleri dahil birçok merkezde yapılır; güncel liste ve oturumlar için testdaf.de/termine". Şehir listesi kesin değil.

### 1.3 Format, takvim, süre

- Yıllık 6 tarih: Goethe TR sayfası "sechs festgelegten Terminen pro Jahr" DOĞRULANDI (ama dijital TestDaF'ta İÜC 4 tarih + 25.08/22.09 gibi daha sık oturum görünüyor; "yılda 6" sadece kâğıt/genel ifade olarak alınmalı).
- Sonuç süresi: "Auswertung ... papierbasierten TestDaF in der Regel 6 Wochen ... digitalen TestDaF ca. 3 Wochen." (https://www.testdaf.de/de/teilnehmende/mein-testdaf/testdaf-termine-und-anmeldung/ ) DOĞRULANDI.
- Kayıt kapanışı: "Für den digitalen TestDaF ... in der Regel acht Tage vor dem Prüfungstermin. Für den papierbasierten TestDaF ... spätestens vier Wochen vor" (faq-anmeldung). DOĞRULANDI. Not: İÜC 22.09.2026 oturumu için kayıt 11.09'da kapanıyor (11 gün önce), yani merkez bazında değişir.
- "Sie können die Prüfung so oft wie notwendig wiederholen"; parça parça yapılamaz: "Nur wenn Sie alle Prüfungsteile bearbeiten, erhalten Sie ein Zertifikat" (faq-allgemein). DOĞRULANDI.
- Dijital yapı: Lesen 34 item 55 dk; Hören 30 item 40 dk; Schreiben 2 görev 60 dk; Sprechen 7 görev 35 dk (faq-allgemein). DOĞRULANDI.

### 1.4 Geçerlilik ve düzeyler

- "Das TestDaF-Zertifikat ist unbegrenzt gültig. Einige Hochschulen akzeptieren jedoch nur einen aktuellen Nachweis. Informieren Sie sich bitte direkt bei der jeweiligen Hochschule." (testdaf.de FAQ Ergebnisse und Zertifikat) DOĞRULANDI.
- RO-DT § 4 Abs. 5: "Ein in allen Teilprüfungen mindestens mit dem Ergebnis TDN 4 abgelegter TestDaF gilt ... als Nachweis der sprachlichen Studierfähigkeit für die Zulassung oder Einschreibung zu allen Studiengängen und Studienabschlüssen." (HRK/KMK Rahmenordnung, PDF: https://www.hrk.de/fileadmin/redaktion/hrk/02-Dokumente/02-07-Internationales/Rahmenordnung_ueber_Deutsche_Sprachpruefungen_fuer_das_Studium_an_deutschen_Hochschulen__RO-DT__2020.pdf , PDF s. ~7; yöntem PDF) DOĞRULANDI [yasa/RO düzeyi: HRK+KMK kararı].
- RO-DT § 1 (3-5): Üniversiteler programa göre "differenzierte sprachliche Eingangsvoraussetzungen" belirleyebilir; daha düşük şartlar "studienbegleitend weiterführende Sprachkurse" şartıyla. TestDaF sitesi: "Beispielsweise kann in Studiengängen wie Informatik oder Ingenieurwissenschaften ggf. in der Teilkompetenz Schreiben auch eine TDN 3 als ausreichend angesehen werden" (https://www.testdaf.de/de/hochschulen/der-testdaf-und-hochschulen/nachweis-der-deutschkenntnisse-fuer-das-studium/ ). DOĞRULANDI.
- TDN ile CEFR: "Die drei TestDaF-Niveaus (TDN) 3, 4 und 5 ... B2 und C1 des GER zugeordnet" (FAQ). DOĞRULANDI. Not: g.a.s.t. bilerek "TDN 4 = C1" demiyor; TDN 3 ≈ B2, TDN 4-5 = C1 aralığı. Sayfada "TDN 4 (tipik olarak C1 seviyesi olarak anılır)" yerine "TDN 3-5 B2-C1 aralığını kapsar" yazılmalı. TestDaF sitesi ayrıca "Warum C1 keine Lösung ist" makalesine atıf yapıyor: eşleme birebir değil.
- Telafi: "Nein, in der Regel ist das nicht möglich" (bir parçanın düşüğü diğeriyle telafi edilmez); ama "Einige Hochschulen lassen ... nach einem Punktemodell zwischen 14 und 16 Punkten (Summe aus den vier TDN) zu." DOĞRULANDI.
- Ortalama "4x4" ifadesi TU Berlin'de: "Final TestDaF certificate with TDN 4 or higher in all modules (4-4-4-4)". DOĞRULANDI.

---

## 2. Goethe-Zertifikat B2 / C1 / C2 (GDS)

| Bulgu | Kaynak | Yöntem | Durum |
| --- | --- | --- | --- |
| **Türkiye TL fiyatları**: Goethe TR sayfalarında fiyat tablosu `/rest/examfinder/exams/institute/O 10000317` REST çağrısıyla yükleniyor (Ankara için); curl 403, headless Chrome 403, Wayback'te API kaydı yok | https://www.goethe.de/ins/tr/de/sta/ank/prf/gzb2.cfm (Wayback 20260206192903) | arşiv | **BULUNAMADI** (TL rakamı): sayfa şablonunda yalnızca `{{price}}` yer tutucusu var |
| Almanya fiyat listesi "Prüfungspreise 2026" (arşiv 12.06.2026): yetişkin B2 € 289 (modül € 114), C1 € 349 (modül € 114), C2 GDS € 359 (modül € 139), B1 € 259, TestDaF € 215; "Kursteilnehmende ... 20 Prozent Rabatt ... (ausgenommen TestDaF und Goethe-Test PRO)" | https://www.goethe.de/ins/de/de/prf/pre.html (Wayback 20260612110428) | arşiv | DOĞRULANDI ama **yalnızca Almanya**; Türkiye TL/EUR fiyatı bu değil |
| Türkiye'de kurs katılımcısı indirimi: "Der angezeigte günstigere Preis gilt, wenn Sie bereits einen Deutschkurs beim Goethe-Institut besucht haben, der nicht länger als sechs Monate zurückliegt." | Ankara gzb2.cfm (yukarıdaki) | arşiv | DOĞRULANDI |
| Ödeme/kayıt: "Buchungsstart zu Beginn der jeweiligen Anmeldefrist: Ab 11:00 Uhr." Sertifika yalnızca dijital: "Ihr digitales Zertifikat ... etwa 4 Wochen nach Ihrer Prüfung über MeinGoethe.de" | aynı | arşiv | DOĞRULANDI |
| Dijital sınav: "Das Goethe-Institut Ankara bietet das Goethe-Zertifikat B2 auch digital an"; İstanbul C1 dijital (Goethe TR genel sayfası "ausgewählte Prüfungen auch digital") | Ankara gzb2.cfm; https://www.goethe.de/ins/tr/de/spr/prf.html (Wayback 20260617003139) | arşiv | DOĞRULANDI |
| Geçerlilik: "Goethe-Institut tarafından verilen sertifikalar süresiz olarak geçerlidir." | https://www.goethe.de/ins/tr/tr/spr/prf/ogf.html (Wayback 20260317154452) | arşiv | DOĞRULANDI |
| Üniversite kabulü (Goethe): "Goethe-Zertifikat C2: GDS ... Almanya, Avusturya ve İsviçre'deki üniversiteler için genel olarak geçerli ... Birçok üniversite, Goethe-Zertifikat C1 veya B2'yi de yeterli kabul etmektedir." "Hangi sertifikanın sizin bölümünüz için geçerli olduğunu öğrenmek için lütfen ilgili üniversiteyle iletişime geçin." | aynı ogf.html | arşiv | DOĞRULANDI (kurumun kendi beyanı; ticari/tanıtım niteliği) |
| DAAD: "The Goethe-Zertifikat C2, the telc Deutsch C1 Hochschule examination and the Deutsches Sprachdiplom (level II) ... are usually also recognised ... For some degree programmes, the Goethe-Zertifikat B2 and C1 and the ÖSD Zertifikat B2 and C1 are also recognised." | https://www.daad.de/en/studying-in-germany/living-in-germany/german-language/ (Wayback 20260422210905) | arşiv | DOĞRULANDI [resmi kurum]. Özet: Goethe B2/C1 "bazı programlarda", her yerde değil. |
| Somut örnek: TU Berlin, Almanca programlar için tanınan liste: DSH-2/3 (HRK kayıtlı), Goethe-Zertifikat C2 (GDS)/KDS/ZOP, DSD II, TestDaF 4-4-4-4, telc Deutsch C1 Hochschule, FSP Deutsch, ÖSD C2. **Goethe B2/C1 listede yok.** "only final certificates can be accepted ... (approximately 6 months before the application deadline) ..." | https://www.tu.berlin/en/i-a-office-of-student-affairs/masters-application-enrollment/admission-requirements/language-skills | doğrudan | DOĞRULANDI |
| Dinamik: B2 "Modul-preis" ve toplam fiyat ayrımı (modül tek tek alınabilir: "the four modules can be taken individually or in combination"; Goethe Istanbul B2 sayfa özeti) | Goethe TR; Almanya listesi modül fiyatları | | DOĞRULANDI (Almanya listesiyle) |

**Sonuç:** Türkiye Goethe TL ücreti resmi kaynaktan alınamadı. Okura "Türkiye şubelerinin TL fiyatı kayıt sayfasında görünür; Almanya'da B2 289 EUR / C1 349 EUR / C2 359 EUR" bilgisi *Almanya* etiketiyle verilebilir, Türkiye rakamı gibi verilmemeli. İkincil kaynaklar 2024 aralığı veriyor (almanakademisi.com); kullanılmadı.

---

## 3. telc Deutsch C1 Hochschule (B2 Hochschule yok)

| Bulgu | Kaynak | Yöntem | Durum |
| --- | --- | --- | --- |
| telc'in güncel Almanca listesinde üniversite sınavı olarak yalnızca **"telc Deutsch C1 Hochschule"** görünüyor (telc.net'te "telc German C1 University"); "B2·C1 Hochschule" adlı ayrı bir sınav bu listede yok. Yapı: yazılı (Lesen 90 dk, Sprachbausteine, Hören ca. 40 dk, Schreiben 70 dk) + sözlü (ca. 16 dk, 20 dk hazırlık). "available as a digital, hybrid and paper-based exam. It can be taken as a partial examination." | https://www.telc.net/en/language-examinations/certificate-exams/german/telc-german-c1-university/ [ticari sağlayıcı kendi sitesi] | doğrudan | DOĞRULANDI (telc'in kendi tanımı) |
| Üniversite kabulü: DAAD "telc Deutsch C1 Hochschule ... usually also recognised"; DAAD Türkiye: "A telc German C1 or C2 certificate, which you can acquire at various institutes in Turkey, also serve as a sufficient proof for your university entrance qualification." TU Berlin listesinde var ("telc Deutsch C1 Hochschule"). | DAAD (yukarıda); DAAD TR (arşiv) ; TU Berlin | arşiv/doğrudan | DOĞRULANDI |
| Türkiye ücret (TL): Mindset Institute (İstanbul, ticari merkez) arama özetinde "telc Deutsch C1 Hochschule digital 11.700 TL + KDV" ve İstanbul dijital sınav tarihi 6-20 Şubat 2026; başka merkezler 260-270 EUR (ankaradilegitimi.com) | Sayfaların kendisinde rakam metin olarak çıkarılamadı (https://mindset.com.tr/sertifika-rehberi/telc-c1-sinav-ucreti-ne-kadar : "Genellikle benzer fiyatta ama merkeze göre fark olabilir") | | **BULUNAMADI/ÇELİŞKİLİ**: rakam sayfada doğrulanamadı; merkezden merkeze değişiyor. İÜC de telc merkezi ama fiyat "arayınız" diyor (https://sinavmerkezi.iuc.edu.tr/faq). |
| Türkiye telc merkez listesi (resmi telc.net merkez bulucu) | | | **BULUNAMADI** (dinamik). Ticari merkezler: Mindset Institute (İstanbul), Sprachportal (Ankara/İstanbul), İÜC Sınav Merkezi. Bunlar doğrulama değil ipucu. |
| Geçerlilik | telc genel: sertifikalar süresiz mi? Doğrulanmadı | | BULUNAMADI (telc kaynağı bulunamadı) |

---

## 4. DSH

- RO-DT § 3 (2): "Die DSH wird von Hochschulen und staatlich anerkannten Studienkollegs an Hochschulen bzw. Landesstudienkollegs angeboten." § 3 (1): "hochschulische Sprachprüfung"; (3) her üniversite yerel Prüfungsordnung çıkarır, HRK+FaDaF registreriyor; (5) "mindestens ... DSH-2 ... Nachweis der sprachlichen Studierfähigkeit ... zu allen Studiengängen". (RO-DT PDF, aynı link.) DOĞRULANDI [RO].
- "Die Deutsche Sprachprüfung für den Hochschulzugang (DSH) has to be taken in Germany and is offered by many higher education institutions." (DAAD, https://www.daad.de/en/studying-in-germany/living-in-germany/german-language/ , arşiv 22.04.2026) DOĞRULANDI [resmi kurum]. Eski nottaki "Türkiye'den girilemez" bulgusu resmi kaynakla doğrulandı. RO-DT'de "yalnızca Almanya" ifadesi geçmiyor; dayanak DAAD.
- Ücret: "The fee depends on the institution (DSH) and the country (TestDaF)" (DAAD aynı sayfa). DSH ücreti üniversiteye göre; tek rakam yok. DOĞRULANDI.
- TU Berlin: "DSH-2 with registration at German Rector's Conference" tanınıyor (kayıtlı DSH şartı). DOĞRULANDI.
- DAAD Türkiye: "DSH 2-3 ... your DSH certificate must show the levels 2 or 3." DOĞRULANDI.

---

## 5. IELTS Academic

| Bulgu | Kaynak | Yöntem | Durum |
| --- | --- | --- | --- |
| IDP Türkiye: "IELTS Academic & IELTS General Training – at the test centre (on Computer) **TL 12,210**"; UKVI Academic/GT "TL 13,500"; Life Skills "TL 10,710". İstanbul oturum listesinde her oturum "TRY 12210". Test merkezleri: Adana, Ankara, Antalya, İstanbul, İzmir (+ Gaziantep, Van yazıda geçiyor); "IELTS on computer results are usually available within 1–5 days." | https://ielts.idp.com/turkey/test-dates/en-gb ve /istanbul/en-gb [ticari sağlayıcı kendi sitesi] | doğrudan | DOĞRULANDI (IDP için, 24.09.2026) |
| British Council Türkiye: merkezler "Adana, Ankara, Antalya, Erzurum, Gaziantep, Istanbul, Izmir, Karaman, Kayseri, Kocaeli, Mersin, Mugla, Ordu"; ödeme kredi kartı veya EFT ("bank transfer up to 5 days before your test day"); "IELTS on paper" için Türkiye'de ikamet kanıtı (yabancı uyruklular) | https://www.britishcouncil.org.tr/en/exam/ielts/dates-fees-locations (Wayback 20260516050259) [ticari/kurum kendi sitesi] | arşiv | DOĞRULANDI (merkez/kurallar) |
| British Council TL ücreti: sayfada fiyat tablosu `pfapi.britishcouncil.org/api/country/TR/exams` API'sinden geliyor, 403 (Akamai); arşivde yok. Arama özeti "Ağustos 2026 itibarıyla 12.000 TL" diyor ama resmi sayfada doğrulanamadı | | | **BULUNAMADI** (BC); IDP 12.210 TL doğrulandı. Eski nottaki "BC ~12.000 vs IDP ~12.210" çelişkisi: iki sağlayıcı farklı fiyat olabilir, BC rakamı doğrulanmadı. |
| Academic ile General aynı ücret | IDP sayfası (aynı satır), IDP FAQ | doğrudan | DOĞRULANDI |
| Geçerlilik: "We recommend that IELTS test results are considered valid for two years after a test has been taken ... Organisations that accept IELTS can choose to accept results for a longer period, so you should check with them directly." | https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail | doğrudan | DOĞRULANDI (öneri niteliğinde; kurum belirler) |
| CEFR: "our research shows that a C1 minimum threshold would fall between the 6.5 and 7 bands ... whilst many 6.5 test takers would be at C1, a number will be marginally below. So, if an institution requires a high degree of confidence that an applicant is at C1, they may wish to set a requirement of 7, rather than 6.5." "Band scores of 8.5 and higher are recognised as C2." | https://ielts.org/organisations/ielts-for-organisations/compare-ielts/ielts-and-the-cefr | doğrudan | DOĞRULANDI. "6.5 = C1" demek yanlış; 6.5 B2 üst / C1 sınırı. |
| Randevu bekleme (İstanbul, IDP): 24.09.2026'da listelenen en yakın oturumlar 27.09.2026 (Pazar) 09:00 "Seats available"; sayfa "2120 test sessions" gösteriyor | https://ielts.idp.com/turkey/test-dates/istanbul/en-gb | doğrudan | DOĞRULANDI (anlık görüntü; yoğun dönemde değişir) |

## 6. TOEFL iBT

| Bulgu | Kaynak | Yöntem | Durum |
| --- | --- | --- | --- |
| ETS'in ücret sayfasının kullandığı veri dosyası: `{'country': 'Turkey', 'fee': '$185'}` (Germany $280, United States $270). Dosya: `https://www.ets.org/content/dam/ets-org/s/toefl/toefl_ibt_fees_new.json`, `Last-Modified: 01 Oct 2025`; tr.ets.org aynı dosyada aynı değeri veriyor | https://www.ets.org/toefl/test-takers/ibt/register/fees.html (sayfa `data-test-fee-path` ile bu JSON'u yüklüyor) | doğrudan (curl + JSON) | DOĞRULANDI: 185 USD. Eski nottaki 157/188 çelişkisi çözüldü: resmi tablo 185. Dosya tarihi 01.10.2025, kayıt ekranında teyit önerilir. |
| Türkiye test merkezleri: ETS ülke listesinde "Turkey" var (https://www.ets.org/toefl/institutions/ibt/about/country-list.html); merkez/şehir listesi ve "Home Edition" seçeneği sayfası JS ile yükleniyor | | | Merkez adları **BULUNAMADI**. Doğrulanan: Türkiye'de TOEFL iBT veriliyor. Şehir listesi yazılmamalı; "ETS kayıt ekranında şehir seçilir". |
| Geçerlilik: "Your scores are valid for 2 years" | https://www.ets.org/toefl/test-takers/ibt/scores/get-scores.html | doğrudan | DOĞRULANDI |
| **Ocak 2026'dan itibaren yeni puan ölçeği (1-6)**: "In January 2026, TOEFL introduced an updated score scale (from 1 – 6 in increments of 0.5)"; 21.01.2026 sonrası testler; "we will provide comparable scores on the 0 – 120 score scale on score reports for two years". CEFR: 6=C2; 5.5 ve 5=C1; 4.5 ve 4=B2; 3.5 ve 3=B1. | https://www.ets.org/toefl/institutions/ibt/score-scale-update.html | doğrudan | DOĞRULANDI. Sayfaya önemli: üniversite eşikleri (TUM 88, TU Berlin 87, Kiel EIE 72) hâlâ 0-120 cinsinden; TUM "new TOEFL scoring system with its scale from 1 to 6 ... is accepted". |
| ETS 0-120 CEFR eşlemesi (B2 72-94, C1 95-113) | arama özeti (ets.org compare-scores); sayfayı doğrudan alamadım | | KISMEN (ikincil özet); yazmadan önce https://www.ets.org/toefl/institutions/ibt/compare-scores.html açılmalı |
| "My Best Score" (superscore) bazı üniversitelerce kabul edilmiyor: TUM "Only the Test Date Score is valid, MyBest Score will not be accepted"; TU Berlin FB IV aynı | TUM/TU Berlin sayfaları (aşağıda) | doğrudan | DOĞRULANDI |

## 7. Duolingo English Test (DET)

Genelleme yapılmadı. Bulgular:
- DAAD burs başvurularında kabul: "The following certificates, for example, can be submitted as proof of English language proficiency: Cambridge English, Cambridge Business, IELTS, ISE, TOEFL iBT, TOEFL Essentials, TOEIC as well as PTE Academic Duolingo English Test and onSET English." (https://www.daad.de/en/studying-in-germany/scholarships/information-for-scholarship-applicants/ , Wayback 20260819051024) DOĞRULANDI ama **burs başvurusu için**, üniversite kabulü için değil.
- Üniversite kabulü: TUM tanınan liste (TOEFL iBT 88, IELTS Academic 6.5, Cambridge CAE/CPE, PTE Academic 65) **DET yok**; "Only English language certificates of the below mentioned list are recognized" (https://www.tum.de/en/studies/application/application-info-portal/admission-requirements/language-certificates). TU Berlin merkez sayfası ve Fakülte IV (EECS) tablosu **DET içermiyor** (Fakülte IV: TOEFL iBT ≥87, IELTS ≥6.5, Cambridge, UNIcert vb.). Kiel EIE sayfası DET anmıyor. LMU'da taradığım üç program sayfası (Physik/Astrophysik, Econ, SOM MDT) DET anmıyor. DOĞRULANDI (bu sayfalarda yok).
- Ticari iddia: Duolingo'nun kendi blogu "The DET is accepted at over 50 programs in Germany, including ... Technische Universität Berlin ..." (https://blog.englishtest.duolingo.com/is-the-duolingo-english-test-accepted-in-germany ). Bu, TU Berlin merkez ve Fakülte IV listeleriyle uyumsuz: ÇELİŞKİLİ (program bazlı olabilir; ticari kaynak).
- Sonuç: "Duolingo kabul eden üniversite var mı?" cevabı: bazı program/burs kurumları kabul ediyor (DAAD burs, ticari sağlayıcının iddiası), ama incelediğim büyük üniversitelerde (TUM, TU Berlin FB IV, Kiel EIE, LMU 3 program) kabul edilmiyor. Okura: "Duolingo'ya para vermeden önce programın kabul listesinde adı yazıyor mu bak." Genel "kabul ediliyor" iddiası yazılmamalı.

---

## 8. CEFR eşleşmeleri (özet)

| Sınav | B2 | C1 | Kaynak |
| --- | --- | --- | --- |
| TestDaF | TDN 3 (giriş) | TDN 4-5 (RO-DT: TDN 4 = tam kabul) | testdaf.de FAQ; RO-DT § 4 |
| IELTS Academic | ~5.5-6.5 | C1 eşiği 6.5 ile 7 arası; "yüksek güven için 7" | ielts.org (yukarıda) |
| TOEFL iBT (yeni 1-6) | 4-4.5 | 5-5.5 | ets.org score-scale-update |
| Goethe/telc | Goethe-Zertifikat B2 = B2, C1 = C1, C2 (GDS) | telc Deutsch C1 Hochschule = C1 | Goethe/telc |

Not: Üniversite eşikleri CEFR'ye göre değil kendi tablosuna göre (aşağıda). TU Berlin IELTS: "Recommended score for level B2+: min. 6.5; level C1: min. 7", TOEFL iBT: "87 or higher; 95" (TU Berlin merkez tablosu; PTE 65 / 76).

---

## 9. "Hangi program hangi sınavı kabul ediyor" nasıl kontrol edilir

Kaynak: DAAD: "Higher education institutions may only recognise a specific set of language certificates and the required minimum language level is often determined by the degree programme you're wanting to take. Once you have decided on a degree programme or a higher education institution, you should research into their requirements." (https://www.daad.de/en/studying-in-germany/requirements/overview/ , Wayback 20260819045647). "Please be sure to contact your higher education institution for information on the rules that apply for your degree programme." (DAAD German language sayfası). DOĞRULANDI.

Adım listesi (kanıtlı):
1. DAAD International Programmes veritabanı program sayfasında "Language requirements" satırı vardır (örnek: HNU "Digital Innovation Management (MSc)": "English B2 / For international applicants: German A1", https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/9221/ , arşiv). Ama bu özet; bağlayıcı olan üniversite belgesi.
2. Programın kendi sayfasındaki "Zulassungsvoraussetzungen / admission requirements / Sprachnachweis" bölümü.
3. Bağlayıcı metin: Fachprüfungsordnung / Studienordnung / Zulassungs- veya Studienqualifikationssatzung. Örnek: TUM "Please refer to the Academic and Examination Regulations of your degree program (FPSO) for specific details" ve MSc için "The information whether this option is valid for a certain degree program and, if so, how many credits ... can be found in the Academic and Examination Regulations". Kiel: "Studienqualifikationssatzung 2019" (Kiel English Master'ı için program bazlı dil tablosu).
4. Ortak zemin: RO-DT § 1 (3-4): üniversite/program farklı sevye belirleyebilir ("Differenzierte sprachliche Eingangsvoraussetzungen werden von den Hochschulen ... festgelegt und ... als Teil der Bewerbungsinformationen bekannt gegeben").
5. Aynı üniversitede fakülteye göre farklılık: TU Berlin FB IV SSS: "Only the information provided by Faculty IV applies. Information on the central pages of TU Berlin or from other faculties does not apply." (https://www.tu.berlin/en/eecs/academics-teaching/study-offer/application-admission-faq).
6. uni-assist gerekiyorsa TOEFL için kurum kodu gerekir: TU Berlin "please use the uni-assist code 2727"; TUM "ETS Institution Code 7806". (ilgili sayfalar.) DOĞRULANDI.
7. Şüphede: program koordinatörüne yazıp cevabı belgeyle yükle (Mannheim sayfasında böyle: "Please upload their response together with the proof"). Eyalet/üniversite genellemesi yapılmadı.

---

## 10. İngilizce yeterlilik muafiyeti (medium of instruction): somut örnekler

Genel kural yok; üniversite hatta program bazlı. Türkiye'de lisans eğitimi İngilizce olan biri için:

| Üniversite / program | Muafiyet? | Alıntı ve kaynak | Yöntem | Durum |
| --- | --- | --- | --- | --- |
| **TUM** (genel, master) | EVET, şartlı: dil ≥%50 İngilizce | "The language of instruction needs to have been English in at least 50% of the program." "You can prove your English language skills through the language of instruction in your previous school or academic education – for example ... if the language of instruction in a Bachelor's or Master's degree program was English – by submitting your transcript of records or your degree certificate"; "If the language of instruction is not stated in these documents, you can submit an official confirmation issued by your prior university." Bazı MSc'ler için "a sufficient amount of credits acquired in English modules ... (FPSO'da)". "For Master's degree programs, English language proficiency cannot be proven by school grades in any case." https://www.tum.de/en/studies/application/application-info-portal/admission-requirements/language-certificates | doğrudan | DOĞRULANDI |
| **TU Berlin FB IV (EECS/Informatik vb.)** | HAYIR (Türkiye lisansı için) | "A successfully completed degree at a university will only be recognized as proof of English proficiency if it meets our definition of 'native English.' ..." (Antigua & Barbuda, Australia, ..., UK, USA listesi; Türkiye yok). IELTS 6.5 şartı: "even if an overall band score of 5.5 confirms a B2". Geçerlilik: "No, there are currently no validity restrictions for English language certificates." https://www.tu.berlin/en/eecs/academics-teaching/study-offer/application-admission-faq | doğrudan | DOĞRULANDI |
| **TU Berlin merkez sayfası** | "Further exempting proofs may be determined ... by the persons responsible for the study programme"; Abitur İngilizce şartları; "All certificates should not be older than 3 years." | https://www.tu.berlin/en/i-a-office-of-student-affairs/masters-application-enrollment/admission-requirements/language-skills | doğrudan | DOĞRULANDI. **ÇELİŞKİ (kurum içi)**: merkez sayfa "3 yıl", FB IV "geçerlilik kısıtı yok" (FB IV: "Only the information provided by Faculty IV applies"). |
| **TU Berlin MSE (Space Engineering)** | EVET | "Bachelor's degree completed in English." (MSE requirements) https://mse.tu-berlin.de/admission/requirements/ | doğrudan | DOĞRULANDI (program bazlı örnek) |
| **CAU Kiel, M.Sc. Electrical and Information Engineering** | HAYIR | "Proof of English language proficiency at level B2 ... TOEFL iBT (at least 72 points), GRE (Verbal ≥22 percentile), Cambridge Proficiency, ..., IELTS (at least 6.0 points). **We cannot accept Medium of Instruction (English) or other university certificates.**" https://www.uni-kiel.de/en/tf/study/msc-eie | doğrudan | DOĞRULANDI |
| **CAU Kiel, M.Sc. Informatik** (Almanca/İngilizce modüller) | İngilizce şartı çok düşük: "fachgebundene Hochschulreife mit mindestens 3 Jahren Englisch ... oder ... Niveau B1 ... oder ... mindestens 145 Punkten im Abschnitt 'Verbal Reasoning' eines GRE". Sayfada Almanca kanıtı satırı yok (sadece İngilizce satırları var). | https://www.studium.uni-kiel.de/de/bewerbung-einschreibung/studienvoraussetzungen/sprachliche-voraussetzungen/sprachkenntnisse-glossar/informatik-ma | doğrudan | DOĞRULANDI (sayfa içeriği); "Almanca gerekmez" sonucu buradan çıkarılmamalı, FPO'dan teyit şart |
| **CAU Kiel, Studienqualifikationssatzung** (program tablosu, resmi olmayan İngilizce çeviri, tarih 17.04.2026) | Program bazlı: "Betriebswirtschaftslehre M.Sc.": "completion of an English-language Bachelor's degree programme" kabul; "Biological Oceanography M.Sc.": aynı; "Business Chemistry": "If English is not the candidate's native language or the candidate has not obtained an English university entrance qualification or English Bachelor's degree, evidence must be provided". | https://www.studservice.uni-kiel.de/sta/studienqualifikationssatzung-englisch.pdf (PDF s. 2-3) | PDF | DOĞRULANDI. Aynı üniversite, iki zıt kural. |
| **LMU (genel)** | "Kurstaki dil program bazlı": "you will first need to pass a recognized German language test, unless the program in question is English-speaking" (Almanca için). İngilizce muafiyeti merkezi değil. https://www.lmu.de/en/study/degree-students/prerequisites/ | doğrudan | DOĞRULANDI |
| LMU Physik, MSc Astrophysics | EVET, mektupla | "if you are from a non-English speaking country and your Bachelor degree instruction was nevertheless carried out in English, no exam results are necessary. Please just provide a letter from your University confirming that the instruction was in English." https://www.physik.lmu.de/en/studies/study-programs/applying-to-a-masters-program/ | doğrudan | DOĞRULANDI |
| LMU Econ MSc | EVET, resmi kanıtla | "You need to prove your English proficiency either by a university degree of an English-language institution of higher education (... official proof that the teaching language of your program has been entirely English ...) or by either a TOEFL total score of at least 80 points (iBT) or an academic IELTS overall band score of 6.5 points." https://www.econ.lmu.de/en/study/master-in-economics/master-of-science-in-economics/application/ | doğrudan | DOĞRULANDI |
| LMU SOM Master Management & Digital Technologies | EVET, "entirely in English" | "Proof of English language proficiency at CEFR level C1 is required ... test results must have been issued within the last two years. This requirement does not apply to native English speakers or applicants who have completed a high school diploma, Bachelor's degree, or Master's degree taught entirely in English." https://www.som.lmu.de/en/studies/study-offer/master-management-digital-technologies/application-and-submission/index.html | doğrudan | DOĞRULANDI (IELTS 7.0 satırı FAQ'de) |

Özet bulgu: Aynı şehirde ve hatta aynı üniversitede muafiyet kuralı zıt olabilir (TU Berlin FB IV hayır / MSE evet; Kiel EIE hayır / Kiel BWL evet). "Bölümün İngilizce ise muafsınız" genellemesi yanlış olur.

---

## 11. Kiel ve GRE (kullanıcı bağlamı: CAU Kiel)

Önemli bulgu, GRE bölümü için: Kiel M.Sc. EIE sayfası: "For graduates from universities outside the Bologna area (European Higher Education Area) also: the result of a GRE revised General Test with a percentile of at least 64 % in the 'Quantitative Reasoning' section." ve "You are exempt from this requirement if you have obtained your Bachelor degree in a country of the European Higher Education Area (EHEA)." (https://www.uni-kiel.de/en/tf/study/msc-eie ). Türkiye, EHEA üye listesinde: https://www.ehea.info/page-members ("Türkiye"). Yani Türkiye'deki lisans mezunu için Kiel EIE'de GRE **gerekmiyor**. DOĞRULANDI (Kiel sayfası doğrudan + EHEA üye listesi doğrudan). Aynı sayfa: "Applications from China, India and Vietnam can only be considered if the certificate from the Academic Examination Board is enclosed." (APS; Türkiye için değil.)

---

## 12. GRE

| Bulgu | Kaynak | Yöntem | Durum |
| --- | --- | --- | --- |
| Ücret: "Fees are stated in U.S. dollars, effective August 1, 2026 ... China $231.30; All other areas of the world **$249**". Yeniden planlama "All other areas $55"; ek skor raporu "$40 per recipient". | https://www.ets.org/gre/test-takers/general-test/register/fees.html | doğrudan | DOĞRULANDI (Türkiye "All other areas" kapsamında: tabloda ayrı Türkiye satırı yok) |
| tr.ets.org sayfası eski: tablo 220 USD, ancak not: "1 Ağustos 2026 itibarıyla GRE Genel Test ücreti 249 USD'ye ... yükselecek" ve tarih "1 Temmuz 2024" | https://www.tr.ets.org/gre/test-takers/general-test/register/fees.html | doğrudan | Çelişki çözüldü: 220 eski, 249 güncel (24.09.2026'da yürürlükte) |
| Türkiye test merkezi listesi | ETS sayfaları (register.html, schedule.html): "any of the more than 1,000 test centers in more than 160 countries, or ... from ... home"; merkez arama JS/Pearson VUE aracı, statik liste yok. https://www.ets.org/gre/test-takers/general-test/register.html | doğrudan | **BULUNAMADI** (resmi Türkiye merkez listesi). İkincil (greio.com, ankastudy.com vb.) İstanbul/Ankara/İzmir diyor; doğrulanmadı. Sayfaya: "ETS hesabından şehir seç; merkezler Ankara/İstanbul/İzmir gibi büyük şehirlerde bulunur (ikincil kaynak), ev sürümü de var" ifadesi ancak "kayıt ekranında göreceksin" ile birlikte |
| GRE "at home" seçeneği ETS'te var | register.html: "Test at Home ... Test Center" | doğrudan | DOĞRULANDI |
| Fee reduction (mali ihtiyaç): "Individuals who receive a GRE Fee Reduction voucher will pay $100 to register for the GRE General Test"; formla başvuru | fees.html | doğrudan | DOĞRULANDI (Türkiye vatandaşları için uygunluk kriteri sayfada uluslararası ayrım yapmıyor ama "financial need, unemployed, Peace Corps, partner programs" şartları var; Türkiye'den uygunluk ayrı doğrulanmadı) |
| Pearson VUE: brief "ETS (Pearson VUE)" dedi; ETS sayfalarında Pearson VUE adı geçmiyor (sadece "test center"); Pearson VUE'nun GRE sayfası 404 | | | BULUNAMADI. GRE'nin teslim ortağı adı doğrulanmadı, yazılmamalı. |
| GRE talebi genel olarak: "Kiel EIE: Bologna dışı mezunlardan GRE Quant ≥%64" (bölüm 11); Kiel Informatik: GRE Verbal ≥145 sadece İngilizce kanıt alternatifi | Kiel sayfaları | doğrudan | DOĞRULANDI |
| "GRE isteyen program oranı ~%10" (eski not) | | | BULUNAMADI, kaynaksız; sayfaya yazılmamalı |

---

## 13. Hazırlık süresi ve randevu bekleme

- **Hazırlık süresi**: Goethe TR SSS: "Bir seviyeye ulaşmanız için gereken süre; motivasyonunuza, ayırdığınız zamana ... bağlıdır." Sınav öncesi kurs zorunlu değil: "Hayır. Sınavı istediğiniz zaman rezerve edebilirsiniz. Ancak hazırlık kursuna katılmanızı tavsiye ederiz." (ogf.html arşiv 17.03.2026). Somut "X ay" rakamı resmi kaynakta yok: BULUNAMADI. Uydurulmamalı.
- **TestDaF**: kayıt kapanışı dijital ~8 gün, kâğıt ~4 hafta önce; sonuç dijital ~3 hafta, kâğıt ~6 hafta. Marmara kâğıt oturumları arası 3-6 ay (15.10.2026 -> 02.02.2027 -> 13.05.2027); İÜC'de 25.08, 22.09, 12.11, 10.12 (kayıt 05.01.2026'dan itibaren açık). Kayıt için "Anmeldung nur direkt über die Webseite von TestDaF" (Goethe TR).
- **Goethe**: kayıt penceresi ve "Buchungsstart ab 11:00"; sertifika ~4 hafta; salt Almanya rakamı yok TR. Kayıt açıldıktan sonra tükenme oranı yayınlanmamış: BULUNAMADI.
- **IELTS**: 24.09.2026'da İstanbul'da en erken oturum 27.09.2026, "Seats available", bilgisayar sonucu 1-5 gün. (IDP). Kâğıt IELTS: sonuç süresi doğrulanmadı.
- **TOEFL**: ETS "scores ... 24-48 hours after you receive your scores" PDF hazırlığı; sınav randevu bekleme süresi ETS'te statik değil: BULUNAMADI.
- Başvuru takvimi ile uyum: TU Berlin "Please inform yourself in time (approximately 6 months before the application deadline) of examination dates and how long it will take to issue the final certificate." (TU Berlin dil sayfası) ve "only final certificates can be accepted. We are unable to accept provisional language certificates." DOĞRULANDI.
- TUM: Almanca dil kanıtı "before the end of the application period" teslim; TestDaF gibi sonuç bekleyen adaylar için 3 hafta (dijital) / 6 hafta (kâğıt) sonuç süresi kritik.

---

## 14. Çelişkiler ve uyarılar (ana rehber için)

1. **TestDaF 155 vs 210/215**: 210 dijital ve 215 kâğıt Almanya fiyatı; 155 EUR İÜC (Türkiye) fiyatı. testdaf.de "üç ülke grubu" diyor. Rehberde "Türkiye'de ~155 EUR (İÜC'de 24.09.2026); kayıt ekranındaki tutar geçerli" formu.
2. **TOEFL 157/185/188 USD**: ETS tablosunda Türkiye 185 USD. Dosya tarihi 01.10.2025.
3. **GRE 220 vs 249 USD**: 249 (1 Ağustos 2026'dan itibaren).
4. **IELTS 12.000 vs 12.210 TL**: IDP 12.210 doğrulandı; BC 12.000 doğrulanmadı (BC ayrıca farklı olabilir).
5. **TU Berlin içi**: sertifika yaşı 3 yıl (merkez) vs sınırsız (FB IV).
6. **Duolingo**: Duolingo blogu "TU Berlin kabul" diyor; TU Berlin FB IV ve merkez tablosunda yok.
7. **TDN 4 = C1**: g.a.s.t. bunu söylemiyor; TDN 3-5 B2-C1 aralığı. "C1 / TDN4" ifadesi sadeleştirme, kesin eşdeğerlik değil.
8. **IELTS 6.5 ≈ B2**: IELTS'e göre 6.5 çoğu kişi için C1'e yakın; üniversiteler 6.0/6.5/7.0 farklı istiyor.

## 15. Kapanan / kapanmayan maddeler (brief listesine göre)

Kapanan:
- TestDaF ücret çelişkisi (155 Türkiye/210 dijital DE/215 kâğıt DE), geçerlilik (süresiz), TDN 4 (RO-DT § 4), merkez örnekleri (Marmara, İÜC, Uludağ, Erzurum, Goethe), sonuç/kayıt süreleri
- DSH yalnızca Almanya'da (DAAD)
- IDP IELTS ücreti (12.210 TL), IELTS/TOEFL geçerlilik (2 yıl), IELTS-CEFR, TOEFL yeni ölçek, TOEFL Türkiye ücreti (185 USD)
- GRE ücreti (249 USD) ve Kiel EIE GRE muafiyeti (EHEA)
- Duolingo (genelleme yok, kanıtlı liste)
- Kontrol yöntemi (DAAD, FPO/Satzung, program sayfası), muafiyet örnekleri (TUM, TU Berlin FB IV/MSE, Kiel EIE/BWL/Oceanography, LMU Physik/Econ/SOM)

Kapanmayan:
- Goethe-Zertifikat B2/C1/C2 **Türkiye TL/EUR ücreti** (REST API 403; sayfa şablonu boş) → resmi Goethe TR kayıt ekranından elle bakılmalı
- telc Deutsch C1 Hochschule Türkiye ücreti ve resmi merkez listesi
- British Council Türkiye IELTS TL ücreti
- TOEFL iBT ve GRE Türkiye **test merkezi listesi** (ETS locator dinamik)
- TestDaF resmi "Testzentrum finden" listesi (Türkiye)
- Hazırlık süresi için resmi "X ay" rakamı (yok)
- ETS 0-120 -> CEFR tablosu doğrudan sayfadan (yalnızca özet)
- Pearson VUE'nun GRE rolü

---

## Sayfaya yazılabilecek özet (okura yönelik)

**Adım 4: Dil sınavları**

Hangi dil sınavını alacağın, başvuracağın programın **öğretim diline** ve o programın kendi kurallarına bağlı. Almanca programlar için TestDaF, DSH veya bazı programlarda Goethe/telc; İngilizce programlar için IELTS Academic veya TOEFL iBT. Kesin cevap her zaman **programın kendi sayfasındaki "Sprachnachweis" (dil kanıtı) bölümünde** ve **Studienordnung/Prüfungsordnung** (program yönetmeliği) belgesinde yazar. DAAD şunu söylüyor: üniversiteler sadece belirli sertifikaları tanıyabilir ve gereken düzeyi genellikle program belirler. (Kaynak: DAAD)

**Almanca programlar**
- **TestDaF** (Test Deutsch als Fremdsprache): Almanya'daki üniversiteler için standart sınav. Dört bölümden (okuma, dinleme, yazma, konuşma) oluşur; her bölüm TDN 3, 4 veya 5 ile puanlanır. Resmi kuralı: **dört bölümün hepsinde en az TDN 4** = tüm programlara başvuru için yeterli (RO-DT § 4). Bazı programlar bir-iki bölümde TDN 3'ü de kabul edebilir (özellikle yazma bölümünde, örneğin Informatik/mühendislikte).
  Ücret: Almanya'da dijital 210 EUR, kâğıt 215 EUR; ülkeye göre üç fiyat grubu var. Türkiye'de İstanbul Üniversitesi-Cerrahpaşa merkezi 155 EUR gösteriyor (24.09.2026). Kayıt ekranındaki tutar geçerlidir. Sonuç dijital sınavda yaklaşık 3, kâğıt sınavda yaklaşık 6 hafta sonra. Sertifika süresiz geçerli, ama bazı üniversiteler "güncel" belge ister.
  Türkiye'de merkezler: Marmara Ü., İstanbul Ü.-Cerrahpaşa, Bursa Uludağ Ü., Erzurum ve Goethe-Institut şubeleri (DAAD Türkiye, güncel liste testdaf.de'de).
- **DSH** (Deutsche Sprachprüfung für den Hochschulzugang): üniversitenin kendi yaptığı sınav; **Almanya'da** yapılır (DAAD), yani Türkiye'den başvurmadan önce alınamaz. Genelde DSH-2 aranır. Ücreti üniversiteye göre değişir.
- **Goethe-Zertifikat** ve **telc**: Goethe C2 (GDS) ve telc Deutsch C1 Hochschule genelde tanınır; Goethe B2/C1 "bazı programlarda" tanınır (DAAD). Örneğin TU Berlin'in Almanca programlarında listede TestDaF (4-4-4-4), DSH-2/3, Goethe C2 ve telc C1 Hochschule var, Goethe B2/C1 yok. Goethe sertifikaları süresiz geçerli. Türkiye'deki Goethe (Ankara, İstanbul, İzmir) TL fiyatı kayıt sayfasında görünür; Almanya'da 2026 fiyatı B2 289, C1 349, C2 359 EUR (Türkiye'de farklı olabilir).

**İngilizce programlar**
- **IELTS Academic**: Türkiye'de IDP'de 24.09.2026 itibarıyla 12.210 TL (bilgisayarlı, merkezde). British Council de merkez işletiyor; güncel ücret kayıt sayfasında. Sonuç bilgisayarlı sınavda 1-5 gün. Sonuçlar **2 yıl** geçerli sayılır (IELTS'in önerisi; kurum kendi kuralını koyar).
- **TOEFL iBT**: ETS tablosunda Türkiye için 185 USD. Sonuçlar 2 yıl geçerli. **Ocak 2026'dan beri** yeni 1-6 puan ölçeği var (B2 = 4-4,5; C1 = 5-5,5); üniversiteler hâlâ çoğunlukla eski 0-120 eşiklerini yazıyor (örn. TUM 88, TU Berlin FB IV 87), bunları yeni ölçeğe çevirtme işi üniversitenin sitesindedir.
- Tipik eşikler örnekleri: TUM: TOEFL 88, IELTS 6.5; TU Berlin (Fakülte IV): TOEFL 87, IELTS 6.5; Kiel M.Sc. Electrical and Information Engineering: TOEFL 72, IELTS 6.0; LMU Ekonomi M.Sc.: TOEFL 80, IELTS 6.5. Yani "hep 6.5" değil; programına bak.
- **Duolingo English Test**: DAAD burs başvurularında kabul listesinde; ama TUM, TU Berlin Fakülte IV, Kiel EIE ve incelediğimiz LMU programlarının kabul listesinde yok. Program listesinde adı yazmıyorsa paranı harcama.

**Lisansın İngilizce ise sınav gerekmeyebilir mi?** Üniversiteye ve programa göre değişir, ikisi de aynı üniversitede farklı olabilir:
- **TUM**: lisans/yüksek lisansın en az %50'si İngilizce ise transcript veya diploma ile kanıtlanabilir.
- **LMU**: bazı programlar (ör. Physik/Astrophysik) üniversitenin verdiği "eğitim dili İngilizceydi" mektubunu kabul ediyor; Ekonomi ve Management & Digital Technologies programları ise "tamamen İngilizce" resmi kanıt istiyor.
- **TU Berlin**: Fakülte IV (EECS) İngilizce lisansı sayılmıyor (yalnızca İngilizce anadil ülkelerinin üniversiteleri); Space Engineering (MSE) İngilizce lisansı kabul ediyor.
- **CAU Kiel**: Electrical and Information Engineering'de "Medium of Instruction kabul edilmez"; Betriebswirtschaftslehre ve Biological Oceanography M.Sc. yönetmeliğinde İngilizce lisans kabul.

**GRE**: Çoğu programda gerekmiyor; gerekiyorsa program sayfasında yazar. Ücret 1 Ağustos 2026'dan itibaren 249 USD (ETS, Türkiye "diğer bölgeler" kapsamında). Kiel'in Electrical and Information Engineering programı GRE Quant ≥%64'ü yalnızca Bologna (EHEA) dışından gelen lisans mezunlarından istiyor; Türkiye EHEA üyesi, yani Türkiye lisansı olan biri için bu şart yok. Türkiye'deki GRE merkezleri ETS kayıt ekranında şehir seçerek görünür (ev sürümü de var).

**Zaman planı**: Sonucun başvuru tarihine yetişmesi gerekir; TU Berlin "bitiş tarihinden yaklaşık 6 ay önce sınav tarihlerine bak" diyor ve **geçici belge kabul etmiyor**. TestDaF'ta kâğıt sınavda kayıt kapanışı ~4 hafta, dijitalde ~8 gün önce; Marmara'da 2026-27 kâğıt sınavları 15.10.2026, 02.02.2027, 13.05.2027. Hazırlık için resmi bir "kaç ay" rakamı yok; Goethe "kişiden kişiye değişir" diyor.

Kaynaklar (rehberde referans): testdaf.de FAQ, RO-DT (HRK), DAAD (studying-in-germany), Goethe-Institut TR, ielts.org, ets.org (TOEFL/GRE), IDP Türkiye, TUM/TU Berlin/Kiel/LMU program sayfaları.
