<template>
	<div @click="handleClick()" class="cursor">{{$store.state.title}}</div>
</template>

<script>
export default{
	mounted(){
		this.$store.commit('setTitle','click me')
	},
	methods:{
		handleClick(){
			this.$store.commit('setTitle','welcome')
		}
	}
}
</script>

<style lang="scss" type="text/css">
.cursor{
	cursor:pointer;
}
</style>