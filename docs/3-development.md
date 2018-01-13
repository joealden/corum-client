# Development

## TODO

* Use `peek` to record GIFs of functionality (Instead of still images)
* Come up with a list of key 'code blocks' to analyse
* Relate implementation back to design and user requirements
* Talk about testing during development (relate to automated tests)

## Table of Contents

* [Structure of the Project](#structure-of-the-project)
  * [Monolith vs Micro](#monolith-vs-micro)
  * [Client Architecture](#client-architecture)
    * [Vue](#vue)
    * [Nuxt](#nuxt)
    * [Apollo](#apollo)
    * [Production vs Development](#production-vs-development)
  * [API Architecture](#api-architecture)
    * [Graphcool](#graphcool)
* [Iterations during Development](#iterations-during-development)
  * [Version Control](#version-control)
  * [Iteration Stages](#iteration-stages)
  * [User and Stakeholder Feedback](#user-and-stakeholder-feedback)
* [Problems experienced](#problems-experienced)
  * [Client Problems](#client-problems)
  * [API Problems](#api-problems)
* [Code Analysis](#code-analysis)
  * [Client Analysis](#client-analysis)
  * [API Analysis](#api-analysis)

## Structure of the Project

### Monolith vs Micro

* Talk about how at the start, the API and the client were going to be built as
  a monolith project
* When I got further into development, I decided to separate the API and the
  client because:
  * Separation of concerns
  * As the API and client wouldn't be deployed together, it doesn't make sense
    to package them together
  * It meant that documenting and testing the projects was a simpler process
  * node_modules bundling issue
    * Javascript handles dependencies in the following way:
      * The file `package.json` contains information about the project
      * An important piece of information is the project dependencies
      * When installing the dependencies, (with the `yarn` command) they are
        placed in the `node_modules` folder
    * The API framework I am using, (graphcool) currently bundles the entire
      contents of the `node_modules` folder with the deployed code. This means
      that when the project was a monolith, all of the dependencies for the
      client were also being bundled with the API code. This was an issue
      because of the following:
      * The API would take up more storage space on the deployed server
      * It would take significantly more time to bundle the API before it was
        deployed. This meant that I was wasting time.
  * As the API code and the client code use different libraries and frameworks,
    it made sense for them to have different configuration and settings for the
    following:
    * ESLint, The code linter of my choice (The config file is called
      `.eslintrc.js`) The client code has to be browser compatible, whereas the
      API code had to be node.js compatible.
    * git ignores Git ignores tell git (the version control system of my choice)
      what it shouldn't allow to be committed to the repository. (config file is
      `.gitignore`) I wanted to ignore different files between the projects.
    * NPM scripts, the task runner of my choice. (located under the `scripts`
      section of `package.json`) When I ran a task such as `test`, I want
      different tests to be ran between projects.
    * Code editor settings for Visual Studio Code (vscode), my editor of choice.
      (Config files can be found inside of the `.vscode` directories in both
      projects) Vscode allows you to configure workspace settings for different
      projects, this includes things such as recommend editor extensions and
      their settings. For example, it wouldn't make sense to recommend any Vue
      related extensions for the API, as it doesn't use Vue.
  * This was made difficult when I had a monolith project

### Client Architecture

#### Vue

* Reference analysis and design sections
* Why use Vue over react vs nothing

##### Why use Vue?

* Abstracts away DOM operations
* Provides prebuilt solutions for common uses:
  * Routing (`vue-router`)
  * State Management (`vuex`)

#### Nuxt

* Describe what nuxt is
  * Framework built on top of nuxt
  * Inspired by next.js for react
  * Intends to provide a better developer experience

##### Why use Nuxt?

* Abstracts away a lot of configuration and boilerplate code
* Bakes in routing and state management
* Provides server side rendering (Makes initial load faster and allows for
  easier SEO)

##### How Nuxt Works

* CLI (Command Line Interface)
  * `nuxt` - Starts the development server
  * `nuxt build` - Builds the client for production
  * `nuxt start` - Starts a production server (Files must have been built)
* Folders used by nuxt
  * `layouts`
  * `pages`
  * `static`
  * `store`
* nuxt modules
  * `apollo`
  * `dotenv`
  * `font-awesome`
  * `pwa`
* nuxt.config.js

#### Apollo

* Describe what Apollo is (Reference design)
  * A GraphQL client that provide the following:
    * Middleware hooks (Used to add `Authentication` header when a user is
      logged in)
    * Data caching (Means less network fetches and faster responses)
    * Bindings for Vue (with the `vue-apollo` library)
* The way the client communicate with the API

#### Production vs Development

* Production vs development settings
  * Optimisations
    * Code minification
    * Turn off dev help
      * ESLint overlay (If something breaks, don't say exacting why)
      * Vue developer tools (That lets you explore info state)
      * Logging errors to the console (Why you don't want that in production)
      * Changing error page (Why)
    * Turn on service worker (With nuxt pwa module)

#### Configuration

* .env file

### API Architecture

#### Graphcool

* A way to quickly create a production ready GraphQL server
* Acts almost like a database, as it provides CRUD operation on the data
* The way this works is that it generates a CRUD API with GraphQL queries and
  mutations based on the schema you give it

##### Why Graphcool?

* Kind of like how Nuxt is the Vue, Graphcool is to a GraphQL server
* Means I do not have to reinvent the wheel.

##### How Graphcool Works

* CLI (Command Line Interface)
  * `gcf` (Stands from Graphcool Framework)
  * `gcf deploy` - Deploys the API to a graphcool server
  * `gcf playground` - Opens a web browser on a page that lets you explore and
    test your API
* Configuring Graphcool (Through the `graphcool.yml` file)
  * `types` - Provide the location of the API schema
  * `functions` - Define resolvers and hook functions
  * `rootTokens` - Define what functions have root privileges, this is used to
    perform further data mutations and querying data normal users can't (User
    password hash etc.)
  * `permissions` - Define permissions for data CRUD operations, for example,
    specify that only logged in users can create posts, create comments and
    vote. Or that no one it allowed to delete posts.

## Iterations during Development

### Version Control

* Used git for version control and uploaded to github

#### Why Version Control?

* Code is always safe (Present on github and on both my machines)
* Means that I can go back it time if something goes wrong and I just want it in
  working state
* Means that the development process was self documenting, as each change has an
  accompanying commit message

### Iteration Stages

* Talk about iterative development style
* Talk about each develop cycle as a 'module' (testing at the end of each)
* Implementing a dumb frontend (Mostly coding with just HTML and CSS at that
  point)
  * The landing page
  * The signup and login page
  * The subforum page
  * The post page
  * The new post page
  * The new subforum page
* Implementing the API
  * The `Subforum` datatype
  * The `Post` datatype
  * The `User` datatype
  * The `Comment` datatype
  * The `Vote` datatype
  * The `Favorite` datatype
* Implement the logic of the frontend to communicate with the API
  * The `Header` component changes state on login
  * The `Navigation` component loads in all subforums and changes on login state
  * The signup page creates a user and logs them in (with validation)
  * The login page logs a user in if their details are correct (validation)
  * The subforum page loads the posts from the correct subforum
  * The post page loads post details (name, author, content, comments etc.)
  * The new post page creates a new post and redirects the the new post
  * The new subforum page creates a new subforum and updates the navigation
* Ensure that the moderator knows that it all works as it should

## Problems experienced

### Client Problems

* How to manage login state
* How to handle errors
* Updating state based on data mutations

### API Problems

* User account creation and authentication
* Setting the initial vote count of a post to 0 on creation
* Ensuring a user could only favorite a subforum once
* Ensuring a user could only vote once on a post
* Figuring out permissions

### User and Stakeholder Feedback

placeholder

## Code Analysis

### Client Analysis

#### Navigation Component

##### `subforumSearch`

placeholder explanation

```js
// Used to produce the filtered search
subforumSearch() {
  const caseInsensitiveInput = this.search.toLowerCase()

  return this.allSubforums.filter(subforum =>
    subforum.name.toLowerCase().includes(caseInsensitiveInput)
  )
}
```

##### `sortedFavorites`

placeholder explanation

```js
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
}
```

#### Apollo Configuration

placeholder explanation

```js
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
  const uri = process.env.API_ENDPOINT
  const httpLink = new HttpLink({ uri })

  // This middleware sends the JWT (if present) that is needed for
  // mutations such as 'createPost' or 'createComment', as only logged
  // in users are allowed to peform such mutations.
  const middlewareLink = new ApolloLink((operation, forward) => {
    /*
      Due to this being parsed SSR, process.browser must be used to
      make sure localStorage is only attempted to be accessed on the
      client. This isn't a  n issue as no queries or mutations that
      require authentaction are made on an SSR request of the page.
    */
    const token = process.browser
      ? localStorage.getItem('auth-token')
      : undefined

    operation.setContext({
      headers: { authorization: `Bearer ${token}` }
    })
    return forward(operation)
  })

  const link = middlewareLink.concat(httpLink)
  const cache = new InMemoryCache()

  return { link, cache }
}
```

#### Post Page

##### `upvoteButtonClick`

* placeholder explanation
* mention the fact there is an also a `downvoteButtonClick function`, but it is
  not referenced here because it is very similar to this function

```js
// Determines what GraphQL mutation to execute based on the vote state
upvoteButtonClick() {
  if (this.voteInProgress === false) {
    this.voteInProgress = tru
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
}
```

##### `createVote`

* placeholder
* Talk about that this also has similar functions called `updateVote` and
  `deleteVote`

```js
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

        // Doesn't execute on optimstic response update
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
}
```

##### `submitComment`

placeholder

```js
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
```

#### Nuxt configuration (`nuxt.config.js`)

placeholder

```js
// For more info, visit https://nuxtjs.org/api/configuration-build

module.exports = {
  // Headers of the page
  head: {
    titleTemplate: '%s - Corum',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'An open, democratic & self governing forum.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },

  // CSS globals
  css: ['~/assets/styles/globals.styl'],

  // Customize the progress bar color
  // $nav-hover (Found at '~/assets/styles/variables.styl')
  loading: { color: '#53c556' },

  // Build configuration
  build: {
    // Extend the webpack config
    extend(config, { isClient, isDev }) {
      // Add a markdown-loader for markdown files
      config.module.rules.push({
        test: /\.md$/,
        loader: ['html-loader', 'markdown-loader']
      })

      if (isClient && isDev) {
        // Run ESLint on save
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  //  Define modules used.
  //  For more info, visit https://nuxtjs.org/guide/modules

  //  @nuxtjs/apollo - Provides vue-apollo + apollo-client
  //  @nuxtjs/dotenv - Reads .env and merges with process.env
  //  @nuxtjs/font-awesome - Provides icons
  //  @nuxtjs/pwa - Adds PWA features like offline support etc.

  //  Documentation for the modules used here can be found at:
  //  https://github.com/nuxt-community/awesome-nuxt#modules

  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv',
    '@nuxtjs/font-awesome',
    '@nuxtjs/pwa'
  ],

  // Specify the file where the apollo client config resides
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  }
}
```

#### New Post Page

##### `submitPost`

placeholder

```js
submitPost() {
  const authorId = this.$store.state.userId
  const { postTitle: title, postContent: content, Subforum: { id } } = this

  /*
    For more info on how mutations work within vue-apollo,
    visit https://github.com/Akryum/vue-apollo#mutations
  */
  this.$apollo
    .mutate({
      mutation: createPost,
      variables: {
        authorId,
        title,
        content,
        id
      }
    })
    .then(data => {
      const { subforum } = this.$route.params
      const { id } = data.data.createPost
      this.$router.push(`/subforum/${subforum}/post/${id}`)
    })
    .catch(() => {
      this.$router.push(`/error`) // TODO: create actual error page
    })
}
```

#### Login Page

#### `login`

* placeholder
* note that the signup function is very similar, just a different GraphQL
  mutation sending different data

```js
login() {
  // Renders the loading submit button
  this.loading = true

  /*
    For more info on how mutations work within vue-apollo,
    visit https://github.com/Akryum/vue-apollo#mutations
  */
  const { email, password } = this
  this.$apollo
    .mutate({
      mutation: authenticateUser,
      variables: {
        email,
        password
      }
    })
    .then(({ data: { authenticateUser } }) => {
      const { id, username, token } = authenticateUser
      this.$store.commit('saveUserData', { id, username, token })

      // Returns the user to the page they were on before
      // TODO: If user was on signup before, redirect to home
      this.$router.back()
    })
    .catch(({ message }) => {
      // Renders the normal submit button
      this.loading = false

      // TODO: Extract cleanedMessage functionality into a function
      const colonIndex = message.lastIndexOf(':')
      const cleanedMessage = message.substring(
        colonIndex + 2,
        message.length
      )
      alert(`Error: ${cleanedMessage}`)
    })
}
```

#### Signup Page

##### `correctDetails`

placeholder

```js
correctDetails() {
  const emailEntered = this.email !== ''

  const password1Entered = this.password1 !== ''
  const password2Entered = this.password2 !== ''
  const passwordsEntered = password1Entered && password2Entered
  const passwordsMatch = this.password1 === this.password2

  return emailEntered && passwordsEntered && passwordsMatch
}
```

#### Utility Functions

##### `logIfDev`

placeholder

```js
import stringToBoolean from '~/utils/stringToBoolean'

// Only logs to console if process.env.PROD is false

const logIfDev = (logType, message) => {
  if (stringToBoolean(process.env.PROD) === false) {
    console[logType]('test')
  }
}

export default logIfDev
```

##### `stringToBoolean`

placeholder

```js
// Helper function to handle process.env booleans

const stringToBoolean = stringBool => {
  if (stringBool === 'true') {
    return true
  } else if (stringBool === 'false') {
    return false
  } else {
    return undefined
  }
}

export default stringToBoolean
```

#### Global Store Configuration (Vuex)

placeholder

```js
import { Store } from 'vuex'
import Vue from 'vue'

// For more info, visit https://nuxtjs.org/guide/vuex-store/

/*
  Vue.set() is used to get around Vue's inability to detect the
  state change.
*/

export default () => {
  return new Store({
    // Disallow state mutation not through defined mutations
    strict: true,

    /*
      Initial state is fetched in a hook that executes on the client.
      Fetch can be found at '~/layouts/default' or '~/layouts/error'.
    */
    state: {
      userId: undefined,
      username: undefined
    },

    mutations: {
      logout(state) {
        localStorage.removeItem('user-id')
        localStorage.removeItem('username')
        localStorage.removeItem('auth-token')
        Vue.set(state, 'userId', localStorage.getItem('user-id'))
        Vue.set(state, 'username', localStorage.getItem('username'))
      },

      saveUserData(state, { id, username, token }) {
        localStorage.setItem('user-id', id)
        localStorage.setItem('username', username)
        localStorage.setItem('auth-token', token)
        Vue.set(state, 'userId', localStorage.getItem('user-id'))
        Vue.set(state, 'username', localStorage.getItem('username'))
      },

      updateUserState(state) {
        Vue.set(state, 'userId', localStorage.getItem('user-id'))
        Vue.set(state, 'username', localStorage.getItem('username'))
      }
    }
  })
}
```

### API Analysis

#### Permission Configuration

placeholder

```yml
# Where 'authenticated: true' is present in an operation,
# the client must pass along their JWT auth token in the
# request headers. (In the form -> Authorization: 'Bearer ${TOKEN}')

permissions:
    # User Permissions

    # Allows access to User from Post
    # Only the username field is made queryable. This means
    # that malicious users cannot query for someones elses
    # infomation such as their password, id, or email.
  - operation: User.read  
    fields: [username]

  # Subforum Permissions
  - operation: Subforum.create
    authenticated: true
  - operation: Subforum.read

  # Favorite Permissions
  - operation: Favorite.create
    authenticated: true
    # permission query here
  - operation: Favorite.read
  - operation: Favorite.delete
    authenticated: true
    # permission query here

  # Post Permissions
  - operation: Post.create
    authenticated: true
    # permission query here
  - operation: Post.read

  # Comment Permissions
  - operation: Comment.create
    authenticated: true
    # permission query here
  - operation: Comment.read

  # Vote Permissions
  - operation: Vote.create
    authenticated: true
    # permission query here
  - operation: Vote.read
  - operation: Vote.update
    authenticated: true
    # permission query here
  - operation: Vote.delete
    authenticated: true
    # permission query here

  # Relation Permissions
  - operation: SubforumToPost.connect
    authenticated: true
    # permission query here
  - operation: PostToComment.connect
    authenticated: true
    # permission query here
  - operation: UserToPost.connect
    authenticated: true
    # permission query here
  - operation: UserToVote.connect
    authenticated: true
    # permission query here
  - operation: PostToVote.connect
    authenticated: true
    # permission query here
  - operation: UserToFavorite.connect
    authenticated: true
    # permission query here
  - operation: SubforumToFavorite.connect
    authenticated: true
    # permission query here
```

#### API Schema

* To avoid repetition, link to design section with the schema

#### Hook Functions

##### `userAndSubforumIsUnique`

* placeholder
* mention that there is a hook function to ensure user and post is unique but
  the functions are very similar

```js
import { fromEvent } from 'graphcool-lib'
import { makeRequest } from '../../utils/common'

/*
  This is a hook function that executes every time before a favorite is created.
  It ensures that only 1 favorite of a subforum by a single user can happen.
*/

const favoriteQuery = `
query FavoriteQuery($userId: ID!, $subforumId: ID!) {
  allFavorites(
    filter: { AND: [{ user: { id: $userId } }, { subforum: { id: $subforumId } }] }
  ) {
    id
  }
}
`

export default async event => {
  // Retrieve payload from event
  const { data } = event
  const { userId, subforumId } = data

  // Create Graphcool API (based on https://github.com/graphcool/graphql-request)
  const graphcool = fromEvent(event)
  const api = graphcool.api('simple/v1')

  try {
    const { allFavorites } = await makeRequest(api, favoriteQuery, {
      userId,
      subforumId
    })

    if (allFavorites.length === 0) {
      return { data }
    } else {
      return { error: 'This user has already favorited this subforum' }
    }
  } catch (error) {
    return { error }
  }
}
```

##### `initVoteCount`

placeholder

```js
// Ensures that when a post is created, the vote Count is set to 0

export default event => {
  const { data } = event
  data.voteCount = 0
  return { data }
}
```

##### `updateVoteCountOnVoteCreation`

* placeholder
* mention how there are also the other hook functions for delete and update

```js
import { fromEvent } from 'graphcool-lib'
import {
  VOTE_COUNT_TO_DELETE_POST,
  makeRequest,
  deleteAllVotesOnPost,
  postIdFromVoteQuery,
  currentPostVoteCount,
  getAllVoteIdsOnPost,
  deleteVote,
  deletePost,
  updatePost
} from '../../utils/common'

/*
  This is a hook function that executes every time after a vote is created.
  It updates the voteCount field on the post to reflect the vote creation.
  Also, if the new vote count is equal or less than the VOTE_COUNT_TO_DELETE_POST
  constant, then the post will be deleted (The automated management system)
*/

export default async event => {
  // Retrieve payload from event
  const { data } = event
  const voteId = data.id
  const voteType = data.vote

  // Create Graphcool API (based on https://github.com/graphcool/graphql-request)
  const graphcool = fromEvent(event)
  const api = graphcool.api('simple/v1')

  try {
    const { Vote } = await makeRequest(api, postIdFromVoteQuery, { voteId })
    const postId = Vote.post.id

    const { Post } = await makeRequest(api, currentPostVoteCount, { postId })
    const oldVoteCount = Post.voteCount

    let newVoteCount
    if (voteType === 'VOTE_UP') {
      newVoteCount = oldVoteCount + 1
    } else if (voteType === 'VOTE_DOWN') {
      newVoteCount = oldVoteCount - 1
    } else {
      return Promise.reject('voteType is not defined')
    }

    if (newVoteCount <= VOTE_COUNT_TO_DELETE_POST) {
      await deleteAllVotesOnPost(api, postId)
      return await makeRequest(api, deletePost, { postId })
    } else {
      return await makeRequest(api, updatePost, { postId, newVoteCount })
    }
  } catch (error) {
    return { error }
  }
}
```

#### Resolvers

##### `authenticate`

placeholder

```js
const { fromEvent } = require('graphcool-lib')
const bcryptjs = require('bcryptjs')

const userQuery = `
query UserQuery($email: String!) {
  User(email: $email){
    id
    password
    username
  }
}`

const getGraphcoolUser = (api, email) => {
  return api.request(userQuery, { email }).then(userQueryResult => {
    if (userQueryResult.error) {
      return Promise.reject(userQueryResult.error)
    } else {
      return userQueryResult.User
    }
  })
}

module.exports = event => {
  if (!event.context.graphcool.pat) {
    console.log('Please provide a valid root token!')
    return { error: 'Email Authentication not configured correctly.' }
  }

  // Retrieve payload from event
  const { email, password } = event.data

  // Create Graphcool API (based on https://github.com/graphcool/graphql-request)
  const graphcool = fromEvent(event)
  const api = graphcool.api('simple/v1')

  return getGraphcoolUser(api, email)
    .then(graphcoolUser => {
      if (!graphcoolUser) {
        // returning same generic error so user can't find out what emails are registered.
        return Promise.reject('Invalid Credentials')
      } else {
        return bcryptjs
          .compare(password, graphcoolUser.password)
          .then(passwordCorrect => {
            if (passwordCorrect) {
              const { id, username } = graphcoolUser
              return { id, username }
            } else {
              return Promise.reject('Invalid Credentials')
            }
          })
      }
    })
    .then(async graphcoolUserDetails => {
      const { username, id } = graphcoolUserDetails
      const token = await graphcool.generateAuthToken(id, 'User')
      return {
        data: {
          id,
          username,
          token
        }
      }
    })
    .catch(error => {
      return { error }
    })
}
```

##### `signup`

placeholder

```js
const { fromEvent } = require('graphcool-lib')
const bcryptjs = require('bcryptjs')
const validator = require('validator')

const userQuery = `
query UserQuery($email: String!, $username: String!) {
  allUsers(filter: {
    OR: [{
      email: $email
    }, {
      username: $username
    }]
  }) {
    id
    password
    email
    username
  }
}`

const createUserMutation = `
mutation CreateUserMutation($username: String!, $email: String!, $passwordHash: String!) {
  createUser(
    username: $username
    email: $email,
    password: $passwordHash
  ) {
    id
  }
}`

const getGraphcoolUsers = (api, email, username) => {
  return api.request(userQuery, { email, username }).then(userQueryResult => {
    if (userQueryResult.error) {
      return Promise.reject(userQueryResult.error)
    } else {
      return userQueryResult.allUsers
    }
  })
}

const createGraphcoolUser = (api, username, email, passwordHash) => {
  return api
    .request(createUserMutation, { username, email, passwordHash })
    .then(userMutationResult => {
      return userMutationResult.createUser.id
    })
}

module.exports = function(event) {
  if (!event.context.graphcool.pat) {
    console.log('Please provide a valid root token!')
    return { error: 'Email Signup not configured correctly.' }
  }

  // Retrieve payload from event
  const { username, email, password } = event.data

  // Create Graphcool API (based on https://github.com/graphcool/graphql-request)
  const graphcool = fromEvent(event)
  const api = graphcool.api('simple/v1')

  const SALT_ROUNDS = 10

  if (validator.isEmail(email)) {
    return getGraphcoolUsers(api, email, username)
      .then(graphcoolUsers => {
        if (graphcoolUsers.length === 0) {
          return bcryptjs
            .hash(password, SALT_ROUNDS)
            .then(hash => createGraphcoolUser(api, username, email, hash))
        } else if (
          graphcoolUsers.length === 2 ||
          (graphcoolUsers[0].email === email &&
            graphcoolUsers[0].username === username)
        ) {
          return Promise.reject('The email address and username are in use')
        } else if (graphcoolUsers[0].email === email) {
          return Promise.reject('The email address is in use')
        } else if (graphcoolUsers[0].username === username) {
          return Promise.reject('The username is in use')
        } else {
          return Promise.reject('An unknown error occured')
        }
      })
      .then(id => {
        return graphcool.generateAuthToken(id, 'User').then(token => {
          return { data: { id, token } }
        })
      })
      .catch(error => {
        return { error }
      })
  } else {
    return { error: 'The email address entered is not valid' }
  }
}
```

#### Utility Functions and Constants

##### `VOTE_COUNT_TO_DELETE_POST`

This number determines the amount of votes required for the post to be deleted
by the automatic post management system.

```js
export const VOTE_COUNT_TO_DELETE_POST = -1
```

##### `makeRequest`

placeholder

```js
/*
  A wrapper around the fromEvent(event).request that is provided
  by 'graphcool-lib' to handle errors in query responses.
*/
export const makeRequest = async (api, query, variables) => {
  const queryResult = await api.request(query, variables)

  if (queryResult.error) {
    return Promise.reject(queryResult.error)
  } else {
    return queryResult
  }
}
```

##### `deleteAllVotesOnPost`

placeholder

```js
/*
  Currently, the CRUD API generated by graphcool does not expose a
  query that allows you to update or delete multiple data records at
  once.

  It looks like this feature is coming in the graphcool 1.0 release.
  https://github.com/graphcool/framework/issues/81

  In the meantime, this function will be used to delete all the Votes
  on a Post record. This is required because graphcool doesn't allow
  you to delete records that would leave other records orphans.

  In the case of the Post type, if it was deleted, it would leave the
  Vote records that reference the Post, orphans. To allow us to delete
  a post, we must first delete the Votes that reference it.
*/
export const deleteAllVotesOnPost = async (api, postId) => {
  const { allVotes } = await makeRequest(api, getAllVoteIdsOnPost, { postId })
  const voteIdList = allVotes.map(vote => vote.id)

  return await Promise.all(
    voteIdList.map(voteId => {
      return makeRequest(api, deleteVote, { voteId })
    })
  )
}
```
