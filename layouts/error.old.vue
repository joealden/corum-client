<template>
<div id="grid">
  <corum-logo />
  <corum-header />
  <corum-nav />
  <main>
    <section>
      <img src="~/assets/images/logo-dark.svg" alt="corum">
      <div v-if="prod">
        <h1>Error</h1>
        <p class="error-message">{{ errorMessage }}</p>
      </div>
      <div v-else>
        <h1>{{ error.statusCode }}</h1>
        <p class="error-message">{{ error.message }}</p>
      </div>
    </section>
  </main>
</div>
</template>

<script>
import Logo from '~/components/layout/Logo'
import Header from '~/components/layout/Header'
import Navigation from '~/components/layout/Navigation'

import stringToBoolean from '~/utils/stringToBoolean'

export default {
  name: 'nuxt-error',
  props: ['error'],

  components: {
    corumLogo: Logo,
    corumHeader: Header,
    corumNav: Navigation
  },

  data() {
    return {
      // Used to determine what error message to print
      prod: stringToBoolean(process.env.PROD)
    }
  },

  computed: {
    errorMessage() {
      const routeParams = this.$route.params

      if (routeParams.subforum) {
        if (routeParams.post) {
          return `The post with ID '${routeParams.post}' could not be found.`
        } else {
          return `The subforum '${routeParams.subforum}' could not be found.`
        }
      } else {
        return 'Please ensure you have entered a valid URL.'
      }
    }
  },

  head: () => ({ title: 'Error' }),

  /*
    Fetch userid from localStorage after SSR
  */
  mounted() {
    this.$store.commit('updateUserState')
  }
}
</script>

<style lang="stylus" scoped>
@require '../assets/styles/layouts'

main
  display flex
  flex-direction column
  justify-content center

img
  height 6rem

h1
  margin-top 2rem
  margin-bottom 0.4rem
  font-size 2.5rem

p
  margin 0
  font-size 1.5rem
</style>
