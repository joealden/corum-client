// For more info, visit https://github.com/nuxt-community/apollo-module

/* eslint-disable */

// ESlint is not happy about nuxt injecting deps
import {
  createBatchingNetworkInterface,
  applyBatchMiddleware
} from 'apollo-client'

/* eslint-enable */

const uri = process.env.API_ENDPOINT
const networkInterface = createBatchingNetworkInterface({ uri })

/*
  This middleware sends the JWT (if present) that is needed
  for mutations such as 'createPost' or 'createComment', as
  only logged in users are allowed to peform such mutations.
*/
const authMiddleware = {
  applyBatchMiddleware(req, next) {
    if (!req.options.headers) req.options.headers = {}

    /*
      Due to this being parsed SSR, process.browser must be used to
      make sure localStorage is only attempted to be accessed on the
      client. This isn't an issue as no queries or mutations that
      require authentaction are made on an SSR request of the page.
    */
    const token = process.browser
      ? localStorage.getItem('auth-token')
      : undefined

    req.options.headers['authorization'] = token ? `Bearer ${token}` : undefined
    next()
  }
}

networkInterface.use([authMiddleware])

export default () => networkInterface
