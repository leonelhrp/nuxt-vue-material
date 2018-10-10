import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      competitions: []
    }),
    mutations: {
      add (state, payload) {
        state.competitions = payload;
      }
    }
  })
}

export default createStore