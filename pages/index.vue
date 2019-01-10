<!-- eslint-disable vue/html-indent vue/max-attributes-per-line -->
<i18n>
{
  "tw": {
    "tw-idg-to-xi": "台灣原住民族致中國習近平主席"
  },
  "en": {
    "tw-idg-to-xi": "Indigenous Peoples of Taiwan to President Xi Jinping of China"
  }
}
</i18n>
<template>
<div class="page index">
  <h1>Speak up for Taiwan.</h1>
  <ul>
    <li><nuxt-link :to="{ path: '/tw-idg-to-xi' }">{{ $t('tw-idg-to-xi') }}</nuxt-link>
    </li>
  </ul>
</div>
</template>
