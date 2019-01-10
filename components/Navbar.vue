<!-- eslint-disable vue/html-indent vue/max-attributes-per-line -->
<template>
<div class="navbar">
  <div class="home">
    <nuxt-link :to="localePath('index')" class="button">#SpeakUpForTaiwan</nuxt-link>
  </div>
  <div class="languages">
    <nuxt-link key="tw" :to="switchLocalePath('tw')" class="button">華</nuxt-link>
    <nuxt-link key="jp" :to="switchLocalePath('ja')" class="button">日</nuxt-link>
    <nuxt-link key="en" :to="switchLocalePath('en')" class="button">Eng</nuxt-link>
    <nuxt-link key="fr" :to="switchLocalePath('fr')" class="button">Fra</nuxt-link>
  </div>
</div>
</template>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  border-bottom: 0.25rem black solid;
  background-color: rgba(white, 0.90);
  > .home {
    flex-grow: 1;
  }
  > .languages {
    flex-grow: 0;
    display: flex;
  }
}
</style>
