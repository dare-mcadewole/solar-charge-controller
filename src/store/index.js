import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: 'Unilorin Solar PV Plant Web-based Monitoring System'
  },
  getters: {
    appTitle: state => state.appTitle
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
