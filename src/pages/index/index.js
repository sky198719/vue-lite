import './../../assets/css/global.scss'

import Index from './index.vue'
import {routePath,storeData} from './config/index.js'

const router = new VueRouter(routePath)

const store = new Vuex.Store(storeData)

new Vue({
	el:'#index',
	router,
	store,
	render:h=>h(Index)
})