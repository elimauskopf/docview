import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueToasted from 'vue-toasted'
import router from './router'
import VueSession from 'vue-session'
import Vuex from 'vuex'

Vue.use(Vuex)




Vue.config.productionTip = false

// Load plugins
Vue.use(VueSession)
Vue.use(Buefy)
Vue.use(VueToasted, {
	iconPack: 'fontawesome'
})

const store = new Vuex.Store({
	state: {
		isLoggedIn: false
	},
	mutations: {
		toggleLogIn(state) {
			state.isLoggedIn = !state.isLoggedIn
		}
	}
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
