<template>
<main>
  <section>
    <img src="~/assets/images/logo.svg" alt="corum">
    <form>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Username" autofocus>
      <input type="password" placeholder="Password">
      <input type="password" placeholder="Re-enter Password">
      <input type="submit" value="Sign Up" @click.prevent>
    </form>
    <p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
  </section>
</main>
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