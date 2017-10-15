// eslint-disable-next-line import/no-extraneous-dependencies
import Vuex from 'vuex'
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue'

// Vue.set used to get around Vue's inability to detect the state change
const createStore = () => {
  return new Vuex.Store({
    strict: true,
    state: {
      userId: undefined
    },

    mutations: {
      logout(state) {
        localStorage.removeItem('graphcool-user-id')
        localStorage.removeItem('graphcool-auth-token')
        Vue.set(state, 'userId', localStorage.getItem('graphcool-user-id'))
      },

      saveUserData(state, { id, token }) {
        localStorage.setItem('graphcool-user-id', id)
        localStorage.setItem('graphcool-auth-token', token)
        Vue.set(state, 'userId', localStorage.getItem('graphcool-user-id'))
      },

      updateUserId(state) {
        Vue.set(state, 'userId', localStorage.getItem('graphcool-user-id'))
      }
    }
  })
}

export default createStore
