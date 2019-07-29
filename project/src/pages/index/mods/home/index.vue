<template>
	<div>
		<input type="text" v-model="title" />
		<div>{{$store.state.title}}</div>
		<div>{{tempData}}</div>
	</div>
</template>

<script>
import {getData} from './../../../../assets/js/global.js'

export default{
	data(){
		return{
			title:'',
			tempData:''
		}
	},
	methods:{
		initData(){
			getData({method:'get',url:'/mock/test.json'})
			.then((res) => {
				this.tempData = res.data
			})
		}
	},
	mounted(){
		this.initData()
	},
	watch:{
		title(){
			this.$store.commit('setTitle',this.title)
		}
	}
}
</script>

<style lang="scss" type="text/css">
input{
	background:none;
}
</style>