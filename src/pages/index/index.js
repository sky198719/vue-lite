import './../../assets/css/global.scss';

import Index from './index.vue';

const routes = [
	{
		path:'/index',
		name:'index',
		component:Index
	},
	{
		path: '/', 
		name:'index',
        redirect: '/index'
	}
]

new Vue({
	el:'#index',
	render:h=>h(Index)
})