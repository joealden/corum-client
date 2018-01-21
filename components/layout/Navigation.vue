<template>
<nav>
  <div v-if="!allSubforums" id="loading">
    <img src="~/assets/images/loading-light.svg" alt="loading" />
  </div>
  <div v-else>
    <div v-if="userId" id="favourites">
      <h1>Favourites</h1>
      <div v-if="sortedFavorites === undefined" class="no-results">
        Loading...
      </div>
      <div v-else-if="sortedFavorites.length === 0" class="no-results">
        You currently don't have any favourites! <br><br>
        To add a favourite, click on the '+' button next to the
        subforum you want to add.
      </div>
      <ul v-else>
        <li v-for="favorite in sortedFavorites" :key="favorite.id">
          <nuxt-link :to="`/subforum/${favorite.subforum.url}`">
            {{ favorite.subforum.name }}
          </nuxt-link>
          <button @click="deleteFavorite(favorite.id)">
            <i class="fa fa-minus" aria-hidden="true"/>
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
      <div v-if="subforumSearch.length === 0" class="no-results">
        No subforums matching your search were found! <br/><br/>
        <div v-if="userId">
          Want to create a new subforum?
          <br/>
          Click 
          <nuxt-link
            to="/new-subforum"
            active-class="null"
          >here</nuxt-link>.
        </div>
      </div>
      <ul v-else>
        <li v-for="subforum in subforumSearch" :key="subforum.id">
          <nuxt-link :to="`/subforum/${subforum.url}`">
            {{ subforum.name }}
          </nuxt-link>
          <button 
            v-if="favoritesUrls && favoritesUrls.indexOf(subforum.url) === -1 && userId"
            @click="createFavorite(subforum)"
          >
           <i class="fa fa-plus" aria-hidden="true"/> 
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

import createFavoriteMutation from '~/apollo/mutations/createFavorite'
import deleteFavoriteMutation from '~/apollo/mutations/deleteFavorite'

import logIfDev from '~/utils/logIfDev'

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
    // Used to produce the filtered search
    subforumSearch() {
      const caseInsensitiveInput = this.search.toLowerCase()

      return this.allSubforums.filter(subforum =>
        subforum.name.toLowerCase().includes(caseInsensitiveInput)
      )
    },

    /*
      As graphcool doesn't support ordering by nested data, this
      computed value sorts the favorites array by subforum names.
    */
    sortedFavorites() {
      if (this.allFavorites !== undefined) {
        // Spread into a new array as sort mutates original array
        return [...this.allFavorites].sort((a, b) => {
          if (a.subforum.name > b.subforum.name) {
            return 1
          } else if (a.subforum.name < b.subforum.name) {
            return -1
          } else {
            return 0
          }
        })
      } else {
        return undefined
      }
    },

    /*
      Creates an array of favorited subforum IDs from the fetched
      array of favorite objects. This is used to decide whether or not
      a '+' button needs to be inserted beside a subforum. If the
      subforum is present in the favorites, then the '+' is not needed.
    */
    favoritesUrls() {
      if (this.allFavorites !== undefined) {
        return this.allFavorites.map(favorite => favorite.subforum.url)
      }
    },

    // Gets the user's ID from the vuex store
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
  },

  methods: {
    // Adds a favorite to the users list of favorites
    async createFavorite(subforum) {
      try {
        const { userId } = this
        const subforumId = subforum.id

        await this.$apollo.mutate({
          mutation: createFavoriteMutation,
          variables: { subforumId, userId },

          update: (store, { data: { createFavorite } }) => {
            const data = store.readQuery({
              query: allFavorites,
              variables: { userId }
            })

            data.allFavorites.push({
              __typename: 'Favorite',
              id: createFavorite.id,
              subforum: {
                __typename: 'Subforum',
                name: createFavorite.subforum.name,
                url: createFavorite.subforum.url
              }
            })

            store.writeQuery({
              query: allFavorites,
              variables: { userId },
              data
            })
          },

          optimisticResponse: {
            __typename: 'Mutation',
            createFavorite: {
              __typename: 'Favorite',
              /*
                Ensures that if the user adds multiple favorites
                in quick succession, the favorites section will
                not contain items with duplicate keys

                TODO: Fix a better way of doing this to ensure
                      that they will never collide
              */
              id: Date.now(),
              subforum: {
                __typename: 'Subforum',
                name: subforum.name,
                url: subforum.url
              }
            }
          }
        })
      } catch (error) {
        logIfDev('error', error)
      }
    },

    // Deletes a favorite from the users list of favorites
    async deleteFavorite(id) {
      try {
        const { userId } = this

        await this.$apollo.mutate({
          mutation: deleteFavoriteMutation,
          variables: { id },

          update: store => {
            let data = store.readQuery({
              query: allFavorites,
              variables: { userId }
            })

            // Remove the favorite that is being deleted
            const newAllFavorites = data.allFavorites.filter(
              favorite => favorite.id !== id
            )
            data.allFavorites = newAllFavorites

            store.writeQuery({
              query: allFavorites,
              variables: { userId },
              data
            })
          },

          optimisticResponse: {
            __typename: 'Mutation',
            deleteFavorite: {
              __typename: 'Favorite',
              id: 0
            }
          }
        })
      } catch (error) {
        logIfDev('error', error)
      }
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

.no-results
  height fit-content
  color white
  font-size 1.25rem
  text-align center
  padding 1.5rem

  a
    color $nav-hover

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
    font-size 25px
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
