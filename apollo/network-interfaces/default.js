// For more info, visit https://github.com/nuxt-community/apollo-module

/* eslint-disable */

// ESlint is not happy about nuxt injecting deps
import {
  createBatchingNetworkInterface,
  applyBatchMiddleware
} from 'apollo-client'

/* eslint-enable */

// TODO: Move endpoint uri into a config file
const uri = 'https://api.graph.cool/simple/v1/cj7gqa4hb0iuj0114abl8ewcs'
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
