import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueToasted from 'vue-toasted'
import router from './router'
import VueSession from 'vue-session'



Vue.config.productionTip = false

// Load plugins
Vue.use(VueSession)
Vue.use(Buefy)
Vue.use(VueToasted, {
	iconPack: 'fontawesome'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
