<template>
	<view class="custom-top">
		<view class="default" v-if="titleName">
			<view class="iconfont icon-l-jiantou" @click="navigateBack"> </view>
			<view class="title">{{titleName}}</view>
			<view class=""> </view>
		</view>
		<slot name="tab-nav"></slot>
		<slot></slot>
		<!-- <view :class="customIndex == index ? 'custom-nav action' : 'custom-nav'" v-for="(item,index) in customNav" @click="onCustomNav(item, index)">{{item.functionName}} </view> -->
	</view>
</template>

<script setup>
	import {ref, reactive, defineProps, defineEmits} from 'vue'
	const props = defineProps({
		titleName: {
			type: String,
			default: ''
		},
		titleStatus: {
			type: Boolean,
			default: false
		}
	})
	const navigateBack = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss">
	.custom-top {
		width: 100%;
		min-height: 180rpx;
		/* background-image: url(https://cdn.hopsontone.com/20230329140919_CqYHLf_navbg.png); */
		background-color: $uni-color3;
		/* background-size: 100% 100%; */
		display: flex;
		align-items: flex-end;
		// padding-left: 20rpx;
		.default{
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: 4%;
			view{
				flex: 1;
				text-align: center;
			}
			.iconfont{
				font-size: 40rpx;
				padding-left: 20rpx;
				text-align: left;
				color: $uni-text-color-inverse;
			}
			.title{
				margin-left: -20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30rpx;
				color: $uni-text-color-inverse;
			}
		}
	}
</style>