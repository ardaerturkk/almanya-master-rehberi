# v2-08: Kalan belirsizlerin hedefli kapatılması

Araştırma tarihi ve erişim tarihi: 24.09.2026. Yöntem kısaltmaları: **doğrudan** (curl/WebFetch ile sayfa metni okundu), **arşiv** (web.archive.org), **PDF** (resmi PDF metni okundu), **arama özeti** (WebSearch özeti, sayfa metni okunamadı: zayıf kanıt). Bot korumalı (Anubis) HU Berlin sayfaları arşivden okundu.

Genel durum tablosu:

| # | Madde | Durum |
| --- | --- | --- |
| 1 | uni-assist ödeme yöntemleri | KISMEN DOĞRULANDI (yöntemler kesin, Türkiye garantisi BULUNAMADI) |
| 2 | uni-assist üye listesi | DOĞRULANDI |
| 3 | Toplam bekleme süresi | DOĞRULANDI (uni-assist), üniversite kısmı KISMEN |
| 4 | HU Berlin / LMU portalı | DOĞRULANDI (önceki not düzeltildi) |
| 5 | Dil belgesi eksikse şartlı kabul | DOĞRULANDI (üniversiteye göre değişiyor, 3 örnek + 1 karşı örnek) |
| 6 | FAU / TU Darmstadt son tarihleri | DOĞRULANDI (sayfa hatası bulundu) |
| 7 | DAAD yaşam maliyeti | DOĞRULANDI (21. değil 22. Sozialerhebung) |
| 8 | Şehir bazlı kira | KISMEN (München/Berlin/Frankfurt DOĞRULANDI, Kiel BULUNAMADI) |
| 9 | Yurt bekleme süreleri | KISMEN (München DOĞRULANDI, Kiel/Berlin kısmi) |
| 10 | Kiel Ausländerbehörde belge listesi ve harç | DOĞRULANDI (harç), belge listesi KISMEN |
| 11 | N26 Türk pasaportu | DOĞRULANDI |
| 12 | Ebeveyn geliri kanıtı | ÇELİŞKİLİ |
| 13 | CV / motivasyon standartları | DOĞRULANDI (tek standart YOK, bu da bulgu) |

---

## 1. uni-assist ödeme yöntemleri (Türkiye'den)

**Durum: KISMEN DOĞRULANDI.** Yöntemler kesin. "Türkiye'den kesin çalışır" garantisi BULUNAMADI, çünkü uni-assist hiçbir ülkeyi tek tek garanti etmiyor.

