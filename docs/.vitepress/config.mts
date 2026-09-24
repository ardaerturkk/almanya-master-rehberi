import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "tr-TR",
  title: "Almanya Master Rehberi",
  description: "Almanya'da yüksek lisans yapmak isteyenler için sıfırdan yerleşene kadar adım adım rehber.",
  base: "/almanya-master-rehberi/",
  cleanUrls: true,
  lastUpdated: true,

  head: [["link", { rel: "icon", href: "/almanya-master-rehberi/favicon.svg" }]],

  themeConfig: {
    nav: [
      { text: "Başla", link: "/baslamadan-once" },
      { text: "Takvim", link: "/takvim" },
      { text: "Checklist'im", link: "/checklist" },
      { text: "Referans", link: "/referans/" },
    ],

    sidebar: [
      {
        text: "Giriş",
        items: [
          { text: "Başlamadan Önce", link: "/baslamadan-once" },
          { text: "Uygun muyum?", link: "/uygun-muyum" },
          { text: "Takvim: Geriye Doğru Planlama", link: "/takvim" },
        ],
      },
      {
        text: "Faz 1: Hazırlık",
        collapsed: false,
        items: [
          { text: "1. Almanya'da Master Sistemi", link: "/faz-1-hazirlik/01-master-sistemi" },
          { text: "2. Program Bulma", link: "/faz-1-hazirlik/02-program-bulma" },
          { text: "3. Uygunluk Analizi", link: "/faz-1-hazirlik/03-uygunluk-analizi" },
          { text: "4. Dil Sınavları", link: "/faz-1-hazirlik/04-dil" },
          { text: "5. GRE / GMAT", link: "/faz-1-hazirlik/05-gre-gmat" },
          { text: "6. Bütçe Planı", link: "/faz-1-hazirlik/06-butce" },
          { text: "7. Askerlik Tecili", link: "/faz-1-hazirlik/07-askerlik" },
        ],
      },
      {
        text: "Faz 2: Belgeler",
        items: [
          { text: "8. Belge Listesi", link: "/faz-2-belgeler/08-belge-listesi" },
          { text: "9. Onay, Tasdik, Tercüme", link: "/faz-2-belgeler/09-onay-tercume" },
          { text: "10. CV ve Motivasyon Mektubu", link: "/faz-2-belgeler/10-cv-motivasyon" },
        ],
      },
      {
        text: "Faz 3: Başvuru",
        items: [
          { text: "11. Başvuru Kanalı", link: "/faz-3-basvuru/11-basvuru-kanali" },
          { text: "12. uni-assist Adım Adım", link: "/faz-3-basvuru/12-uni-assist" },
          { text: "13. Üniversite Portalı", link: "/faz-3-basvuru/13-universite-portali" },
          { text: "14. Beklemek", link: "/faz-3-basvuru/14-beklemek" },
          { text: "15. Kabul", link: "/faz-3-basvuru/15-kabul" },
        ],
      },
      {
        text: "Faz 4: Vize",
        items: [
          { text: "16. Vize Türü ve Kanal", link: "/faz-4-vize/16-vize-turu" },
          { text: "17. Sperrkonto Açma", link: "/faz-4-vize/17-sperrkonto" },
          { text: "18. Sağlık Sigortası", link: "/faz-4-vize/18-saglik-sigortasi" },
          { text: "19. Vize Belgeleri", link: "/faz-4-vize/19-vize-belgeleri" },
          { text: "20. Vizeyi Aldıktan Sonra", link: "/faz-4-vize/20-vize-sonrasi" },
        ],
      },
      {
        text: "Faz 5: Gitmeden Önce",
        items: [
          { text: "21. Konaklama", link: "/faz-5-once/21-konaklama" },
          { text: "22. Türkiye Tarafı İşler", link: "/faz-5-once/22-turkiye-tarafi" },
          { text: "23. Bavul", link: "/faz-5-once/23-bavul" },
        ],
      },
      {
        text: "Faz 6: İlk Haftalar",
        items: [
          { text: "24. Varış Günü", link: "/faz-6-ilk-haftalar/24-varis" },
          { text: "25. Anmeldung", link: "/faz-6-ilk-haftalar/25-anmeldung" },
          { text: "26. Immatrikulation", link: "/faz-6-ilk-haftalar/26-immatrikulation" },
          { text: "27. Banka ve Steuer-ID", link: "/faz-6-ilk-haftalar/27-banka-vergi" },
          { text: "28. Ausländerbehörde", link: "/faz-6-ilk-haftalar/28-auslanderbehorde" },
          { text: "29. Rundfunkbeitrag vb.", link: "/faz-6-ilk-haftalar/29-sozlesmeler" },
        ],
      },
      {
        text: "Faz 7: Okurken ve Sonrasında",
        items: [
          { text: "30. Çalışma Hakları", link: "/faz-7-sonrasi/30-calisma-haklari" },
          { text: "31. Oturum İzni Uzatma", link: "/faz-7-sonrasi/31-oturum-uzatma" },
          { text: "32. Mezuniyet Sonrası", link: "/faz-7-sonrasi/32-mezuniyet-sonrasi" },
        ],
      },
      {
        text: "Dallanmalar",
        items: [
          { text: "Almanca mı, İngilizce mi?", link: "/dallanma/almanca-mi-ingilizce-mi" },
          { text: "uni-assist mi, doğrudan mı?", link: "/dallanma/uni-assist-mi-dogrudan-mi" },
          { text: "Finansman kanıtları", link: "/dallanma/finansman-kanitlari" },
          { text: "30 yaş üstüyüm", link: "/dallanma/30-yas-ustu" },
          { text: "Şartlı kabul aldım", link: "/dallanma/sartli-kabul" },
          { text: "Lisansım bitmedi", link: "/dallanma/lisans-bitmedi" },
          { text: "Vize reddi aldım", link: "/dallanma/vize-reddi" },
          { text: "Kabulüm WiSe'ye yetişmezse (SoSe)", link: "/dallanma/sose-ve-erteleme" },
        ],
      },
      {
        text: "Referans",
        items: [
          { text: "Sözlük", link: "/referans/sozluk" },
          { text: "SSS", link: "/referans/sss" },
          { text: "Sorun Giderme", link: "/referans/sorun-giderme" },
          { text: "Belge Şablonları", link: "/referans/sablonlar" },
          { text: "Araçlar", link: "/referans/araclar" },
          { text: "Kaynaklar ve Katkı", link: "/referans/kaynaklar" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ardaerturkk/almanya-master-rehberi" },
    ],

    footer: {
      message:
        "Bu site bilgi verir, hukuki veya mali danışmanlık vermez. Nihai söz her zaman ilgili konsolosluk, Ausländerbehörde veya üniversitenindir.",
      copyright: "İçerik CC BY-SA 4.0 · Kod MIT",
    },

    search: {
      provider: "local",
    },

    outline: {
      level: [2, 3],
      label: "Bu sayfada",
    },

    docFooter: {
      prev: "Önceki adım",
      next: "Sonraki adım",
    },
  },
});
