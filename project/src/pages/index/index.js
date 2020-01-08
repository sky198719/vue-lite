import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import getData from './../../assets/js/global.js'

import './../../assets/css/global.scss'

import Index from './index.vue'
import {routePath,storeData} from './config/index.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(getData)

const router = new VueRouter(routePath)

const store = new Vuex.Store(storeData)

new Vue({
	el:'#index',
	router,
	store,
	render:h=>h(Index)
})