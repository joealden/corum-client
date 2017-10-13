<template>
<section>
  <img 
    src="~/assets/images/logo-light.svg"
    alt="corum"
  >
  <form>
    <input
      v-model.trim="email"
      type="email" 
      placeholder="Email Address" 
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Email Address'"
      autocapitalize="off" 
      spellcheck="false"
    >
    <input
    v-model.trim="password" 
      type="password" 
      placeholder="Password"
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Password'"
    >
    <input 
      v-if="email !== '' && password !== ''"
      type="submit" 
      value="Login" 
      @click.prevent="login"
      class="enabled-button"
    >
    <input 
      v-else
      type="submit" 
      value="Login" 
      @click.prevent
      class="disabled-button"
      title="Please enter your email and password"
    >
  </form>
  <p>
    Don't have an account?<br><nuxt-link to="/signup">Sign Up</nuxt-link>
  </p>
</section>
</template>

<script>
export default {
  head: () => ({ title: 'Login' }),

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      console.log('test') // placeholder
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/accountPages';
</style>