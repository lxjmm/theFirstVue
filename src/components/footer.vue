<template>
	<div>
		<ul id="footer">
			<li v-on:click="getTit"><router-link to="/">首页</router-link></li>
			<li v-on:click="getTit"><router-link to="/s">s页</router-link></li>
			<li v-on:click="getTit"><router-link to="/guangjie">逛街</router-link></li>
			<li v-on:click="getTit"><router-link to="/buys">购物车</router-link></li>
			<li v-on:click="getTit"><router-link to="/my">我的</router-link></li>
		</ul>
	</div>
</template>
<script>
	import guangjie from './guangjie';
	export default{
		name:'foote',
		methods:{
			'getTit':function(event){
				var txt=event.srcElement.innerText;
				//1.全局引入jQuery,通过jQuery获取点击内容；
				this.$emit('footer-say',txt);
			}
		}
	}
</script>
<style type="text/css" scoped>
	a{color:#fff;}
</style>