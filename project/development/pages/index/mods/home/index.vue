<template>
	<div>
		<Test :testData="testData"></Test>
	</div>
</template>

<script>
export default{
	data(){
		return{
			testData:{},
		}
	},
	methods:{
		initData(){
			this.getData({method:'get',url:'/mock/test.json'})
			.then((res) => {
				this.$store.commit('setTest',res.data)
			})
		}
	},
	mounted(){
		this.initData()
	},
	computed:{
		test(){
			return this.$store.state.test
		}
	},
	watch:{
		test(){
			this.$set(this.testData,'title',this.$store.state.test)
		}
	}
}
</script>

<style lang="scss" type="text/css">

</style>