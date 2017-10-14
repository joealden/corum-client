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
      v-model.trim="password1"
      type="password"
      placeholder="Password"
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Password'"
    >
    <input
      v-model.trim="password2"
      type="password"
      placeholder="Confirm Password"
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Confirm Password'"
    >
    <input
      v-if="correctDetails"
      type="submit"
      value="Sign Up"
      @click.prevent="signup"
      class="enabled-button"
    >
    <input
      v-else
      type="submit"
      value="Sign Up"
      @click.prevent
      class="disabled-button"
      title="You have entered something wrong, please try again"
    >
  </form>
  <p>Already have an account?<br><nuxt-link to="/login">Login</nuxt-link></p>
</section>
</template>

<script>
export default {
  head: () => ({ title: 'Sign Up' }),

  computed: {
    correctDetails() {
      const emailEntered = this.email !== ''

      const password1Entered = this.password1 !== ''
      const password2Entered = this.password2 !== ''
      const passwordsEntered = password1Entered && password2Entered
      const passwordsMatch = this.password1 === this.password2

      return emailEntered && passwordsEntered && passwordsMatch
    }
  },

  data() {
    return {
      email: '',
      password1: '',
      password2: ''
    }
  },

  methods: {
    signup() {
      console.log('test') // placeholder
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/accountPages';
</style>