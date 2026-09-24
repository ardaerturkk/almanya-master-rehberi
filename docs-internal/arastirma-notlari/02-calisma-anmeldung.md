# Ham araştırma: Çalışma limitleri, Mindestlohn/Minijob, Werkstudent, Anmeldung

Agent raporu, 24.09.2026. gesetze-im-internet.de'ye WebFetch 503 verdi ama proxy üzerinden curl
ile doğrudan erişildi — kanun metinleri (§16b AufenthG, §17/§19 BMG) birincil kaynaktan teyitli.

## 1. Çalışma gün limiti (AufenthG §16b Abs.3)

- **140 tam gün / 280 yarım gün** — DİKKAT: PROMPT.md'de "120/240" örneği geçiyordu, bu ESKİ
  rakam. 01.03.2024'te Fachkräfteeinwanderungsgesetz ile 120→140, 240→280 olarak güncellendi.
  2026 için ek değişiklik kanıtı yok.
  [Kaynak: gesetze-im-internet.de/aufenthg_2004/__16b.html, curl ile doğrudan, 24.09.2026]
- Yarım gün: haftada ≤4 saat çalışılan gün. Alternatif hesap: ders döneminde haftada ≤20 saat
  VEYA tatilde 2,5 iş günü/hafta — öğrenci için daha avantajlı olan uygulanır (Günstigkeitsprüfung).
- **İstisna**: "Studentische Nebentätigkeiten" (Hilfskraft/wissenschaftliche Hilfskraft, üniversite
  bünyesinde) 140 günlük hesaba dahil edilmiyor — sınırsız. [§16b Abs.3 Satz 2]

## 2. Mindestlohn ve Minijob-Grenze 2026

- Asgari ücret: **13,90 EUR/saat** brüt (01.01.2026'dan itibaren, önceki 12,82; 2027'de 14,60'a
  çıkacak). [Kaynak: bundesregierung.de/breg-de/aktuelles/mindestlohn-steigt-2391010, 21.09.2026]
- Minijob-Grenze: **aylık 603 EUR, yıllık 7.236 EUR** (2022'den beri asgari ücrete dinamik bağlı).
  Pratik: 603/13,90 ≈ ayda max ~43,4 saat.
  [Kaynak: minijob-zentrale.de/DE/die-minijobs/minijob-mit-verdienstgrenze, 24.09.2026]
  [Destek: deutsche-rentenversicherung.de BW basın açıklaması, 22.12.2025]
- Übergangsbereich (Midijob) 2026: 603,01-2.000 EUR. [Kaynak: tk.de/firmenkunden/.../mindestlohn-2026, 24.09.2026]

## 3. Werkstudent statüsü

- İşveren Kranken-/Pflege-/Arbeitslosenversicherung primi ödemiyor (gelirden bağımsız), sadece
  Rentenversicherung ödeniyor. **Ana kural: haftada 20 saat üst sınır**, istisnalar var (akşam/
  gece/hafta sonu ağırlıklı çalışma, ders dışı dönemde daha fazla saat mümkün).
  [Kaynak: tk.de/firmenkunden/.../werkstudenten-regel-2036662, 24.09.2026 — birincil, TK]
- Sağlık sigortası: Werkstudent artık ebeveyn üzerinden Familienversicherung'a giremiyor (gelir
  sınırı aşılıyor), kendi KVdS üzerinden sigortalanıp primi kendi ödüyor.
- **26 hafta kuralı** (12 aylık dönemde 26 haftadan fazla haftada 20 saati aşarsa statü düşer) —
  TK sayfasında doğrudan görülmedi, DGB gibi ikincil kaynakta var. **Doğrulanamadı, teyit gerekli.**

## 4. Anmeldung

- **Yasal süre: taşınmadan itibaren 2 hafta (14 gün)** — BMG §17 Abs.1, curl ile doğrudan
  doğrulandı. [Kaynak: gesetze-im-internet.de/bmg/__17.html, 24.09.2026]
- Gerekli belge: Wohnungsgeberbestätigung (ev sahibi teyidi, BMG §19) — ev sahibinin adı/adresi,
  taşınma tarihi, dairenin adresi, taşınanların adı. Kimlik/pasaport da gerekiyor (ikincil kaynakla
  teyitli, BMG'nin kendi maddesi ayrıca kontrol edilmedi).
  [Kaynak: gesetze-im-internet.de/bmg/__19.html, 24.09.2026]
- Kurum: Meldebehörde (şehre göre Bürgeramt/Einwohnermeldeamt).
- **Randevu darlığı**: Berlin'de bekleme süresi haberlerde çelişkili (8-12 hafta vs bazı
  dönemlerde ~27 gün) — resmi istatistik yok, sadece yaygın şikayet olarak doğru kabul edilmeli.
  [Kaynak: berlin-live.de/.../buergeramt-termin-mangel-wartezeiten-wochen, 24.09.2026 — ikincil]

## Rehbere eklemeden önce yapılması gerekenler
1. 140/280 rakamının PROMPT.md'deki eski 120/240 örneğinin yerini aldığını not et — bu önemli
   bir güncelleme, sayfada net vurgulanmalı.
2. 26 hafta Werkstudent kuralını TK'nin PDF Beratungsblatt'ından teyit et.
3. Anmeldung randevu bekleme süresini şehir bazlı (en az Berlin, München, büyük şehirler) ayrı
   ayrı, "değişken/güncel bilgi için şehrin kendi sitesine bak" notuyla yaz.
