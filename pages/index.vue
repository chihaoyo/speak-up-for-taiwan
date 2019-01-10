<!-- eslint-disable vue/html-indent vue/max-attributes-per-line -->
<i18n>
{
  "tw": {
    "idg-xi": "台灣原住民族致中國習近平主席"
  },
  "en": {
    "idg-xi": "Indigenous Peoples of Taiwan to President Xi Jinping of China"
  }
}
</i18n>
<template>
<div class="page index">
  <h1>Speak up for Taiwan.</h1>
  <ul>
    <li><nuxt-link :to="{ path: '/idg-xi' }">{{ $t('idg-xi') }}</nuxt-link>
    </li>
  </ul>
</div>
</template>
