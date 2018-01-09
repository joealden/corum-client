<template>
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
</template>

<script>
/*
  NOTE:

  This layout has been changed due to a regression in
  nuxt 1.0.0. The issue can be tracked at the following
  link: https://github.com/nuxt/nuxt.js/issues/2537

  For whatever reason, nuxt is rendering the error layout
  inside of the default layout, instead of just rendering
  the error layout when an error occurs. This means that
  for the time being, this layout can be treated like a
  page.

  When this regression is fixed, find the old version
  of this layout in 'error.old.vue'.
*/

import stringToBoolean from '~/utils/stringToBoolean'

export default {
  name: 'nuxt-error',
  props: ['error'],

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

  head: () => ({ title: 'Error' })
}
</script>

<style lang="stylus" scoped>
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
