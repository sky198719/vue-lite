import Home from './../mods/home/index.vue'

const routePath = {
	routes:[
		{
			path:'/home',
			name:'home',
			component:Home
		},
		{
			path: '/', 
			name:'home',
	        redirect: '/home'
		}
	]
}

const storeData = {
	state:{
		title:''
	},
	mutations:{
		setTitle(state,data){
			state.title = data
		}
	}
}

export {routePath,storeData}