# v2-05: Oturum uzatma, Werkstudent, iş arama / Chancenkarte, Niederlassungserlaubnis, Rundfunkbeitrag, Anmeldebescheinigung

Araştırma tarihi / erişim tarihi: **24.09.2026**. Branch: v2/paket-1-guven-onarimi. Yalnızca araştırma; docs/ altına dokunulmadı.

Doğrulama yöntemi kısaltmaları: **doğrudan** = sayfa/yasa metni doğrudan indirildi veya WebFetch ile okundu; **curl** = curl + tarayıcı User-Agent ile ham HTML çekilip metin çıkarıldı (birebir alıntı bu yöntemle); **PDF** = PDF metni çıkarıldı; **arama** = yalnızca web arama özeti (zayıf).
Not: WebFetch çıktıları küçük bir modelin özetidir; tırnak içindeki Almanca ifadeleri, curl ile ham metinden çıkarılanlar dışında, "özet üzerinden" diye işaretledim.

## 0. Önce bilinmesi gerekenler (data/degerler.yml ve mevcut notlarla çelişkiler)

| # | Konu | Durum |
| --- | --- | --- |
| 1 | `mavi_kart.niederlassungserlaubnis_suresi` "B1: 21 ay; **A1: 33 ay**" | **ÇELİŞKİLİ.** Güncel yasa metni (§18c Abs.2 AufenthG) Mavi Kart için **27 ay** (basit Almanca/A1) ve **21 ay** (yeterli Almanca/B1) diyor. "33 ay" güncel yasada geçmiyor. Bkz. bölüm 4. |
| 2 | `sperrkonto.aylik_tutar` kaynağı AA `sperrkonto-375488` sayfası | Bu sayfada **hiçbir rakam yok** (WebFetch: "specific numerical amounts are not provided", Stand 21.10.2024). 992 EUR/11.904 EUR rakamı başka resmi sayfalarda doğrulandı (Berlin, München, bkz. 1.5). Kaynak alanı değiştirilmeli. |
| 3 | `is_arama_izni` "§20 ile Chancenkarte arasındaki sınır teyit edilmeli" | Yasa metni okundu, sınır netleşti (bölüm 3). Ek olarak tek bir ilk derece mahkeme kararı var (VG Cottbus), ikincil kaynaktan. |
| 4 | `werkstudent.haftalik_saat_siniri` "26 hafta kuralı TK PDF'inden teyit edilmeli" | TK ve DRV sayfalarından **DOĞRULANDI** (bölüm 2). Ayrı bir Beratungsblatt PDF'i bulunamadı; TK'nin resmi web sayfası kullanıldı. |
| 5 | `minijob_siniri` 603 EUR | DOĞRULANDI, ek olarak 2027 için 633 EUR resmi Minijob-Zentrale sayfasında var. |
| 6 | Rundfunkbeitrag, 07 no'lu not "BAföG dışında muafiyet yok" | Kısmen düzeltilmeli: BAföG dışında Härtefall yolu **var**, ama uluslararası öğrenci için "genelde uygulanmaz" (bölüm 5). |

---

## 1. Adım 31: Oturum izni (Aufenthaltserlaubnis) uzatma, §16b

### 1.1 Yasal çerçeve (yasa metni, curl ile ham metin)

Kaynak: https://www.gesetze-im-internet.de/aufenthg_2004/__16b.html, erişim 24.09.2026, yöntem: curl, durum: **DOĞRULANDI**.

