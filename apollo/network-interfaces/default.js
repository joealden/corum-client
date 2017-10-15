// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createBatchingNetworkInterface, // eslint-disable-next-line no-unused-vars
  applyBatchMiddleware
} from 'apollo-client'

// endpoint that points to the corum GraphQL backend on graph.cool
const networkInterface = createBatchingNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj7gqa4hb0iuj0114abl8ewcs'
})

const authMiddleware = {
  applyBatchMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    // Test effect process.browser shim
    let token
    if (process.browser) {
      token = localStorage.getItem('graphcool-auth-token')
    }
    req.options.headers['authorization'] = token ? `Bearer ${token}` : null
    next()
  }
}

networkInterface.use([authMiddleware])

export default () => networkInterface
