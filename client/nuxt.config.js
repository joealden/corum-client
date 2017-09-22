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
  // Customize the progress bar color
  loading: { color: 'black' },
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
        });
      }
    }
  }
};
