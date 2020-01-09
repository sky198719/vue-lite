import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import getData from './../../assets/js/getData.js'
import Components from './../../components/index.js'

import './../../assets/css/global.scss'

import Index from './index.vue'
import {routePath,storeData} from './config/index.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(getData)
Vue.use(Components)

const router = new VueRouter(routePath)

const store = new Vuex.Store(storeData)

new Vue({
	el:'#index',
	router,
	store,
	render:h=>h(Index)
})