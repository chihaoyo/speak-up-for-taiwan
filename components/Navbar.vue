<!-- eslint-disable vue/html-indent vue/max-attributes-per-line -->
<template>
<div class="navbar">
  <div class="home">
    <nuxt-link :to="localePath('index')" class="button"><b>#SpeakUpForTaiwan</b></nuxt-link>
  </div>
  <div class="languages">
    <nuxt-link key="tw" :to="switchLocalePath('tw')" class="button">台</nuxt-link>
    <nuxt-link key="jp" :to="switchLocalePath('ja')" class="button">日</nuxt-link>
    <nuxt-link key="en" :to="switchLocalePath('en')" class="button">Eng</nuxt-link>
    <nuxt-link key="fr" :to="switchLocalePath('fr')" class="button">Fra</nuxt-link>
    <nuxt-link key="fi" :to="switchLocalePath('fi')" class="button">Fin</nuxt-link>
    <nuxt-link key="sv" :to="switchLocalePath('sv')" class="button">Swe</nuxt-link>
  </div>
</div>
</template>

<style lang="scss">
@import 'assets/variables';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: rgba($color-white, 0.90);
  > .home {
    flex-grow: 1;
  }
  > .languages {
    flex-grow: 0;
    display: flex;
  }
}
</style>
