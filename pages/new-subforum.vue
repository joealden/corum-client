<template>
<section>
  <div id="title-wrapper">
    <h1>New Subforum</h1>
  </div>
  <form v-if="userId">
    <input
      v-model.trim="subforumName" 
      type="text" 
      placeholder="Subforum Name" 
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='Subforum Title'"
    />
    <div id="create-post-wrapper">
      <button
        v-if="subforumName !== ''"
        @click.prevent="submitSubforum"
        class="enabled-button"
      >
        <i class="fa fa-plus" aria-hidden="true"/>Create Subforum
      </button>
      <button 
        v-else
        disabled
        class="disabled-button" 
        title="The subforum name field is required" 
      >
        <i class="fa fa-plus" aria-hidden="true"/>Create Subforum
      </button>
    </div>
  </form>
  <div v-else id="not-logged-in">
    <p>You are not logged in!</p>
    <p>
      If you want to create a subforum, please
      <nuxt-link to="/login">Login</nuxt-link>
      or
      <nuxt-link to="/signup">Sign Up</nuxt-link>.
    </p>
  </div>
</section>
</template>

<script>
import createSubforum from '~/apollo/mutations/createSubforum'
import allSubforums from '~/apollo/queries/allSubforums'

export default {
  computed: {
    // Gets the user's ID from the vuex store
    userId() {
      return this.$store.state.userId
    }
  },

  data() {
    return {
      subforumName: ''
    }
  },

  head: () => ({ title: 'New Subforum' }),

  methods: {
    submitSubforum() {
      const name = this.subforumName
      const url = name
        .toLowerCase()
        .split(' ')
        .join('-')

      /*
        For more info on how mutations work within vue-apollo,
        visit https://github.com/Akryum/vue-apollo#mutations
      */
      this.$apollo
        .mutate({
          mutation: createSubforum,
          variables: { name, url },

          update: (store, { data: { createSubforum } }) => {
            const data = store.readQuery({ query: allSubforums })

            const newSubforum = {
              id: createSubforum.id,
              name,
              url,
              __typename: 'Subforum'
            }

            data.allSubforums.push(newSubforum)
            store.writeQuery({ query: allSubforums, data })
          }
        })
        .then(() => {
          this.$router.push(`/subforum/${url}`)
        })
        .catch(() => {
          alert('Error: That subforum already exists')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../assets/styles/variables'
@require '../assets/styles/buttons'

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
    padding 1.25rem
    margin-bottom 1rem
    font-size 1.65rem
    border none
    border-radius 0.5rem
    background-color #eee
    font-size 1.5rem
    outline none

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

  .enabled-button
    background-color $primary-blue

    &:hover, &:focus
      background-color $nav-hover

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