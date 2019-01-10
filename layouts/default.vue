<!-- eslint-disable vue/html-indent vue/max-attributes-per-line -->
<template>
<main>
  <navbar />
  <nuxt />
  <footer>
    <a href="https://github.com/chihaoyo/speak-up-for-taiwan/" target="_blank">GitHub</a>
  </footer>
</main>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '~assets/styles.scss';
</style>
