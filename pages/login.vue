<template>
<section :id="!userId ? 'not-logged-in' : undefined">
  <logged-in 
    v-if="userId"
    bottomText="If you want to login to a different account, please logout first."
  />
  <div v-else>
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
  </div>
</section>
</template>

<script>
import LoggedIn from '~/components/LoggedIn.vue'
import signinUser from '~/apollo/mutations/signinUser.gql'

export default {
  components: {
    LoggedIn
  },

  head: () => ({ title: 'Login' }),

  computed: {
    userId() {
      return this.$store.state.userId
    }
  },

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      const { email, password } = this
      this.$apollo.mutate({
        mutation: signinUser,
        variables: {
          email,
          password
        }
      }).then(({ data: { signinUser } }) => {
        const { id, username } = signinUser.user
        const token = signinUser.token
        this.$store.commit('saveUserData', { id, username, token })
        this.$router.back() // Returns the user to the page they were on before
      }).catch(({ message }) => {
        const colonIndex = message.indexOf(':')
        const cleanedMessage = message.substring(colonIndex + 2, message.length)
        alert(`Error: ${cleanedMessage}`)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../assets/styles/accountPages'
</style>