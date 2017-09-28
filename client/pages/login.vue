<template>
<section>
  <img src="~/assets/images/logo-light.svg" alt="corum">
  <form>
    <input type="text" placeholder="Email" autofocus>
    <input type="password" placeholder="Password">
    <input type="submit" value="Log In" @click.prevent>
  </form>
  <p>Don't have an account? <nuxt-link to="/signup">Sign Up</nuxt-link></p>
</section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Log In'
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/accountPages';
</style>