- Kaynak: https://www.uni-assist.de/bewerben/kosten-zahlen/zahlungsoptionen/ (erişim 24.09.2026, doğrudan).
- "Sie können die Kosten für Ihre Bewerbungen an uni-assist entweder überweisen oder per Kreditkarte zahlen."
- Kredi kartı: "Kreditkarte 3D Secure (Visa oder MasterCard)". "Sie müssen dazu bereits am 3D Secure Verfahren angemeldet sein." Yani kart 3D Secure'a kayıtlı olmalı.
- Uyarı (birebir): "Manchmal kann es sein, dass die Bank Zahlungen mit Kreditkarten aus bestimmten Ländern aus Sicherheitsgründen nicht akzeptiert. Auch Überweisungen an uns kann die Bank unter Umständen abweisen. Fragen Sie Ihre Bank zu internationalen Transaktionen." Sayfada Türkiye adı geçmiyor.
- Havale iki türlü: (a) Online-Überweisung, yalnızca bu ülkelerdeki banka hesaplarıyla: "Deutschland, Österreich, Frankreich, Spanien, Italien, Finnland, Schweden und UK". Türkiye YOK, yani Türkiye'den kullanılamaz. (b) Bank-Überweisung: My assist hesabında "Guthaben aufladen" > "Bank-Überweisung" seçilir, sistem size kişisel bir IBAN verir, ödeme yalnızca bu IBAN'a yapılır.
- Ücret uyarısı: Euro dışı para biriminde gelen uluslararası havalelerde bankalar ek ücret alabiliyor, bu ücreti öğrenci öder. "Sagen Sie Ihrer Bank, dass Sie das OUR-Verfahren bei der Bank-Überweisung nutzen möchten... Die Bearbeitungskosten müssen vollständig bei uni-assist ankommen."
- Başkası da yatırabilir: "Andere Personen können die Bearbeitungskosten für Sie überweisen. Die Überweisung ist nur mit Ihrer persönlichen IBAN möglich." Almanya'da hesabı olan tanıdık ücretsiz/ucuz yol olarak öneriliyor.
- Süre: uni-assist FAQ (https://www.uni-assist.de/en/faqs/pay-all-fees/): "International bank transfers can take up to two weeks."
- Kural: ödeme başvuru süresi içinde bitmeli, "Erst danach prüfen wir Ihre Bewerbung."

## 2. uni-assist kullanan üniversite listesi

**Durum: DOĞRULANDI.**

- Kaynak: https://www.uni-assist.de/en/tools/uni-assist-universities/ (24.09.2026, doğrudan, ham HTML).
- Birebir: "uni-assist is the central point of contact for applicants with international education certificates for around 160 German universities." Sayfa ayrıca: "it is the universities that determine which courses and applicant groups uni-assist handles."
- Kontrol yolu: sayfada eyalete, şehre ve üniversite adına göre süzme var, VPD sürecine katılanlar işaretli. Not: HTML listesini kendim saydım, kampüs satırları dahil yaklaşık 190 satır çıktı ("around 160" beyanıyla farklı, çünkü aynı üniversitenin kampüsleri ayrı satır). Sayfaya rakam yazılacaksa "yaklaşık 160" (uni-assist beyanı) kullanılmalı.
- Hedef üniversitelerin durumu (bu listeye göre):
  - Listede VAR: Kiel University (CAU), Humboldt-Universität, Freie Universität, TU Berlin, TUM, Goethe Universität Frankfurt, Uni Würzburg, Uni Augsburg, Uni Passau, Hochschule Darmstadt (h_da).
  - Listede YOK: LMU München, FAU Erlangen-Nürnberg, TU Darmstadt (LMU, FAU ve TU Darmstadt kendi portalını kullanıyor, bkz. madde 4 ve 6). Dikkat: "Hochschule Darmstadt" ile "TU Darmstadt" farklı kurumlar.
- Kiel teyidi: CAU International Center, "Für Nicht-EU- oder Nicht-EWR-Bewerber*innen: Bewerbung über: https://www.uni-assist.de/" (https://www.international.uni-kiel.de/de/internationale-studierende/bewerbung-zulassung/mit-abschluss/master/deutsche-master/bewerbungsinformationen/erstinfos_master_deutsch_1224, Stand Dezember 2024, doğrudan).

## 3. uni-assist + üniversite toplam bekleme süresi

**Durum: DOĞRULANDI (uni-assist kısmı), üniversite kısmı KISMEN. Tek bir "toplam" rakamı hiçbir resmi kaynakta yok; iki adımın toplamı okura hesaplatılmalı.**

- uni-assist, kaynak https://www.uni-assist.de/en/how-to-apply/plan-your-application/deadlines-processing-time/ ("Last updated" 21.09.2026; ham HTML, doğrudan):
  - "You will usually receive your evaluation result in 4 to 6 weeks – counting from the day on which we received your online application form."
  - Bölge tablosu (bölge = "origin of your educational certificates"): "Central and Eastern Europe, Turkey: 2-3 weeks"; "Asia, North America and Oceania: 2-3 weeks"; "Western Europe and Latin America: 3-4 weeks"; "Africa, Middle East and Iran: 1-2 weeks". "In individual cases, processing may take longer."
  - Öneri: "Apply as early as possible, at least 8 weeks before the deadline expires."
  - DÜZELTME: `04-ogrenci-harci-uni-assist.md` notu Asya/Kuzey Amerika için "6-7 hafta" yazıyordu. Bu doğru değil, güncel sayfada 2-3 hafta. Türkiye 2-3 hafta bilgisi doğru.
- Üniversite tarafı (uni-assist'ten sonra kendi karar süresi):
  - TU Darmstadt: "Das Bewerbungsverfahren für einen Master-Studienplatz nimmt, vom Eingang Ihrer Bewerbung bis zur Zulassungs-Entscheidung, viel Zeit in Anspruch (ca. 6-8 Wochen)." (https://www.tu-darmstadt.de/studieren/studieninteressierte/bewerbung_zulassung_tu/bewerbungsfristen/bachelor_studiengaenge_2/index.de.jsp, doğrudan.) Bu, TU Darmstadt'ın kendi portalıyla (TUCaN) ilgili, uni-assist yok.
  - HU Berlin: "uni-assist hat anschließend bis zu sechs Wochen Zeit" ifadesi yalnızca arama özetinden geldi; arşivdeki 3.4.1 sayfa metninde bu cümleyi bulamadım. BULUNAMADI (kanıt zayıf), sayfaya yazma.
  - Diğer üniversiteler için resmi bir "karar süresi" beyanı bulunamadı.
- Sayfaya yazılabilecek en dürüst çıkarım: uni-assist değerlendirmesi 4-6 hafta (Türkiye için güncel tablo 2-3 hafta), üstüne üniversitenin kendi kararı gelir (örnek: TU Darmstadt 6-8 hafta). Toplam için resmi rakam yok.

## 4. HU Berlin ve LMU başvuru portalı

**Durum: DOĞRULANDI. Önceki not (HU = kendi agnes/ELSA portalı) YANLIŞ; HU yurtdışı diplomalı master adayları için uni-assist kullanıyor.**

HU Berlin:
- Kaynak: https://www.hu-berlin.de/de/studium/bewerbung/bewerbung-und-zulassung/informationen-fuer-internationale-studieninteressierte/allgemeine-hinweise-zur-bewerbung-fuer-masterstudiengaenge (Anubis bot koruması nedeniyle **arşiv**, web.archive.org/web/2026/...; doğrudan sayfa PoW sorusu döndürdü).
- Birebir: "Die Humboldt-Universität zu Berlin lässt Bewerbungen von Studieninteressierten, die ihre Hochschulzugangsberechtigung im Ausland erworben haben und sich für ein Studium bewerben, durch uni-assist vorprüfen." ve "Bitte reichen Sie Ihre Bewerbungsunterlagen vollständig, vor Ende der Bewerbungsfrist und in der von der Humboldt-Universität zu Berlin festgelegten Form bei uni-assist ein." Ayrıca: "die überwiegende Mehrzahl der Studiengänge nur zum Wintersemester angeboten werden".
- Süreler (HU International "Wegweiser 3.4.1", arşiv, https://www.international.hu-berlin.de/de/studierende/aus-dem-ausland/wegweiser/3_beratung/3_4_1; arşiv tarihi belli değil, resmi sayfadan yeniden kontrol edilmeli): Master (M.A., M.Sc., M.Ed.) **mit NC: WiSe 31.05., SoSe 15.01.**; **ohne NC: WiSe 15.06., SoSe 15.01.** "Teilweise gelten abweichende Bewerbungsfristen, teilweise laufen die Zulassungsverfahren in der Fakultät." Not: bu tarihler arşiv kopyasından, güncel yıl (2027) için HU'nun canlı sayfasından teyit şart.
- Kendi portalını kullananlar (uni-assist muaf, https://www.hu-berlin.de/en/studies/admission/exceptions_from_uni_assist, arşiv): şu an HU'da kayıtlı yabancı öğrenciler, önceden HU'da kayıtlı olmuş olanlar, Almanya'da bachelor bitirmiş/bitirmekte olan master adayları, European Baccalaureate sahibi lisans adayları. Yani yurtdışı bachelor'lu Türk aday muaf DEĞİL. Ayrıca bazı master programlarının (özel başvuru kuralları) kendi tarihleri var: program koordinatörüne bakılmalı.

LMU München:
- Kaynak: https://www.lmu.de/de/studium/internationale-vollzeit-studierende/studienbewerbung/bewerbungshilfen-und-faq/leitfaden-fuer-die-bewerbung-zum-masterstudium/ (doğrudan, 24.09.2026).
- İki ayrı, paralel süreç: (1) ilgili master programının koordinasyonuna başvuru, (2) LMU "Referat International Office"e kayıt: "Frist für Anmeldung zum Sommersemester: 15.01. / zum Wintersemester: 15.07."
- Portal: "Für die Masterstudiengänge Allgemeine und vergleichende Literaturwissenschaft, Biochemie, Bioinformatik, Buchwissenschaft, Chemie, Epidemiologie (WS), Germanistische Literaturwissenschaft, Geschichte, Informatik, Kunstgeschichte, Mathematik, Medieninformatik, Mensch-Computer-Interaktion, Quantitative Economics (WS), Slavistik, Soziologie (WS) und Statistics & Data Science benutzen Sie bitte den Online-Antrag MoveIN. Das Portal wird ab dem 15. Mai 2026 geöffnet und schließt am 15. Juli 2026." Diğer tüm programlar: "Folgende Unterlagen sind bei der Anmeldung im Referat International Office einzureichen (per Post)".
- Belgeler listesinde: Lebenslauf (LMU şablonu var), Almanca belgesi ("Ausnahme: englischsprachige Masterstudiengänge und Double-Degree-Programme"), programdan kabul/uygunluk (Immatrikulation'a kadar sonradan verilebilir). uni-assist LMU'nun listesinde yok (madde 2 ile tutarlı). Not: sayfadaki tarihler 2026 dönemine ait; 2027 dönemi açıklanmadıysa "her yıl mayıs ortasında açılıyor, tarihleri LMU sayfasından doğrula" diye yazılmalı.

## 5. Dil belgesi eksikse şartlı kabul (bedingte Zulassung / Sprachnachweis nachreichen)

**Durum: DOĞRULANDI: kural üniversiteye ve programa göre değişiyor. Genelleme yapılamaz.**

Örnekler:
1. **CAU Kiel** (doğrudan): "Eventuell geforderte Fremdsprachenkenntnisse müssen spätestens zur Einschreibung nachgewiesen werden." (https://www.studium.uni-kiel.de/de/bewerbung-einschreibung/bewerbung/master). Ayrıca programa göre kurum/enstitü onayı: "Bescheinigung über... Erfüllung der Voraussetzungen" Einschreibung'da sunuluyor (https://www.studium.uni-kiel.de/de/bewerbung-einschreibung/studienvoraussetzungen/sprachliche-voraussetzungen/sprachliche-voraussetzungen). Yani Kiel'de dil belgesi başvuruda değil, en geç kayıtta.
2. **FAU Erlangen-Nürnberg** (PDF, https://www.fau.de/wp-content/uploads/sites/4/2025/10/Masterstudiengaenge-Bewerbungsfristen-und-Sprachnachweise.pdf, "Studienjahr 2027"): B2 ile master'a başvurulabilir, "im Falle einer Zulassung kann kurz vor Studienbeginn ein Intensivkurs absolviert werden, der mit der DSH-Prüfung abschließt. Wenn Sie das für den angestrebten Studiengang erforderliche Ergebnis erzielen, ist eine Einschreibung möglich." İstisna: Germanistik (C2/DSH 3 başvuruda), Linguistik, Literaturstudien, Zell- und Molekularbiologie (C1/C2/DSH 2 başvuruda). Bachelor diploması: "spätestens bei der persönlichen Einschreibung". Not: FAU'nun İngilizce master'larında (ör. Artificial Intelligence, Data Science) tabloda "keine DSH, Englisch B2" yazıyor.
3. **LMU** (doğrudan): Almanca belgesi liste maddesi, "Ausnahme: englischsprachige Masterstudiengänge und Double-Degree-Programme"; "Erkundigen Sie sich bitte bei der Fachkoordination... ob... Sonderregelungen". Belgelerin "kann zur Immatrikulation nachgereicht werden" ibaresi programın uygunluk onayı için geçiyor, dil için açık bir "nachreichen" cümlesi yok.
4. **Karşı örnek, TU Berlin** (doğrudan, https://www.tu.berlin/eecs/studium-lehre/studienangebot/faq-bewerbung-zulassung-master): "Ich habe einen ausländischen Bildungsnachweis. Kann ich eine bedingte oder vorläufige Zulassung zum Masterstudium erhalten? Nein." ve "Bis zum Ende der Bewerbungsfrist können Sie Unterlagen nachreichen. Nachdem die Bewerbungsfrist endet, werden ausnahmslos keine Unterlagen mehr entgegengenommen."
5. **Uni Hamburg**: "sınava kayıtlı olup sonucu bekleyen aday dil belgesini kayıta kadar sonradan verebilir, kabul koşullu olur" bilgisi yalnızca arama özetlerinden geldi; sayfa metninde doğrulayamadım. BULUNAMADI (zayıf kanıt), yazma. Doğrulanan: "Prior to commencing their studies, all applicants who completed their first degree at a non-German-language institution must provide proof of sufficient German language skills" (https://www.uni-hamburg.de/en/campuscenter/bewerbung/master/zugangsvoraussetzungen.html).
- Bachelor diploması için ayrı kural (dil ile karıştırılmasın): TU Darmstadt, "Eine Bewerbung ist bereits ohne vorliegendes Bachelorzeugnis möglich. Ihr Bachelorzeugnis können Sie im Fall einer Zulassung für ein Wintersemester bis spätestens 01.09.... nachreichen".
- Vize açısından: Kiel Ausländerbehörde sayfası "Aufenthaltserlaubnis zur bedingten Zulassung zum Studium" diye ayrı bir başlık taşıyor (https://www.kiel.de/de/politik_verwaltung/service/_leistung.php?id=292412265, yalnızca başlık görüldü, içerik okunmadı).

## 6. Bavyera FAU / TU Darmstadt son tarihleri

**Durum: DOĞRULANDI. Ayrıca sayfada COĞRAFİ HATA var: TU Darmstadt Bavyera'da değil, Hessen eyaletinde.** (`docs/dallanma/sartli-kabul.md` satır 51 "Bavyera eyaletindeki FAU/TU Darmstadt" diyor, düzeltilmeli.)

FAU (Bavyera), PDF "Masterstudiengänge Studienjahr 2027":
- Başvuru portalı campo.fau.de, uni-assist yok. Son tarihler program bazlı: örnekler: Artificial Intelligence WiSe 31.5.; Computational Engineering WiSe 15.4. (tabloda dipnot 3: "Interessenten aus Nicht-EU-Ländern wird eine frühzeitige Bewerbung empfohlen"); Data Science 31.5. (WiSe) / 30.11. (SoSe); Computer/Multimedia Engineering, Chinese Studies vb. 15.7.; Recht und Informatik LLM 15.8.; bazı SoSe 15.1. PDF: "Die für das jeweilige Semester gültigen Fristen können sich kurzfristig ändern und werden auf www.master.fau.de veröffentlicht." "Nach Abschluss der Bewerbungsfrist keine Unterlagen mehr eingereicht/ausgetauscht werden können." (https://www.fau.de/studium/international-studierende/bewerbung-und-einschreibung-fuer-internationale/bewerbung-fuer-internationale-fuer-ein-masterstudium/).
- YENİ, sayfaya girmeli: **FAU başvuru harcı**: "Für Bewerberinnen und Bewerber aus Nicht-EU-Staaten erhebt die FAU ab dem Wintersemester 2026/27 eine Gebühr in Höhe von 100 Euro pro Bewerbung. Diese fällt unabhängig vom Ergebnis des Auswahlverfahrens an und kann nicht rückerstattet werden. Pro Person und Bewerbungsphase sind maximal drei Bewerbungen möglich (maximal 300 Euro)." (https://www.fau.de/studium/international-studierende/bewerbung-und-einschreibung-fuer-internationale/gebuehren-fuer-bewerbungen-aus-nicht-eu-staaten/, doğrudan.) "Die Prüfung der Bewerbung beginnt erst nach erfolgreichem Zahlungseingang." Ek ücret indirimi yok ("Gibt es weitere Ausnahmen oder Gebührenermäßigungen? Nein"). Muafiyet grupları (Almanya'da bachelor, AEA vatandaşı vb.) yalnızca arama özetinde, Türk aday için önemsiz.
- FAU eğitim harcı: "Ab dem Sommersemester 2027 werden an der FAU für einige Studiengänge Studiengebühren für Studierende aus Nicht-EU-Staaten erhoben" (aynı master sayfası). Tutar bu sayfada yok, ayrıca teyit gerekir (`04-ogrenci-harci-uni-assist.md` "FAU henüz doğrulanamadı" diyordu: artık kısmen doğrulandı: SoSe 2027'den, "einige Studiengänge", tutar hâlâ BULUNAMADI).
- Not: FAU'nun master genel şartı "Mindestnote 2,5" (PDF madde 1); notu daha kötü olanlar "Auswahlgespräche, Motivationsschreiben o.Ä." ile telafi edilebilir.

TU Darmstadt (Hessen), https://www.tu-darmstadt.de/studieren/studieninteressierte/bewerbung_zulassung_tu/bewerbungsfristen/bachelor_studiengaenge_2/index.de.jsp (URL'de "bachelor" geçse de içerik master; doğrudan):
- Portal: TUCaN ("Alle Bewerber... verwenden das Online-Bewerbungsportal TUCaN", https://www.tu-darmstadt.de/studieren/studieninteressierte/bewerbung_zulassung_tu/bewerbung_master/index.de.jsp). "Die Online-Bewerbung für das Wintersemester 2026/27 wird ab dem 01.06.2026 freigeschaltet."
- Tarihler (WiSe 2026/27 tablosu): Informatik M.Sc. 01.06.26 – 31.08.26 (WiSe/SoSe); IT Security 01.06.26 – 15.07.26* ; Information and Communication Engineering 01.06.26 – 15.07.26; Wirtschaftsinformatik 01.06.26 – 15.07.26*. "* Bewerbungsfrist endet am 15.07.2026; bei diesem Termin handelt es sich um eine Ausschlussfrist." "Für einzelne Master-Studiengänge gibt es vorgezogene Bewerbungsfristen für internationale Bewerber:innen." Fristler için yıl bazlı: WiSe için mayısta, SoSe için önceki kasımda yayımlanıyor.
- Bachelor diploması için: "Ihr Bachelorzeugnis können Sie im Fall einer Zulassung für ein Wintersemester bis spätestens 01.09. des Folgejahres und für ein Sommersemester bis spätestens 01.03. des Folgejahres nachreichen" (aynı sayfa; "Folgejahres" ifadesi sayfada aynen böyle, bir tutarsızlık olabilir: master sayfası başka yerde "innerhalb von 2 Semestern" diyor, kesin bilgi için Fachbereich'e sorulmalı).

## 7. DAAD yaşam maliyeti ve Sozialerhebung

**Durum: DOĞRULANDI. Not: güncel anket "21." değil "22. Sozialerhebung" (DZHW, 2023 verisi).**

- Kaynak: https://www.daad.de/de/in-deutschland-studieren/leben-in-deutschland/finanzen/ (doğrudan; önceki 503 artık açılıyor).
- Birebir: "Je nachdem, wo in Deutschland Sie studieren möchten, benötigen Sie zwischen 900 und 1.200 Euro pro Monat." "Laut der jüngsten Sozialerhebung aus dem Jahr 2023 haben Studierende durchschnittliche Ausgaben von 876 Euro pro Monat. Wer ein Visum zum Studium in Deutschland beantragt, muss hingegen nachweisen, dass ihm monatlich 992 Euro zur Verfügung stehen." Semesterbeitrag: "je nach Hochschule zwischen 70 und 430 Euro pro Semester".
- Alman öğrencilerin ortalama harcama tablosu (DAAD sayfası, "Quelle: Deutsche Zentrum für Hochschul- und Wissenschaftsforschung (DZHW): 22. Sozialerhebung von 2023"): Miete inkl. Nebenkosten 410 Euro; Ernährung 198; Krankenversicherung/Arzt/Medikamente 100; Mobilität 89; Freizeit 65; Kleidung 46; Lernmittel 31; Telefon/Internet 31; Weitere Ausgaben 144. Bu ortalama Alman öğrencilere ait, uluslararası öğrenci ortalaması değil, ayrıca evde yaşayanları da içerir; sayfada da öyle işaretlenmeli.
- Sperrkonto kanıtı DAAD sayfasında "Stand 1.1.2025: 992 Euro pro Monat".
- Deutsches Studierendenwerk sayfaları (studierendenwerke.de) 403 verdi (bot koruması) ve 22. Sozialerhebung ana raporunu ayrıca çekmedim; DAAD'ın DZHW alıntısı yeterli kabul edildi.

## 8. Şehir bazlı kira (München / Berlin / Frankfurt / Kiel)

**Durum: München, Berlin, Frankfurt DOĞRULANDI (ikincil kurum verisi, WG odası); Kiel BULUNAMADI.**

- Kaynak: Moses Mendelssohn Institut (MMI) + WG-Gesucht.de, basın açıklaması "Studentische Wohnkosten Wintersemester 2026/27", 19.09.2026 (https://www.moses-mendelssohn-institut.de/aktuelles/WiSe2026, doğrudan). **İkincil kaynak işaretli**: araştırma kuruluşu, serbest piyasadaki WG-Gesucht ilanlarından (asking rent, sıcak kira), resmi istatistik değil.
- Birebir: "Die Wohnkosten für Studierende bleiben zum Wintersemester 2026/27 bundesweit mit rund 510 € weitgehend stabil." Tablo 2 (Median): München 850 €, Berlin 650 €, Hamburg 650 €, Köln 640 €. "Berlin und Hamburg liegen bei jeweils 650 €, Köln bei 640 € und Frankfurt am Main bei 630 €." Birinci çeyreklik (ucuz uç): "in München und Frankfurt am Main mit jeweils 550 €, ... in Berlin 530 €". 89-90 üniversite şehri incelendi.
- Önceki dönem (SoSe 2026, 23.03.2026, https://www.moses-mendelssohn-institut.de/aktuelles/SoSe2026): München 800 €, Berlin 650 €; ülke ortalaması 512 €. BAföG konut pauşalı: "liegt aktuell bei 380€".
- Kiel: MMI basın açıklamalarında Kiel rakamı yok (şehir bazlı detay "auf Anfrage"). Kiel için kullanılabilir resmi rakam bulunamadı. Yakın referans: Studierendenwerk SH Kiel yurtlarında kira (madde 9). Sayfaya Kiel için sayı yazmayın; "MMI/WG-Gesucht Kiel WG-Preise sorgulanabilir" denebilir.
- Eyalet ortalamaları (SoSe 2026 açıklaması): Bayern 605 €, Hamburg ve Berlin 650 €, Sachsen-Anhalt 358 €. Schleswig-Holstein için değer okunamadı.
- Bütçe için zaman damgası: "WiSe 2026/27, MMI/WG-Gesucht, ikincil kaynak".

## 9. Yurt bekleme süreleri (Studierendenwerk)

**Durum: München DOĞRULANDI; Kiel KISMEN (sayısal süre yok); Berlin KISMEN.**

- **München** (resmi PDF, "Wartezeit und Miete, Stand: September 2026", https://www.studierendenwerk-muenchen-oberbayern.de/fileadmin/studierendenwerk-muenchen-oberbayern/bereiche/wohnen/wohnheime/00_dateien/Wartezeiten_Mietpreisliste_deutsch.pdf, PDF): yurt başına farklı. Örnekler: Agnes-/Adelheidstraße Einzelzimmer in WG 400,80 - 419,00 € Warmmiete, 5 Semester; Biedersteiner Straße Einzelzimmer in WG 350,00 - 465,10 €, 4 Semester; Chiemgaustraße Einzelzimmer 4er/5er/6er WG 334,80 - 444,40 €, 1 - 2 Semester; Garching I Einzelzimmer in WG 385,90 - 403,90 €, 3 Semester; Felsennelkenanger 378,10 - 390,30 €, 1 - 2 Semester. Yani "1 ile 6 semester arası". Kural (https://www.studierendenwerk-muenchen-oberbayern.de/wohnheime/bewerbung/bewerbungsprozess/): "Sie befinden sich ab dem Tag Ihrer Bewerbung auf der Warteliste... nach Bewerbungsdatum sortiert." "Die angegebenen Wartezeiten dienen als Orientierungshilfe. Es handelt sich dabei um Erfahrungswerte." Her dönem güncel Immatrikulationsbescheinigung (IB) yüklenmeli (WiSe 1 Kasım, SoSe 1 Mayıs stichtag). Arama özeti: Erstsemester için WiSe'de ayrı kura ("Kontingentvergabe"), sayfada kontrol edilmedi.
- **Kiel** (Studentenwerk Schleswig-Holstein, https://studentenwerk.sh/de/faq-wohnen, doğrudan): sabit bekleme süresi VERMİYOR, kura sistemi: "Bewirb dich für das folgende Wintersemester bis zum 15. Juli, für das folgende Sommersemester bis zum 15. Januar. Dies sind keine Ausschlussfristen." "Im Sommersemester sind die Chancen größer als im Wintersemester... Erfahrungsgemäß können wir im Winter nicht allen Studierenden ein Zimmer anbieten." "Wenn ich trotz Warteliste keinen Platz bekomme und mich für das nächste Semester wieder bewerbe... Es greift wieder das allgemeine Losverfahren." Yani Kiel'de "bekleme süresi" birikmiyor, her dönem yeniden kura. Oda ilanı: "Frühestens sechs Wochen vor dem 1. März oder dem 1. September – danach laufend". Kiel'de 10 yurt, "1.964 Studierenden" (https://studentenwerk.sh/de/wohnheime-kiel). Kira örnekleri (Niemannsweg yurdu): 211-232 € (ortak banyo/mutfak), 229-244 € (banyolu Einzelzimmer), 366 € (çift/aile dairesi).
- **Berlin** (studierendenWERK BERLIN, https://www.stw.berlin/wohnen/, doğrudan): süre kategorileri filtrede: "Wartezeit 6 Monate / 7 - 18 Monate / über 18 Monate / über 24 Monate". FAQ: aile daireleri için "verlängert sich die Wartezeit auf mehr als drei Semester". "Solange du keinen Mietvertrag hast, erhältst du alle 30 Tage eine Mail mit der Frage, ob du weiterhin Interesse an einem Wohnplatz hast." Başvuru: "Du kannst dich jederzeit über das Wohnheimportal online bewerben", kabul/Immatrikulationsbescheinigung ve Semesterbeitrag makbuzu gerekli. Normal oda için "en az 2 semester" cümlesi yalnızca arama özetindeydi, sayfada bulunamadı: yazmayın. Yurt bazında süre için stw.berlin/wohnen filtresi kullanılır.

## 10. Kiel Ausländerbehörde: belge listesi ve harç

**Durum: Harç DOĞRULANDI (yasa + Kiel şehir sayfası). Belge listesi KISMEN (genel liste doğrulandı, randevu davetiyesinde kişiye özel tam liste bildiriliyor).**

- Harç, Kiel şehir sayfası https://www.kiel.de/de/politik_verwaltung/service/_leistung.php?id=265566681 (doğrudan): "Gebühr: 100 € ... Gebühr: 50 € Diese Gebühr gilt, wenn Sie minderjährig sind." "Antragsfrist: 8 Wochen ... spätestens 8 Wochen vor Ablauf Ihres noch gültigen Visums". "Geltungsdauer: 1 bis 2 Jahre ... mindestens ein Jahr und in der Regel für maximal 2 Jahre". Dayanak: § 16b AufenthG. "Sie dürfen ... eine Beschäftigung bis zu 140 Tage im Jahr oder eine studentische Nebentätigkeit ausüben."
- Yasa, § 45 AufenthV (https://www.gesetze-im-internet.de/aufenthv/__45.html): ilk verme, geçerlilik ≤1 yıl veya >1 yıl: "100 Euro"; uzatma: "bis zu drei Monaten 96 Euro", "mehr als drei Monaten 93 Euro"; amaç değişikliği "98 Euro".
- **Türk vatandaşları için indirim olasılığı**, § 52a AufenthV (https://www.gesetze-im-internet.de/aufenthv/__52a.html): "Assoziationsberechtigte" için "eine Gebühr in Höhe der für die Ausstellung von Personalausweisen an Deutsche erhobenen Gebühr"; 24 yaşından küçüklerde o yaşa ait ücret. Personalausweis ücreti: § 1 PAuswGebV (https://www.gesetze-im-internet.de/pauswgebv/__1.html): "27,60 Euro" (24 yaş altı) veya "46 Euro" (diğerleri) (sayfa metni). Uygulama şartı ("Assoziationsberechtigte" = AB-Türkiye Ortaklık Hukuku kapsamında olanlar) her Türk öğrenci için otomatik değil: Ausländerbehörde'ye sorulmalı. Bu nokta yeni, önceki sayfada yok.
- Belge listesi, CAU International Center (https://www.international.uni-kiel.de/en/incomings/planning-arrival-and-stay/residence-permit/what-documents-do-i-need-to-apply-for-a-residence-permit, doğrudan): "Confirmation of registration (Meldeschein)...; Residence permit application form (Download via Immigration Office); Proof of private or statutory health insurance; Student card of the university and/or admission letter; Proof of financing; Valid passport; Money for fees". "However, your responsible immigration office will inform you - with the appointment invitation letter - what you need to bring along in your case." Kaynak Kiel şehir sayfasında ayrı liste yok, sadece ilgili bilgi ("An wen kann ich mich wenden?").
- Randevu: "make an appointment at the Kiel Immigration Office by sending an email to zuwanderung@kiel.de", e-postada soyad, ad, doğum tarihi ve randevu nedeni; davet adrese gelir ("make sure your name is on the mailbox"). Kiel Ausländerbehörde: Neues Rathaus, Block D, Stresemannplatz 5 (arama özeti; CAU sayfası). Şehir sayfasında online hizmet de var ("Online Services Immigration Office/ Zuwanderung").

## 11. N26 Türk pasaportlu belge listesi

**Durum: DOĞRULANDI.**

- Kaynak: N26 resmi PDF "List of accepted ID documents for customers living in Germany, Date: May 2026" (https://docs.n26.com/cs/Support%20Center/id-docs/de/iddocs-de-en.pdf, PDF).
- Türkiye satırı: "TUR Turkey ✓ No ✓" yani **Passport: kabul, ID Card: kabul edilmiyor, Residence Permit: kabul (yıldızlı = "Video verification only")**.
- Oturum izni koşulları (aynı PDF): "These must also be issued in Germany to European specifications, and valid for a minimum duration of at least ONE year." "Since Nov 2021, we can no longer accept the Sticker version added to passports. If you only have this version of Resident permit, you will need to have it exchanged for a card." "Starting from December 2024, if your Resident Permit includes the word 'PASS (ERSATZ)' you will no longer need to show your passport in addition to the permit. However, this change does not apply to nationals of Belarus and Russia."
- Yani: Türk pasaportuyla hesap açılabilir; ID card (Türk kimlik kartı) kabul değil; oturum izni kartı (en az 1 yıl geçerli, kart formatında) video doğrulamayla kabul.
- Hesap açma şartları (https://support.n26.com/en-eu/account-and-personal-details/opening-an-account/how-to-open-my-n26-account, doğrudan): 18 yaş, desteklenen ülkede ikamet, uyumlu akıllı telefon, desteklenen kimlik; doğrulama dilleri "English, German, Spanish, Italian, or French". N26 "Nachweis der Meldebescheinigung" istiyor demek için kanıt yok, bu bilgi bulunamadı.

## 12. Ebeveyn geliri kanıtının bağımsız yol olarak kabulü

**Durum: ÇELİŞKİLİ.**

- Yasa, § 2 Abs. 3 AufenthG (https://www.gesetze-im-internet.de/aufenthg_2004/__2.html): "Der Lebensunterhalt eines Ausländers ist gesichert, wenn er ihn einschließlich ausreichenden Krankenversicherungsschutzes ohne Inanspruchnahme öffentlicher Mittel bestreiten kann." Öğrenciler için: "Der Lebensunterhalt gilt für die Erteilung einer Aufenthaltserlaubnis nach den §§ 16a bis 16c, 16e sowie 16f ... als gesichert, wenn der Ausländer über monatliche Mittel in Höhe des monatlichen Bedarfs, der nach den §§ 13 und 13a Abs. 1 des Bundesausbildungsförderungsgesetzes bestimmt wird, verfügt". § 17 (Studienbewerber) için aynı tutara "10 Prozent" ek: 992 x 1,1 = yaklaşık 1.091 EUR (arama özetinde "Studienbewerber 1.091" olarak geçti; bu benim hesabım, resmi sayfada okumadım). Yasa "monatliche Mittel" diyor, kaynağı (Sperrkonto, ebeveyn vb.) sınırlamıyor.
- Auswärtiges Amt, genel SSS (https://www.auswaertiges-amt.de/de/service/fragenkatalog-node/08-finanzierung-606220, doğrudan): "Die Finanzierung kann in der Regel durch Darlegung der Einkommens- und Vermögensverhältnisse der Eltern, eine Verpflichtungserklärung nach § 66-68 Aufenthaltsgesetz einer Person, die über ausreichendes Vermögen bzw. Einkommen verfügt, die Einzahlung einer Sicherheitsleistung auf ein Sperrkonto in Deutschland oder die Hinterlegung einer jährlich zu erneuernden Bankbürgschaft ... geführt werden." Yani **ebeveyn gelir/varlık beyanı AA'nın genel SSS'inde ilk sırada, bağımsız yol olarak sayılıyor.**
- Ama Türkiye misyonu farklı diyor: "Merkblatt für türkische Studienbewerber" (https://tuerkei.diplo.de/resource/blob/2730506/be9f0c7a618fa31b5375408134f3665d/merkblatt-studium-dt-data.pdf, PDF): "Für den Lebensunterhalt (inkl. Miete) müssen Sie monatlich mit mindestens ca. 992 € (ab 1.7.2024) rechnen... Dies geschieht normalerweise in Form einer in Deutschland abgegebenen Verpflichtungserklärung nach §§ 66-68 AufenthG durch einen dort ansässigen Bürgen... Oder durch den Nachweis über die Einrichtung eines Sperrkontos in Deutschland. Hierbei ist der jährliche BaföG-Förderungshöchstsatz von 11.904 € einzuzahlen". Ebeveyn gelirine hiç yer vermiyor. Ankara/İstanbul "Bildungsaufenthalte" sayfası (https://tuerkei.diplo.de/tr-de/service/05-visaeinreise/2725836-2725836): "Der Lebensunterhalt kann im Visumverfahren für Bildungsaufenthalte durch die Einrichtung eines Sperrkontos oder durch Vorlage einer deutschen Verpflichtungserklärung nachgewiesen werden. Hinsichtlich des Anbieters für die Einrichtung des Sperrkontos haben Sie freie Wahl."
- Not: aynı sitedeki eski Merkblatt (https://tuerkei.diplo.de/resource/blob/1785784/11d840dafe2e9f84870c8d828aaa1132/merkblatt-deu-data.pdf) hâlâ "853,- €" ve "10.236,- €" (2019 rakamı) gösteriyor; güncel olan yeni PDF (992 / 11.904). Eski PDF'e link verme.
- Sonuç: yasa kaynağı sınırlamıyor, AA genel sayfası ebeveyn gelirini sayıyor, Türkiye misyonunun kendi güncel yönergesi yalnızca Verpflichtungserklärung ve Sperrkonto'yu anıyor. Ebeveyn geliriyle vize almanın Türkiye'de fiilen kabul edilip edilmediği resmi kaynaktan doğrulanamadı. Ayrıca "Unterhaltsverpflichtung/Elterliche Einkommen" başlığıyla AA'da ayrı bir sayfa bulamadım. Öneri: sayfada "Türkiye misyonu yalnızca Sperrkonto veya Verpflichtungserklärung'u öngörüyor; ebeveyn geliri kanıtı başka ülkelerdeki AA sayfalarında listeli ama Türkiye için resmi teyit yok, randevu öncesi misyona yazılı sor" denmeli.

## 13. CV ve motivasyon mektubu standartları

**Durum: DOĞRULANDI: tek bir resmi standart YOK, kurumlar farklı söylüyor. Bu da bulgu.**

- DAAD burs başvurusu (üniversite kabulü değil), https://www.daad.de/de/im-ausland-studieren-forschen-lehren/stipendien-finanzierung/bewerbung/ (doğrudan): "In ersterem können Sie auf maximal zwei DIN-A4-Seiten Ihre Gründe für die Bewerbung darlegen." Studienplan "maximal fünf Seiten".
- DAAD "Wichtige Hinweise" (https://www.daad.de/de/in-deutschland-studieren/stipendien/hinweise-daad-stipendien/, doğrudan): "Mit dem Motivationsschreiben legen Sie auf mindestens einer und maximal 3 Seiten Ihre fachlichen und persönlichen Motive ... dar." Yani DAAD'ın kendi iki sayfası bile birbirini tutmuyor (2 sayfa / 1-3 sayfa). DAAD Afrika birimi rehberi (https://www2.daad.de/medien/deutschland/stipendien/formulare/advice-for-motivation-letter.pdf, PDF): "your letter of motivation should comprise not more than one page"; "Do not start your letter of motivation by repeating your CV", üslup: "Avoid all kind of platitudes, flowery phrases and flattery."
- DAAD CV (https://www2.daad.de/medien/ausland/dokumente/checkliste_bewerbungsunterlagen.pdf, PDF): "Lebenslauf: computergeschrieben, lückenlos, tabellarisch; Studiengang angeben, persönliche Eignung und außerfachliches Engagement erwähnen!" Sayfa sınırı bu PDF'te yok ("en fazla 3 sayfa" yalnızca arama özetiydi, yazma).
- Üniversite düzeyi, hedef Kiel: CAU Kiel'in genel master belge listesinde motivasyon mektubu **yalnız belirli programlar için** zorunlu, örneğin "Internationale Politik und Internationales Recht / Master 1-Fach": "Motivationsschreiben in Schriftgröße 12 pt mit Seitenrand links und rechts 3 cm ... Das Motivationsschreiben darf eine Seite nicht überschreiten." (https://www.studium.uni-kiel.de/de/bewerbung-einschreibung/bewerbung/bewerbungsunterlagen/bewerbungsunterlagen-master, doğrudan). Bu sayfada Informatik için motivasyon mektubu maddesi görülmedi. Kiel'in genel listesinde CV geçmiyor.
- LMU: "Aktueller Lebenslauf (siehe Vorlage (PDF, 57 KB))", yani LMU şablon veriyor (aynı LMU Leitfaden sayfası).
- FAU: "Bei einer Abschlussnote >2,5 kann im Einzelfall die Note durch Auswahlgespräche, Motivationsschreiben o.Ä. ausgeglichen werden." (FAU PDF madde 1).
- Sonuç: CV ve motivasyon mektubunun biçimi/uzunluğu programa göre değişir; ilk kaynak programın Bewerbungsunterlagen sayfası. Genel ilke olarak yalnızca DAAD tavsiyesi resmi ve burs bağlamlı: tabellarisch, lückenlos, CV'yi tekrar etmeyen, dolgu cümlesiz, 1-2 sayfa (DAAD kaynakları arasında 1, 2, 3 sayfa var).

---

## Diğer düzeltmeler ve yan bulgular (sayfa yazarı için)

1. `docs/dallanma/sartli-kabul.md` satır 51: "Bavyera eyaletindeki FAU/TU Darmstadt" yanlış. FAU Bavyera, TU Darmstadt Hessen.
2. `04-ogrenci-harci-uni-assist.md`: uni-assist Asya/K.Amerika süresi 2-3 hafta (6-7 değil); "HU kendi ELSA portalı" bilgisi yanlış (HU yurtdışı diplomalılar için uni-assist).
3. FAU 100 EUR başvuru ücreti WS 2026/27'den itibaren (bütçe/Adım 12 ve uni-assist mi doğrudan mı sayfasında "uni-assist yoksa ücretsiz" sanılmasın).
4. Kiel Aufenthaltserlaubnis ilk verme harcı 100 EUR (§ 45 AufenthV + Kiel sayfası), Türkler için § 52a indirimi olasılığı.
5. Ankara Merkblatt 992 EUR / 11.904 EUR (1.7.2024 tarihli, "Stand" belirsiz), eski PDF'te 853 EUR / 10.236 EUR.

---

## Sayfaya yazılabilecek özet

**Ödeme (uni-assist).** uni-assist ücretini Visa veya Mastercard kartla (3D Secure'a kayıtlı olmalı) ya da banka havalesiyle ödersin. Havalede sana kişisel bir IBAN veriliyor; yalnızca bu IBAN'a gönderirsin. "Online-Überweisung" (internet bankacılığıyla anında ödeme) sadece Almanya, Avusturya, Fransa, İspanya, İtalya, Finlandiya, İsveç ve İngiltere'deki hesaplarla çalışıyor, Türkiye'den kullanamazsın. Uluslararası havale iki haftaya kadar sürebilir; bankana "OUR" seçeneğini iste ki ücretin tamamı uni-assist'e ulaşsın. Bazı bankalar belirli ülkelerin kartlarını güvenlik nedeniyle reddedebiliyor; uni-assist Türkiye için garanti vermiyor, bu yüzden bankana önceden sor. Almanya'da hesabı olan biri de senin IBAN'ına yatırabilir.

**Hangi üniversite uni-assist kullanıyor?** uni-assist yaklaşık 160 üniversite adına yabancı diplomaları ön inceliyor. Listeyi uni-assist.de'deki "uni-assist universities" sayfasından eyalet, şehir veya üniversite adına göre kontrol edersin. Kiel (CAU), HU Berlin, FU Berlin, TU Berlin, TUM listede; LMU, FAU Erlangen ve TU Darmstadt yok, kendi portalları var. Hangi programın uni-assist ile alındığına yine üniversite karar veriyor.

**Bekleme süresi.** uni-assist genelde 4-6 hafta içinde değerlendirme sonucunu veriyor; güncel tabloda Türkiye (belgelerin çıktığı bölge) için 2-3 hafta yazıyor, "bazı durumlarda daha uzun" ekiyle. Üstüne üniversitenin kendi kararı geliyor (örneğin TU Darmstadt kendi sitesinde yaklaşık 6-8 hafta diyor). Toplam için resmi bir rakam yok; uni-assist son tarihten en az 8 hafta önce başvurmanı öneriyor.

**HU Berlin ve LMU.** HU Berlin'de yurtdışı diplomayla master başvurusu uni-assist üzerinden yapılıyor (Almanya'da bachelor bitirenler kendi portallarını kullanıyor). LMU uni-assist kullanmıyor: hem programa hem International Office'e ayrı ayrı başvuruyorsun; bazı programlar için MoveIN adlı çevrimiçi başvuru formu var (2026'da 15 Mayıs - 15 Temmuz), diğerleri için evrak posta ile gidiyor. Tarihleri her yıl üniversitenin sayfasından kontrol et.

**Dil belgesi eksikse.** Kural üniversiteye ve programa göre değişiyor. Kiel'de dil belgesi en geç kayıtta (Einschreibung) gösteriliyor. FAU'da B2 ile başvurabiliyorsun, kabul gelirse dönem başlamadan yoğun Almanca kursu ve DSH sınavı yapılıyor; ama bazı programlarda (Germanistik gibi) C1/C2 başvuruda şart. TU Berlin ise yabancı diplomalı adaylara "bedingte Zulassung" (şartlı kabul) vermediğini açıkça yazıyor: belgeler son tarihe kadar tamam olmalı. İngilizce programlarda genellikle Almanca aranmıyor, İngilizce belgesi aranıyor. Sonuç: programın kendi sayfasına bak, emin olmak için üniversiteye yaz.

**FAU ve TU Darmstadt.** İkisi de uni-assist kullanmıyor. FAU (Bavyera) programa göre değişen tarihler koyuyor (31 Mayıs, 15 Temmuz, bazılarında 15 Nisan) ve Türkiye gibi AB dışı ülkelerden her başvuru için 100 EUR başvuru ücreti alıyor (WS 2026/27'den itibaren, en fazla 3 başvuru). TU Darmstadt (Hessen) TUCaN portalını kullanıyor; başvuru 1 Haziran'da açılıyor, kimi programlar 15 Temmuz (kesin son tarih, "Ausschlussfrist"), Informatik gibi bazıları 31 Ağustos'a kadar; bazı programlarda yabancı adaylar için daha erken tarih var.

**Yaşam maliyeti ve kira.** DAAD, yaşam için ayda 900-1.200 EUR öngörüyor; vize için ise 992 EUR/ay kanıtlaman gerekiyor. Alman öğrencilerin ortalama harcaması ayda 876 EUR (kira ve yan giderler dahil ortalama 410 EUR; 22. Sozialerhebung, 2023 verisi). Serbest piyasada WG odası (WG = ortak daire): München yaklaşık 850, Berlin 650, Frankfurt 630 EUR (Moses Mendelssohn Enstitüsü + WG-Gesucht, WiSe 2026/27, ikincil kaynak, ilan fiyatı ortancası). Kiel için güvenilir bir rakam bulamadık; Kiel yurtlarında oda başına kira aylık yaklaşık 211-244 EUR (Studierendenwerk SH).

**Yurt bekleme süreleri.** München'de Studierendenwerk kendi PDF'inde yurt yurt "yaklaşık" bekleme süresi veriyor: 1-2 semesterden 5-6 semestere kadar (Eylül 2026). Kiel'de bekleme listesi birikmiyor, her dönem yeni bir kura çekiliyor; yaz döneminde (SoSe) şans daha yüksek, kış döneminde herkese yer çıkmıyor; başvuru için hedef tarihler 15 Temmuz (kış) ve 15 Ocak (yaz), ama bunlar son tarih değil. Berlin'de yurt başına süre değişiyor (6 ay, 7-18 ay, 18 ay üstü gibi kategoriler); başvurduktan sonra her 30 günde gelen e-postaya yanıt vermezsen sıradan düşersin.

**Kiel Ausländerbehörde ve harç.** Öğrenci oturum izni (Aufenthaltserlaubnis zum Studium) ilk kez 100 EUR, uzatma 93-96 EUR (yasa: § 45 AufenthV; Kiel şehri de 100 EUR yazıyor). Türk vatandaşları için AB-Türkiye Ortaklık Hukuku kapsamında indirim olabiliyor (yasa metni: kimlik kartı ücreti düzeyi); hak edip etmediğini Ausländerbehörde'ye sor. Randevu için zuwanderung@kiel.de adresine ad, soyad, doğum tarihi ve nedeni yazıyorsun. Genel belge listesi: Meldeschein (Anmeldung belgesi), başvuru formu, sağlık sigortası, öğrenci belgesi veya kabul mektubu, finans kanıtı, geçerli pasaport ve harç için ödeme aracı; kesin liste randevu davetiyesinde geliyor.

**N26.** Türk pasaportu N26'nın kabul ettiği kimlik belgesi; Türk kimlik kartı kabul edilmiyor. Oturum izni kartı da (en az 1 yıl geçerli, kart formatında, pasaba yapıştırılan etiket değil) video doğrulamayla kabul.

**Ebeveyn geliri.** Yasa, geçim için "aylık yeterli kaynak" istiyor, kaynağı kısıtlamıyor. Auswärtiges Amt'ın genel sayfası ebeveynin gelir ve varlık durumunu, Verpflichtungserklärung'u (Almanya'daki birinin geçim taahhüdü), Sperrkonto'yu ve banka teminatını eşit yollar olarak sayıyor. Ama Türkiye'deki alman temsilciliklerinin güncel Merkblatt'ı yalnızca Verpflichtungserklärung ve Sperrkonto'yu anıyor. Ebeveyn gelirinin Türkiye'de tek başına yeterli sayılıp sayılmadığı resmi kaynaktan doğrulanamadı: Randevudan önce misyondan yazılı teyit al, garanti olarak Sperrkonto'yu hesaba kat.

**CV ve motivasyon mektubu.** Tek bir resmi standart yok. Almanya'da CV tablo biçiminde ve boşluksuz olur ("tabellarischer Lebenslauf"). DAAD burs başvurularında motivasyon mektubu için farklı sayfalar 1, 2 veya 3 sayfa sınırı veriyor; DAAD'ın tavsiyesi: CV'yi tekrarlama, süslü cümle ve iltifattan kaçın, hedefini ve programı neden seçtiğini somut anlat. Üniversite programları için kural programa göre değişir: Kiel'de bazı programlar 1 sayfa/12 punto ister, bazıları hiç istemez; LMU CV şablonu veriyor. Başvurduğun programın "Bewerbungsunterlagen" sayfasına bak.
