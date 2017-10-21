<template>
<div id="grid">
  <corum-logo />
  <corum-header />
  <corum-nav />
  <main>
    <nuxt />
  </main>
</div>
</template>

<script>
import Logo from '~/components/layout/Logo'
import Header from '~/components/layout/Header'
import Navigation from '~/components/layout/Navigation'

export default {
  name: 'default-layout',

  components: {
    corumLogo: Logo,
    corumHeader: Header,
    corumNav: Navigation
  },

  /*
    Fetch userid from localStorage after SSR
    TODO: Unify fetch for default & error layouts
  */
  mounted() {
    this.$store.commit('updateUserState')
  }
}
</script>

<style lang="stylus" scoped>
@require '../assets/styles/layouts'
</style>
