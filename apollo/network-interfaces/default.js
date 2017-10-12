// eslint disabled as @nuxt/apollo automatically adds as a dep
// eslint-disable-next-line import/no-extraneous-dependencies
import { createNetworkInterface } from 'apollo-client'

export default () =>
  createNetworkInterface({
    // endpoint that points to the corum GraphQL backend on graph.cool
    uri: 'https://api.graph.cool/simple/v1/cj7gqa4hb0iuj0114abl8ewcs'
  })
