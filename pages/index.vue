<template>
<section>
  <div v-html="userId ? loggedIn : notLoggedIn"></div>
</section>
</template>

<script>
import loggedIn from '~/assets/markdown/loggedIn.md'
import notLoggedIn from '~/assets/markdown/notLoggedIn.md'

export default {
  data() {
    return { loggedIn, notLoggedIn }
  },

  computed: {
    // Gets the user's ID from the vuex store
    userId() {
      return this.$store.state.userId
    }
  },

  head: () => ({ title: 'Home' })
}
</script>

<style lang="stylus" scoped>
@require '../assets/styles/variables'

section
  flex-grow 1
  margin 2rem
  display flex
  flex-direction column
  font-size 1.5rem
  background-color white
  border-radius 0.5rem
  box-shadow 10px 10px 25px #999

  div
    h1
      text-decoration underline

    a
      color $nav-hover

      &:hover, &:focus
        text-decoration underline
</style>
