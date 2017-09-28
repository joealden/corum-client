<template>
<section>
  <img src="~/assets/images/logo-light.svg" alt="corum">
  <form>
    <input type="text" placeholder="Email" autofocus>
    <input type="password" placeholder="Password">
    <input type="password" placeholder="Re-enter Password">
    <input type="submit" value="Sign Up" @click.prevent>
  </form>
  <p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
</section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Sign Up'
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/accountPages';
</style>