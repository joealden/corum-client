<template>
<section v-if="!Post" id="loading">
  <div>
    <img src="~/assets/images/loading-dark.svg" alt="loading">
  </div>
</section>
<section v-else>
  <div id="title-wrapper">
    <div><i class="fa fa-user-circle" aria-hidden="true"/> Author: <span>{{ Post.author.username }}</span></div>
    <h1>{{ Post.title }}</h1>
    <div><i class="fa fa-calendar" aria-hidden="true"/> Created At: <span>{{ formattedTime }}</span></div>
  </div>
  <div id="main-content-wrapper">
    <div id="post-details">
      <div id="post-content">
        <div>
          <p>{{ Post.content }}</p>
        </div>
      </div>
      <div id="vote-count">
        <button
          v-if="userId"
          :class="upvoted ? 'enabled upvoted' : 'enabled'"
          @click="upvoteButtonClick"
        >
          <i class="fa fa-chevron-up" aria-hidden="true"/>
        </button>
        <button
          v-else
          class="disabled-button"
          title="Please login to vote"
          disabled
        >
          <i class="fa fa-chevron-up" aria-hidden="true"/>
        </button>
        <span v-if="vote < 0" class="negative">
          {{ vote }}
        </span>
        <span v-else-if="vote > 0" class="positive">
          {{ vote }}
        </span>
        <span v-else class="neutral">
          {{ vote }}
        </span>
        <button
          v-if="userId"
          :class="downvoted ? 'enabled downvoted' : 'enabled'"
          @click="downvoteButtonClick"
        >
          <i class="fa fa-chevron-down" aria-hidden="true"/>
        </button>
        <button
          v-else
          class="disabled-button"
          title="Please login to vote"
          disabled
        >
          <i class="fa fa-chevron-down" aria-hidden="true"/>
        </button>
      </div>
    </div>
    <div id="comments-wrapper">
      <h2>
        <i class="fa fa-comments" aria-hidden="true"/>Comments ({{ Post.comments.length }})
      </h2>
      <div v-if="Post.comments.length === 0" id="no-comments">
        <p>There aren't any comments yet!</p>
      </div>
      <ul v-else>
        <li v-for="comment in Post.comments" :key="comment.id">
          <div>{{ comment.content }}</div>
          <div v-if="comment.author === Post.author.username" class="author-comment">
            {{ comment.author }}
          </div>
          <div v-else class="non-author-comment">
            {{ comment.author }}
          </div>
        </li>
      </ul>
    </div>
  </div>
  <form v-if="userId" id="add-comment">
    <textarea 
      v-model.trim="comment"
      name="comment-field"
      placeholder="New Comment..."
      onfocus="this.placeholder=''" 
      onblur="this.placeholder='New Comment...'"
    />
    <button 
      v-if="comment !== ''"
      @click.prevent="submitComment"
      class="enabled-button"
    >
      <i class="fa fa-paper-plane" aria-hidden="true"/>Post Comment
    </button>
    <button
      v-else
      class="disabled-button"
      title="The comment must not be empty"
      @click.prevent
    > 
      <i class="fa fa-paper-plane" aria-hidden="true"/>Post Comment
    </button>
  </form>
</section>
</template>

<script>
// TODO: Extract out components from page

import tinydate from 'tinydate'

import logIfDev from '~/utils/logIfDev'

import postQuery from '~/apollo/queries/post'
import userVoteQuery from '~/apollo/queries/userVote'

import createVoteMutation from '~/apollo/mutations/createVote'
import updateVoteMutation from '~/apollo/mutations/updateVote'
import deleteVoteMutation from '~/apollo/mutations/deleteVote'
import createCommentMutation from '~/apollo/mutations/createComment'

