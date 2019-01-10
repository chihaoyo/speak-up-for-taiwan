<!-- eslint-disable vue/html-indent vue/max-attributes-per-line -->
<template>
<main>
  <navbar />
  <nuxt/>
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
