<template>
<section>
  <div id="title-wrapper">
    <h1>New Post</h1>
  </div>
  <form v-if="userId">
    <input
      v-model.trim="postTitle" 
      type="text" 
      placeholder="Post Title" 
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Post Title'"
    />
    <textarea
      v-model.trim="postContent"
      placeholder="Post Content" 
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Post Content'"
    />
    <div id="create-post-wrapper">
      <button
        v-if="postTitle !== '' && postContent !== ''"
        @click.prevent="submitPost"
        class="enabled-button"
      >
        <i class="fa fa-plus" aria-hidden="true"/>Create Post
      </button>
      <button 
        v-else
        disabled
        class="disabled-button" 
        title="Both the post title and post content sections are required" 
      >
        <i class="fa fa-plus" aria-hidden="true"/>Create Post
      </button>
    </div>
  </form>
  <div v-else id="not-logged-in">
    <p>You are not logged in!</p>
    <p>
      If you want to create a post, please
      <nuxt-link to="/login">Login</nuxt-link>
      or
      <nuxt-link to="/signup">Sign Up</nuxt-link>.
    </p>
  </div>
</section>
</template>

<script>
import subforumId from '~/apollo/queries/subforumId'
import createPost from '~/apollo/mutations/createPost'

export default {
  apollo: {
    Subforum: {
      query: subforumId,
      variables() {
        return { url: this.$route.params.subforum }
      }
    }
  },

  computed: {
    userId() {
      return this.$store.state.userId
    }
  },

  data() {
    return {
      postTitle: '',
      postContent: '',
      Subforum: {}
    }
  },

  head: () => ({ title: 'New Post' }),

  methods: {
    submitPost() {
      const author = this.$store.state.username
      const {
        postTitle: title,
        postContent: content,
        Subforum: { id }
      } = this

      // TODO: add link to vue-apollo mutation docs
      this.$apollo.mutate({
        mutation: createPost,
        variables: {
          author,
          title,
          content,
          id
        }
      }).then(data => {
        const { subforum } = this.$route.params
        const { id } = data.data.createPost
        this.$router.push(`/subforum/${subforum}/post/${id}`)
      }).catch(() => {
        this.$router.push(`/error`) // TODO: create actual error page
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../assets/styles/variables'
@require '../../../assets/styles/buttons'

section
  flex-grow 1
  margin 2rem
  display flex
  flex-direction column
  font-size 1.5rem
  background-color white
  border-radius 0.5rem
  box-shadow 10px 10px 25px #999

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

form
  flex-grow 1
  padding 1.5rem
  display flex
  flex-direction column

  input
  textarea 
    padding 1.25rem
    margin-bottom 1rem
    font-size 1.65rem
    border none
    border-radius 0.5rem
    background-color #eee
    font-size 1.5rem
    outline none

  textarea
    padding 1.25rem
    resize none
    border-radius 0.5rem
    flex-grow 1

#create-post-wrapper
  display flex
  flex-direction row-reverse

  button
    font-size 1.2rem
    width 15rem
    padding 1rem
    border none
    border-radius 5px
    text-decoration none
    text-transform uppercase
    font-weight bold
    outline none
    transition 0.15s ease-in-out
    i
      margin-right 0.5rem
      transition 0.15s ease-in-out

#not-logged-in
  flex-grow 1
  display flex
  flex-direction column
  justify-content center
  align-items center
  p
    font-size 2rem
    margin 1rem
    a
      color $nav-hover
</style>