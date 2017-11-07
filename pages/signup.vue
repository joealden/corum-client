<template>
<section :id="!userId ? 'not-logged-in' : undefined">
  <logged-in 
    v-if="userId"
    bottomText="If you want to create another account, please logout first."
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
  </div>
</section>
</template>

<script>
import LoggedIn from '~/components/LoggedIn'
import signupUser from '~/apollo/mutations/signupUser'

export default {
  components: {
    LoggedIn
  },

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
    },

    userId() {
      return this.$store.state.userId
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
      /*
        For more info on how mutations work within vue-apollo,
        visit https://github.com/Akryum/vue-apollo#mutations
      */
      this.$apollo.mutate({
        mutation: signupUser,
        variables: {
          username,
          email,
          password
        }
      }).then(({ data: { signupUser } }) => {
        const { id, token } = signupUser
        this.$store.commit('saveUserData', { id, username, token })

        // Returns the user to the page they were on before
        // TODO: If user was on signup before, redirect to home
        this.$router.back()
      }).catch(({ message }) => {
        // TODO: Extract cleanedMessage functionality into a function
        const colonIndex = message.lastIndexOf(':')
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