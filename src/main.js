require('dotenv').config()
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Pusher from 'pusher-js'

Vue.use(Buefy)
Vue.config.productionTip = false

const pusher = new Pusher('6ceca9c4f42a96f30023', {
  cluster: 'eu'
})
pusher.connection.bind('connected', () => {
  alert('Connected!')
})
pusher.connection.bind('disconnected', () => {
  alert('Disconnected!')
})
pusher.connection.bind('error', (err) => {
  if (err.error.data.code === 4004) {
    alert('Overlimit')
  }
})
const channel = pusher.subscribe('solar-charge-controller')
Vue.prototype.$channel = channel

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
