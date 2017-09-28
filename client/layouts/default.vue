<template>
<div id="grid">
  <corum-logo />
  <corum-header />
  <corum-nav />
  <div id="test">
    <nuxt />
  </div>
</div>
</template>

<script>
import Logo from '~/components/layout/Logo.vue';
import Header from '~/components/layout/Header.vue';
import Navigation from '~/components/layout/Navigation.vue';

export default {
  components: {
    corumLogo: Logo,
    corumHeader: Header,
    corumNav: Navigation
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/layouts';
</style>
