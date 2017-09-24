<template>
<div id="grid">
  <corum-logo />
  <corum-header />
  <corum-nav />
  <main>
    <section>
      <img src="~/assets/images/logo.svg" alt="corum">
      <h1>{{ error.statusCode }}</h1>
      <p class="error-message">{{ error.message }}</p>
    </section>
  </main>
</div>
</template>

<script>
import Logo from '~/components/layout/Logo.vue';
import Header from '~/components/layout/Header.vue';
import Navigation from '~/components/layout/Navigation.vue';

export default {
  name: 'nuxt-error',
  props: ['error'],
  components: {
    corumLogo: Logo,
    corumHeader: Header,
    corumNav: Navigation
  },
  head() {
    return {
      title: 'Error'
    };
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
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  height: 6rem;
}

h1 {
  margin-top: 2rem;
  margin-bottom: 0.4rem;
  font-size: 2.5rem;
}

p {
  margin: 0;
  font-size: 1.5rem;
}
</style>
