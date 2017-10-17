// ESlint is not happy about nuxt injecting deps
/* eslint-disable */

import { Store } from 'vuex'
import { set } from 'vue'

/* eslint-enable */
// Vue.set() used to get around Vue's inability to detect the state change

export default () => {
  return new Store({
    strict: true,

    state: {
      userId: undefined,
      username: undefined
    },

    mutations: {
      logout(state) {
        localStorage.removeItem('user-id')
        localStorage.removeItem('username')
        localStorage.removeItem('auth-token')
        set(state, 'userId', localStorage.getItem('user-id'))
        set(state, 'username', localStorage.getItem('username'))
      },

      saveUserData(state, { id, username, token }) {
        localStorage.setItem('user-id', id)
        localStorage.setItem('username', username)
        localStorage.setItem('auth-token', token)
        set(state, 'userId', localStorage.getItem('user-id'))
        set(state, 'username', localStorage.getItem('username'))
      },

      updateUserState(state) {
        set(state, 'userId', localStorage.getItem('user-id'))
        set(state, 'username', localStorage.getItem('username'))
      }
    }
  })
}
