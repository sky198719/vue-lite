<template>
	<div class="title">
		<span>{{titleData.title}}</span>
		<img src="./../../assets/images/demo.jpg" />
	</div>
</template>

<script>
export default{
	props:{
		titleData:{}
	}
}
</script>

<style lang="scss" type="text/css">
.title{
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