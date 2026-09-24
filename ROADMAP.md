# ROADMAP

Kaynak prompt: `ardavault` reposundaki `🏰 300-Projects/almanya-masters-guide/PROMPT.md`.
Bu dosya oturumlar arası ilerlemeyi takip eder — her iş bitince işaretlenir.

## Durum (2026-09-24)

**Blokaj:** Bu ortamın network policy'si dış siteleri engelliyor (WebFetch → `EGRESS_BLOCKED`,
test edilen domainler: 3ds.hacks.guide, auswaertiges-amt.de, daad.de). WebSearch çalışıyor ama
birincil kaynak sayfalarının tam metnini okuyup doğrulamaya yetmiyor. Araştırma ve yazım fazları
bu engel kalkana kadar duraklatıldı. Arda'dan ortam ayarlarından network access'i genişletmesi
istendi.

## Faz 0: İlham analizi + iskelet
- [ ] `docs-internal/ilham-analizi.md` — 3ds.hacks.guide analizi (network engeli çözülünce)
- [x] `ROADMAP.md` oluşturuldu
- [x] `SOURCES.md` oluşturuldu
- [ ] VitePress kurulumu, sidebar, boş sayfalar, şablon, bileşen taslakları
- [ ] Build'in geçtiğini doğrula

## Faz 1: Araştırma turu (her sayfa için kaynak toplama → `data/degerler.yml`)
- [ ] Sperrkonto tutarı ve belirlenme yöntemi
- [ ] Öğrenci çalışma gün limiti ve istisnalar
- [ ] Asgari ücret / Minijob sınırı
- [ ] Anmeldung süresi ve belgeler
- [ ] İş arama oturumu (§20 AufenthG) süresi, Mavi Kart eşikleri
- [ ] APS belgesi — Türkiye için durum
- [ ] Türkiye'de öğrenci vizesi başvuru kanalı (güncel)
- [ ] AB dışı öğrenci harcı olan eyaletler
- [ ] Yasal sağlık sigortası öğrenci tarifesi kuralları
- [ ] Sperrkonto/sigorta sağlayıcı karşılaştırması
- [ ] uni-assist ücretleri ve süreleri
- [ ] Dil sınavı ücretleri/merkezleri (Türkiye)
- [ ] T.C. tarafı: askerlik tecili, çıkış harcı, apostil, tercüme, pasaport harcı
- [ ] Rundfunkbeitrag tutarı ve muafiyet

## Faz 2: Yazım (Ana rota → dallanmalar → referans)
- [ ] Giriş: Ana sayfa, Get Started, Öz değerlendirme, Takvim
- [ ] Faz 1 (Hazırlık): adım 1–7
- [ ] Faz 2 (Belgeler): adım 8–10
- [ ] Faz 3 (Başvuru): adım 11–15
- [ ] Faz 4 (Vize): adım 16–20
- [ ] Faz 5 (Gitmeden önce): adım 21–23
- [ ] Faz 6 (İlk haftalar): adım 24–29
- [ ] Faz 7 (Okurken/sonrası): adım 30–32
- [ ] Dallanma sayfaları (7 adet, bkz. PROMPT.md §3)
- [ ] Referans: Sözlük (≥80 terim), SSS, Troubleshooting, Şablonlar, Araçlar, Kaynaklar

## Faz 3: Doğrulama turu (ayrı geçiş, zorunlu)
- [ ] `docs-internal/dogrulama-raporu.md` — her iddia kaynağıyla eşleştirilecek

## Faz 4: Acemi testi + eksiklik taraması
- [ ] Baştan sona okur gözüyle geçiş
- [ ] Takılma noktaları / süre hafife alma / geri dönüşsüz hatalar taraması

## Faz 5: Son kontrol
- [ ] Build temiz, kırık link yok, README tam, teslim kriterleri (PROMPT.md §8) karşılandı
