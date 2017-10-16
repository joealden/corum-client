<template>
<header>
  <div v-if="userId" id="logged-in">
    <p>Hi, <span>{{ $store.state.username }}</span>!</p>
    <a @click="logout">
      <i class="fa fa-sign-out" aria-hidden="true"/>Logout
    </a>
  </div>
  <div v-else>
    <nuxt-link to="/signup" exact>
      <i class="fa fa-user-plus" aria-hidden="true"/>Sign Up
    </nuxt-link>
    <nuxt-link to="/login" exact>
      <i class="fa fa-sign-in" aria-hidden="true"/>Login
    </nuxt-link>
  </div>
</header>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$store.state.userId
    }
  },

  methods: {
    logout() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/variables'

header
  grid-area header
  display flex
  justify-content flex-end
  align-items center
  background-color white
  margin-right 1.5rem

#logged-in
  display flex
  align-items center
  p
    font-size 1.5rem
    margin 0
    margin-right 1.5rem
    span 
      color $nav-hover

a
  cursor pointer
  font-size 1.5rem
  padding 0.8rem 1.6rem
  background $primary-blue
  color white
  border-radius 5px
  text-transform uppercase
  font-weight 600
  transition 0.15s ease-in-out
  margin-right 1.5rem
  i
    color $nav-hover
    margin-right 0.4rem
  &:hover
    background-color $nav-hover
    i
      color white

.nuxt-link-active
  background-color $nav-hover
  color white
  i
    color white
</style>
