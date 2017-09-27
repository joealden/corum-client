<template>
<main>
  <section>
    <img src="~/assets/images/logo-light.svg" alt="corum">
    <form>
      <h1>Login</h1>
      <input type="text" placeholder="Username" autofocus>
      <input type="password" placeholder="Password">
      <p>Don't have an account? <nuxt-link to="/signup">Sign Up</nuxt-link></p>
      <input type="submit" value="Log In" @click.prevent>
    </form>
    
  </section>
</main>
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