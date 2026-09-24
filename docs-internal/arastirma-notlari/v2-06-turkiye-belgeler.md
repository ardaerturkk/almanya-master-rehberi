# v2-06: Türkiye tarafı belgeler (çıkış harcı, pasaport, apostil, tercüme, H+, VPD)

Araştırma tarihi ve erişim tarihi: **24.09.2026**. Sadece araştırma; `docs/` altına dokunulmadı.
Yöntem kısaltmaları: **doğrudan** = sayfa curl/WebFetch ile açıldı; **PDF** = resmi PDF'ten metin çıkarıldı;
**Playwright** = gerçek tarayıcıyla JS-ağırlıklı veri tabanı gezildi; **arama özeti** = sadece arama sonucu özeti (zayıf kanıt, işaretli).

Durum etiketleri: DOĞRULANDI / ÇELİŞKİLİ / BULUNAMADI.

---

## Özet tablo (kapanan / kapanmayan)

| # | Madde | Durum |
| --- | --- | --- |
| 1a | Çıkış harcı 2026 = 1.250 TL | DOĞRULANDI (Resmî Gazete, birincil) |
| 1b | Öğrenci için çıkış harcı muafiyeti | DOĞRULANDI: **öğrenci muafiyeti YOK**; muafiyet sadece yurt dışı oturma izni / 7 yaş altı vb. |
| 1c | "492 sayılı Kanun" dayanağı | DÜZELTME: çıkış harcının dayanağı **5597 sayılı Kanun** (492 değil) |
| 1d | Pasaport harcı 2026 tablosu | DOĞRULANDI (NVI resmi sayfa). Sitedeki eski rakamlar YANLIŞ |
| 1e | Defter bedeli 1.351 vs 1.424,31 TL | ÇÖZÜLDÜ: **1.351,00 TL doğru**; 1.424,31 = ikincil kaynakların yanlış hesabı |
| 2a | Apostil nereden | DOĞRULANDI (Valilik/Kaymakamlık; adli belge = Adalet Komisyonu) |
| 2b | Apostil süresi | BULUNAMADI (resmi süre taahhüdü yok) |
| 2c | e-Apostil / e-Devlet | DOĞRULANDI kısmen (eapostil.gov.tr var; ama diploma için kapsamı teyit edilemedi) |
| 2d | Diploma apostili kim veriyor (YÖK/üniversite) | KISMEN: apostili Valilik/Kaymakamlık verir; YÖK'ün apostil verdiğine dair kaynak BULUNAMADI; "rektörlük ön onayı" iddiası sadece ticari kaynakta |
| 3a | Tercüme Türkiye'de mi Almanya'da mı | DOĞRULANDI: **Türkiye'deki yeminli tercüman kabul** (uni-assist Türkiye sayfası, kural bire bir) |
| 3b | Noter onayı / Beglaubigung / apostil gerekli mi | DOĞRULANDI (uni-assist güncel sayfaları): uni-assist için apostil YOK, onaylı kopya YOK, tam dijital |
| 3c | Kiel / TU Berlin / TUM / Hildesheim kuralları | DOĞRULANDI (4 üniversite sayfası); ufak nüans ve bir çelişki aşağıda |
| 4 | "Çoğu Türk üniversitesi H+" | ÇELİŞKİLİ→ÇÖZÜLDÜ: anabin'de listelenen **231 Türk kurumunun 231'i H+** (24.09.2026, Playwright). Ama H+ = kabul garantisi değil |
| 5 | VPD vs uni-assist normal süreç | DOĞRULANDI |

---

## 1. Çıkış harcı, pasaport harcı ve defter bedeli

### 1a. Çıkış harcı 2026 tutarı — DOĞRULANDI

- **Tutar: 1.250 TL**, 01.01.2026'dan itibaren.
- Kaynak (birincil): Resmî Gazete 31.12.2025, Sayı 33124 (5. Mükerrer), "Yurt Dışına Çıkış Harcı Uygulama Genel Tebliğinde Değişiklik Yapılmasına Dair Tebliğ (Seri No: 1)".
  URL: https://www.resmigazete.gov.tr/eskiler/2025/12/20251231M5-17.pdf (indeks: https://www.resmigazete.gov.tr/eskiler/2025/12/20251231M5.htm). Erişim 24.09.2026. Yöntem: PDF (pypdf ile metin).
