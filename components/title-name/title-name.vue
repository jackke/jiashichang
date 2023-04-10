<template>
	<view class="title-box flex-b">
		<view class="title"> {{title}} </view>
		<view class="genguo" v-if="titleTag">
			{{titleTag}}
			<text class="iconfont icon-r-jiantou"></text>
		</view>
	</view>
</template>

<script setup>
	import { defineProps, defineEmits, ref } from 'vue'
	const props = defineProps({
		title:{
			type: String,
			default: ''
		},
		titleTag:{
			type: String,
			default: ''
		}
		
	})
</script>

<style lang="less">
	.title-box{
		padding: 30rpx 0 20rpx 0;
		.title{
			font-size: 34rpx;
			font-weight: 500;
		}
	}

</style>