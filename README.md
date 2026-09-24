# Almanya Master Rehberi

Türkiye'de lisansını bitirmiş/bitirmek üzere olan T.C. vatandaşları için Almanya'da yüksek
lisans yapma sürecini sıfırdan yerleşene kadar adım adım anlatan, tamamen kaynaklı bir Türkçe
rehber sitesi. [3ds.hacks.guide](https://3ds.hacks.guide) tarzında: 7 fazda 32 numaralı adım,
7 dallanma sayfası ve 6 referans sayfası.

**Canlı site**: `https://ardaerturkk.github.io/almanya-master-rehberi/` (GitHub Pages, Actions
ile otomatik deploy — repo ayarlarında Pages kaynağının "GitHub Actions" olarak açık olması
gerekiyor).

## Bu bir doğruluk projesi

Sitede yazan hiçbir olgusal iddia (tutar, süre, belge adı) kaynaksız değil. Bulunamayan veya
doğrulanamayan bilgi tahminle doldurulmadı — ya çıkarıldı ya da sayfada açıkça
`::: warning Doğrulanmadı` ile işaretlendi. Detay için `docs-internal/dogrulama-raporu.md` ve
`docs-internal/celiskiler.md`'ye bak.

## Yapı

```
docs/                     VitePress içerik (32 adım + dallanma + referans + giriş sayfaları)
  .vitepress/config.mts   Site yapılandırması ve sidebar
  .vitepress/theme/       Özel tema + etkileşimli Vue bileşenleri (checklist, hesaplayıcılar)
data/degerler.yml         Tüm değişken değerler (tutar/süre), kaynak + doğrulama tarihiyle
SOURCES.md                Kullanılan tüm kaynakların özet listesi
ROADMAP.md                Oturumlar arası ilerleme takibi
docs-internal/            Yayınlanmayan çalışma dosyaları (araştırma notları, doğrulama raporu,
                           çelişki kaydı, ilham analizi)
```

## Geliştirme

```bash
npm install
npm run docs:dev       # yerel geliştirme sunucusu
npm run docs:build     # production build
npm run docs:preview   # build'i yerel olarak önizle
```

## Katkıda bulunma

Hata bulursan veya güncel olmayan bir bilgi fark edersen issue açabilir veya pull request
gönderebilirsin. Kaynak hiyerarşisi ve araştırma protokolü için sitedeki
[Kaynaklar ve Katkı](https://ardaerturkk.github.io/almanya-master-rehberi/referans/kaynaklar)
sayfasına bak.

## Lisans

- İçerik: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- Kod: MIT

## Sorumluluk reddi

Bu site bilgi verir, hukuki veya mali danışmanlık vermez. Nihai söz her zaman ilgili
konsolosluk, Ausländerbehörde (yabancılar dairesi) veya üniversitenindir.