export default {
  apollo: {
    // Fetch the current post's data
    Post: {
      query: postQuery,
      variables() {
        return { id: this.$route.params.post }
      },
      fetchPolicy: 'network-only'
    },

    // Fetch users vote data (if any)
    allVotes: {
      query: userVoteQuery,
      variables() {
        const { userId } = this
        const postId = this.$route.params.post

        return { userId, postId }
      },
      fetchPolicy: 'network-only',

      /*
        If the user is not logged in, the vote data is
        not needed, so it is pointless querying the API.
        https://github.com/Akryum/vue-apollo#skipping-the-query
      */
      skip() {
        return this.userId ? false : true
      }
    }
  },

  computed: {
    /*
      Formats the unformatted date that is returned
      from graphcool using the 'tinydate' library.
      https://github.com/lukeed/tinydate
    */
    formattedTime() {
      const stamp = tinydate('{HH}:{mm} - {DD}/{MM}/{YY}')
      const date = new Date(this.Post.createdAt)
      return stamp(date)
    },

    // Gets the user's ID from the vuex store
    userId() {
      return this.$store.state.userId
    },

    // Allows for cleaner access to the user's vote data
    userVoteData() {
      if (this.allVotes) {
        return this.allVotes[0]
      } else {
        return undefined
      }
    },

    // Used to determine what voting logic to execute, as well as UI
    upvoted() {
      if (this.userVoteData && this.userVoteData.vote === 'VOTE_UP') {
        return true
      } else {
        return false
      }
    },
    downvoted() {
      if (this.userVoteData && this.userVoteData.vote === 'VOTE_DOWN') {
        return true
      } else {
        return false
      }
    },

    vote() {
      return this.Post.voteCount + this.localVote
    }
  },

  data() {
    return {
      Post: '',
      allVotes: '',
      comment: '',
      localVote: 0,
      voteInProgress: false
    }
  },

  head() {
    return { title: this.Post.title }
  },

  methods: {
    // Determines what GraphQL mutation to execute based on the vote state
    upvoteButtonClick() {
      if (this.voteInProgress === false) {
        this.voteInProgress = true

        if (this.upvoted === true) {
          // The user has already upvoted
          this.localVote -= 1
          this.deleteVote({ id: this.userVoteData.id })
        } else if (this.downvoted === true) {
          // The user has already downvoted
          this.localVote += 2
          this.updateVote({ id: this.userVoteData.id, vote: 'VOTE_UP' })
        } else {
          // The user has not voted
          this.localVote += 1
          this.createVote({
            vote: 'VOTE_UP',
            postId: this.$route.params.post,
            userId: this.userId
          })
        }
      }
    },

    downvoteButtonClick() {
      if (this.voteInProgress === false) {
        this.voteInProgress = true
        if (this.upvoted === true) {
          // The user has already upvoted
          this.localVote -= 2
          this.updateVote({ id: this.userVoteData.id, vote: 'VOTE_DOWN' })
        } else if (this.downvoted === true) {
          // The user has already downvoted
          this.localVote += 1
          this.deleteVote({ id: this.userVoteData.id })
        } else {
          // The user has not voted
          this.localVote -= 1
          this.createVote({
            vote: 'VOTE_DOWN',
            postId: this.$route.params.post,
            userId: this.userId
          })
        }
      }
    },

    // variables = { vote, postId, userId }
    createVote(variables) {
      this.$apollo
        .mutate({
          mutation: createVoteMutation,
          variables,

          update: (store, { data: { createVote } }) => {
            const data = store.readQuery({
              query: userVoteQuery,
              variables: {
                postId: this.$route.params.post,
                userId: this.userId
              }
            })

            data.allVotes.push({
              __typename: 'Vote',
              id: createVote.id,
              vote: variables.vote
            })

            store.writeQuery({
              query: userVoteQuery,
              variables: {
                postId: this.$route.params.post,
                userId: this.userId
              },
              data
            })

            // Doesn't execute on optimistic response update
            // TODO: look into moving this code into a .then
            if (createVote.id !== 0) {
              this.voteInProgress = false
            }
          },

          optimisticResponse: {
            __typename: 'Mutation',
            createVote: {
              id: 0,
              __typename: 'Vote'
            }
          }
        })
        .catch(error => logIfDev('error', error))
    },

    // variables = { id, vote }
    updateVote(variables) {
      this.$apollo
        .mutate({
          mutation: updateVoteMutation,
          variables,

          update: (store, { data: { updateVote } }) => {
            const data = store.readQuery({
              query: userVoteQuery,
              variables: {
                postId: this.$route.params.post,
                userId: this.userId
              }
            })

            data.allVotes[0].vote = variables.vote

            store.writeQuery({
              query: userVoteQuery,
              variables: {
                postId: this.$route.params.post,
                userId: this.userId
              },
              data
            })

            // Doesn't execute on optimistic response update
            // TODO: look into moving this code into a .then
            if (updateVote.id !== 0) {
              this.voteInProgress = false
            }
          },

          optimisticResponse: {
            __typename: 'Mutation',
            updateVote: {
              id: 0,
              __typename: 'Vote'
            }
          }
        })
        .catch(error => logIfDev('error', error))
    },

    // variables = { id }
    deleteVote(variables) {
      this.$apollo
        .mutate({
          mutation: deleteVoteMutation,
          variables,

          update: (store, { data: { deleteVote } }) => {
            const data = store.readQuery({
              query: userVoteQuery,
              variables: {
                postId: this.$route.params.post,
                userId: this.userId
              }
            })

            data.allVotes = []

            store.writeQuery({
              query: userVoteQuery,
              variables: {
                postId: this.$route.params.post,
                userId: this.userId
              },
              data
            })

            // Doesn't execute on optimstic response update
            // TODO: look into moving this code into a .then
            if (deleteVote.id !== 0) {
              this.voteInProgress = false
            }
          },

          optimisticResponse: {
            __typename: 'Mutation',
            deleteVote: {
              id: 0,
              __typename: 'Vote'
            }
          }
        })
        .catch(error => logIfDev('error', error))
    },

    submitComment() {
      const author = this.$store.state.username
      const { comment: content } = this
      const id = this.$route.params.post

      // Clears user input from textarea
      this.comment = ''

      this.$apollo
        .mutate({
          mutation: createCommentMutation,
          variables: {
            author,
            content,
            id
          },

          update(store, { data: { createComment: commentData } }) {
            const data = store.readQuery({
              query: postQuery,
              variables: { id }
            })

            const newComment = {
              __typename: 'Comment',
              id: commentData.id,
              author: commentData.author,
              content: commentData.content
            }

            data.Post.comments.push(newComment)
            store.writeQuery({
              query: postQuery,
              variables: { id },
              data
            })

            // scroll to bottom of page when comment is inserted
            // TODO: look into moving this code into a .then
            const main = document.getElementById('main-content-wrapper')
            main.scrollTop = main.scrollHeight
          },

          optimisticResponse: {
            __typename: 'Mutation',
            createComment: {
              __typename: 'Comment',
              id: 'loading',
              author,
              content
            }
          }
        })
        .catch(error => logIfDev('error', error))
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../../assets/styles/variables'
@require '../../../../assets/styles/buttons'

section
  overflow hidden
  margin 2rem
  font-size 1.5rem
  height 100%
  background-color white
  border-radius 0.5rem
  box-shadow 10px 10px 25px #999
  display flex
  flex-direction column

#loading
  display flex
  flex-direction column
  justify-content center

#title-wrapper
  display flex
  justify-content space-between
  align-items center
  border-radius 0.5rem 0.5rem 0 0
  padding 0.75rem 1.5rem
  background-color $primary-blue
  color white
  min-height 2.5rem

  i
    margin-right 0.2rem

  div
    text-transform uppercase
    font-weight bold
    width 25rem // Hack to get post title centered

    &:first-child
      text-align left

    &:last-child
      text-align right

    span
      color $nav-hover
      text-transform lowercase
      font-weight normal
      margin-left 0.2rem
      white-space nowrap

  h1
    margin 0
    padding 0 0.5rem
    font-size 2.5rem

#main-content-wrapper
  padding 1rem
  overflow auto

#post-details
  display flex

#post-content
  width 100%
  background-color #eee
  margin-right 1rem
  border-radius 0.5rem
  display flex
  flex-direction column
  padding 1.5rem 0
  white-space pre-wrap

  div
    overflow auto

    p
      padding 0 1.5rem
      margin 0
      overflow hidden
      text-align left

#vote-count
  padding 0.75rem
  background-color $primary-blue
  color white
  border-radius 0.5rem
  height fit-content

  button
    padding 1rem
    border none
    border-radius 0.3rem
    transition 0.15s ease-in-out
    outline none
    width 100%

  span
    display block
    font-size 2rem
    padding 0.5rem

.enabled
  background-color $hover-blue
  color white
  cursor pointer

.upvoted
  background-color $nav-hover

.downvoted
  background-color red

.negative
  color red

.neutral
  color white

.positive
  color $nav-hover

#comments-wrapper
  background-color #eee
  border-radius 0.5rem
  margin-top 1rem
  display flex
  flex-direction column

  h2
    margin 0
    padding 1rem
    border-radius 0.5rem 0.5rem 0 0
    font-size 1.75rem
    text-transform uppercase
    font-weight bold
    background-color $primary-blue
    color white

    i
      margin-right 0.5rem
      color $nav-hover

  ul
    margin 1rem 0
    padding 0
    overflow auto

    li
      list-style none
      display flex
      justify-content space-between
      align-items stretch
      margin 1rem

      &:first-child
        margin-top 0

      &:last-child
        margin-bottom 0

      div
        &:first-child
          background-color white
          padding 1rem
          border-radius 0.5rem 0 0 0.5rem
          flex-grow 1
          text-align left
          white-space pre-wrap

        &:last-child
          padding 1rem
          background-color $primary-blue
          border-radius 0 0.5rem 0.5rem 0
          display flex
          justify-content center
          align-items center

#no-comments
  display flex
  flex-grow 1
  flex-direction column
  justify-content center
  align-items center
  color grey

.author-comment
  color $nav-hover

.non-author-comment
  color white

#add-comment
  margin-top auto // make element stick to bottom of the page
  padding 1rem
  min-height 6rem
  display flex
  background-color $primary-blue
  color white

  textarea
    flex-grow 1
    margin-right 1rem
    font-size 1.5rem
    padding 1.25rem
    resize none
    outline none
    border-radius 0.5rem

  button
    font-size 1.2rem
    padding 0.8rem 1.1rem
    border none
    border-radius 5px
    text-decoration none
    text-transform uppercase
    font-weight bold
    transition 0.15s ease-in-out
    outline none

    i
      margin-right 0.5rem
      transition 0.15s ease-in-out
</style>
