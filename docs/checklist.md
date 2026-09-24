---
title: "Checklist'im"
---

# Checklist'im

::: info Bu sayfa ne için
Sitedeki 32 adımın birleşik, yazdırılabilir görünümü. İşaretlediğin adımlar tarayıcının
localStorage'ında saklanıyor — sayfayı kapatıp açsan bile ilerlemen kalıyor (ama sadece bu
tarayıcıda/cihazda, hesaba bağlı değil).
:::

<ClientOnly>
<ProgressBar storage-key="ana-adimlar" :total="32" label="Genel ilerleme (32 adım)" />
</ClientOnly>

<ClientOnly>
<PersistentChecklist
  storage-key="ana-adimlar"
  title="Faz 1: Hazırlık"
  :items="[
    { id: 'adim-1', text: '1. Almanya\'da Master Sistemi' },
    { id: 'adim-2', text: '2. Program Bulma' },
    { id: 'adim-3', text: '3. Uygunluk Analizi' },
    { id: 'adim-4', text: '4. Dil Sınavları' },
    { id: 'adim-5', text: '5. GRE / GMAT' },
    { id: 'adim-6', text: '6. Bütçe Planı' },
    { id: 'adim-7', text: '7. Askerlik Tecili' },
  ]"
/>
</ClientOnly>

<ClientOnly>
<PersistentChecklist
  storage-key="ana-adimlar"
  title="Faz 2: Belgeler"
  :items="[
    { id: 'adim-8', text: '8. Belge Listesi' },
    { id: 'adim-9', text: '9. Onay, Tasdik, Tercüme' },
    { id: 'adim-10', text: '10. CV, Motivasyon Mektubu, Referans' },
  ]"
/>
</ClientOnly>

<ClientOnly>
<PersistentChecklist
  storage-key="ana-adimlar"
  title="Faz 3: Başvuru"
  :items="[
    { id: 'adim-11', text: '11. Başvuru Kanalını Belirleme' },
    { id: 'adim-12', text: '12. uni-assist Adım Adım' },
    { id: 'adim-13', text: '13. Üniversite Portalı' },
    { id: 'adim-14', text: '14. Beklemek' },
    { id: 'adim-15', text: '15. Kabul (Zulassungsbescheid)' },
  ]"
/>
</ClientOnly>

<ClientOnly>
<PersistentChecklist
  storage-key="ana-adimlar"
  title="Faz 4: Vize"
  :items="[
    { id: 'adim-16', text: '16. Vize Türü ve Başvuru Kanalı' },
    { id: 'adim-17', text: '17. Sperrkonto Açma' },
    { id: 'adim-18', text: '18. Sağlık Sigortası' },
    { id: 'adim-19', text: '19. Vize Belgeleri ve Başvuru' },
    { id: 'adim-20', text: '20. Vizeyi Aldıktan Sonra' },
  ]"
/>
</ClientOnly>

<ClientOnly>
<PersistentChecklist
  storage-key="ana-adimlar"
  title="Faz 5: Gitmeden Önce"
  :items="[
    { id: 'adim-21', text: '21. Konaklama' },
    { id: 'adim-22', text: '22. Türkiye Tarafı İşler' },
    { id: 'adim-23', text: '23. Bavul ve İlk Hafta Çantası' },
  ]"
/>
</ClientOnly>

<ClientOnly>
<PersistentChecklist
  storage-key="ana-adimlar"
  title="Faz 6: Almanya'da İlk Haftalar"
  :items="[
    { id: 'adim-24', text: '24. Varış Günü' },
    { id: 'adim-25', text: '25. Anmeldung' },
    { id: 'adim-26', text: '26. Immatrikulation' },
    { id: 'adim-27', text: '27. Banka ve Steuer-ID' },
    { id: 'adim-28', text: '28. Ausländerbehörde' },
    { id: 'adim-29', text: '29. Rundfunkbeitrag ve Sözleşmeler' },
  ]"
/>
</ClientOnly>

<ClientOnly>
<PersistentChecklist
  storage-key="ana-adimlar"
  title="Faz 7: Okurken ve Sonrasında"
  :items="[
    { id: 'adim-30', text: '30. Çalışma Hakları' },
    { id: 'adim-31', text: '31. Oturum İzni Uzatma' },
    { id: 'adim-32', text: '32. Mezuniyet Sonrası' },
  ]"
/>
</ClientOnly>

::: warning Sadece bu tarayıcıda
İşaretlerin bu cihazın/tarayıcının localStorage'ında saklanıyor. Farklı bir cihazdan veya
gizli sekmeden açarsan sıfırdan başlar. Kalıcı bir kayıt istiyorsan sayfayı yazdır
(Ctrl/Cmd+P) veya kendi notlarına aktar.
:::
