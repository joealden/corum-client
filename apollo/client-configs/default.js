import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
  const uri = process.env.API_ENDPOINT
  const httpLink = new HttpLink({ uri })

  /*
    This middleware sends the JWT (if present) that is needed for
    mutations such as 'createPost' or 'createComment', as only logged
    in users are allowed to peform such mutations.
  */
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
