<template>
	<div>
		<input v-model="title" type="text" />
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

</style>