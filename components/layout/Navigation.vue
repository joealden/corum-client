<template>
<nav>
  <div v-if="!allSubforums" id="loading">
    <img src="~/assets/images/loading-light.svg" alt="loading">
  </div>
  <div v-else>
    <div v-if="userId" id="favourites">
      <h1>Favourites</h1>
      <ul>
        <li>
          <nuxt-link to="/subforum/css">
            test
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div id="all-subforums">
      <h1>All Subforums</h1>
      <input 
        v-model.trim="search" 
        type="search" 
        placeholder="Search..."
        spellcheck="false"
      >
      <ul>
        <li v-for="subforum in subforumSearch" :key="subforum.id">
          <nuxt-link :to="`/subforum/${subforum.url}`">
            {{ subforum.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>  
  </div>
</nav>
</template>

<script>
import allSubforums from '~/apollo/queries/allSubforums.gql'

// TODO: Fix nav scrolling (Favourites + All should be independent)
export default {
  apollo: {
    allSubforums
  },

  computed: {
    subforumSearch() {
      return this.allSubforums.filter(subforum => (
        subforum.name.toLowerCase().includes(this.search.toLowerCase())
      ));
    },

    userId() {
      return this.$store.state.userId
    }
  },

  data() {
    return {
      allSubforums: '',
      search: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/variables'

nav
  grid-area nav
  background-color $primary-blue
  overflow auto

#loading
  height 100%
  display flex
  justify-content center

h1
  margin 0
  padding 1rem 1.5rem
  font-size 1.5rem
  background-color black
  color white
  text-transform uppercase

input[type="search"]
  width 100%
  padding 0.6rem 1.5rem
  font-size 1.5rem
  border none
  outline none

ul
  margin 0
  padding 0

li
  list-style none
  margin 0
  a
    font-size 1.3rem
    display block
    padding 1.5rem
    color $nav-text
    font-weight bold
    outline none

    &:hover
    &:focus
      background-color $hover-blue
      color white
      padding-left 1.1rem
      border-left 0.4rem solid $nav-hover

.nuxt-link-active
  background-color $hover-blue
  color white
  padding-left 1.1rem
  border-left 0.4rem solid $nav-hover
</style>