- **Süre (§16b Abs.2 S.1):** "Die Geltungsdauer der Aufenthaltserlaubnis beträgt bei Ersterteilung und Verlängerung in der Regel zwei Jahre und soll eine Mindestdauer von einem Jahr nicht unterschreiten."
- **Kısa program (S.3):** "Dauert das Studium weniger als zwei Jahre, so wird die Aufenthaltserlaubnis nur für die Dauer des Studiums erteilt."
- **Uzatma koşulu (S.4):** "Die Aufenthaltserlaubnis wird verlängert, wenn der Aufenthaltszweck noch nicht erreicht ist und in einem angemessenen Zeitraum noch erreicht werden kann." S.5: kurum (üniversite) sürecin değerlendirmesine dahil edilebilir.
- **Yasada sayısal bir "azami çalışma/ikamet yılı" yok.** §16b'de Höchststudiendauer veya Fachsemester sınırı geçmiyor. Sınır "angemessener Zeitraum" (makul süre) ölçütüdür.
- **Çalışma (Abs.3):** "bis zu 140 Arbeitstage im Jahr", "Studentische Nebentätigkeiten werden nicht angerechnet"; günlük ≤4 saat = yarım gün; alternatif hesap: haftalık ≤20 saat ders döneminde ve dönem dışında 2,5 gün sayılır.
- **§8 Abs.1 AufenthG** (https://www.gesetze-im-internet.de/aufenthg_2004/__8.html, curl): "Auf die Verlängerung der Aufenthaltserlaubnis finden dieselben Vorschriften Anwendung wie auf die Erteilung." Yani uzatmada da Lebensunterhalt (geçim), sigorta vb. aranır.
- **§8 Abs.2:** "Die Aufenthaltserlaubnis kann in der Regel nicht verlängert werden, wenn die zuständige Behörde dies bei einem seiner Zweckbestimmung nach nur vorübergehenden Aufenthalt bei der Erteilung oder der zuletzt erfolgten Verlängerung der Aufenthaltserlaubnis ausgeschlossen hat." (Kiel sayfası bunu yineliyor.)

### 1.2 Fortgeltungsfiktion / Fiktionsbescheinigung, §81

Kaynak: https://www.gesetze-im-internet.de/aufenthg_2004/__81.html, curl, **DOĞRULANDI**.

- **§81 Abs.4 S.1:** "Beantragt ein Ausländer vor Ablauf seines Aufenthaltstitels dessen Verlängerung oder die Erteilung eines anderen Aufenthaltstitels, gilt der bisherige Aufenthaltstitel vom Zeitpunkt seines Ablaufs bis zur Entscheidung der Ausländerbehörde als fortbestehend."
- **S.2:** "Dies gilt nicht für ein Visum nach § 6 Absatz 1." (Yani kısa süreli Schengen vizesinde işlemez.)
- **S.3 (geç başvuru):** "Wurde der Antrag ... verspätet gestellt, kann die Ausländerbehörde zur Vermeidung einer unbilligen Härte die Fortgeltungswirkung anordnen." Geç başvuruda otomatik değil, takdir.
- **Abs.5:** "Dem Ausländer ist eine Bescheinigung über die Wirkung seiner Antragstellung (Fiktionsbescheinigung) auszustellen."
- **Abs.5a:** Bu durumda, yeni titel'de tarif edilen Erwerbstätigkeit "ab Veranlassung der Ausstellung bis zur Ausgabe des Dokuments ... als erlaubt" sayılır; izin Fiktionsbescheinigung'a yazılır. (Not: Abs.5a Abs.3/4'e atıf yapıyor; §16b çalışma hakkı Fortgeltung sırasında eski titel'in çalışma çerçevesiyle devam eder, bunun ayrıntısı bu araştırmada ayrıca sınanmadı.)
- Mesajın özü: **süresi dolmadan başvur.** Süresi dolmuş bir titel ile başvurmak Fiktion'u otomatik vermez (§81 Abs.4 S.3).

### 1.3 Ne kadar önce başvurulur: üç Ausländerbehörde

| Kurum | Alıntı / bulgu | Kaynak (erişim 24.09.2026) | Yöntem | Durum |
| --- | --- | --- | --- | --- |
| **Kiel** (Stadtamt, Aufenthalt) | "Antragsfrist : 8 Wochen. Die Aufenthaltserlaubnis sollten Sie spätestens 8 Wochen vor Ablauf Ihrer noch gültigen Aufenthaltserlaubnis zum Zweck des Studiums beantragen." Randevu için e-posta: zuwanderung@kiel.de (CAU International Center sayfasında). | https://www.kiel.de/de/politik_verwaltung/service/_leistung.php?id=265624905 | curl (ham HTML) | DOĞRULANDI |
| **Berlin** (LEA) | "Die Antragstellung ist frühestens 4 Monate vor Ablauf Ihres aktuellen Aufenthaltstitels möglich." Ayrıca **yalnızca online** başvuru. Başvuru sonrası PDF onay: "Damit wird bescheinigt, dass Ihr aktueller Aufenthaltstitel ... über das bisherige Gültigkeitsdatum hinaus im Bundesgebiet weiter gültig bleibt." | https://service.berlin.de/dienstleistung/305244/ | curl | DOĞRULANDI |
| **München** (KVR, Servicestelle für Zuwanderung) | "Sie müssen vor Ablauf der Gültigkeit Ihres Visums/Aufenthaltstitels eine Aufenthaltserlaubnis zum Studium beantragen." Sayısal bir "x hafta önce" **yok**. Bearbeitungszeit: "Bis zu 12 Monate". LMU sayfası: "die Beantragung und Verlängerung derzeit bis zu 5 Monate dauern kann" (özet üzerinden). | https://stadt.muenchen.de/service/info/studenten/1089339/ ; https://www.lmu.de/de/workspace-fuer-studierende/international-student-guide/aufenthaltserlaubnis/index.html | curl / doğrudan | DOĞRULANDI (rakam yok, bekleme süresi var) |

Sonuç: "6-8 hafta önce" kalıbı Kiel için birebir "**spätestens 8 Wochen**". Berlin "en erken 4 ay". München sayısal vermiyor ama işlem süresini 5-12 ay olarak açıklıyor. Genel öneri: **mümkün olan en erken zamanda** (Berlin'de 4 ay, Kiel'de en az 8 hafta öncesi) başvurmak.

**Çelişki (küçük):** FU Berlin sayfası (https://www.fu-berlin.de/studium/international/studium_fu/einreise_aufenthalt/aufenthaltserlaubnis/index.html, WebFetch özeti) "frühestens 8 Wochen vor Ablauf Ihres Visums" diyor; LEA'nın kendi sayfası uzatma için 4 ay diyor. FU metni vize/ilk başvuruya ilişkin görünüyor; LEA resmi sayfası esas alındı. Durum: ÇELİŞKİLİ ama kurumun kendi sayfası net.

### 1.4 Gerekli belgeler

- **Berlin (LEA), uzatma, doğrudan sayfadan (curl):** pasaport kopyası (veri sayfaları); mevcut Aufenthaltstitel kopyası; Almanya'daki sigorta kanıtı ("elektronische Gesundheitskarte" veya özel sigortada "Bescheinigung ... nach § 257 Abs. 2a SGB V"; "Eine ausländische Krankenversicherung genügt grundsätzlich nicht"); Berlin'de ana ikametgah kanıtı ("Meldebestätigung oder Mietvertrag und Einzugsbestätigung"); geçim kanıtı ("bei Verlängerung: alternativ auch Kontoauszüge der letzten sechs Monate, Nachweise über sonstiges Einkommen"); "Immatrikulationsbescheinigung oder Zulassung zum Studium"; "**Für die Verlängerung ... : Leistungsübersicht oder Studienprognose Ihrer Hochschule**". Durum: DOĞRULANDI.
- **München (curl):** "Für die Verlängerung ab dem 4. Semester: Leistungsnachweise der bisher erreichten Prüfungsleistungen"; "Für die Verlängerung bei Überschreitung der Regelstudienzeit: Bescheinigung von der Hochschule über ordnungsgemäßes Studium, Erfolgsaussichten und voraussichtliche Dauer bis zum Abschluss"; "Krankenversicherungsnachweis (Versicherungskarte)"; Sperrkonto "mindestens 11.904 Euro (bei Ersterteilung)". Durum: DOĞRULANDI.
- **Kiel:** Kiel'in Verlängerung sayfasında belge listesi **yok** ("Es gibt keine Hinweise und Besonderheiten"). Yalnızca "Für die Verlängerung ... gelten dieselben Voraussetzungen wie für die Erteilung. Insbesondere soll Ihr Lebensunterhalt für die Dauer des Studiums gesichert sein." Ausländerbehörde, ilgili Hochschule'den görüş isteyebilir ("Stellungnahmen der Hochschule ... Studienverlauf, Studienabschluss"). CAU International Center ilk başvuru için şunları sayıyor (özet üzerinden): Meldebestätigung, Krankenversicherungsnachweis, Studierendenausweis, Finanzierungsnachweis, geçerli pasaport (https://www.international.uni-kiel.de/en/incomings/planning-arrival-and-stay/residence-permit/residence-permit). Kiel'e özgü **uzatma belge listesi: BULUNAMADI** (Kiel'in web sayfasında yok; randevu e-postasında istenecek).
- Genel: belge listesi ABH'ye göre değişir; okura "kendi ABH'nin güncel listesini kontrol et" denmeli.

### 1.5 Geçim kanıtı tutarı (uzatma)

- Berlin 2026: "Für einen Aufenthalt zum Studium muss monatlich ein Betrag von 992,00 Euro zur Verfügung stehen, also 11.904,00 Euro pro Jahr (aktueller Wert für das Jahr 2026)." Ölçüt: "Ausreichende Mittel stehen dann zur Verfügung, wenn sie dem BAföG-Förderungshöchstsatz entsprechen." (https://service.berlin.de/dienstleistung/305244/, curl.) Durum: **DOĞRULANDI** (992/11.904, Berlin, 2026 değeri).
- München: "Sperrkonto einer deutschen Bank über mindestens 11.904 Euro" (Ersterteilung).
- Bir T.C. misyon sayfası (WebSearch özeti) "10.236 Euro" BAföG yıllık azami oranını veriyor (https://tuerkei.diplo.de/tr-de/service/05-visaeinreise/2621556-2621556 civarı arama özeti). Bu sayfanın kendisini WebFetch ile okuduğumda tutar bulunmadı. 10.236 büyük olasılıkla eski/BAföG öncesi değer; **kullanma**, 992/11.904 Berlin'in 2026 sayfası ile örtüşüyor.

### 1.6 Harç (Gebühren)

**Yasa (AufenthV §45)**, https://www.gesetze-im-internet.de/aufenthv/__45.html, curl, DOĞRULANDI: "für die Erteilung einer Aufenthaltserlaubnis ... bis zu einem Jahr 100 Euro ... mehr als einem Jahr 100 Euro"; "für die Verlängerung ... für einen weiteren Aufenthalt von bis zu drei Monaten 96 Euro ... von mehr als drei Monaten 93 Euro"; "für die durch einen Wechsel des Aufenthaltszwecks veranlasste Änderung ... einschließlich deren Verlängerung 98 Euro".
Kiel (curl) Verlängerung: "96 € ... bis zu 3 Monaten", "93 € ... mehr als 3 Monaten". München aynı (93-96). Berlin: 93 EUR (elektronischer Titel, Verlängerung), 49 EUR (Etikett).

**Türk vatandaşları için indirim (önemli, rehberde yok):**
- AufenthV §52a (https://www.gesetze-im-internet.de/aufenthv/__52a.html, curl): "Assoziationsberechtigte" (AB-Türkiye Ortaklık Hukuku uygulanan kişiler) için ücret "in Höhe der für die Ausstellung von Personalausweisen an Deutsche erhobenen Gebühr"; 24 yaş altı için gençlere uygulanan tutar.
- Berlin LEA sayfası uygulamada şunu yazıyor (curl): "27,60 Euro: für Türkische Staatsangehörige bis zum vollendeten 24. Lebensjahr für die erste Erteilung / für die Verlängerung; 46,00 Euro: für Türkische Staatsangehörige ab dem vollendeten 24. Lebensjahr".
- Kiel ve München sayfalarında Türk vatandaşı indirimi **yazmıyor** (Kiel: "Unter bestimmten Voraussetzungen ist eine Gebührenermäßigung oder Gebührenbefreiung möglich"). Yasa "Assoziationsberechtigte" der; her Türk öğrencinin otomatik hak sahibi olup olmadığı, Kiel'in uygulaması **BULUNAMADI / doğrulanamadı**. Rehberde "Berlin LEA Türk vatandaşlarına 27,60/46 EUR yazıyor; Kiel'de ABH'ye sor" şeklinde yazılabilir.
- Stipendiaten ücretsiz: München, "Bei einem Stipendium aus deutschen öffentlichen Mitteln ... keine Gebühren".

### 1.7 İlk verilen süre / Studienzeit sınırı / Studienwechsel

- **İlk süre:** yasa: "in der Regel zwei Jahre", en az 1 yıl (§16b Abs.2). Kiel: "Die Aufenthaltserlaubnis wird für mindestens ein Jahr und in der Regel für maximal 2 Jahre erteilt" (curl, id=265566681). DOĞRULANDI.
- **ÇELİŞKİ München:** "Die Aufenthaltserlaubnis zum Studium wird in der Regel für drei Jahre erteilt und kann verlängert werden" (https://stadt.muenchen.de/service/info/studenten/1089339/, curl) ile aynı şehrin Fachrichtungswechsel sayfası "in der Regel für die Dauer von zwei Jahren" (https://stadt.muenchen.de/service/info/studenten/1089526/, curl) ve yasa "zwei Jahre" çelişiyor. München'in 1089526 sayfası ayrıca hâlâ "120 Tage oder 240 halbe Tage" yazıyor (yasa: 140/280, 01.03.2024'ten beri). **München sayfalarına güvenme**; yasa esas.
- **Toplam süre sınırı:** yasa metninde **yok**. Kiel: "Die Aufenthaltsdauer ist in der Regel auf maximal 10 Jahre begrenzt." (id=265624905, curl). München: "maximal 10 Jahre Gesamtaufenthalt" (Fachrichtungswechsel sayfası). Yani 10 yıl **ABH uygulama pratiği**, yasa maddesi değil; kaynak olarak "Kiel ve München ABH sayfaları". Yasal dayanak (VwV numarası) bulunamadı.
- **Studienwechsel (München, curl):** "Ein einmaliger Wechsel der Fachrichtung/ Hochschule ist in der Orientierungsphase in der Regel möglich. Die Orientierungsphase endet mit Beginn des 4. Semesters."; "Wechsel ab dem 4. Hochschulsemester ... nur in Ausnahmefällen"; aynı Fachrichtung içinde değişiklik için özel izin gerekmiyor; değişiklik "unverzüglich, spätestens jedoch innerhalb von 14 Tagen nach der Neu-Immatrikulation" bildirilmeli. Bu **sadece München'in** kuralı; Kiel'de benzeri **BULUNAMADI**. LMU: "Studienfachwechsel, Unterbrechung oder Nichtabschluss in absehbarem/üblichem Zeitrahmen" izni tehlikeye atabilir (özet üzerinden). Genelleme yapılmamalı.
- Yasa tarafı: §16b Abs.6: izin, öğrencinin sorumlu olmadığı nedenlerle geri alınırsa "für bis zu neun Monate die Möglichkeit ... die Zulassung bei einer anderen Bildungseinrichtung zu beantragen".

### 1.8 Kiel ABH sayfası (Adım 31 için özet)

Kiel: Stadtamt, Aufenthalt / Zuwanderung; online + randevu; uzatma başvurusu ≥8 hafta önce, harç 93/96 EUR, süre "mindestens ein Jahr, in der Regel maximal 2 Jahre", çalışma "bis zu 140 Tage im Jahr oder eine studentische Nebentätigkeit unbegrenzt". Kiel sayfasında Fiktionsbescheinigung hakkında bilgi yok (BULUNAMADI; yasa §81 esas).

---

## 2. Werkstudent, "26 hafta" kuralı ve Minijob/Midijob

### 2.1 Yasal dayanak, SGB V §6 Abs.1 Nr.3 (curl, DOĞRULANDI)
https://www.gesetze-im-internet.de/sgb_5/__6.html: "Versicherungsfrei sind ... 3. Personen, die während der Dauer ihres Studiums als ordentliche Studierende einer Hochschule oder einer der fachlichen Ausbildung dienenden Schule gegen Arbeitsentgelt beschäftigt sind". Yani sağlık sigortasında Werkstudentenprivileg yasada; **20 saat ve 26 hafta rakamları yasada yok**, sosyal sigorta kurumlarının ortak yorum ilkesinden (Spitzenverbände Besprechung) geliyor.

### 2.2 20 saat / 26 hafta (resmi Krankenkasse ve DRV, DOĞRULANDI)
- **TK** (https://www.tk.de/firmenkunden/versicherung/versicherung-faq/haeufige-fragen-zu-studenten-und-praktikanten/was-besagt-die-werkstudenten-regel-2036662, WebFetch, özet üzerinden): "Eine Werkstudentin bzw. ein Werkstudent darf grundsätzlich regelmäßig nicht mehr als 20 Stunden pro Woche arbeiten"; "Sie bleiben Werkstudenten, wenn sie im Laufe eines Zeitjahres maximal 26 Wochen (oder 182 Kalendertage) mehr als 20 Stunden pro Woche arbeiten, sofern sie dies am Wochenende, abends, nachts oder in der vorlesungsfreien Zeit (Semesterferien) tun."; sadece vorlesungsfreie Zeit'ta çalışılıyorsa 20 saat aşılabilir.
- **TK** (https://www.tk.de/firmenkunden/versicherung/versicherung-faq/haeufige-fragen-zu-studenten-und-praktikanten/wie-oft-duerfen-werkstudenten-ueber-20-std-arbeiten-2036712): "... wenn ... sie innerhalb eines Zeitjahres nicht mehr als 26 Wochen die 20-Stunden-Grenze überschreiten."; hesap: "vom Ende des aktuellen befristeten Studentenjobs ein Jahr zurück ... alle Beschäftigungen mit einer wöchentlichen Arbeitszeit von mehr als 20 Stunden zusammen".
- **DRV Lexikon Werkstudentenprivileg** (https://www.deutsche-rentenversicherung.de/DRV/DE/Experten/Arbeitgeber-und-Steuerberater/summa-summarum/Lexikon/W/werkstudentenprivileg.html, özet üzerinden): 20 saat; 20 saati aşan çalışma yalnızca hafta sonu/akşam/gece ve en çok 26 hafta ise sigorta-dışı kalır; vorlesungsfreie Zeit'ta çalışma saat/ücret fark etmeksizin; birden fazla süreli iş toplamı yılda 26 haftayı geçemez.
- Sigorta kapsamı (TK, özet): Werkstudent **sağlık, bakım ve işsizlik sigortasından muaf, emeklilik sigortasına (Rentenversicherung) tabi**; sağlık sigortası öğrenci tarifesiyle (KVdS) devam eder.
- **Dikkat:** "26 hafta" bir "toplam 26 hafta çalışma" değil; "haftada 20 saati aşılan hafta sayısı 26'yı geçemez (Zeitjahr içinde)". Okura hatalı "26 hafta kuralı" özeti yazılmamalı. Durum: DOĞRULANDI (TK + DRV birbiriyle tutarlı).
- **Yabancı öğrenci ek notu:** oturum izni tarafında ayrı sınır: §16b Abs.3, 140 tam/280 yarım gün (bölüm 1.1). Werkstudent sigorta kuralı (20 saat) ile oturum hakkı sınırı **iki ayrı sınır**; ikisine de uyulmalı. Üniversite içi "studentische Nebentätigkeit" oturum sınırına sayılmaz.

### 2.3 Minijob / Midijob (güncel)
- Minijob-Zentrale (https://www.minijob-zentrale.de/DE/die-minijobs/minijob-mit-verdienstgrenze, WebFetch, özet): "nicht mehr als 603 Euro" aylık, "bis zu 7.236 Euro" yıllık; Mindestlohn 01.01.2026: "mindestens 13,90 Euro"; Midijob/Übergangsbereich "603,01 Euro bis 2.000 Euro". DOĞRULANDI.
- 2027: Minijob-Zentrale Magazin (https://magazin.minijob-zentrale.de/minijob-mindestlohn-2026-2027/, özet): 2026 = 13,90 EUR ve 603 EUR; **2027 = 14,60 EUR ve 633 EUR**; formül "Mindestlohn x 130 : 3". DOĞRULANDI (kurumun kendi sitesi; Mindestlohn 2027'nin yasal dayanağı Mindestlohnanpassungsverordnung olarak ayrıca doğrulanmadı, `degerler.yml` zaten Bundesregierung'a atıf yapıyor).

---

## 3. §20 iş arama izni (18 ay) ve Chancenkarte (§20a)

### 3.1 §20 AufenthG (curl, DOĞRULANDI)
https://www.gesetze-im-internet.de/aufenthg_2004/__20.html
- Abs.1 Nr.1: Almanya'da başarılı Studium bitirdikten sonra (§16b/§16c), "wird ... eine Aufenthaltserlaubnis erteilt" (araştırma/eğitim kategorileri için ayrı numaralar).
- Abs.2 S.1-2: "Die Erteilung ... setzt die Lebensunterhaltssicherung voraus. Sie wird in den Fällen des Absatzes 1 Nummer 1 bis 4 für einen Zeitraum von bis zu 18 Monaten erteilt."
- Abs.2 S.4: "**Die Verlängerung nach Absatz 1 über diese Zeiträume hinaus ist ausgeschlossen.**" (Sağlık/bakım yardımcı eğitimi Nr.5: 12 ay, +6 ay tek seferlik uzatma; öğrenci için geçerli değil.)
- Kiel resmi sayfası (https://www.kiel.de/de/politik_verwaltung/service/_leistung.php?id=292414551, curl): "für bis zu 18 Monate", "Antragsfrist: 8 Wochen", "Verwaltungsgebühr: 98 €". **Aynı sayfa kendi içinde çelişkili:** "Sie kann anschließend nicht verlängert werden" (doğru, yasaya uygun) ile "kann nur einmalig um bis zu 6 Monate verlängert werden" (bu yalnızca §20 Abs.2 S.3'teki Nr.5, sağlık yardımcı eğitimi için geçerli). **Öğrenci için 18 ay + 6 ay yazılmamalı.** Durum: Kiel sayfasında ÇELİŞKİ, yasa net.

### 3.2 §20a Chancenkarte (curl, DOĞRULANDI)
https://www.gesetze-im-internet.de/aufenthg_2004/__20a.html
- Abs.2: yalnızca "eine Beschäftigung von durchschnittlich insgesamt höchstens 20 Stunden je Woche" ve her biri en çok 2 hafta "Probebeschäftigung".
- Abs.3: Fachkraft **veya** yeterli puan (Tablo, §20b).
- Abs.4 S.1: "Die Chancenkarte darf jedoch nur erteilt werden, wenn der Lebensunterhalt gesichert ist." S.2: "Einem Ausländer, der sich bereits im Bundesgebiet aufhält, darf die Chancenkarte nur erteilt werden, wenn er im Besitz eines Aufenthaltstitels nach Abschnitt 3 oder Abschnitt 4 ist." (§16b Abschnitt 3'te, §20 Abschnitt 4'te.)
- Abs.5: ilk Chancenkarte "bis zu einem Jahr" (Such-Chancenkarte); "um bis zu zwei Jahre" Folge-Chancenkarte, ancak iş sözleşmesi/bağlayıcı teklif + BA onayı ile; "Eine über Satz 2 hinausgehende Verlängerung als Chancenkarte ist ausgeschlossen." Yeni Such-Chancenkarte için yurt dışında/izinli kalış süresi kadar bekleme şartı.
- **Kesişim:** Yasa "§20 verilmiş kişi Chancenkarte alamaz" demiyor; Abs.4 S.2 Abschnitt 4 (=§20) titel sahibinin de yurt içinden geçişini mümkün kılıyor. BAMF sayfası (https://www.bamf.de/DE/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/Arbeit/Hochschulabsolvent/hochschulabsolvent-node.html, WebFetch özeti): mezun 18 aylık izinle iş ararken bulamazsa; **ve** "Upon ending employment without securing a successor position, applicants may request the Chancenkarte ... up to one year" (istihdam sonrası Chancenkarte). Doğrudan "§20 sonrası Chancenkarte" cümlesi BAMF sayfasında **yok**, yalnızca çalışma bitince Chancenkarte var.
- **VG Cottbus**, Beschluss 10.03.2026, 9 L 583/25 (kararın varlığı dejure.org'da doğrulandı: https://dejure.org/2026,14910, WebFetch özeti; **içeriği** yalnızca ticari blog https://www.visaguard.berlin/en/post/ruling-opportunity-card-and-18-month-graduate-visa-can-be-combined üzerinden: "Verbot der Verlängerung nach §20 Abs.2 S.4 gilt nicht für die Chancenkarte", §20 ardından Chancenkarte ile toplam ~30 ay). **Durum: KISMEN DOĞRULANDI**; tek bir ilk derece (Eilverfahren "L") kararı, ikincil özet, karar metnine ulaşılamadı; genel geçerli bir hukuk olarak yazılmamalı, "bir mahkeme kararı var, ABH uygulaması değişebilir" tonunda ve ya hiç yazılmamalı. Dikkat: dejure özetinde davanın AB-Türkiye Ortaklık Anlaşması (ARB 1/80) bağlamı da anılıyor; yani karar Türk vatandaşlığı durumunda özgü bir bağlam içerebilir, bu sınanamadı.

### 3.3 Chancenkarte için Sperrkonto / geçim tutarı
- AA misyon Merkblatt "Stand: Juli 2025" (Tunus, PDF metni çıkarıldı): "für den Aufenthalt in Deutschland müssen pro Antragsteller grundsätzlich mindestens **1.091 € pro Monat** zur Verfügung stehen, was bei der Regelgültigkeitsdauer der Chancenkarte von 12 Monaten eine Summe von **13.092 €** ist. Dies können Sie durch Kontoauszüge oder auch durch ein sogenanntes Sperrkonto nachweisen." (https://tunis.diplo.de/resource/blob/2680782/d812e6b38ca525ffcdd6892b17d65309/checkliste-chancenkarte-de-data.pdf, PDF)
- AA misyon Merkblatt "Stand: April 2026" (Kairo, PDF metni çıkarıldı): "Für den Aufenthalt in Deutschland müssen Ihnen monatlich mindestens 1.091 Euro zur Verfügung stehen ... 13.092 Euro (bspw. durch Sperrkonto oder förmliche Verpflichtungserklärung)". (https://kairo.diplo.de/resource/blob/2664804/ff16b296556688a8ec5effaf9c727a62/250122-deu-merkblatt-chancenkarte-data.pdf, PDF)
- Nairobi sayfası (19.08.2024 tarihli): aynı rakam.
- Sperrkonto şartı: "nur die offizielle Eröffnungsbestätigung der Bank unter Angabe des eingezahlten Gesamtbetrages und des monatlich verfügbaren Betrages". 20 saatlik çalışma "Nebenbeschäftigung" gelir olarak sayılabilir (somut iş sözleşmesi varsa).
- **Türkiye misyonu (tuerkei.diplo.de) Chancenkarte sayfası** rakamı doğrudan yazmıyor (arama özetinde 1.091 geçmiyor). Türkiye'ye özel sayfadan rakam **BULUNAMADI**; aynı AA kaynağının başka misyon Merkblatt'ları (Nisan 2026) ile **DOĞRULANDI (dolaylı)**. Durum: `degerler.yml` 1.091/13.092 doğru, kaynak olarak Kairo Nisan 2026 Merkblatt'ı eklenebilir.
- **Fark:** Studium: 992 EUR/ay (11.904/yıl), Chancenkarte: 1.091 EUR/ay (13.092/yıl, 12 ay için).

---

## 4. Niederlassungserlaubnis (öğrenci → çalışan), §18c ve Mavi Kart

Kaynak: https://www.gesetze-im-internet.de/aufenthg_2004/__18c.html, curl, **DOĞRULANDI**, alıntılar birebir.

**Mavi Kart sahibi, §18c Abs.2:**
- "Abweichend von Absatz 1 ist dem Inhaber einer Blauen Karte EU eine Niederlassungserlaubnis zu erteilen, wenn er **mindestens 27 Monate** eine Beschäftigung nach § 18g ausgeübt hat und für diesen Zeitraum Pflichtbeiträge oder freiwillige Beiträge zur gesetzlichen Rentenversicherung geleistet hat ... und die Voraussetzungen des § 9 Absatz 2 Satz 1 Nummer 2 und 4 bis 6, 8 und 9 vorliegen und er über **einfache Kenntnisse der deutschen Sprache** verfügt."
- "Die Frist nach Satz 1 verkürzt sich auf **21 Monate**, wenn der Ausländer über **ausreichende Kenntnisse der deutschen Sprache** verfügt."
- Yani: **A1 (basit) = 27 ay; B1 (ausreichend) = 21 ay.** `degerler.yml`'deki "A1: 33 ay" **ÇELİŞKİLİ / güncel yasada yok**. (33 ay eski yasada Mavi Kart'ın 33 ay/21 ay kuralıydı; bu yorum yasa değişikliği bilgimden gelir ve burada doğrulanmadı; yalnızca güncel §18c metni esas alındı.)

**Diğer nitelikli çalışanlar (Blaue Karte olmayan §18a/§18b), §18c Abs.1:**
- 3 yıl titel + 36 ay Rentenversicherung katkısı + "ausreichende Kenntnisse der deutschen Sprache" (+ §9 koşulları).
- **"Die Frist nach Satz 1 Nummer 1 verkürzt sich auf zwei Jahre und die Frist nach Satz 1 Nummer 3 verkürzt sich auf 24 Monate, wenn die Fachkraft eine inländische Berufsausbildung oder ein inländisches Studium erfolgreich abgeschlossen hat."** Almanya'da master bitiren için önemli: 2 yıl titel + 24 ay katkı.
- Abs.3: yüksek nitelikli bilim insanı vb. için ayrı, istisnai yol.
- Öğrencilik süresi Niederlassung süresine bu maddede **sayılmıyor** (madde "§18a, §18b, §18d, §18g titel" süresi istiyor; §16b/§20 süresi açıkça sayılmaz). §9 Abs.2 Nr.1'in (5 yıl Aufenthaltserlaubnis) öğrenci süresi sayımı ile ilişkisi ayrıca sınanmadı; §9 Abs.2 Nr.1 bu maddede "Nr.2 ve 4-6, 8, 9" ile atıflanıyor, yani 5 yıllık bekleme dışarıda bırakılıyor.
- BAMF birincil sayfası bu araştırmada okunmadı (BAMF hocalık sayfası yalnızca genel akışı veriyor); yasa metni birinci kaynak olduğu için yeterli.
- Not: Türk vatandaşları için AB-Türkiye ARB 1/80 (4-5 yıl çalışma sonrası) üzerinden ayrı, daha erken bir yol var; bu araştırmada **kaynak taranmadı**, rehberde yalnızca "ayrıca danış" diye anılabilir, iddiaya dönüştürülmemeli.

---

## 5. Rundfunkbeitrag (güncel tutar ve muafiyet)

### 5.1 Tutar
- "Für jede Wohnung in Deutschland wird monatlich ein Beitrag von **18,36 Euro** erhoben – unabhängig davon, wie viele Personen in dieser Wohnung leben oder wie viele Geräte sie nutzen." (https://www.rundfunkbeitrag.de/buergerinnen_und_buerger/informationen/informationen_fuer_studierende/index_ger.html, curl, sayfa: "Informationen für Studierende".) **DOĞRULANDI.**
- 2027 artışı: KEF önerisi 18,64 EUR (01.01.2027), **karar değil**; Beitragsservice, BVerfG'de bekleyen anayasa şikayetleri nedeniyle tek başına artıramaz (ikincil kaynaklar: infranken.de, lto.de, gegen-hartz.de arama özetleri). Durum: "henüz karar yok" ikincil kaynaktan; rehberde "18,36 EUR, 2027'de değişebilir" yazılabilir. Yasal dayanak (Rundfunkfinanzierungsstaatsvertrag §8) ayrıca okunmadı.

### 5.2 Muafiyet (RBStV §4 + resmi öğrenci sayfası, DOĞRULANDI)
- **BAföG:** "Wer BAföG erhält und nicht bei seinen Eltern wohnt, kann sich auf Antrag vom Rundfunkbeitrag befreien lassen. ... Erasmus-Studierende oder andere Stipendiaten sind grundsätzlich beitragspflichtig." (rundfunkbeitrag.de, curl.) Yasada: RBStV §4 Abs.1: "nicht bei den Eltern wohnende Empfänger von Ausbildungsförderung nach dem Bundesausbildungsförderungsgesetz" (https://bravors.brandenburg.de/vertraege/rbstv, curl).
- **BAföG dışı, Härtefall, RBStV §4 Abs.6 (birebir):** "Unbeschadet der Beitragsbefreiung nach Absatz 1 hat die Landesrundfunkanstalt in besonderen Härtefällen auf gesonderten Antrag von der Beitragspflicht zu befreien. Ein Härtefall liegt insbesondere vor, wenn eine Sozialleistung nach Absatz 1 Nr. 1 bis 10 in einem durch die zuständige Behörde erlassenen Bescheid mit der Begründung versagt wurde, dass die Einkünfte die jeweilige Bedarfsgrenze um weniger als die Höhe des Rundfunkbeitrags überschreiten."
- **Resmi sayfa (curl):** "Grundsätzlich ist eine Befreiung von der Rundfunkbeitragspflicht für Studierende nur möglich, wenn sie BAföG beziehen. Auch unter Berücksichtigung der Rechtsprechung des Bundesverwaltungsgerichts (BVerwG) kommt eine Befreiung als besonderer Härtefall nur in Ausnahmefällen in Betracht." Örnekler: Zweitstudium, Studienfachwechsel, Altersgrenze aşımı, Förderungshöchstdauer aşımı, Leistungsnachweis eksik. Bedürftigkeit: gelir, Regelsatz'ı Rundfunkbeitrag'dan az aşıyorsa hâlâ "bedürftig".
- **Uluslararası öğrenciler (rehber için kritik, birebir, curl):** "Internationale Studierende müssen für den Erhalt eines Aufenthaltstitels nachweisen, dass sie über ausreichende finanzielle Mittel zur Sicherung ihres Lebensunterhalts verfügen. Eine Härtefallbefreiung kommt daher in diesen Fällen in der Regel nicht in Betracht." AB öğrencileri için de benzer, ama "mit dem BAföG vergleichbare Studienförderungsleistung aus ihrem Heimatland" ise Härtefall olabilir.
- Pratik sonuç: T.C. vatandaşı master öğrencisi (BAföG hakkı yok) → **ödemek zorunda**; muafiyet yolu fiilen kapalı. Yurtluk: "Zimmer in Studierendenwohnheimen, die von einem allgemein zugänglichen Flur abgehen ... 18,36 Euro"; WG'de **tek kişi** kayıtlı olması yeterli ("Pro Wohnung muss nur eine volljährige Person angemeldet sein"); ebeveynle yaşayan zaten ödenmiş hane için kayıt gerekmez.
- Başvuru: form online doldurulup basılır, imzalanır, Nachweis ile Beitragsservice'e postalanır (resmi sayfa). Geriye dönük 3 yıl (RBStV §4 Abs.6 sonu, bravors metninde "frühestens drei Jahre vor ..." ifadesi görüldü, tam metin okunmadı).
- Not `07-tc-tarafi-rundfunk.md`: "BAföG almayan öğrenciler muaf DEĞİL" ifadesi genel olarak doğru, ancak "Härtefall istisnası var, uluslararasılara pratikte uygulanmıyor" cümlesi eklenmeli.

---

## 6. Anmeldebescheinigung (Meldebescheinigung) Immatrikulation'da isteniyor mu?

Sonuç: **Genelleme yapılmamalı; incelenen 4 üniversitenin hiçbirinde master Immatrikulation belge listesinde ikamet kaydı (Anmeldebescheinigung/Meldebescheinigung) yok.** Ama Ausländerbehörde ayrıca ikamet kaydı ister (Berlin: Meldebestätigung; CAU IC: registration confirmation).

| Üniversite | Bulgu | Kaynak (24.09.2026) | Yöntem | Durum |
| --- | --- | --- | --- | --- |
| **CAU Kiel** | Master Einschreibunterlagen: başvuru formu, Semesterbeitrag ödeme kanıtı, Bachelor belgesi, kimlik, **SMV** (Krankenversicherung durumu elektronik). "Meldebescheinigung/Wohnsitz" aramasında yalnızca "Studenten-Meldeverfahren (SMV)" geçiyor, ikamet kaydı **yok**. | https://www.studium.uni-kiel.de/de/bewerbung-einschreibung/einschreibung/einschreibunterlagen ; .../erste-und-hoehere-fachsemester-master | curl (tam metinde arama) | DOĞRULANDI: istenmiyor |
| **TUM** | Zulassungsbescheid, Antrag auf Einschreibung, Bildungsnachweise, Abschlussdokumente, Krankenversicherungsbestätigung, Semesterbeitrag, ggf. Studiengebühren; "no mention is made of Meldebescheinigung" (özet). | https://www.tum.de/studium/bewerbung/infoportal-einschreibung/immatrikulation | WebFetch (özet) | DOĞRULANDI: listede yok (özet üzerinden) |
| **FU Berlin** | Master için 14 madde listesinden 7,8,9,10,14 çıkar. Meldebescheinigung yalnızca madde 10: "aktuelle erweiterte Meldebescheinigung über Ihren Hauptwohnsitz bei einer für Sie sorgeberechtigten Person ... nur relevant für Zugelassene in der Minderjährigenquote" → **master için geçerli değil**. | https://www.fu-berlin.de/studium/bewerbung/immatrikulation/unterlagen/index.html | curl | DOĞRULANDI: master için istenmiyor |
| **Uni Tübingen** | Aynı tür aramada (Meldebest/Meldebesch/Anmeldebesch/Wohnsitz) hiç sonuç yok. | https://uni-tuebingen.de/studium/bewerbung-und-immatrikulation/immatrikulation/erforderliche-nachweise-fuer-die-immatrikulation/ | curl | DOĞRULANDI: istenmiyor |
| HU Berlin | Anubis bot koruması, sayfa açılmadı; Erasmus sayfası arama özetinde "registration certificate from the Bürgeramt" diyordu (Erasmus için, güncel sayfa yönlendirmeli). | https://www.hu-berlin.de/... | denendi, açılmadı | BULUNAMADI (doğrulanamadı) |

- Ausländerbehörde tarafı: Berlin LEA "Bescheinigung über die Anmeldung der Wohnung (Meldebestätigung) oder Mietvertrag und Einzugsbestätigung des Vermieters" (curl). Kiel: CAU IC "after registering at the local registration office" randevu için Anmeldung sonrası e-posta (özet üzerinden). Yani Anmeldung (BMG §17, iki hafta) Immatrikulation için değil, **Ausländerbehörde için** gerekli.
- Kaba özet: "Üniversite Immatrikulation için genelde Anmeldebescheinigung istemiyor (en az Kiel, TUM, FU, Tübingen'de yok); asıl kritik olan SMV (sigorta) ve Semesterbeitrag. Anmeldung'u ABH ve banka/sözleşmeler için yap."

---

## Sayfaya yazılabilecek özet (Adım 31, okura yönelik)

**Oturum izni (Aufenthaltserlaubnis) ne kadar süre verilir?** Öğrenci oturumu genelde 2 yıl için verilir ve 2 yıllık dilimlerle uzatılır (yasa: "in der Regel zwei Jahre", en az 1 yıl, AufenthG §16b Abs.2). Programın 2 yıldan kısa kalan kısmı için daha kısa da verilebilir. Bazı şehirlerin sayfaları farklı süre yazabiliyor (örneğin München'in bir sayfasında "üç yıl" geçiyor); geçerli olan yasa ve kendi Ausländerbehörde'nin (yabancılar dairesi) kararı.

**Ne zaman başvurmalı?** Süresi dolmadan. Kiel'de "en geç 8 hafta önce" isteniyor; Berlin'de en erken 4 ay önce, sadece online. Bazı şehirlerde işlem uzun sürebiliyor (München'de bir sayfa "5 aya kadar", bir başka sayfa "12 aya kadar" diyor). Süre dolmadan yaptığın başvuru, karar çıkana kadar mevcut iznini geçerli tutar (**Fortgeltungsfiktion**, §81 Abs.4); daire bunu "Fiktionsbescheinigung" veya başvuru onay belgesiyle kanıtlar. Süre dolduktan sonra yapılan başvuruda bu koruma otomatik değildir.

**Ne lazım?** Genelde: geçerli pasaport ve mevcut oturum kartı, güncel öğrenci belgesi (Immatrikulationsbescheinigung), Almanya'da geçerli sağlık sigortası kanıtı (yabancı sigorta çoğu zaman yetmez), geçim kanıtı (2026'da aylık 992 EUR, yıllık 11.904 EUR; Berlin uzatmada son 6 ayın hesap dökümünü de kabul ediyor), ikamet kaydı (Meldebestätigung) ve **ilerleme kanıtı** (Berlin: Leistungsübersicht veya Studienprognose; München: 4. yarıyıldan itibaren Leistungsnachweise, Regelstudienzeit aşılırsa üniversiteden "makul sürede bitirebilir" yazısı). Kiel'in sayfası kesin liste vermiyor; randevu yazışmasında sor.

**Ne kadar öderim?** Yasal harç: 3 aydan uzun uzatmada **93 EUR**, 3 aya kadar 96 EUR. Berlin, Türk vatandaşları için AB-Türkiye Ortaklık Hukuku nedeniyle **27,60 EUR (24 yaş altı) / 46 EUR** yazıyor; Kiel'de indirim olup olmadığı sayfada yazmıyor, randevuda sor.

**Ders değiştirirsem?** Hukuken "makul sürede bitirilebilir olması" şart. Uygulamada München ilk 3 yarıyılda bir kez değişimi "genelde mümkün", 4. yarıyıldan sonra sadece istisnai sayıyor; toplam kalış için yaklaşık 10 yıl üst sınırı Kiel ve München sayfalarında anılıyor (yasada yazmıyor). Değişiklikten önce dairenin izni gerekebilir.

**Çalışma:** Oturum iznin yılda 140 tam gün veya 280 yarım gün çalışmaya izin verir; üniversite içi öğrenci işleri (studentische Nebentätigkeit) bu hesaba girmez.

**Werkstudent kuralı:** Ders döneminde haftada **20 saati** aşmayan çalışmada sağlık/bakım/işsizlik sigortası kesintisi yapılmaz (yalnızca emeklilik primi kesilir). Yılda en fazla **26 hafta** boyunca haftada 20 saati aşabilirsin, ama bu fazlalık hafta sonu, akşam, gece veya ders olmayan dönemde olursa (TK, DRV). Minijob sınırı 2026'da **603 EUR/ay**, 2027'de **633 EUR/ay**; 603,01-2.000 EUR arası "Midijob" bölgesi (düşük prim).

**Mezuniyet sonrası:** Almanya'da bitirince 18 aya kadar iş arama izni (§20) alınır, **uzatılamaz**. Alternatif "Chancenkarte" (§20a): 1 yıl, haftada 20 saat çalışma hakkı, geçim kanıtı **1.091 EUR/ay = 13.092 EUR/yıl**. Bu ikisinin arka arkaya kullanılıp kullanılamayacağı hukuken tartışmalı (tek bir ilk derece mahkeme kararı var), ABH'ye sor. İş bulunca Mavi Kart; Mavi Kart ile **27 ay** (basit Almanca) veya **21 ay** (B1) sonra yerleşim izni (Niederlassungserlaubnis) mümkün; Almanya'da diploma alan diğer nitelikli çalışanlar için 2 yıl + 24 ay emeklilik primi (§18c).

**Rundfunkbeitrag (yayın ücreti):** Daire (Wohnung) başına aylık **18,36 EUR**, kişi başına değil; WG'de biri kayıt olsa yeter. BAföG alanlar (ebeveynle yaşamayanlar) muaf olabilir; BAföG hakkı olmayan yabancı öğrenciler için resmi sayfa muafiyeti "genelde uygulanmaz" diyor, yani ödeme beklenir.

**Anmeldebescheinigung ve kayıt (Immatrikulation):** İncelediğimiz üniversitelerin (Kiel, TUM, FU Berlin, Tübingen) master kayıt listelerinde ikamet kaydı yok; asıl gereken sigorta bildirimi (SMV) ve Semesterbeitrag. Ama yabancılar dairesi ikamet kaydını (Anmeldung) ister; taşındıktan sonra 2 hafta içinde yaptır.

---

## Kapanan / kapanmayan maddeler (özet)

**Kapanan (DOĞRULANDI):** §16b süre/uzatma/140 gün; §8; §81 Fiktion; AufenthV §45 harçlar (93/96/100/98); Kiel 8 hafta + harç; Berlin 4 ay + belge listesi + Türk harcı; München belge listesi; Werkstudent 20 saat/26 hafta (TK+DRV, SGB V §6); Minijob 603/633; Midijob 603,01-2.000; §20 (18 ay, uzatma yasağı); §20a Chancenkarte ve 1.091/13.092 (AA Merkblatt Nisan 2026); §18c Mavi Kart 27/21 ay ve 2 yıl/24 ay kuralı; Rundfunkbeitrag 18,36 ve RBStV §4 muafiyet/Härtefall; Anmeldebescheinigung (Kiel, TUM, FU, Tübingen).

**Çelişkili:** `degerler.yml` Niederlassung "33 ay" (yasa 27); AA Sperrkonto sayfası rakam içermiyor (değerler.yml kaynak alanı yanlış); München sayfaları kendi içinde (2 vs 3 yıl; 120 vs 140 gün); Kiel §20 sayfası (uzatılamaz vs 6 ay uzatma); FU Berlin 8 hafta vs LEA 4 ay; T.C. misyon arama özetinde 10.236 EUR (eski).

**Kapanmayan (BULUNAMADI / kısmen):** Kiel'e özgü uzatma belge listesi; Kiel'de Türk vatandaşı harç indirimi; Kiel'de Studienwechsel kuralı; 10 yıl kalış sınırının yasal dayanağı; VG Cottbus 9 L 583/25 tam metni (yalnızca ikincil özet); BAMF birincil sayfasından Niederlassung sayfası (yasa metni yeterli sayıldı); Rundfunkbeitrag 2027 artışı kararı (ikincil); Türkiye misyonunun kendi Chancenkarte sayfasında rakam; HU Berlin Immatrikulation sayfası (bot koruması); ARB 1/80 kaynaklı Türklere özel erken Niederlassung yolu (taranmadı).
