// For more info, visit https://nuxtjs.org/guide/vuex-store/

/* eslint-disable */

// ESlint is not happy about nuxt injecting deps
import { Store } from 'vuex'
import Vue from 'vue'

/* eslint-enable */

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
