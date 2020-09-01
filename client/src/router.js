import Vue from 'vue'
import Router from 'vue-router'
import Search from './components/Search.vue'
import LogIn from './components/LogIn.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/search',
			name: 'search',
			component: Search
		},
		{
			path: '/',
			name: 'login',
			component: LogIn
		}
	]
})