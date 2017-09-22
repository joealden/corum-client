<template>
<div id="grid">
  <corum-logo />
  <corum-header />
  <corum-nav />
  <nuxt />
  <corum-social />
  <corum-footer />
</div>
</template>

<script>
import Logo from '~/components/layout/Logo.vue';
import Header from '~/components/layout/Header.vue';
import Navigation from '~/components/layout/Navigation.vue';
import SocialLinks from '~/components/layout/SocialLinks.vue';
import Footer from '~/components/layout/Footer.vue';

export default {
  components: {
    corumLogo: Logo,
    corumHeader: Header,
    corumNav: Navigation,
    corumSocial: SocialLinks,
    corumFooter: Footer
  }
};
</script>

<style lang="scss">
@import '../assets/styles/normalize';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans');

html {
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

#grid {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 4.5rem auto 3.3rem;
  grid-template-columns: 16em auto;
  grid-template-areas: "logo header" "nav main" "footer-left footer-right";
}

main {
  grid-area: main;
  background-color: white;
  text-align: center;
}
</style>
