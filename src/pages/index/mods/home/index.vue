<template>
	<div>
		<input v-model="title" type="text" />
		<div>{{$store.state.title}}</div>
	</div>
</template>

<script>
import {getData} from './../../../../assets/js/global.js'

export default{
	data(){
		return{
			title:'',
			data:''
		}
	},
	methods:{
		initData(){
			getData({
				method:'get',
				url:'./../../json/api.json'
			})
			.then(
				(resp) => {
					this.data = resp.code
				}
			)
			.then(
				getData({
					method:'get',
					url:'./../../json/api2.json'
				})
				.then((resp) => {
					if(this.data == '0'){
						console.log(resp.code)
					}
				})
			)
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
	background:red;
}
</style>