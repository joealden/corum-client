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
      v-model.trim="username"
      type="text"
      placeholder="Username"
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Username'"
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
import createUser from '~/apollo/mutations/createUser.gql'

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
    },

    password() {
      const { password1, password2 } = this
      if (password1 === password2) {
        return password1
      }
    }
  },

  data() {
    return {
      email: '',
      username: '',
      password1: '',
      password2: ''
    }
  },

  methods: {
    signup() {
      const { username, email, password } = this
      this.$apollo.mutate({
        mutation: createUser,
        variables: {
          username,
          email,
          password
        }
      }).then(({ data: { signinUser } }) => {
        const id = signinUser.user.id
        const token = signinUser.token
        this.$store.commit('saveUserData', { id, token })
        this.$router.push({path: '/'})
      }).catch(({ message }) => {
        const colonIndex = message.indexOf(':')
        const cleanedMessage = message.substring(colonIndex + 2, message.length)
        alert(`Error: ${cleanedMessage}`)
      })
    }
  },

  // Redirect already logged in users that visit '/signup' to '/'
  beforeCreate() {
    if (this.$store.state.userId) {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/accountPages';
</style>