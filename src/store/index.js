import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageIndex: "/home/index"
  },
  mutations: {
    SET_PAGEINDEX (state,data) {
      state.pageIndex = data
     }
  },
  actions: {
  },
  getters: {
    GET_PAGEINDEX (state) {
      return state.pageIndex
     }
  },
  modules: {
  }
})
