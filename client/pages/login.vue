<template>
<section>
  <img 
    src="~/assets/images/logo-light.svg"
    alt="corum"
  >
  <form>
    <input 
      type="email" 
      placeholder="Email Address" 
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Email Address'"
      autocapitalize="off" 
      spellcheck="false"
    >
    <input 
      type="password" 
      placeholder="Password"
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Password'"
    >
    <input 
      type="submit" 
      value="Login" 
      @click.prevent="login"
    >
  </form>
  <p>Don't have an account?<br><nuxt-link to="/signup">Sign Up</nuxt-link></p>
</section>
</template>

<script>
export default {
  methods: {
    login() {
      // placeholder
    }
  },
  head: () => ({ title: 'Login' })
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/accountPages';
</style>