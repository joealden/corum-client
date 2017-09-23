<template>
<div id="grid">
  <corum-logo />
  <corum-header />
  <corum-nav />
  <nuxt />
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
#grid {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 4.9rem auto;
  grid-template-columns: 16em auto;
  grid-template-areas: "logo header" "nav main";
}

main {
  grid-area: main;
  background-color: white;
  text-align: center;
}
</style>
