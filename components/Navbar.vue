<!-- eslint-disable vue/html-indent vue/max-attributes-per-line -->
<i18n>
{
  "tw": {
    "home": "返回首頁"
  },
  "ja": {
    "home": "ホーム"
  },
  "en": {
    "home": "Back home"
  },
  "fr": {
    "home": "Revenir"
  }
}
</i18n>
<template>
<div class="nav">
  <nuxt-link v-if="$route.path !== '/'" :to="{ path: '/' }">{{ $t('home') }}</nuxt-link>
  <nuxt-link key="tw" :to="switchLocalePath('tw')" class="lang">華語</nuxt-link>
  <nuxt-link key="jp" :to="switchLocalePath('ja')" class="lang">日本語</nuxt-link>
  <nuxt-link key="en" :to="switchLocalePath('en')" class="lang">English</nuxt-link>
  <nuxt-link key="fr" :to="switchLocalePath('fr')" class="lang">Français</nuxt-link>
</div>
</template>
