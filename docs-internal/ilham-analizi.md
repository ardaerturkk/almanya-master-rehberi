# İlham analizi: 3ds.hacks.guide

Bu site, teknik bir "sıfırdan yerleşene kadar" rehberinin nasıl kurgulanacağı için referans
alınıyor. Analiz `https://3ds.hacks.guide/` üzerinden yapıldı (2026-09-24).

## Gözlemler

- **Hiyerarşik navigasyon**: Sol sidebar tüm süreci adım adım listeliyor; üstte FAQ,
  Troubleshooting, "durumunu kontrol et" gibi kısa yönlendirme sayfaları var. Bizim sitede
  bunun karşılığı: `Başlamadan Önce`, `Uygun muyum?`, `Takvim`, ve sidebar'daki Faz 1–7.
- **Bilgi kutuları**: INFO (bağlamsal not), DANGER (geri dönüşü olmayan risk), TIP (sıradaki
  adıma yönlendirme) tipografik olarak ayrılıyor. Bizim şablonda karşılığı `::: info`,
  `::: warning`, `::: danger` VitePress container'ları — zaten sayfa şablonunda tanımlı.
- **Progressive disclosure**: Karmaşık konular ayrı "Extras" sayfalarına ayrılmış, ana akış
  şişirilmemiş. Bizim karşılığımız: dallanma sayfaları (30 yaş üstü, şartlı kabul, vize reddi
  vb.) — ana 32 adımın dışında tutulan sapma noktaları.
- **Ton**: Teknik ama küçümsemeyen, doğrudan talimat dili. Bizim ton kuralımızla (direkt,
  yüksek sinyal, dolgu yok) örtüşüyor.
- **Güven inşası**: Sayfa başında "önce şu önkoşulları oku" uyarısı, riskli adımlarda büyük
  görsel ağırlıklı DANGER kutuları. Bizim vize/Sperrkonto/askerlik gibi geri dönüşü olmayan
  adımlarda aynı mantığı `::: danger` ile uygulayacağız.
- **Topluluk desteği**: Discord/GitHub linkleri, katkı sayfası. Bizim karşılığımız
  `referans/kaynaklar.md` (Kaynaklar ve Katkı) sayfası.

## Sonuç: uyarlanan kalıp

Mevcut sayfa şablonu (`⏱ Süre / 💶 Maliyet / 📅 Ne zaman` özet satırı + info kutusu + checklist +
adımlar + warning/danger + "bu adım bitti mi" kontrolü + sık hatalar + kaynaklar) 3ds.hacks.guide
kalıbının Almanya-master-süreci için uyarlanmış hali. Ek olarak değiştirdiğimiz nokta: her adımda
"tek doğru yol" yerine karşılaştırmalı tablo (PROMPT.md §0 zorunluluğu) — 3ds.hacks.guide'da tek
bir donanım/yazılım yolu olduğu için bu ihtiyaç yok, bizim rehberde vize kanalı, finansman kanıtı,
sigorta türü gibi çoklu yol her zaman var.
