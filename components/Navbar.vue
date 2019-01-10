<!-- eslint-disable vue/html-indent vue/max-attributes-per-line -->
<template>
<div class="nav">
  <nuxt-link key="tw" :to="switchLocalePath('tw')" class="lang">中文</nuxt-link>
  <nuxt-link key="en" :to="switchLocalePath('en')" class="lang">English</nuxt-link>
</div>
</template>
