<template>
	<div>
		<input type="text" v-model="title" />
		<div>{{$store.state.title}}</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			title:''
		}
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