- Alıntı (Madde 1): "28/12/2024 tarihli ve 32766 sayılı Resmî Gazete'de yayımlanan Yurt Dışına Çıkış Harcı Uygulama Genel Tebliğinin 5 inci maddesinin ikinci fıkrasında yer alan "710" ibaresi "1.250" şeklinde değiştirilmiştir". Madde 2: "Bu Tebliğ 1/1/2026 tarihinde yürürlüğe girer."
- Ana tebliğ (2025 metni), Resmî Gazete 28.12.2024 Sayı 32766: https://www.resmigazete.gov.tr/eskiler/2024/12/20241228-24.htm (doğrudan, cp1254 kodlu HTML).
  - Madde 5(2): "Yurt dışına çıkış harç tutarı 710 TL'dir." (2025 tutarı; 2026'da 1.250'ye çıktı)
  - Madde 5(1): tutar "çıkış tarihi itibarıyla geçerli olan tutardır".
  - Madde 5(4): Ocak ayının 10'u sonuna kadar yapılan çıkışlarda, önceki yıl sonundaki tutar üzerinden ödenmiş harç için fark istenmez.
  - Madde 6: ödeme "yurt dışına çıkmadan evvel" vergi dairesi, yetkili banka, PTT veznesi; ayrıca Dijital Vergi Dairesi, GİB mobil, internet/mobil bankacılık.
  - Madde 8: harç ödenip çıkış yapılmazsa veya muaf kişiden tahsil edilmişse iade başvurusu (Dijital Vergi Dairesi'nden elektronik de olabilir).
- **Uyarı (ikincil kaynak hatası):** Arama özetlerinde "%25,49 yeniden değerleme oranıyla 1.250 TL'ye yükseltildi" deniyor. Bu **tutmuyor**: 710 × 1,2549 ≈ 891 TL. 1.250 rakamı doğrudan Seri No: 1 tebliğiyle yazılmış bir tutardır; %25,49 (2025 yeniden değerleme oranı) Harçlar Kanunu tarifeleri için geçerli (bkz. 1e). Sayfaya "yeniden değerleme oranıyla arttı" yazılmamalı, sadece "1.250 TL (Resmî Gazete 31.12.2025)" yazılmalı.
- Sitedeki `data/degerler.yml` `tc_tarafi.cikis_harci` alanı: `kaynak: null`, durum `belirsiz` → artık `dogrulandi` yapılabilir, kaynak yukarıdaki RG linki.

### 1b. Öğrenci muafiyeti var mı? — DOĞRULANDI: yok

- Kaynak: Resmî Gazete 28.12.2024 Sayı 32766, tebliğ **Madde 4** (yukarıdaki URL, doğrudan). Erişim 24.09.2026.
- Alıntı: "Yurt dışına çıkış yapan Türkiye Cumhuriyeti vatandaşlarından; a) Çıkış tarihi itibarıyla yurt dışında oturma izni bulunanlar, b) 7 yaşını doldurmamış olanlar, c) Pasavan ve benzeri belgelerle çıkış yapanlar, ç) Kuzey Kıbrıs Türk Cumhuriyetine kimlik belgesiyle çıkış yapanlar, d) Yurt dışına ticari amaçla sefer yapan kara, deniz, hava ve demiryolu toplu taşıma ve yük taşıma araçlarının mürettebatı olanlar, harçtan muaftır." Madde 4(2): "...yurt dışında oturma izni bulunduğunu veya 7 yaşını doldurmadığını belgelendirmek zorundadır."
- Sonuç: **Öğrencilik, burs, yeşil/gri pasaport, uçuşun süresi muafiyet sebebi değil.** Muafiyet listesi tam ve kapalı.
- Öğrenci için pratik sonuç (tebliğ metninden çıkarım, kaynağı yok, yorum): vize ile ilk giden (henüz oturma izni yok) öder. Almanya'da Aufenthaltstitel aldıktan sonra Türkiye'ye gelip geri dönerken "çıkış tarihi itibarıyla yurt dışında oturma izni bulunanlar" (a) bendi uygulanabilir; bunu belgelemek gerekir (Madde 4(2)). Sitede bunu "tebliğ md. 4(a); belgele" diye yaz, "kesin muaf" deme; uygulamada havalimanı polisinin kabulü ayrıca teyit edilmeli (BULUNAMADI: uygulama örneği).
- Sitedeki mevcut metin ("0-72 ay çocuklar muaf") eksik: doğrusu "7 yaşını doldurmamış" + oturma izni + pasavan + KKTC kimlikle + ticari araç mürettebatı.
- **Dayanak düzeltmesi:** Konu başlığında "492 sayılı Harçlar Kanunu" denmiş. Çıkış harcı 492 sayılı kanuna değil, **8.3.2007 tarihli 5597 sayılı "Yurt Dışına Çıkış Harcı Hakkında Kanun ile Çeşitli Kanunlarda Değişiklik Yapılması Hakkında Kanun"**a dayanır (tebliğ Madde 1-2; "Bu Tebliğ, 5597 sayılı Kanunun 1 inci maddesine dayanılarak hazırlanmıştır").
- İkincil teyit (sadece destek): https://vergiselboyut.com/yurtdisi-cikis-harci-2026-tutar-tahsil-muafiyet/ — 1.250 TL ve muafiyet listesiyle uyumlu.

### 1c. Pasaport harcı ve defter bedeli 2026 — DOĞRULANDI

- Kaynak (birincil, resmi kurum): NVİ (İçişleri Bakanlığı Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü), "2026 Yılı Harç ve Hizmet Bedelleri", tarih 01.01.2026: https://nvi.gov.tr/edirne/2026-yili-harc-ve-hizmet-bedelleri . Erişim 24.09.2026. Yöntem: doğrudan (curl, tarayıcı User-Agent).
- Tablo birebir ("UMUMA MAHSUS PASAPORT HARÇ VE DEFTER BEDELİ"):

| Süre | Harç bedeli | Defter bedeli | Toplam |
| --- | --- | --- | --- |
| 6 Ay | 2.806,50 TL | 1.351,00 TL | 4.157,50 TL |
| 1 Yıl | 4.103,00 TL | 1.351,00 TL | 5.454,00 TL |
| 2 Yıl | 6.698,50 TL | 1.351,00 TL | 8.049,50 TL |
| 3 Yıl | 9.516,00 TL | 1.351,00 TL | 10.867,00 TL |
| 10 Yıl | 13.410,40 TL | 1.351,00 TL | 14.761,40 TL |
| Hususi (Yeşil) Pasaport | - | 1.351,00 TL | 1.351,00 TL |

- Aynı sayfadan alıntı: "T.C. kimlik Kartı / Sürücü Belgesi / Pasaport / Mavi Kart Bedelleri için Anlaşmalı Bankalar, PTT şubeleri, Vergi Dairesi Veznesi veya Dijital Vergi Dairesi https://dijital.gib.gov.tr Adresinden Ödeme Yapılabilir."
- Geçerlilik süresine göre fark: **harç** süreye bağlı (6 ay 2.806,50 → 10 yıl 13.410,40 TL); **defter bedeli sabit** (1.351,00 TL). Tabloda 4 veya 5 yıllık kalem yok; sadece 6 ay/1/2/3/10 yıl. 10 yıllık pasaportun yaş koşulları bu turda kontrol edilmedi (BULUNAMADI, ayrı kontrol: NVI pasaport hizmetleri sayfası).
- **Sitedeki eski rakamlar yanlış**: `data/degerler.yml` ve Adım 22 sayfasındaki "6 ay 2.960,81 / 1 yıl 4.328,65 / 2 yıl 7.066,84 / 3 yıl 10.039,20" değerleri resmi tablo değil. Bunlar 2025 tutarlarının yanlış oranla (%25,49) çarpılmış halidir (2025 harç 6 ay 2.359,40 × 1,2549 = 2.960,8 ✓.). Resmi tablodaki artış **%18,95** (aşağıda 1e).

### 1e. 1.351 vs 1.424,31 TL çelişkisi — ÇÖZÜLDÜ

- **Doğru rakam: 1.351,00 TL** (NVI resmi sayfası, yukarıda).
- 1.424,31 TL'nin kaynağı: 2025 defter bedeli 1.135,00 TL (ikincil arama özeti, NVI 2025 tablosu alıntısı; 2025 sayfası doğrudan açılmadı — arama özeti) × 1,2549 (2025 yeniden değerleme oranı) = 1.424,3. Yani haber siteleri "%25,49" ile hesaplamış.
- Gerçekte 2026 harç tutarları **%18,95** artışla belirlendi. Kaynak (birincil): Resmî Gazete 31.12.2025 Sayı 33124 (5. Mükerrer), **Harçlar Kanunu Genel Tebliği (Seri No: 98)**, Madde 3: https://www.resmigazete.gov.tr/eskiler/2025/12/20251231M5-28.pdf (PDF, erişim 24.09.2026). Alıntı: "Bakanlığımızca 2025 yılı için yeniden değerleme oranı %25,49 (yirmi beş virgül kırk dokuz) olarak tespit edilmiş..." ve "30/12/2025 tarihli ve 10783 sayılı Cumhurbaşkanı Kararının eki Kararın 3 üncü maddesi ile 1/1/2026 tarihinden itibaren yürürlüğe girmek üzere, 492 sayılı Kanuna bağlı tarifelerde yer alan ve uygulanmakta olan maktu harç tutarları ... % 18,95 oranında artırılmıştır." (Bu tebliğ **492 sayılı Kanun'a bağlı tarifelerin** maktu harçları içindir: pasaport harcı buradadır; çıkış harcı değil.)
- Kontrol hesabı (benim aritmetiğim, kaynak değil): 1.135 × 1,1895 = 1.350,9 ≈ 1.351 ✓.; 2.359,40 × 1,1895 = 2.806,5 ✓. Yani NVI rakamları Seri 98 oranıyla tutarlı.
- Tarife tabloları Seri 98 PDF'inde görsel (taranmış) olarak duruyor; metin çıkarılamadı, pasaport satırı ayrıca PDF'ten okunmadı. Pasaport rakamları için NVI sayfası birincil kaynak olarak kullanıldı (aynı kurumun resmi tarifesi).
- Diğer birincil kaynak notu: Seri 99 (konsolosluk harçları) 1 USD = 43,05 TL kuru içerir; bu konu dışı.

---

## 2. Apostil: nereden, ne kadar sürer, diploma kim verir

### 2a. Nereden alınır — DOĞRULANDI

- Kaynak (resmi kurum, İçişleri Bakanlığı şablonlu kaymakamlık sayfası): Onikişubat Kaymakamlığı "Apostil İşlemleri", sayfa "Güncelleme Tarihi: 18.09.2026": https://www.onikisubat.gov.tr/apostil-islemleri . Erişim 24.09.2026, doğrudan.
- Alıntılar:
  - "Ülkemizde apostil şerhi almak için: İlçelerde kaymakamlıklara, illerde ise valiliklere başvurulması gerekmektedir. 81 il ve 922 ilçede belge nereden verilmiş olursa olsun tasdik imkanı sunulmaktadır."
  - "Adli belgeler için adliyeye başvuru yapılması gerekmektedir." (Adli sicil, mahkeme kararı vb. = Adalet Komisyonu Başkanlıkları.)
  - Hukuki temel: "Yabancı Resmi Belgelerin Tasdiki Mecburiyetinin Kaldırılmasına Dair 5 Ekim 1961 tarihli Lahey Sözleşmesi" 16.09.1984 tarihli ve 18517 sayılı Resmi Gazete'de yayımlanmış, 29.09.1985'te yürürlüğe girmiştir.
- Teyit eden diğer kurum sayfaları (doğrudan): Nilüfer Kaymakamlığı https://www.nilufer.gov.tr/apostil-islemleri ; Defne Kaymakamlığı https://www.defne.gov.tr/apostil-islemleri ; Sapanca https://www.sapanca.gov.tr/apostil-tasdik-serhi-ve-islemleri ; İstanbul Valiliği Hukuk İşleri https://www.istanbul.gov.tr/hukuk-isleri-sube-mudurlugu (alıntı: "Valiliğimizce tasdik işlemleri için kesinlikle herhangi bir ücret alınmadığının bilinmesini").
- **Ücret:** "Apostil işlemi için kaymakamlıklarda veya valiliklerde herhangi bir ücret bedeli alınmamaktadır." (Onikişubat). Noter/tercüman ayrıca ücretli.
- **Kritik pratik kural (aynı sayfa, alıntı):** "Sıradan fotokopiye doğrudan fiziki apostil yapılmaz." ve "E-imzalı belgenin sıradan kâğıt çıktısına doğrudan fiziki apostil uygulanmaz." Hızlı kontrol tablosu: ıslak imza + resmi kurum mührü şart; fotokopi, e-Devlet çıktısı, sadece kaşeli veya sadece imzalı belge → "Fiziki apostil yapılamaz". "Aslı Gibidir" onaylı suret (kurum veya noter tarafından, ıslak imza + mühür) apostil yönünden değerlendirilebilir; noter onaylı tercümede "apostile esas unsur noterin tasdik imzası ve sıfatıdır. Apostil tercümenin içeriğinin doğruluğunu değil, noter tasdikini doğrular."
- Sitedeki "noterden değil, kaymakamlık/valilikten" cümlesi doğru ama eksik: noter onaylı tercüme/suret de apostilenebilir, sıra: tercüme → noter → kaymakamlık/valilik ("Ardından yeminli tercüme işleminin yapıldığı yerde bulunan Noter tarafından bu tercüme onaylatılmalıdır. Daha sonra apostil işlemleri için valilik veya kaymakamlıklara başvurmak gerekmektedir.").

### 2b. Apostil işlem süresi — BULUNAMADI

- Resmi sayfaların hiçbiri (Onikişubat, Nilüfer, Defne, Sapanca, İstanbul, Ankara Valilik Hukuk İşleri) süre taahhüdü vermiyor (doğrudan tarandı, 24.09.2026).
- Sadece Sapanca/Onikişubat'ın KVKK metninde genel "en kısa sürede ve en geç otuz gün içinde" ifadesi var; bu bilgi edinme/KVKK başvurusu içindir, **apostil süresi değil**; sayfaya apostil süresi diye yazılmamalı.
- Ticari sitelerde "çoğu yerde aynı gün" deniyor (arama özeti, ticari/ikincil, doğrulanmadı). Sayfa metni önerisi: "Resmi süre yok; çoğu yerde aynı gün/birkaç iş günü olduğu bildiriliyor (ticari kaynak); gideceğin kaymakamlığı ara."

### 2c. e-Apostil / e-Devlet — KISMEN DOĞRULANDI

- Aynı Onikişubat sayfası (alıntı): "E-devlet üzerinden e-apostil işlemi yapmak için, e-devlet sistemine giriş yaptıktan sonra "e-apostil" sekmesine tıklayarak işlemlerinizi yapabilirsiniz. e-Apostil, "www.eapostil.gov.tr" sitesi üzerinden, apostil uygulanması istenen belge için başvuruda bulunulması, başvurunun apostil uygulamaya yetkili kılınmış kuruma (Adalet Bakanlığı veya İçişleri Bakanlığı) iletilmesi, yetkili kurumun ilgili belgeyi elektronik ortamda oluşturması ... teslim edilmesi aşamalarından oluşmaktadır."
- e-Devlet "Apostil Belge Doğrulama" hizmeti (https://www.turkiye.gov.tr/icisleri-apostil-belge-dogrulamasi) sadece **doğrulama**dır (giriş ekranı; içerik oturum gerektiriyor, adı dışında açıklama görülemedi).
- BULUNAMADI: e-Apostil'in **üniversite diploması/transkripti** için kullanılıp kullanılamadığı. Ticari kaynaklar "YÖK entegrasyonu ile e-imzalı diploma e-apostil" diyor (arama özeti, ikincil, doğrulanamadı). Resmi sayfadaki kural, e-imzalı kâğıt çıktıya doğrudan fiziki apostil yapılamayacağı yönünde. Adalet Bakanlığı'nın eapostil.gov.tr kapsam listesi bu turda açılmadı (BULUNAMADI).

### 2d. Diploma apostili — kim veriyor? — KISMEN

- Apostili her hâlükârda **Valilik/Kaymakamlık** verir (2a). Üniversite diploması "idari belge" ya da noter onaylı suret/tercüme olarak işlenir.
- YÖK'ün diplomaya apostil verdiğine dair resmi kaynak bulunamadı (arama özetlerinde "YÖK ve il milli eğitim müdürlükleri" ifadesi ticari/ikincil ve doğrulanamadı → BULUNAMADI). Üniversitelerin bazıları (ör. KKTC'deki EMÜ) kendi apostil hizmetini ücretli yürütüyor ama bu Türkiye'nin ana akım süreci için kanıt değil.
- "Rektörlük ön onayı olmadan valilik apostil yapmaz" iddiası sadece ticari sitede (glovegatercume.com, arama özeti). Resmi sayfalarda bu şart yok; resmi şart: ıslak imza + resmi mühür veya noter onayı. ÇELİŞKİLİ/BULUNAMADI → sayfaya "bazı valilikler üniversite onayı isteyebilir, önce ara" gibi yazılabilir, kesin kural olarak yazılmamalı.
- **Önemli yön:** Bu araştırmadaki Almanya tarafı kaynaklarına göre (bkz. 3) uni-assist, Kiel, TU Berlin, TUM ve Hildesheim **apostil istemiyor**; dolayısıyla diploma apostili başvuru için gerekli değil. Apostil ihtiyacı Almanya'da yalnızca istisnalarda (ör. TUM için Gürcistan belgeleri) veya başka süreçlerde (vize/Ausländerbehörde) ortaya çıkabilir; bu turun kapsamı dışında.

---

## 3. Tercüme: Türkiye'de mi Almanya'da mı? Beglaubigung / apostil?

### 3a. uni-assist — DOĞRULANDI (kural bire bir)

- **Türkiye'ye özel kural**, uni-assist "Info country by country – Turkey": https://www.uni-assist.de/en/tools/info-country-by-country/details-country/country/tr/ (© 2026 uni-assist e.V.). Erişim 24.09.2026, doğrudan.
- Alıntı ("Notes on translations"): "We only accept translations from Turkey made by a sworn translator (yeminli tercüman) with a stamp that includes the phrase "yeminli tercüman" in Turkish. Translations with a stamp in English or German only cannot be accepted."
- Yani: **Türkiye'de yapılmış yeminli tercüman çevirisi kabul**; şart, kaşede Türkçe "yeminli tercüman" ibaresi. Almanya'da vereidigter Übersetzer'e gitme zorunluluğu yok. Kaşede sadece İngilizce/Almanca ibare varsa kabul edilmiyor. Bu kural, sitedeki "Alman mahkemesi tarafından yeminli tercüman" ifadesini (Adım 9) **çürütüyor**.
- Genel kural (https://www.uni-assist.de/en/how-to-apply/assemble-your-documents/translations/, doğrudan): kabul edilenler "persons or institutions authorised to make translations under oath or admissible in court" ve "a department of the issuing school or university authorised to issue such translations"; "We do not accept non-certified translations from standard translation agencies."; Türkçe belgeler orijinal dilinde + Almanca/İngilizce çeviriyle yüklenir: "Upload your education certificates in their original language, accompanied by a translation into German or English. This also applies to the overview of subjects and grades (transcript)." Belgeler İngilizce/Almanca da düzenleniyorsa çeviri gerekmez (istisnalar ülke sayfasında).
- Not: Türkiye ülke sayfası içeriği ağırlıkla lise/YKS/önlisans belgelerini sayıyor (lisans/master için ayrıca belge listesi vermiyor); çeviri kuralı tüm belgeler için genel görünüyor ama sayfa lisans diploması için ayrı bir cümle içermiyor. Master başvurusunda kural genel `educational-certificates` sayfası ile birlikte okunmalı: "For master's applications ... Please submit all certificates in their entirety. Include the diploma certificate as well as the overview of all subjects and grades (transcript). Do not omit any parts of the certificate (such as a Diploma Supplement) or single pages." ve "Upload all copies of your certificates in their original language, accompanied by a certified translation in German or English." (https://www.uni-assist.de/en/how-to-apply/assemble-your-documents/educational-certificates/).
- **Noter onayı:** uni-assist sayfalarında Türkiye'deki yeminli çeviri için noter onayı şartı **geçmiyor**. (Türkiye'de yeminli tercüman çevirisine noter tasdiki yaptırmak yerleşik pratik ve apostil için gerekli; uni-assist için gerekli olduğuna dair kaynak yok.)

### 3b. Beglaubigung / apostil gerekli mi (uni-assist) — DOĞRULANDI

- uni-assist SSS (https://www.uni-assist.de/en/faqs/send-track/, doğrudan): "Should I submit my documents online or by post? You do not need to send documents to uni-assist by post. The application via uni-assist is fully digital. Simply upload all of the required documents in your My assist account."
- Güncel kontrol listeleri (PDF, "Version: Mai 2026"): https://www.uni-assist.de/fileadmin/Downloads/Tools/Checklisten/DE/UA-Checkliste-Standard-Verfahren.pdf ve https://www.uni-assist.de/fileadmin/Downloads/Tools/Checklisten/EN/UA-Checkliste-VPD-Verfahren-EN.pdf. Yalnızca "Übersetzungen von vereidigten Übersetzer*innen anfertigen lassen" ve "Digitale Kopien von Dokumenten erstellen" adımlarını sayar; **Beglaubigung veya apostil adımı yok**. Alıntı: "Wir benötigen Ihre Zeugnisse in der Original-Sprache. Wenn Ihre Zeugnisse nicht auf Deutsch oder Englisch ausgestellt sind, benötigen wir zusätzlich eine vereidigte Übersetzung ins Deutsche oder Englische."
- "Official" belge tanımı (educational-certificates sayfası): "official certificates are those bearing a signature and stamp from the issuing institution, a reference to their automatic issuance or a verification code." (Türkiye için: ıslak imzalı/mühürlü belge veya e-Devlet doğrulama kodlu/barkodlu belge.)
- ÇELİŞKİ (eski sayfa sürümü): arama özetleri uni-assist'in eski sürümünde "officially certified copies must be sent by post" dediğini gösteriyor (ör. "Certified copies and translations" başlıklı arama sonucu). Bu sayfa şu anda aynı URL'de çeviri sayfasına yönleniyor; güncel içerikte Beglaubigung ve apostil geçmiyor. **Güncel (Mai 2026) sürüm esas alındı; eski sürüm işlemden kalktı.** Yine de her üniversitenin kendi aşamasında (kayıt/Immatrikulation) ek şart olabilir (bkz. 3c).
- Apostil: uni-assist güncel sayfalarında hiç geçmiyor → şart değil.

### 3c. Üniversite bazında (Master, Türkiye lisansı) — DOĞRULANDI

Hepsi doğrudan, erişim 24.09.2026.

| Üniversite | Süreç | Tercüme kuralı | Beglaubigung / apostil |
| --- | --- | --- | --- |
| **CAU Kiel** | uni-assist (Prüfung). Kiel PDF "Erstinformationen Master" Stand 12/2024: Nicht-EU başvuru "über: uni-assist" | "ausländisches Bachelorzeugnis oder vergleichbares Zeugnis sowie die Übersetzung; Übersetzungen müssen von staatlich vereidigten Übersetzern stammen. Englischsprachige Zeugnisse müssen nicht übersetzt werden." (studium.uni-kiel.de, Bewerbungsunterlagen Master) | Kiel sayfalarında Beglaubigung/apostil geçmiyor. Belge listesi (uni-assist için): CV, pasaport kopyası, lise diploması + çeviri, dil belgesi, lisans belgeleri, **Modulhandbuch**. Ücret: "Erstbewerbung: 75,- €; Jeder weitere Studienwunsch an der CAU Kiel: 30,- €". Kiel'de "Prüfbericht von uni-assist" (VPD değil) kullanılıyor |
| **TU Berlin** | uni-assist **VPD zorunlu** (yabancı üniversite lisansı). "A VPD is valid for one year"; VPD'siz başvuru "formal rejection"; "from the summer semester of 2026" ECTS sertifikasıyla başvuranlar için de VPD şartı | "Translations of certificates must be made by official bodies, such as the authorized department of the institution issuing the certificate, or by sworn translators." ve "Translations made abroad must be undertaken by institutions authorized to issue sworn translations (or the equivalent thereof) in their countries." (tu.berlin "Official Certification and Translation") | Kağıt belgelerde "officially certified copies" şartı geçiyor ama başvuru yüklemeleri için: "TU Berlin reserves the right to request original documents or officially certified copies of uploaded documents on a random basis or in cases of doubt". Apostil şartı yok |
| **TUM** | TUMonline; ayrıca VPD ("International students who did not obtain their entrance qualification ... in the German education system must apply for preliminary documentation (VPD)") | "Documents issued in another language must be translated by a sworn translator and authenticated with an official seal. The translator must have had access to the original document." | "It is not required to upload notarized copies of the documents for admission or enrollment. It is sufficient that the documents are authentic, i.e. bear the signature and seal of the issuing official body, alternatively a digital seal, a verification code, or a QR code". Özel kurallar sadece Çin, Gürcistan (apostil), İran için; **Türkiye özel kural listesinde yok** |
| **Uni Hildesheim** | uni-assist (tam dijital), ücret 75/30 EUR | "we require an officially certified translation of your transcripts" (İngilizce sayfa); tercüme kuralı uni-assist kurallarına bağlı | Güncel sayfada "You must upload the following documents to uni-assist online"; kağıt Beglaubigung şartı yok. ÇELİŞKİ (arama özeti, eski broşür): "Documents from abroad are only accepted if all copies – including copies of translations – are certified" — güncel sayfada doğrulanamadı, broşür PDF'i okunamadı → BULUNAMADI/güncel değil. Kayıt (Enrollment) aşamasında "officially certified copy of ... German certificate" gibi kalemler ayrı |

Kaynak URL'ler:
- https://www.studium.uni-kiel.de/de/bewerbung-einschreibung/bewerbung/bewerbungsunterlagen/bewerbungsunterlagen-master
- https://www.international.uni-kiel.de/de/internationale-studierende/bewerbung-zulassung/mit-abschluss/master/deutsche-master/bewerbungsinformationen/erstinfos_master_deutsch_1224 (PDF)
- https://www.studium.uni-kiel.de/de/bewerbung-einschreibung/bewerbung/uni-assist
- https://www.tu.berlin/en/studierendensekretariat/topics-a-z/official-certification-and-translation
- https://www.tu.berlin/en/i-a-office-of-student-affairs/masters-application-enrollment/application/applying-with-a-primary-university-degree-from-a-foreign-university
- https://www.tu.berlin/en/studierendensekretariat/checklist-for-application-and-registration
- https://www.tum.de/en/studies/application/application-info-portal/document-requirements
- https://www.tum.de/en/studies/application/application-info-portal/notarization
- https://www.tum.de/en/studies/application/application-info-portal/application-international
- https://www.uni-hildesheim.de/en/international/studying-at-our-university/international-bachelor-and-master-students/translate-to-english-internationale-studieninteressierte/

Genel sonuç (4 üniversite ve uni-assist): **Türkiye'de yapılmış yeminli tercüman çevirisi (Türkçe "yeminli tercüman" kaşeli) yeterli; Almanya'da yeniden çevirtmeye gerek yok; apostil ve Beglaubigung başvuru aşamasında istenmiyor.** Sadece TU Berlin/TUM gibi yerlerde şüphe halinde orijinal veya onaylı kopya istenebilir. Kiel'in "staatlich vereidigt" ifadesinin Türkiye'deki yeminli tercümanı kapsadığı Kiel sayfasında açıkça yazılı değil; uni-assist kanalı üzerinden gittiği için uni-assist'in Türkiye kuralı uygulanıyor (çıkarım, işaretle).
- Not (BULUNAMADI): Türkiye'deki "yeminli tercüman" noter yeminli; noter onayının Kiel/TUM/TUB için gerekli olup olmadığı sayfalarda geçmiyor.

### 3d. anabin tarafı ve Almanya'da tercüme — BULUNAMADI (kural yok)

- "Almanya'da vereidigter Übersetzer" seçeneği ayrıca kabul (uni-assist "In Germany, these persons are called vereidigte Übersetzer" arama özeti; genel sayfada "court-certified translator" terimi geçiyor). Zorunluluk değil; Türkiye'de yapılan da kabul. Maliyet karşılaştırması bu turda bulunmadı.

---

## 4. "Çoğu Türk üniversitesi H+ statüsünde" iddiası

### Sonuç: ÇELİŞKİLİ→ÇÖZÜLDÜ. anabin'de "Türkei" için listelenen 231 kurumun tamamı H+.

- Yöntem: **Playwright** (Chromium), anabin.kmk.org Institutionen → Land "Türkei" → 231 sonuç, üç sayfa (100'lük) gezildi, JSON'a çıkarıldı. Erişim 24.09.2026. URL: https://anabin.kmk.org/no_cache/filter/institutionen.html (arama arayüzü JS ile çalışıyor; doğrudan curl ile sonuç gelmiyor).
- Bulgu (sayım): "Ergebnisse 231"; statü: **231 × H+**, H+/- yok, H- yok. Tür dağılımı: 129 Staatliche Universität, 97 Private Stiftungsuniversität, 4 Militärhochschule, 1 Akademie.
- Örnek satırlar: Orta Doğu Teknik Üniversitesi (Staatliche Universität, H+), Boğaziçi Üniversitesi (H+), İstanbul Teknik Üniversitesi (H+), Koç Üniversitesi (Private Stiftungsuniversität, H+), Sabancı Üniversitesi (H+), İhsan Doğramacı Bilkent Üniversitesi (H+), Hacettepe, Ankara, Marmara, Ege, Dokuz Eylül, Yıldız Teknik, Anadolu (hepsi H+).
- Statü tanımı (anabin, resmi): "Ausländische Hochschulabschlüsse können in Deutschland in der Regel nur dann anerkannt werden, wenn sie an einer staatlichen oder staatlich anerkannten Institution erworben wurden. Diese Hochschulen sind in der Datenbank anabin mit dem Status H+ gekennzeichnet. Für Hochschulabschlüsse aus manchen Staaten sind für die Anerkennung in Deutschland zudem weitere Kriterien zu erfüllen. In diesem Fall hat die Institution den Status H+/-." (https://anabin.kmk.org/rechercheanleitung-hochschule, doğrudan).
- Sınırlar (önemli):
  1. "Die anabin-Datenbank erhebt keinen Anspruch auf Vollständigkeit. Daher kann es vorkommen, dass Ihre Institution in anabin noch nicht aufgeführt oder bewertet ist." (aynı sayfa). Yani listede olmayan üniversite = "H+ değil" demek değil, "değerlendirilmemiş".
  2. Sayım, listede olanlar içindir; listede olmayan Türk üniversitesi sayısını bilmiyoruz (BULUNAMADI). Yani "hepsi H+" değil, "listelenenlerin hepsi H+".
  3. H+ sadece **kurumun** tanınmasıdır. anabin SSS (https://anabin2.kmk.org/en/filter/faq/studium.html): "Über die Zugangsvoraussetzungen für ein Masterstudium bestimmen die Hochschulen ... Die Hochschule entscheidet daher auch in eigener Zuständigkeit über Ihren Zulassungsantrag, d.h. Sie wird Ihren bisherigen Studienabschluss individuell prüfen." Yani H+ ≠ kabul; kabul kararı üniversitede. Ayrıca abschluss için "Hochschulabschlüsse" bölümünde ayrı değerlendirme var (bu turda Türk lisans türü satırı ayrıca doğrulanmadı).
  4. Anadolu Üniversitesi açıköğretim (AÖF) gibi uzaktan programların **derece** seviyesindeki durumu bu turda kontrol edilmedi (BULUNAMADI).
- **Hochschulkompass ile H+ kontrolü yapılmaz:** Hochschulkompass (HRK) Almanya'daki kurum/program veri tabanıdır (anabin SSS: "Hierzu gibt der Hochschulkompass der Hochschulrektorenkonferenz Auskunft" — yalnızca Almanya'daki güncel program sunumu için). Türk üniversitesi için doğru araç anabin'dir. DAAD'nin Türkiye sayfalarında H+ dili aranmadı; DAAD GLOBUS Türkiye raporunda (https://static.daad.de/media/daad_de/pdfs_nicht_barrierefrei/infos-services-fuer-hochschulen/laendersachstaende/expertise-zu-themen-laendern-regionen/tuerkei_daad_sachstand.pdf, PDF) anabin/H+ geçmiyor → BULUNAMADI.
- **Nasıl kontrol edilir (okur için):** anabin.kmk.org → Institutionen → "Suchen nach Institutionen" → Land: Türkei → üniversite adını Türkçe yaz (Türkçe karakterli, ör. "Orta Doğu Teknik") → kaydı aç → "Status" bölümü.
- Sitedeki mevcut ifade ("Genelleme kaldırıldı, okura kendi kontrolü öneriliyor") güvenli; ama artık somut olgu yazılabilir: "24.09.2026 itibarıyla anabin'de Türkiye için listelenen 231 kurumun tamamı H+ (129 devlet, 97 vakıf, 4 askeri, 1 akademi). Yine de kendi üniversiteni ara."

---

## 5. Apostil, VPD (Vorprüfungsdokumentation) ve uni-assist normal süreci — DOĞRULANDI

- **VPD tanımı** (uni-assist sözlük, doğrudan https://www.uni-assist.de/en/tools/glossary-of-terms/): "Vorprüfungsdokumentation (VPD) (preliminary review documentation): A certificate issued by uni-assist which you submit directly to the university when you apply there."
- **VPD süreci** (uni-assist VPD kontrol listesi, "Version: May 2026", PDF): VPD her istediğin zaman istenebilir; **1 yıl geçerli** ("It is valid for one year after the date of issue"); "You will also need to apply directly to your university before the application deadline. In order to do this, you need to submit the VPD to the university."; süre "After about 4–6 weeks: the status in My assist will change"; olumlu sonuçta VPD "My inbox"tan indirilir; VPD'yi belgelerle birlikte üniversiteye sunarsın ("Submit the VPD to the university together with all documents"); belgeler bir kez yüklenir.
- **Normal (standart) süreç** (uni-assist standart kontrol listesi, "Version: Mai 2026", PDF): Belgeler My assist'e yüklenir, ücret ödenir, ~4–6 hafta sonra sonuç; olumluysa "leitet uni-assist Ihre Bewerbung elektronisch an die Hochschule weiter". Tavsiye: "am besten mindestens 8 Wochen vor dem Ende der Bewerbungsfrist". VPD sürecinde ise üniversiteye ayrıca başvurulur: uni-assist SSS: "if you are applying for the preliminary review documentation (VPD), you should allow more time for your application, because you generally still have to apply to the university directly using the VPD."
- **Hangi üniversite hangisi:** Kiel = uni-assist ile Prüfbericht/Prüfung (VPD değil; Kiel PDF: "Bewerbung über: uni-assist"); TU Berlin ve TUM = VPD zorunlu; Hildesheim = uni-assist üzerinden başvuru (VPD değil, uni-assist başvuruyu üniversiteye iletir). Üniversite bazında hangi yolun geçerli olduğu her programda ayrıca teyit edilmeli (TUM'da program bazında farklı olabilir; bu turda program bazlı bakılmadı).
- **Apostil ile ilişkisi:** VPD/uni-assist için apostil gerekmez (3b). Bu nedenle "önce apostil, sonra VPD" gibi bir sıra yok; VPD için sıra: yeminli tercüme (Türkiye'de olabilir) → dijital tarama → My assist yükleme.
- Ücret (uni-assist, birincil, doğrudan): ilk başvuru 75 EUR, her ek program 30 EUR (Kiel PDF ve Hildesheim sayfasıyla uyumlu; VPD ücreti bu turda ayrıca çekilmedi).

---

## Sitedeki mevcut içerikle çelişen noktalar (düzeltilmesi gerekenler; bu turda düzenlenmedi)

1. `docs/faz-5-once/22-turkiye-tarafi.md` + `data/degerler.yml`: pasaport harç rakamları yanlış (bkz. 1c); defter bedeli 1.351 (tek rakam); çıkış harcı doğrulandı (1.250 TL) ve muafiyet listesi genişletilmeli (7 yaş altı + oturma izni + pasavan + KKTC kimlik + ticari araç mürettebatı). Öğrenci muafiyeti yok.
2. `docs/faz-2-belgeler/09-onay-tercume.md`: "Alman mahkemesi tarafından yeminli" ve "Türkiye'deki tercümanlar uni-assist tarafından kabul edilip edilmediği net değil" → uni-assist Türkiye sayfası kabul ediyor (şart: Türkçe "yeminli tercüman" kaşesi). Apostil için süre hâlâ BULUNAMADI. Ayrıca "beglaubigte Kopie" bölümü: uni-assist tam dijital, Beglaubigung/apostil yok.
3. `docs/faz-1-hazirlik/03-uygunluk-analizi.md`: H+ genellemesi artık sayıyla desteklenebilir (231/231), ama "listelenmemiş" ve "H+ ≠ kabul" uyarısı korunmalı.
4. `docs-internal/celiskiler.md` "Pasaport harcı defter bedeli" maddesi: çözüldü (1.351 doğru).

---

## Sayfaya yazılabilecek özet (okura yönelik)

### Çıkış harcı ve pasaport (Türkiye'den ayrılırken)

**Çıkış harcı 2026'da 1.250 TL** (Resmî Gazete, 31.12.2025). Yurt dışına her çıkışta ödenir, uçuştan **önce** ödemen gerekir: Dijital Vergi Dairesi (dijital.gib.gov.tr), GİB Mobil, banka uygulaması, vergi dairesi veya PTT. **Öğrenciler için özel muafiyet yok**: burslu olman, yeşil pasaport, uzun süre gitmen fark ettirmez. Muaf olanlar: 7 yaşını doldurmamış çocuklar, çıkış anında **yurt dışında oturma izni** olanlar (belgelemen gerekir), pasavanla çıkanlar, KKTC'ye kimlikle gidenler, ticari araç mürettebatı. Yani Almanya'da oturma iznini (Aufenthaltstitel) aldıktan sonra yaptığın çıkışlarda muafiyet talep edebilirsin; ilk gidişte vizeyle çıkıyorsan ödersin. Harcı ödedin ama uçmadıysan iade başvurusu yapılabilir. Yılbaşında tutar değişir; Ocak ayının 10'una kadar önceki yılın tutarıyla ödenmiş harç geçerli.

**Pasaport (2026, NVİ tarifesi):** harç süreye göre değişir, defter bedeli sabit **1.351 TL**. Toplam: 6 ay 4.157,50 TL; 1 yıl 5.454 TL; 2 yıl 8.049,50 TL; 3 yıl 10.867 TL; 10 yıl 14.761,40 TL (harç 13.410,40 + defter 1.351). İnternette gördüğün "1.424,31 TL defter bedeli" ve "2.960,81 TL 6 aylık harç" gibi rakamlar yanlış hesap; resmi rakam NVİ sayfasında.

### Apostil (kısa)

Apostil, belgenin resmî olduğunu gösteren uluslararası bir onay şerhi. Türkiye'de **kaymakamlık (ilçede) veya valilik (ilde)** verir; adli belgeler (sabıka kaydı, mahkeme kararı) için ise adliyedeki Adalet Komisyonu. **Ücretsiz**, noter ve tercüman ücreti ayrı. Belge üzerinde ıslak imza ve resmî mühür olmalı; fotokopiye, e-Devlet çıktısına veya e-imzalı kâğıt çıktıya doğrudan apostil yapılmaz, önce noterden "aslı gibidir" onayı gerekir. Süre için resmi bir rakam yok; gideceğin kaymakamlığı ara. **İyi haber:** uni-assist ve incelediğimiz üniversiteler (Kiel, TU Berlin, TUM, Hildesheim) başvuruda **apostil istemiyor**; apostili başka bir amaç için (örn. başka bir kurum) gerekiyorsa yaptır.

### Tercüme: Türkiye'de mi, Almanya'da mı?

**Türkiye'de yaptırabilirsin.** uni-assist Türkiye kuralı: çeviri "yeminli tercüman" tarafından yapılmalı ve kaşede Türkçe "yeminli tercüman" ibaresi olmalı; sadece İngilizce/Almanca kaşe kabul edilmiyor. Sıradan tercüme bürosunun onaysız çevirisi kabul edilmez. Belgelerin Türkçe aslını da yüklersin; çeviri Almanca veya İngilizce olabilir. Almanya'da "vereidigter Übersetzer" (Alman mahkemesince yeminli tercüman) zorunlu değil. Belgeleri uni-assist'e **dijital** yüklersin; postayla noter onaylı kopya (Beglaubigung) göndermen gerekmiyor. Üniversiteler (TU Berlin, TUM) şüphe halinde orijinal veya onaylı kopya isteyebilir; TUM belgenin imza/mührü veya doğrulama kodu olmasını yeterli sayıyor.

### VPD nedir, uni-assist ile fark

**VPD (Vorprüfungsdokumentation = ön inceleme belgesi):** uni-assist'in senin belgelerini kontrol edip verdiği bir belge; **sen** onu üniversiteye kendin sunarsın, 1 yıl geçerli. TU Berlin ve TUM bunu zorunlu tutuyor. Normal uni-assist sürecinde (Kiel, Hildesheim) uni-assist başvurunu kontrol edip doğrudan üniversiteye iletir. İkisinde de belgeler tek seferde yüklenir; inceleme yaklaşık 4-6 hafta sürer, son tarihten en az 8 hafta önce başla.

### "Üniversitem H+ mı?" (anabin)

anabin, Almanya'da yabancı üniversitelerin tanınıp tanınmadığını gösteren resmî veri tabanı (KMK/ZAB). **H+** = kurum Almanya'da tanınıyor; H+/- = ek koşul var; H- = tanınmıyor. 24.09.2026 itibarıyla anabin'de Türkiye için listelenen 231 kurumun (129 devlet, 97 vakıf, 4 askeri okul, 1 akademi) hepsi H+. Ama H+ kabul garantisi değil: master'a kabul kararını üniversite verir, dereceni ayrıca inceler. Üniversiten listede yoksa bu "tanınmıyor" demek değil, "henüz değerlendirilmemiş" demek; hedef üniversiteye sor. Kontrol: anabin.kmk.org → Institutionen → Land: Türkei → üniversite adı → Status.
