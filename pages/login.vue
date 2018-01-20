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
        v-if="loading"
        type="submit" 
        value="Please Wait..." 
        @click.prevent
        class="disabled-button"
        title="Waiting for a response from the server..."
      >
      <input
        v-else-if="email !== '' && password !== ''"
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
import LoggedIn from '~/components/LoggedIn'
import authenticateUserMutation from '~/apollo/mutations/authenticateUser'

import alertError from '~/utils/alertError'

export default {
  components: {
    LoggedIn
  },

  head: () => ({ title: 'Login' }),

  computed: {
    // Gets the user's ID from the vuex store
    userId() {
      return this.$store.state.userId
    }
  },

  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },

  methods: {
    async login() {
      // Renders the loading submit button
      this.loading = true

      const { email, password } = this
      /*
        For more info on how mutations work within vue-apollo,
        visit https://github.com/Akryum/vue-apollo#mutations
      */
      try {
        const { data: { authenticateUser } } = await this.$apollo.mutate({
          mutation: authenticateUserMutation,
          variables: {
            email,
            password
          }
        })

        const { id, username, token } = authenticateUser
        this.$store.commit('saveUserData', { id, username, token })

        // Returns the user to the page they were on before
        // TODO: If user was on signup before, redirect to home
        this.$router.back()
      } catch ({ message }) {
        // Renders the normal submit button
        this.loading = false
        // Display the error to the user in an alert box
        alertError(message)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../assets/styles/accountPages'
</style>
