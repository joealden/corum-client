<template>
<section v-if="!Subforum || !allPosts" id="loading">
  <div>
    <img src="~/assets/images/loading-dark.svg" alt="loading">
  </div>
</section>
<section v-else>
  <div id="title-wrapper">
    <h1>{{ Subforum.name }}</h1>
  </div>
  <div id="toolbar">
    <form>
      <i class="fa fa-sort" aria-hidden="true"/>
      <span>Sort By:</span>
      <input 
          type="radio" 
          id="popular"
          name="sort"
          value="popular"
          checked
          @click="order = 'voteCount_DESC'"
        >
      <label for="popular">Most Popular</label>
      <input
        type="radio"
        id="new"
        name="sort"
        value="new"
        @click="order = 'createdAt_DESC'"
      >
      <label for="new">Newest</label>
    </form>
    <nuxt-link v-if="userId" :to="`/subforum/${$route.params.subforum}/new`">
      <i class="fa fa-plus" aria-hidden="true"></i>New Post
    </nuxt-link>
  </div>
  <div id="row-titles">
    <span>Post Title</span>
    <div>
      <span>Created At</span>
      <span>Vote Count</span>
    </div>
  </div>
  <div v-if="allPosts.length === 0" id="no-posts">
    <p>It looks like there aren't any posts here yet!</p>
  </div>
  <ul v-else>
    <li v-for="post in allPosts" :key="post.id">
      <nuxt-link :to="`/subforum/${$route.params.subforum}/post/${post.id}`">
        <div class="post-title">
          {{ post.title }}
        </div>
        <div class="time-and-vote">
          <div>
            {{ post.createdAt | formatDate }}
          </div>
          <div v-if="post.voteCount < 0" class="negative">
            {{ post.voteCount }}
          </div>
          <div v-else-if="post.voteCount > 0" class="positive">
            {{ post.voteCount }}
          </div>
          <div v-else class="neutral">
            {{ post.voteCount }}
          </div>            
        </div>
      </nuxt-link> 
    </li>
  </ul> 
</section>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts.gql'
import subforumName from '~/apollo/queries/subforumName.gql'

export default {
  apollo: {
    allPosts: {
      query: allPosts,
      fetchPolicy: 'cache-and-network', // fetch new posts on different visits
      variables() {
        return {
          url: this.$route.params.subforum,
          order: this.order
        }
      }
    },

    Subforum: {
      query: subforumName,
      variables() {
        return {
          url: this.$route.params.subforum
        }
      }
    }
  },

  computed: {
    userId() {
      return this.$store.state.userId
    }
  },

  data: () => ({
    Subforum: '',
    allPosts: '',
    order: 'voteCount_DESC'
  }),

  filters: {
    formatDate(date) {
      const time = new Date(date)
      const day = time.getDate()
      const month = time.getMonth()
      const year = time.getFullYear()
      const hours = time.getHours()

      // make the output of time.getMinutes() padded
      let minutes = time.getMinutes()
      if (minutes < 10) {
        minutes = `0${minutes}`
      }
      return `${hours}:${minutes} - ${day}/${month}/${year}`
    }
  },

  head() {
    if (this.Subforum.name) {
      return { title: this.Subforum.name }
    }
    return { title: 'Loading...' }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../assets/styles/variables'

section
  flex-grow 1
  margin 2rem
  display flex
  flex-direction column
  font-size 1.5rem
  background-color white
  border-radius 0.5rem
  box-shadow 10px 10px 25px #999

#loading
  display flex
  flex-direction column
  justify-content center

#title-wrapper
  display block
  border-radius 0.5rem 0.5rem 0 0
  margin 0
  padding 0.75rem
  background-color $primary-blue
  color white

h1
  margin 0
  padding 0
  font-size 2.5rem

#toolbar
  padding 0 0.75rem
  min-height 4rem
  display flex
  justify-content space-between
  align-items center

  form
    text-transform uppercase
    span
      margin-left 0.4rem
      margin-right 0.7rem
    label
      transition 0.2s ease-in-out
      font-weight bold
      margin-left 0.25rem
      margin-right 0.75rem
      &:hover
        color $nav-hover
    input[type="radio"]:checked+label
      color $nav-hover

  a
    font-size 1.2rem
    padding 0.8rem 1.1rem
    background $primary-blue
    color white
    border-radius 5px
    text-decoration none
    text-transform uppercase
    font-weight bold
    transition 0.15s ease-in-out

    i
      margin-right 0.4rem
      color $nav-hover
    &:hover 
      background-color $nav-hover
      i 
        color white

#row-titles
  padding 0.75rem 1.75rem
  display flex
  justify-content space-between
  align-items center
  background-color $primary-blue
  color white

  span
    font-weight bold
    text-transform uppercase
  div > span
    &:first-child
      margin-right 4rem

.time-and-vote
  display flex

  div
    &:last-child
      width 8rem
      text-align right
      margin-left 3rem

#no-posts
  flex-grow 1
  display flex
  flex-direction column
  justify-content center
  align-items center
  color grey

ul
  flex-grow 1
  overflow auto
  padding 0
  margin 0

li
  list-style none
  a
    display flex
    justify-content space-between
    padding 1.75rem
    &:hover
      background-color #eee

.negative 
  color red
.neutral
  color black
.positive
  color $nav-hover
</style>