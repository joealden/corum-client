// ESlint is not happy about nuxt injecting deps
/* eslint-disable */

import {
  createBatchingNetworkInterface,
  applyBatchMiddleware
} from 'apollo-client'

/* eslint-enable */

const authMiddleware = {
  applyBatchMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    const token = process.browser
      ? localStorage.getItem('auth-token')
      : undefined
    req.options.headers['authorization'] = token ? `Bearer ${token}` : undefined
    next()
  }
}

const networkInterface = createBatchingNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj7gqa4hb0iuj0114abl8ewcs'
})
networkInterface.use([authMiddleware])

export default () => networkInterface
