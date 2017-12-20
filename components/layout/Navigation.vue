<template>
<nav>
  <div v-if="!allSubforums" id="loading">
    <img src="~/assets/images/loading-light.svg" alt="loading">
  </div>
  <div v-else>
    <div v-if="userId" id="favourites">
      <h1>Favourites</h1>
      <ul>
        <li v-for="favorite in allFavorites" :key="favorite.id">
          <nuxt-link :to="`/subforum/${favorite.subforum.url}`">
            {{ favorite.subforum.name }}
          </nuxt-link>
          <button>
            -
          </button>
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
      <div v-if="subforumSearch.length === 0" id="no-results">
        No subforums matching your search were found!
      </div>
      <ul v-else>
        <li v-for="subforum in subforumSearch" :key="subforum.id">
          <nuxt-link :to="`/subforum/${subforum.url}`">
            {{ subforum.name }}
          </nuxt-link>
          <button v-if="favoritesUrls.indexOf(subforum.url) === -1 && userId">
            +
          </button>
        </li>
      </ul>
    </div>  
  </div>
</nav>
</template>

<script>
import allSubforums from '~/apollo/queries/allSubforums'
import allFavorites from '~/apollo/queries/allFavorites'

// TODO: Fix nav scrolling (Favourites + All should be independent)
export default {
  name: 'corum-nav',

  apollo: {
    allSubforums,

    // Fetch users favorite data (if any)
    allFavorites: {
      query: allFavorites,
      variables() {
        return { userId: this.userId }
      },
      /*
        If the user is not logged in, the favorite data is
        not needed, so it is pointless querying the API.
        https://github.com/Akryum/vue-apollo#skipping-the-query
      */
      skip() {
        return this.userId ? false : true
      }
    }
  },

  computed: {
    subforumSearch() {
      const caseInsensitiveInput = this.search.toLowerCase()

      return this.allSubforums.filter(subforum =>
        subforum.name.toLowerCase().includes(caseInsensitiveInput)
      )
    },

    favoritesUrls() {
      if (this.allFavorites !== undefined) {
        return this.allFavorites.map(favorite => favorite.subforum.url)
      }
    },

    userId() {
      return this.$store.state.userId
    }
  },

  data() {
    return {
      allSubforums: undefined,
      allFavorites: undefined,
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

input[type='search']
  width 100%
  padding 0.6rem 1.5rem
  font-size 1.5rem
  border none
  outline none

#no-results
  height fit-content
  color white
  font-size 1.25rem
  text-align center
  padding 1.5rem

ul
  margin 0
  padding 0

li
  list-style none
  margin 0
  display flex

  a
    font-size 1.3rem
    display block
    padding 1.5rem
    color $nav-text
    font-weight bold
    outline none
    width 100%

  button
    background-color $primary-blue
    color $nav-hover
    border none
    width 30%
    font-size 50px
    padding 0
    cursor pointer
    outline none

  &:hover, &:focus
    a
      background-color $hover-blue
      color white
      padding-left 1.1rem
      border-left 0.4rem solid $nav-hover

    button
      background-color $hover-blue

      &:hover, &:focus
        background-color $nav-hover
        color white

.nuxt-link-active
  background-color $hover-blue
  color white
  padding-left 1.1rem
  border-left 0.4rem solid $nav-hover

.nuxt-link-active + button
  background-color $hover-blue
</style>