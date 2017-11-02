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
    // Run ESLint on save
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
    Define modules used.
    For more info, visit https://nuxtjs.org/guide/modules

    @nuxtjs/apollo - Provides vue-apollo + apollo-client
    @nuxtjs/component-cache - Component level caching
    @nuxtjs/font-awesome - Provides icons
    @nuxtjs/dotenv - Reads .env and merges with process.env
    @nuxtjs/pwa - Adds PWA features like offline support etc.

    Documentation for the modules used here can be found at:
    https://github.com/nuxt-community/awesome-nuxt#modules
  */
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/component-cache',
    '@nuxtjs/dotenv',
    '@nuxtjs/font-awesome',
    '@nuxtjs/pwa'
  ],

  // Specify the file where the apollo network interface resides
  apollo: {
    networkInterfaces: {
      default: '~/apollo/network-interfaces/default.js'
    }
  }
}
