<template>
	<div class="test">
		<span>{{testData.title}}</span>
		<img src="./../../assets/images/test.jpg" />
	</div>
</template>

<script>
export default{
	props:{
		testData:{}
	}
}
</script>

<style lang="scss" type="text/css">
.test{
	width:500px;
	margin:0 auto;
	img{
		width:400px;
		margin:0 auto;
	}
	span{
		width:500px;
		height:50px;
		line-height:50px;
		display:block;
		text-align:center;
	}
}
</style>