# Ham araştırma (v2-07): Kabul WiSe'ye yetişmezse SoSe / sonraki WiSe — erteleme, yeniden başvuru, vize takvimi

Agent raporu, erişim tarihi hepsi için **24.09.2026**. Sadece araştırma; `docs/` altında hiçbir dosya değiştirilmedi.
Kullanıcı sorusu: "Kabulüm WiSe'ye yetişmezse SoSe ve sonraki WiSe için geçerli, bu durumda başvuru aşamaları nasıl oluyor?"

Doğrulama yöntemi kısaltmaları: **D** = doğrudan (curl/WebFetch ile sayfa metni), **PDF** = resmi PDF metni (pypdf ile çıkarıldı), **WS** = sadece WebSearch özeti (birebir teyit yok, düşük güven), **PW** = Playwright denendi.
Durumlar: DOĞRULANDI / ÇELİŞKİLİ / BULUNAMADI.

## 0. Kısa sonuç (önce bunu oku)

1. **"Zulassung (kabul) birkaç dönem geçerli" diye genel bir kural YOK.** Kabul mektubunun geçerliliği üniversiteye ve programa göre değişiyor. Bulunan resmî örneklerde üç model var:
   - **Model A — kabul sadece o dönem için, süre kaçırılırsa geçersiz** (Stuttgart, Potsdam, Bayreuth/TUM'da "reddet + yeniden başvur" biçiminde).
   - **Model B — kabul, onay/talep ile sonraki dönemlere kaydırılabilir** (Kiel WiSo Economics master: "sonraki iki döneme" erteleme; Potsdam: bazı zulassungsfrei masterlarda WiSe kabulü ertesi SoSe için de geçerli).
   - **Model C — vize gerektirenlere baştan bir sonraki dönem için kabul yazılıyor** (Göttingen Philosophische Fakultät masterları).
2. **CAU Kiel Informatik M.Sc. için kabul geçerlilik/erteleme kuralı resmi sitede BULUNAMADI.** Kiel'in yalnızca WiSo Economics master SSS'i erteleme (2 dönem) diyor; Informatik sayfası bunu söylemiyor. Genelleme yapılamaz → Kiel International Center'a (`apply-international@uv.uni-kiel.de`, Kiel'in kendi PDF'inde verilmiş) yazılı sorulmalı.
3. **Vize açısından asıl risk**: randevu bekleme süresi (AA'nın Türkiye sayfası: Studium için 1–4 ay, misyona göre) + Zulassung'un dönem/Immatrikulation süresi. Kabul mektubu olmadan Studium vizesi başvurusu yapılamıyor (Merkblatt kontrol listesinde "Nachweis über die Zulassung").
4. **SoSe için tipik son tarih 15 Ocak** (Kiel non-EU, Stuttgart, uni-assist genel not, FAU) ama TUM Informatik (1 Ekim–30 Kasım) ve Göttingen (1 Ekim–1 Aralık) çok daha erken — tarihler üniversite/program bazlı.
5. **Vize bekleyip SoSe'ye sarkma durumunda** IELTS "2 yıl önerilir" (kurum daha uzun kabul edebilir), VPD 1 yıl geçerli, Sperrkonto uzatılabiliyor (sağlayıcı sayfaları, düşük güven), sağlık sigortası tarihleri yeniden yapılmalı.

---

## (a) Zulassung geçerliliği, Immatrikulationsfrist, erteleme/yeniden başvuru

### a1. Genel prensip: Immatrikulationsfrist Zulassungsbescheid'de yazar

- **Stuttgart** (D): "Geht der Antrag auf Einschreibung nicht innerhalb der genannten Frist ein, wird der Zulassungsbescheid unwirksam. Der Studienplatz wird dann an eine nachrangige Bewerberin oder einen nachrangigen Bewerber vergeben. Können Sie aus einem wichtigen Grund die Frist nicht einhalten, informieren Sie bitte die Abteilung Bewerbung, Zulassung, Einschreibung, die Ihnen in begründeten Ausnahmefällen eine Fristverlängerung einräumen kann – allerdings nicht über den Vorlesungsbeginn hinaus. Auch in Masterstudiengängen enden die Einschreibefristen wie im Zulassungsbescheid mitgeteilt. In den meisten Fällen ist dies der 15. Mai zum Sommersemester und der 15. November zum Wintersemester."
  Kaynak: https://www.student.uni-stuttgart.de/studienbeginn/einschreibung/ — yöntem D — **DOĞRULANDI**. (Not: sayfada yıl belirtilmiyor, güncel yıl içeriği.)
- **TU Berlin** (D): "Dem Zulassungsbescheid können Sie die Immatrikulationsfrist entnehmen." (Zulassung sonraki dönemlere geçerli mi? sayfa bir şey söylemiyor.) Kaynak: https://www.tu.berlin/studierendensekretariat/bewerbung-einschreibung-master/immatrikulation/immatrikulation-bei-zulassungsfreien-masterstudiengaengen — **DOĞRULANDI (frist mektupta), geçerlilik konusu BULUNAMADI**.
- **TUM** (D): SoSe 2027 için Einschreibung "until 14.05.2027", WiSe 2026/27 için "until 13.11.2026" (Akademik takvim sayfası). Kaynak: https://www.tum.de/en/studies/application/application-info-portal/dates-periods-and-deadlines/ — **DOĞRULANDI**.
- **FU Berlin** (D): "Die Frist zur Annahme des Studienplatzes und zur Immatrikulation entnehmen Sie bitte dem Zulassungsbescheid." (WiSe 2026/27 Master listesinde; SoSe 2027 için henüz yayınlanmamış.) Kaynak: https://www.fu-berlin.de/studium/bewerbung/bewerbungsfristen/index.html — **DOĞRULANDI**.
- **Hildesheim** (WS özeti, birebir teyit yok): "Zulassung ... Ihr Platz ... bis zum Ende der Einschreibefrist reserviert"; belgeler zamanında ulaşmazsa Zulassung iptal. Resmî Merkblatt PDF'i indirildi (`Merkblatt_Master.pdf`) ama içinde vize/erteleme geçen bölüm ayıklanmadı → **BULUNAMADI (Hildesheim için erteleme kuralı)**.

### a2. Model A — Zulassung o dönem için, kaçırılırsa geçersiz; yeniden başvuru

- **Potsdam** (D): "Wenn Sie sich entscheiden, sich nicht für das Semester einzuschreiben, für welches die Zulassung gilt, verfällt die Zulassung und Sie müssen sich zum nächstmöglichen Termin erneut bewerben. Wenn Sie eine Zulassung erhalten und sich nicht einschreiben, hat das keine negativen Auswirkungen auf Ihre zukünftigen Bewerbungen. Jedoch kann eine erneute Zulassung im nächsten Zulassungsverfahren nicht garantiert werden." Ayrıca: "Da wir als Universität keinen Einfluss auf die Erteilung von Visa und die Arbeit der Botschaft haben, können wir Ihnen keine Empfehlungen dazu geben." ve "...kann nicht verschoben werden" ifadesi aynı sayfada geçiyor (cümle başı kesildi, bkz. sayfa).
  Kaynak: https://www.uni-potsdam.de/de/studium/konkret/anfaenger/anreise-nach-semesterbeginn-ratgeber — D — **DOĞRULANDI**.
  **İstisna (aynı sayfa)**: "Einige Masterzulassungen sind für zwei Semester gültig: Wenn Sie sich für einen zulassungsfreien Masterstudiengang (kein NC) im 1. Fachsemester zum Wintersemester erfolgreich bewerben, für den auch eine Immatrikulation im darauffolgenden Sommersemester in das 1. Fachsemester möglich ist, erhalten Sie eine Zulassung sowohl für das Winter- als auch das darauffolgende Sommersemester." — **DOĞRULANDI** (yalnız Potsdam, yalnız NC'siz + hem WiSe hem SoSe başlangıcı olan programlar; Zulassungsbescheid'e bakılmalı).
- **Bayreuth** (D), "Rückstellung eines Studienplatzes oder späterer Antritt des Studiums": adımlar: (1) CAMPUSonline'da "Studienplatzangebot ablehnen" — "Ihre Zulassung zum Studium bleibt dabei erhalten"; (2) "Bewerben Sie sich erneut ... innerhalb der regulären Bewerbungsfristen neu über Ihren bestehenden CAMPUSonline-Account. Laden Sie dabei alle Bewerbungsunterlagen erneut hoch. Die Zulassung bleibt in der Regel erhalten, solange sich keine maßgeblichen Änderungen an den Entscheidungskriterien für die Zulassung zum Studium ergeben haben."
  Kaynak: https://www.studierendenkanzlei.uni-bayreuth.de/de/studieninteressierte/internationale-bewerbende/degree-students/Rueckstellung_Studienplatz/index.html — D — **DOĞRULANDI**.
- **TUM** (D), "Deferring Admission": "Decline your place in the degree program in your TUMonline account ... Declining a place in a degree program does not revoke the admission. Re-apply for the semester you want to commence your studies in during the relevant application period ... You need to re-submit a complete set of documents with your new application. Given that the criteria for admission ... have not changed substantially, you will then be admitted directly without having to re-submit to aptitude assessment. Usually, admission remains valid for all subsequent applications."
  Kaynak: https://www.tum.de/en/studies/application/enrollment-info-portal/deferring-admission — D — **DOĞRULANDI**. (Yani TUM'da "erteleme" = reddet + yeni dönemde tekrar başvur + tüm belgeleri yeniden yükle; ama yeterlilik testi tekrarlanmıyor.)
- **Uni Wien** (Avusturya, Almanya değil, sadece karşılaştırma): "Ihr Zulassungsbescheid ist zwei Semester gültig, wenn sich das Curriculum nicht ändert ..." — https://studieren.univie.ac.at/zulassung/masterstudien/extern-mit-deutsch/ — D — DOĞRULANDI ama **Almanya için kanıt değil**, rehberde kullanılmamalı.

### a3. Model B — talep üzerine ertelenebilir

- **CAU Kiel, WiSo Economics-ailesi masterlar** (Economics, Quantitative Finance, Quantitative Economics, Environmental and Resource Economics), D: "Do I have to enrol for the semester for which I have been admitted? No, upon request to the International Centre, it is possible to defer the start of your studies to either of the following two semesters, provided that the academic and/or formal requirements have not changed. This means that if you have been admitted for the summer intake of 2027, you can defer the start of your studies to the summer intake of 2028." Ayrıca: "Admission to the Master's programme may, upon application, be deferred to the following two semesters, provided that the admission requirements remain unchanged."
  Kaynak: https://www.uni-kiel.de/en/wiso/studying/master/economics/students/faq — D — **DOĞRULANDI (yalnız bu programlar)**.
  **Kiel Informatik M.Sc. için aynı kural yazılı değil → BULUNAMADI.** Informatik sayfası (https://www.uni-kiel.de/en/tf/study/ma-computer-science) yalnızca "The degree programmes can be started in the winter and summer semesters. The courses of Study are admission-free in the first and higher semesters (not subject to application)" ve yurt dışı diploma için uni-assist yolunu söylüyor.
- **Kiel Medical Life Science** (D, farklı program, bağlam için): "Accepted candidates have to be on location in Kiel from the start of the semester (1 April). No visa - no studies. We do not accept late comers, issue late-arrival permits or stream lectures online." ve "Waiting times for student visa appointments in various countries are more than 12 months in various countries." Kaynak: https://www.medlife.uni-kiel.de/en/how-to-apply-1 — D — DOĞRULANDI (programa özgü; Informatik için genelleme yapma).
- **Kiel WiSo geç varış**: "You should therefore arrive by the start of lectures at the latest, i.e. mid-October or mid-April. In some cases, late arrival may be authorised until 30 October or 30 April." (aynı SSS sayfası) — DOĞRULANDI (WiSo).

### a4. Model C — vize gerektirene baştan sonraki dönem

- **Uni Göttingen (Philosophische Fakultät masterları)**, D: WiSe 2026/27 için ek başvuru dönemi (15.09.–30.09.2026): "Der zusätzliche Bewerbungzeitraum gilt nur für Bewerber*innen aus der EU oder mit einer gültigen Aufenthaltserlaubnis. Bewerber*innen, die ein Visum benötigen, können sich zwar auch in diesem Bewerbungszeitraum bewerben, im Falle einer Zulassung werden Bescheide aber für das Sommersemester 2027 verschickt." SoSe 2027 için: "Regulärer Bewerbungszeitraum: 01.10. – 01.12.2026 ... Zusätzlicher Bewerbungszeitraum: 15.03. – 31.03.2027 ... Bewerber*innen, die ein Visum benötigen, können sich auch in diesem Zeitraum bewerben. Zulassungen werden in diesem Fall für das WiSe 27/28 ausgestellt."
  Kaynak: https://www.uni-goettingen.de/de/103531.html — D — **DOĞRULANDI** (sayfa Göttingen'in M.A.-Bewerbung sayfası; Informatik bu tabloda değil, Göttingen'in Philosophische Fakultät programları için).
  Bu, "geç başvuran + vize gerektiren → otomatik bir sonraki dönem" modelinin resmî kanıtı; başka üniversitelerde benzeri olabilir ama doğrulanmadı.

### a5. Diğer

- **Stuttgart/Kiel vb. bilgi**: "Uni Duisburg-Essen: Immatrikulasyon süresi kaçarsa Zulassung unwirksam, ertesi döneme aktarılamaz" — bu ifade **sadece WebSearch özetinden**; kaynak sayfa (`nach_der_zulassung.php`) içinde bu cümle bulunamadı (sayfa ana metninde yok) → **BULUNAMADI, rehbere yazma**.
- **HU Berlin "Rückstellung eines Zulassungsangebotes"** sayfası: Anubis bot koruması (PW da "Access Denied") — **erişilemedi**. Arama özetine göre sayfa hizmet/askerlik/DoSV odaklı "Rückstellung" (kanun 2 sonraki tahsis) — vize ile ilgisi teyit edilemedi. **BULUNAMADI**.
- **Hukuki dayanık**: Zulassungsbescheid süresi ve Immatrikulationsfrist eyalet Hochschulgesetz/Immatrikulationsordnung düzeyinde; Schleswig-Holstein (Kiel) düzenlemesi bu turda ayrıca bulunamadı → **BULUNAMADI**. AufenthG §16b Abs.1 ise vizeye/oturuma temel: "Einem Ausländer wird zum Zweck des Vollzeitstudiums ... eine Aufenthaltserlaubnis erteilt, wenn er von der Bildungseinrichtung zugelassen worden ist." (https://www.gesetze-im-internet.de/aufenthg_2004/__16b.html, D, DOĞRULANDI.) Yani vize ve oturum, geçerli bir Zulassung'a bağlı.

---

## (b) Vize açısından: dönem, randevu, giriş, Immatrikulation

### b1. Kabul olmadan Studium vizesi olmaz; alternatif Studienbewerbervisum

- AA Merkblatt (San José misyonu, Stand August 2025; ortak AA şablonu): "Ausländische Studierende, die von einer deutschen Hochschule zugelassen worden sind ... können ein Visum für ein Studium in Deutschland beantragen." Kontrol listesi: "Nachweis über die Zulassung zum Studium/Studienkolleg, mit Hinweis auf die Unterrichtssprache". "Das Visum beantragen Sie online über das Auslandsportal. Nach der Vorprüfung erhalten Sie einen Link, um einen Termin ... zu vereinbaren." Kaynak: https://san-jose.diplo.de/resource/blob/1540562/fddac503242f24102b78bf7523dd7aba/merkblatt-studium-data.pdf — PDF — DOĞRULANDI (başka ülke misyonunun Merkblatt'ı; Türkiye misyonlarının kendi Merkblatt'ı bu turda bulunamadı → Türkiye'ye özgü sürecin bazı ayrıntıları için **BULUNAMADI**). Türkiye'ye ait `merkblatt-deu-data.pdf` (tuerkei.diplo.de) çok eski (853 EUR, BAföG 10.236 EUR ...) → **kullanılmamalı, güncel değil**.
- Türkiye misyonları: "Das Visumverfahren im Bereich Studium und Studienplatzsuche wird ausschließlich über das Auslandsportal abgewickelt." Kaynak: https://tuerkei.diplo.de/tr-de/service/05-visaeinreise/2720740-2720740 — D — DOĞRULANDI. Auslandsportal adresi: digital.diplo.de/studium (aynı sayfa).
- **Studienbewerbervisum (§17 Abs.2 AufenthG)**: "Einem Ausländer kann zum Zweck der Studienbewerbung eine Aufenthaltserlaubnis erteilt werden, wenn 1. er über die schulischen und sprachlichen Voraussetzungen zur Aufnahme eines Studiums verfügt oder diese innerhalb der Aufenthaltsdauer ... erworben werden sollen und 2. der Lebensunterhalt gesichert ist. Die Aufenthaltserlaubnis wird für bis zu neun Monate erteilt." (https://www.gesetze-im-internet.de/aufenthg_2004/__17.html, D, DOĞRULANDI). Merkblatt: bu vize için aylık en az 1.091 EUR (13.092 EUR/yıl) gerekli, Zulassung'lu Studium vizesi için 992 EUR/ay (11.904 EUR/yıl) (San José Merkblatt, Aug 2025, PDF, DOĞRULANDI).
  → Bu, "Zulassung süresi geçti ama başka üniversiteye/sonraki dönem başvuracağım" durumunda yasal olarak bir fallback; ancak yeni Zulassung'a göre Studium vizesine geçiş için Ausländerbehörde şartları var (§17 Abs.3: "eine Aufenthaltserlaubnis zu einem anderen Aufenthaltszweck nur nach den §§ 16a, 16b oder 19c Absatz 2 ..."). Uygulamada nasıl işlediği bu turda araştırılmadı.

### b2. Vizenin ne kadar önceden başvurulabileceği; giriş tarihi

- Çin misyonu Merkblatt (Stand Juli 2024): "Die Antragstellung kann frühestens 6 Monate vor geplanter Einreise erfolgen." Kaynak: https://china.diplo.de/resource/blob/1302044/79232bf206611d63bfb216e3279aca71/pdf-merkblatt-natvisum-studium-data.pdf — PDF — DOĞRULANDI ama **Türkiye için bu 6 ay kuralı doğrulanamadı** (kural misyona özgü olabilir). Türkiye'de fiilî sınır randevu kuyruğu (aşağıda). → Türkiye'ye özgü "en erken ne zaman" **BULUNAMADI**.
- **Vize geçerlilik penceresi/giriş sınırı (Türkiye)**: Türkiye sayfalarında bu bilgi bulunamadı → **BULUNAMADI**. (Genel kural: Studium vizesi giriş için verilir, oturum Ausländerbehörde'de Aufenthaltserlaubnis'e çevrilir — bu turda birincil kaynakla teyit edilmedi.) Studienbewerbervisum için AA (Beirut Merkblatt özeti): "Ein Aufenthalt als Studienbewerber darf maximal neun Monate dauern und wird nur verlängert, wenn die Zulassung zu einem Studium gegenüber der Ausländerbehörde nachgewiesen wird." (https://beirut.diplo.de/lb-de/service/05-visaeinreise/2543980-2543980, D).
- **Immatrikulation/Einreise zamanı**: Stuttgart: Frist uzatması "nicht über den Vorlesungsbeginn hinaus" (bkz. a1). Kiel WiSo: en geç ders başlangıcında orada olmalı, bazı durumlarda 30 Nisan'a kadar geç varış (bkz. a3). Potsdam: kayıt olursanız "unabhängig davon, wann Sie in Deutschland ankommen" Semesterbeitrag ödenir; gecikmede indirim yok (aynı sayfa, D).
- **Sağlık sigortası/Immatrikulation ilişkisi (Merkblatt, PDF)**: "Wenn Sie sich als Student in der gesetzlichen Krankenversicherung krankenversichern wollen, ist zu beachten, dass diese erst mit Wohnsitznahme in Deutschland und nach Immatrikulation gilt. Erfolgt die Einreise bereits zuvor, ist eine private Krankenversicherung abzuschließen ... Reisekrankenversicherungen können den Versicherungsschutz ... ausschließen, wenn ein langfristiger oder dauerhafter Aufenthalt geplant ist." (San José Merkblatt, Aug 2025) — DOĞRULANDI.

### b3. Türkiye'de randevu: iDATA + Auslandsportal (birincil kaynak)

- https://tuerkei.diplo.de/tr-de/service/05-visaeinreise/2729790-2729790 (D, DOĞRULANDI): "An den drei deutschen Auslandsvertretungen in der Türkei, Ankara, Istanbul und Izmir, kommt es aufgrund der hohen Visumnachfrage zu längeren Wartezeiten von der Terminregistrierung bis Visumantragstellung. ... Studium: je nach Auslandsvertretung zwischen 1-4 Monaten ... **Empfehlung**: Es ist daher sehr wichtig, dass Sie sich möglichst früh auf der entsprechenden Warteliste der Botschaft/des Generalkonsulates registrieren. Die Termine zur Visumbeantragung werden in allen Visumkategorien in chronologischer Reihenfolge nach dem Registrierungsdatum vergeben." Ayrıca: "Das Auslandsportal ist am 1. Januar 2025 weltweit eingeführt worden ... Eine Registrierung stellt noch keinen rechtswirksamen Visumantrag dar!" ve "Visumanträge, die in einer unkorrekten Kategorie vorgenommen wurden, [werden] bei Antragstellung zurückgewiesen."
- https://tuerkei.diplo.de/tr-de/service/05-visaeinreise/2703120-2703120 (D, DOĞRULANDI): "Bitte nutzen Sie das Online-Terminvergabesystem von iDATA. iDATA führt Ihre Terminbuchung aus oder verweist Sie je nach Ihren Angaben im Terminvergabesystem auf das Auslandsportal zur Online-Registrierung." Ücretler: "Servicegebühr in Höhe von 39,92 € und/oder eine Terminbuchungsgebühr von 12 €" (ilk sayfada: "Visumgebühr (max. 90 EUR)", "Die Ausgabe der Anträge und Merkblätter sowie die Terminbuchung sind kostenlos.")
- **Kabul beklerken randevu alma stratejisi**: Kaynaklarda "kabulden önce warteliste'ye kayıt olunabilir mi" **BULUNAMADI** (Auslandsportal JS uygulaması, iDATA sitesi Cloudflare 403 → hem WebFetch hem PW erişilemedi; https://www.idata.com.tr/de/de/p/terminvereinbarung-de). Kesin olan: (i) sıralama kayıt tarihine göre kronolojik, (ii) kayıt hukuken başvuru değil, (iii) başvuruda Zulassung belgesi kontrol listesinde zorunlu. Bu yüzden "kabul gelmeden kayıt olup sırayı kapatma" mümkün mü, doğrudan iDATA/Auslandsportal ile teyit edilmeli (uydurma yapılmadı).

---

## (c) SoSe için tipik son tarihler (üniversite resmi sitelerinden)

| Üniversite / program | SoSe başvuru penceresi | Yıl | Kaynak, yöntem, durum |
| --- | --- | --- | --- |
| **CAU Kiel** — yurt dışı diploma, non-EU/EEA, Almanca-dilli masterlar (uni-assist) | "For the summer semester: Beginning of November to 15th January." (WiSe: "Beginning of May to 15th July.") | PDF "Status: December 2024" (yıl SoSe için belirtilmemiş, güncel yıl kuralı) | https://www.international.uni-kiel.de/.../erstinfos_master_englisch_1224 (PDF, DOĞRULANDI; 2024 durum, güncel teyit gerek) |
| **CAU Kiel — Informatik M.Sc.** (yurt dışı diploma, uni-assist) | Belge teslimi iki dönem: "from October to December (online interview in the middle of December or February)" (SoSe girişine yönelik), "from May to June (... June or August)" (WiSe). Mülakat sonucu: "You will be informed about the results within seven working days: if you pass, you will be admitted, if not, you cannot be given an opportunity for a second interview." Dil: B1 (CEFR) | Sayfa güncel (24.09.2026'da çekildi) | https://www.uni-kiel.de/en/tf/study/ma-computer-science — D — **DOĞRULANDI** |
| **CAU Kiel — WiSo Economics** | uni-assist "from 01 October to 30 November for summer intake" | 2027 girişi (SSS, "summer intake of 2027" örneği) | https://www.uni-kiel.de/en/wiso/studying/master/economics/students/faq — D — DOĞRULANDI |
| **CAU Kiel — Almanya diploması/EU** | zulassungsbeschränkt masterlar: "01.12. bis 15.01."; sayfa: "Alle Fristen sind Ausschlussfristen"; yabancı diplomalılar için "wenden sich bitte an das International Center" | Sayfa "Letzte Änderung 20.05.2026" | https://www.studium.uni-kiel.de/de/studium-organisieren/termine-fristen/bewerbungsfristen — D — DOĞRULANDI (tablo düz metinde sütunları birbirine girmiş; SoSe/WiSe sütun eşleşmesi Kiel International PDF ile tutarlı) |
| **TUM** — Informatik M.Sc. | "For the summer semester: October 1 – October 31: recommended application for applicants who need a visa; October 1 - November 30: compulsory application deadline" (WiSe: Feb 1–Mar 31 önerilen vize, Feb 1–May 31 zorunlu). "No submission of missing application documents after the official application deadline!" | Sayfada "Test date ... winter semester 2026/27: 20 August 2026" var → 2026 sayfa, SoSe 2027 girişi için Oct–Nov 2026 | https://www.cit.tum.de/en/cit/studies/degree-programs/master-informatics/ — D — **DOĞRULANDI** |
| **TU Berlin** — Master | NC'li: "01.12.2025 until 15.01.2026"; NC'siz: "01.12.2025 until 28.02.2026"; "Enrollment for all master's programs: see letter of acceptance in tuPORT". Yabancı diploma: VPD zorunlu, "Applications with international academic credentials have the same deadlines as non-international applications" | **SoSe 2026** (önceki yıl; SoSe 2027 tarihleri henüz sayfada yok) | https://www.tu.berlin/en/studierendensekretariat/dates-deadlines-for-application-and-enrollment-at-tu-berlin — D — DOĞRULANDI (yıl 2026) |
| **Uni Göttingen** (Philosophische Fakultät MA'ları) | "Regulärer Bewerbungszeitraum: 01.10. – 01.12.2026 ... Zusätzlicher Bewerbungszeitraum: 15.03. – 31.03.2027" | **SoSe 2027** | https://www.uni-goettingen.de/de/103531.html — D — DOĞRULANDI |
| **Uni Stuttgart** | Master (SoSe başlayanlar): "Bewerbung: 1. Dezember bis 15. Januar." ("Die berufsbegleitenden sowie die internationalen und englischsprachigen Master-Studiengänge haben besondere Bewerbungstermine") | Yıl belirtilmemiş, güncel sayfa | https://www.uni-stuttgart.de/studium/bewerbung/bewerbungstermine/ — D — DOĞRULANDI |
| **FAU Erlangen-Nürnberg** (bir masterda örnek) | "Bewerbungen für das Sommersemester 2026 sind ab 15. Oktober 2025 möglich ... bis spätestens 15. Januar 2026". Ayrıca: "Ab dem Sommersemester 2027 werden an der FAU für einige Studiengänge Studiengebühren für Studierende aus Nicht-EU-Staaten erhoben." | **SoSe 2026** (SoSe 2027 için sayfada net tarih çıkarılmadı) | https://www.fau.de/studium/international-studierende/bewerbung-und-einschreibung-fuer-internationale/bewerbung-fuer-internationale-fuer-ein-masterstudium/ — D — DOĞRULANDI (not: FAU'nun program bazlı PDF'i ayrı) |
| **Uni Potsdam** | "Die Bewerbungsphase zum Sommersemester beginnt ab dem 1. November 2026." (bitiş program bazlı) | **SoSe 2027** | https://www.uni-potsdam.de/de/studium/zugang/bewerbung-master/konsekutiv — D — DOĞRULANDI (yalnız başlangıç) |
| **TU Darmstadt** | Genel: "Bewerbungsfristen ... für ein Sommersemester im November des Vorjahres ... veröffentlicht"; "Für einzelne Master-Studiengänge gibt es vorgezogene Bewerbungsfristen für internationale Bewerber:innen." SoSe için tarih sayfada yok | — | https://www.tu-darmstadt.de/studieren/studieninteressierte/bewerbung_zulassung_tu/bewerbungsfristen/bachelor_studiengaenge_2/index.de.jsp — D — tarih **BULUNAMADI** (yalnız yapı) |
| **uni-assist genel not** | "The application deadline is often July 15th if the course starts in the winter semester. The application deadline is often January 15th if the course starts in the summer semester. Many universities set earlier deadlines for specific courses, such as for master's courses ..." | Genel | https://www.uni-assist.de/en/how-to-apply/plan-your-application/deadlines-processing-time/ — D — DOĞRULANDI |

Çıkarım (yalnız bu tablodan): En az 8 üniversitede net tarih var; **15 Ocak** tek "standart" değil — TUM Informatik ve Göttingen bunun 1,5–2 ay öncesinde; TU Berlin NC'siz masterlarda 28 Şubat; "15 Mart / 31 Mart" ise Göttingen'de ek dönem (vize gerektirenlere WiSe 27/28 için Zulassung) olarak çıktı (kabul beklenmeden ek başvuru değil).

### uni-assist / VPD zaman çizelgesi (SoSe için)

- "Our recommendation: Apply as early as possible, at least 8 weeks before the deadline expires." ; "You will usually receive your evaluation result in 4 to 6 weeks – counting from the day on which we received your online application form." ; güncel bölgesel süre "Central and Eastern Europe, Turkey: 2-3 weeks" (Last updated: 21 September 2026). Kaynak: https://www.uni-assist.de/en/how-to-apply/plan-your-application/deadlines-processing-time/ — D — DOĞRULANDI.
- VPD: "You can apply for a VPD at any time. It is valid for one year from its date of issue, no matter which semester you select in My assist." ; "You need to apply directly to the university with your VPD before the deadline". Kaynak: https://www.uni-assist.de/en/how-to-apply/plan-your-application/vpd/ — D — DOĞRULANDI. → WiSe için alınmış VPD, tarihinden itibaren 1 yıl içinde SoSe başvurusunda da kullanılabilir (VPD'yi isteyen üniversiteler için).
- TU Berlin: "you may only submit one application for admission to the master's program per semester" — bu, WiSe'de kabul reddedilirse aynı dönemde yeniden başvuru yapılamayacağı anlamına gelir (https://www.tu.berlin/en/i-a-office-of-student-affairs/masters-application-enrollment/application/applying-with-a-primary-university-degree-from-a-foreign-university, D, DOĞRULANDI).
- Kiel uni-assist ücreti (Kiel PDF'i, Dec 2024): "Initial application: € 75,- Each additional programme you apply to at CAU Kiel: € 30,-" — PDF — DOĞRULANDI (2024 durumu; güncel ücret teyit gerek).

---

## (d) Yeniden başvuru vs erteleme: karar ağacı ve adımlar

**Karar ağacı (yalnız kaynaklarda bulunan mekanizmalarla):**

1. Kabul mektubunda **Immatrikulationsfrist** ve **hangi dönem için** geçerli olduğu yazıyor mu? → Bunu oku; her şey buna bağlı (Stuttgart, TU Berlin, FU, TUM: süre mektupta).
2. Programın kendi sayfasında/SSS'inde **erteleme (Rückstellung/deferral)** var mı?
   - **Var, talep üzerine** (Kiel WiSo: International Center'a talep, sonraki 2 dönem; koşul: akademik/formal şartlar değişmemiş) → yazılı talep, cevabı dosyala.
   - **Var, "reddet + yeniden başvur"** (Bayreuth, TUM) → yeni dönemin normal başvuru penceresinde tüm belgelerle yeniden başvur; kabul "in der Regel" korunuyor.
   - **Kabul iki dönem geçerli** (Potsdam bazı NC'siz masterlar; Zulassungsbescheid'e bak).
   - **Yok / Zulassung unwirksam** (Stuttgart, Potsdam genel kural) → yeniden başvuru.
3. Vize gerektiriyorsanız ve başvuru zamanlaması bir sonraki dönemi gösteriyorsa: bazı üniversiteler zaten sonraki dönem için kabul yazar (Göttingen). Kararı başvurudan önce üniversiteye sorarak verin.
4. Kiel Informatik için: **yazılı kural yok** → International Center'a e-posta ile "Zulassung Wintersemester 20XX, Visum gecikirse SoSe'ye kaydırma mümkün mü, koşulları neler?" sorusu sorulmalı ve cevap saklanmalı (yalnız öneri, kaynak değil).

**WiSe kabulü geldi, vize yetişmiyor → SoSe'ye kaydırma adımları (kaynaklardan derlenen genel sıra):**

1. Vize sürecini durdurma; randevuyu koru (kronolojik sıralama, bkz. b3) — AA'ya göre yeni başvuru = yeni kayıt/yeni sıra riski var; randevu iptal/erteleme kuralları için iDATA sayfası açılamadı → **BULUNAMADI**.
2. Üniversiteye erteleme/yeniden başvuru talebi (a2/a3). Süre: Immatrikulationsfrist ve varsa Vorlesungsbeginn'i geçmeden yazılı talep (Stuttgart: uzatma "nicht über den Vorlesungsbeginn hinaus").
3. Yeni dönemin başvuru penceresi: SoSe ise genelde Kasım–15 Ocak arası (tablo). Belgeler yeniden yüklenecekse (TUM: "documents ... are destroyed ... re-submit a complete set") hazır tut.
4. VPD 1 yıl geçerli (uni-assist) — WiSe VPD'si SoSe'de kullanılabilir.
5. Yeni Zulassung ile vize başvurusu (yeni dönem tarihleriyle); Sperrkonto/sigorta belgeleri yeni tarihlere uyarlanır (aşağıda).

**Sonraki WiSe'ye kadar bekleme (SoSe de kaçarsa):**
- Göttingen örneği: SoSe 15.03.–31.03.2027 penceresinde vize gerektirenlere "Zulassungen werden ... für das WiSe 27/28 ausgestellt" (a4).
- Kiel WiSo: SoSe 2027 kabulü → "summer intake of 2028" (2 dönem; a3).
- Genelde: yeni başvuru (a2). Bu durumda 12+ ay beklemede belgelerin durumu aşağıda.

**Belgelerin beklemede geçerliliği:**

| Belge | Bulunan kural | Kaynak, yöntem, durum |
| --- | --- | --- |
| **IELTS** | "We recommend that IELTS test results are considered valid for two years after a test has been taken. This is based on research into second-language loss. Organisations that accept IELTS can choose to accept results for a longer period, so you should check with them directly." | https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail — D — **DOĞRULANDI** (resmî IELTS: "önerilir"; üniversite kendi süresini koyar. TOEFL/TestDaF/Goethe süreleri bu turda araştırılmadı → BULUNAMADI). |
| **VPD** | 1 yıl (yukarıda) | uni-assist — DOĞRULANDI |
| **Sperrkonto tutarı** | "muss derzeit für Studenten/Stipendiaten/Praktikanten auf dem Sperrkonto ein Betrag von € 992,-/Monat hinterlegt werden ... Das Sperrkonto wird in der Regel für ein Jahr angelegt" (AA sayfası 01.07.2025); AA Merkblatt Aug 2025: "mindestens € 11.904" / "€ 992 monatlich". Chancenkarte/Forscher: "€ 1.091,-/Monat". **Yeni yıl/BAföG güncellemesinde tutar değişebilir** (rehberin `degerler.yml`'deki belirsizlik notu geçerli). | https://italien.diplo.de/it-de/service/visa-aktuell/2586756-2586756 ve San José Merkblatt PDF — D/PDF — DOĞRULANDI (992 EUR, 2025 tarihli AA kaynakları; 2026-27 güncel teyit için Auslandsportal'da kontrol) |
| **Sperrkonto "Sperrbegünstigter"** | "Wenn Sie ein Sperrkonto eröffnen, müssen Sie dabei einen 'Sperrbegünstigten' angeben. Das ist die Auslandsvertretung, bei der sie ein Visum beantragen werden." | AA (İtalya sayfası; genel mekanizma) — DOĞRULANDI |
| **Sperrkonto uzatma/yeni onay (bekleme)** | Fintiba/Expatrio yardım sayfalarına göre uzatma ("Extend Account"/"Change Details") ve yeni "06 Blocked Amount Confirmation" düzenlenebiliyor, hesap kapanmadıkça | Sadece WS özeti (help.expatrio.com, help.fintiba.com) — sayfalar Cloudflare/JS engelli (PW zaman aşımı, WebFetch 403) → ticari sağlayıcı, **durum: BULUNAMADI (doğrudan teyit yok)**; sağlayıcıdan yazılı teyit şart |
| **Sperrkonto vize red iadesi** | Fintiba: vize reddi resmî belgesi ile hesap kapatılıp iade (WS özeti; ~4 hafta) | WS — **BULUNAMADI (teyit yok)** |
| **Sağlık sigortası** | Merkblatt: GKV Wohnsitznahme + Immatrikulation ile başlar; öncesinde özel sigorta; seyahat sigortası uzun süreli ikamette dışlanabilir | PDF — DOĞRULANDI. Sigorta tarihleri yeni dönem başlangıcına göre yeniden yapılmalı (kural değil, çıkarım). |
| **Kabul mektubu** | Süre mektupta/programa göre (a bölümü). SoSe kabulünü WiSe'ye kaydırmak = yukarıdaki modeller | — |
| **Denklik / ZAB (anabin)** | Bu turda süre kuralı bulunamadı; Kiel PDF'i yalnız "anabin ile HZB kontrolü" diyor | **BULUNAMADI** |

---

## (e) Genel SoSe takvimi (geriye doğru) ve Kiel örneği

### e1. Kiel SoSe 2027 resmi tarihleri (International Center sayfası, "Last changed Sep 18, 2026")
"Summer semester 2027 ... Semester period: 01.04. – 30.09. Lecture period: 05.04. – 16.07.2027 Exam period: 12.07. – 24.07.2027 ... Orientation program: 22.03. – 02.04.2027 ... Obligatory rental period (dorm at Studentenwerk SH): 01.03. – 31.08." ; "Public Holidays 2027: March 26: Good Friday | March 29: Easter Monday". WiSe 2026/27: "Lecture period: 12.10.2026 – 12.02.2027"; WiSe 2027/28 tarihleri sayfada yok.
Kaynak: https://www.international.uni-kiel.de/en/incomings/application-admission/non-degree/erasmus-incomings/before-your-stay/academic-timetable-semester-dates — D — **DOĞRULANDI**. (Not: bu sayfa Erasmus/incoming bölümünde ama "Official semester dates of CAU" başlığı altında; ayrıca `studium.uni-kiel.de` semester sayfası iframe/JS olduğundan içerik çekilemedi.)
Kiel kayıt (Immatrikulation) süresi: "Die Einschreibung in zulassungsbeschränkte (bewerbungspflichtige) Studiengänge ist nur nach erfolgter Bewerbung und daraus resultierender Zulassung in der im Zulassungsbescheid bekannt gegebenen Frist möglich." ; "In zulassungsfreien (nicht bewerbungspflichtigen) Studiengängen ist eine Einschreibung ohne vorherige Bewerbung möglich." (https://www.studium.uni-kiel.de/de/bewerbung-einschreibung/einschreibung — D — DOĞRULANDI.) **SoSe 2027 için somut Einschreibfrist tarihi bulunamadı** (Kiel'in eski `einschreibfristen-1` sayfası 404) → **BULUNAMADI**; mektuptaki süre geçerli.
Ders başlangıcı 5 Nisan 2027 → Kiel'de "Vorlesungsbeginn" için resmi cümle: "Lecture period: 05.04. – 16.07.2027" (yukarıda).

### e2. Geriye doğru genel takvim (Kiel Informatik M.Sc., yurt dışı diploma, SoSe girişi) — **plan önerisi, kaynaklı zaman noktaları işaretli**

| Zaman | Adım | Dayanak |
| --- | --- | --- |
| **Ağustos–Eylül (önceki yıl)** | Belgeleri hazırla; uni-assist'e VPD/başvuru için en geç son tarihten 8 hafta önce | uni-assist "at least 8 weeks before" (D) |
| **Ekim–Aralık** | Kiel Informatik (yurt dışı diploma): uni-assist üzerinden belgeler "from October to December", online interview "in the middle of December or February" | Kiel Informatik sayfası (D) |
| **Mülakattan sonra ~7 iş günü** | Sonuç: geçenler kabul edilir | aynı sayfa (D) |
| **15 Ocak (Kiel non-EU SoSe genel son gün)** | Başvuru son günü ("Beginning of November to 15th January"); bazı programlar/üni.ler daha erken (TUM 30.11, Göttingen 01.12) | tablo (c) |
| **Kabul geldikten hemen sonra** | Auslandsportal/iDATA'da Studium kaydı (Zulassung belgesi gerekli — bkz. b1); Türkiye'de Studium bekleme: 1–4 ay | AA Türkiye sayfaları (D) |
| **Randevudan önce** | VIDEX formu (Online-Visumantrag), Sperrkonto açıp onay belgesini almak ("Eröffnen Sie das Sperrkonto rechtzeitig vor der Visumsbeantragung ... ausschließlich die offizielle Eröffnungsbestätigung ... akzeptiert"), sağlık sigortası kanıtı | Merkblatt (PDF); VIDEX bağlantısı AA Türkiye "Antragstellung" bölümünde ("Videx-Online-Visumantrag") (D) |
| **Konaklama** | Kiel Studentenwerk SH: "Obligatory rental period ... 01.03. – 31.08." (SoSe 2027) — yurt kiralama dönemi sayfada bu şekilde; başvuru/tarihleri için Studentenwerk SH sayfası bu turda ayrıca doğrulanmadı | Kiel International sayfası (D); konaklama başvuru süreci **BULUNAMADI** |
| **22.03.–02.04.2027** | Orientierungsprogramm | Kiel (D) |
| **01.04.2027 / 05.04.2027** | Semester dönemi başlangıcı / ders başlangıcı | Kiel (D) |

Özet çıkarım (kaynaklı sayılarla): Türkiye'de Studium randevu beklemesi 1–4 ay olduğundan, Nisan 2027'de orada olmak için kabul mektubunun **en geç Aralık–Ocak** civarında elde edilmesi gerekir; Kiel Informatik yurt dışı diploma sürecinde mülakat ortası Aralık veya Şubat'a düşüyor. **Şubat mülakatı + 1–4 ay randevu bekleme = Nisan dersine yetişme riski yüksek** (bu matematik, kaynaklardaki rakamlardan çıkarım; kesin hüküm değil).
Kiel için "başvuru için TUM tarzı 'vize gerekenler erken başvursun' önerisi" resmi olarak yazılı değil (TUM'da var, Kiel'de bulunamadı).

### e3. Randevuyu kabul beklerken alma stratejisi (kaynaklı gerçekler)

- AA (Türkiye): en erken kayıt yapmak önerilir; sıra **kayıt tarihine göre kronolojik** ("Die Termine zur Visumbeantragung werden in allen Visumkategorien in chronologischer Reihenfolge nach dem Registrierungsdatum vergeben."). — DOĞRULANDI (D).
- Aynı sayfa: "Eine Registrierung stellt noch keinen rechtswirksamen Visumantrag dar!" ; "Es wird darauf hingewiesen, dass Visumanträge, die in einer unkorrekten Kategorie vorgenommen wurden, bei Antragstellung zurückgewiesen werden." (yanlış kategoriye kayıt reddi). — DOĞRULANDI.
- Kayıtta Zulassung şartı ve iDATA iptal/değiştirme kuralları: iDATA sitesi 403 (Cloudflare) → **BULUNAMADI**. Dolandırıcı acentelere karşı AA uyarısı (D): "Als externer Dienstleister der Visastellen fungiert ausschließlich iDATA ... Für das Verfahren ist ausschließlich die von den Visastellen erhobene Visumgebühr (max. 90 EUR) fällig. Daneben erhebt iDATA ein Serviceentgelt in Höhe von 39,92 EUR."

---

## Kapanmayan / belirsiz maddeler (özet)

1. **Kiel Informatik M.Sc. için Zulassung geçerlilik/erteleme kuralı** — resmi kaynakta yok (yalnız WiSo Economics SSS'inde var). Kiel International Center'a yazılı sorulmalı.
2. **Türkiye'de vize randevusu/Auslandsportal kaydı için Zulassung şartı ve iDATA iptal/erteleme kuralları** — iDATA Cloudflare 403, Auslandsportal JS; doğrulanamadı.
3. **Vize başvurusu ne kadar önceden yapılabilir (Türkiye)** — 6 ay kuralı Çin misyonu Merkblatt'ında var, Türkiye'de teyit edilemedi.
4. **Vize geçerlilik/giriş penceresi (Türkiye)** — bulunamadı.
5. **HU Berlin "Rückstellung" sayfası** — Anubis (hem WebFetch hem PW engelli, arşiv WebFetch ile açılmıyor).
6. **Sperrkonto sağlayıcı sayfaları** (uzatma, yeni onay, red iadesi) — Cloudflare/JS engelli; yalnız WS özeti, güvenilmez.
7. **Kiel SoSe 2027 somut Einschreibfrist**, Kiel Studentenwerk konaklama başvuru tarihleri, WiSe 2027/28 Kiel dönem tarihleri — bulunamadı.
8. **TOEFL/TestDaF/Goethe geçerlilik süreleri, denklik/anabin süre kuralı** — bu turda araştırılmadı/bulunamadı.
9. **Uni Duisburg-Essen "ertesi döneme aktarılamaz"** (WS özeti) — kaynak sayfada doğrulanamadı; rehbere yazılmamalı.
10. **Hildesheim erteleme kuralı**, **Schleswig-Holstein Immatrikulationsverordnung** — bulunamadı.

## Sayfaya yazılabilecek özet (okura yönelik)

**Kabulün WiSe'ye yetişmezse ne olur? (SoSe ve sonraki WiSe)**

Almanya'da tek bir kural yok: kabul mektubunun (Zulassungsbescheid) kaç dönem geçerli olduğu üniversiteden üniversiteye ve programdan programa değişiyor. Resmî sitelerde üç farklı uygulama var:

1. **Kabul yalnız o dönem için geçerli, süre kaçırılırsa geçersiz olur** (örnek: Stuttgart; Potsdam'da genel kural). Kayıt süresi mektupta yazar; kabul "unwirksam" (geçersiz) olursa bir sonraki dönemin normal başvuru penceresinde yeniden başvurmanız gerekir. Bu, yeni kabul garantisi vermez.
2. **Talep üzerine erteleme (Rückstellung/deferral) veya "reddet ve yeniden başvur"** (örnek: TUM ve Bayreuth'ta yerini reddedip sonraki dönem için tekrar başvurursunuz, kabul genelde korunur, ama belgeleri yeniden yüklemeniz gerekir; Kiel'in Economics masterlarında International Center'a talep ederek sonraki iki döneme erteleyebilirsiniz).
3. **Vize gerektirenlere baştan sonraki dönem için kabul yazılır** (örnek: Göttingen'in bazı masterlarında).

**Kiel Informatik için**: resmî sitede erteleme kuralı yazmıyor. Vizeniz WiSe'ye yetişmeyecek gibiyse, kabul mektubunda yazan tarihleri okuyun ve Kiel International Center'a yazılı olarak sorun ("Bu kabul, bir sonraki dönem için kullanılabilir mi, yoksa yeniden başvuru mu gerekir?"). Cevabı saklayın.

**Vize tarafı**: Türkiye'deki üç Alman temsilciliğinde Studium vizesi için başvuru randevusu beklemesi, temsilciliğe göre 1–4 ay olarak duyuruluyor. Randevular kayıt tarihine göre sırayla veriliyor; bu yüzden erken kayıt önerilir. Kayıt henüz hukuken bir başvuru sayılmaz. Vize başvurusunda kabul mektubu (Zulassungsbescheid) gerekir.

**SoSe için tipik son tarihler**: Çoğu üniversitede 15 Ocak civarı (Kiel'de yurt dışı başvurular Kasım başından 15 Ocak'a kadar), ama TUM Informatik'te 30 Kasım, Göttingen'de 1 Aralık gibi daha erken tarihler var; bazı programlarda vize gerekenler için daha da erken başvuru öneriliyor. Kiel Informatik'te yurt dışı diploması olanlar için uni-assist üzerinden Ekim–Aralık'ta belge gönderilir, ardından online mülakat yapılır.

**Beklerken belgeler**: IELTS sonuçları için IELTS 2 yıl önerir (üniversite daha uzun kabul edebilir); uni-assist VPD'si verildiği tarihten 1 yıl geçerli; Sperrkonto ve sağlık sigortasını yeni tarihe göre güncellemeniz gerekir (Sperrkonto'da 2025 tarihli AA kaynaklarına göre aylık 992 EUR, güncel tutarı başvuru zamanı kontrol edin).

**Randevuyu kabul beklerken**: iDATA/Auslandsportal'da kayıt, kabulden önce yapılabilir mi bilmiyoruz; bu, doğrudan iDATA/Auslandsportal veya elçilikten teyit edilmeli.

<!-- Kaynak listesi (erişim 24.09.2026): student.uni-stuttgart.de/studienbeginn/einschreibung; uni-potsdam.de/.../anreise-nach-semesterbeginn-ratgeber; studierendenkanzlei.uni-bayreuth.de (Rückstellung); tum.de/en/studies/application/enrollment-info-portal/deferring-admission; uni-kiel.de/en/wiso/studying/master/economics/students/faq; uni-kiel.de/en/tf/study/ma-computer-science; international.uni-kiel.de erstinfos PDF + academic-timetable; uni-goettingen.de/de/103531.html; cit.tum.de; tu.berlin; uni-assist.de deadlines/VPD; tuerkei.diplo.de (2729790, 2703120, 2720740); san-jose.diplo.de Merkblatt PDF; china.diplo.de Merkblatt PDF; gesetze-im-internet.de §16b, §17 AufenthG; ielts.org. -->
