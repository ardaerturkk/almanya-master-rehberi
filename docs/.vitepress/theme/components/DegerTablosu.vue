<script setup lang="ts">
import { tumDegerler, kaynakListesi, kaynakAdi as ad } from "../degerler";

const satirlar = Object.entries(tumDegerler).flatMap(([grup, kayitlar]) =>
  Object.entries(kayitlar).map(([anahtar, kayit]) => ({
    anahtar: `${grup}.${anahtar}`,
    kayit,
    kaynaklar: kaynakListesi(kayit),
  })),
);
</script>

<template>
  <div class="deger-tablo-kap">
    <table>
      <thead>
        <tr>
          <th>Değer</th>
          <th>Tutar / süre</th>
          <th>Kaynak</th>
          <th>Tarih</th>
          <th>Durum</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in satirlar" :key="s.anahtar">
          <td>{{ s.kayit.etiket }}</td>
          <td>{{ s.kayit.kisa ?? s.kayit.deger }}</td>
          <td>
            <template v-if="s.kaynaklar.length">
              <template v-for="(url, i) in s.kaynaklar" :key="url">
                <a :href="url" target="_blank" rel="noopener">{{ ad(url) }}</a><template v-if="i < s.kaynaklar.length - 1">, </template>
              </template>
            </template>
            <template v-else>yok</template>
          </td>
          <td>{{ s.kayit.dogrulama_tarihi }}</td>
          <td>{{ s.kayit.durum === "dogrulandi" ? "Doğrulandı" : "Teyit et" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.deger-tablo-kap {
  overflow-x: auto;
}
</style>
