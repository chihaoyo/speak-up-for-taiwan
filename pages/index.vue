<!-- eslint-disable vue/html-indent vue/max-attributes-per-line -->
<i18n>
{
  "tw": {
    "idg-xi": "台灣原住民族致中國習近平主席"
  },
  "ja": {
    "idg-xi": "台湾の原住民族から中国国家主席習近平へ"
  },
  "en": {
    "idg-xi": "Indigenous Peoples of Taiwan to President Xi Jinping of China"
  },
  "fr": {
    "idg-xi": "Les Peuples autochtones de Taïwan au Président Xi Jinping de la Chine"
  }
}
</i18n>
<template>
<div class="page index">
  <h1 style="display: none;">Speak up for Taiwan. #SpeakUpForTaiwan</h1>
  <ul>
    <li><nuxt-link :to="localePath('idg-xi')">{{ $t('idg-xi') }}</nuxt-link>
    </li>
  </ul>
</div>
</template>
