<template>
	<div>
		<Title :titleData="titleData"></Title>
	</div>
</template>

<script>
export default{
	data(){
		return{
			titleData:{},
		}
	},
	methods:{
		initData(){
			this.getData({method:'get',url:'/mock/data.json'})
			.then((res) => {
				this.$store.commit('setTitle',res.data)
			})
		}
	},
	mounted(){
		this.initData()
	},
	computed:{
		title(){
			return this.$store.state.title
		}
	},
	watch:{
		title(){
			this.$set(this.titleData,'title',this.$store.state.title)
		}
	}
}
</script>

<style lang="scss" type="text/css">

</style>