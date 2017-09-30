<template>
  <section>
    <img src="~/assets/images/logo-light.svg" alt="corum">
    <form>
      <input type="email" placeholder="Email Address" autocapitalize="off" spellcheck="false">
      <input type="password" placeholder="Password">
      <input type="submit" value="Login" @click.prevent>
    </form>
    <p>Don't have an account?<br>
      <nuxt-link to="/signup">Sign Up</nuxt-link>
    </p>
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