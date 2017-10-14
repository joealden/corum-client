// eslint-disable-next-line import/no-extraneous-dependencies
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      userId: localStorage.getItem('graphcool-user-id')
    },

    mutations: {
      logout(state) {
        localStorage.removeItem('graphcool-user-id')
        localStorage.removeItem('graphcool-auth-token')
        state.userId = localStorage.getItem('graphcool-user-id')
      },

      saveUserData(state, { id, token }) {
        localStorage.setItem('graphcool-user-id', id)
        localStorage.setItem('graphcool-auth-token', token)
        state.userId = localStorage.getItem('graphcool-user-id')
      }
    }
  })
}

export default createStore
