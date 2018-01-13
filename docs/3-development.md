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
* [Dependency Management](#dependency-management)
* [Iterations during Development](#iterations-during-development)
  * [Version Control](#version-control)
  * [Iteration Stages](#iteration-stages)
  * [User and Stakeholder Feedback](#user-and-stakeholder-feedback)
* [Problems experienced](#problems-experienced)
* [Code Analysis](#code-analysis)

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

## Dependency Management

* Talk about yarn (yarn.lock)

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

### Client

* How to manage login state
* How to handle errors
* Updating state based on data mutations

### API

* User account creation and authentication
* Setting the initial vote count of a post to 0 on creation
* Ensuring a user could only favorite a subforum once
* Ensuring a user could only vote once on a post
* Figuring out permissions

### User and Stakeholder Feedback

placeholder

## Code Analysis

* Show ALL user input validation code (Talk about how they cover all cases
  (robust))
