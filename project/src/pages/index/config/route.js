import Home from './../mods/home/index.vue'

const route = [
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

export default route