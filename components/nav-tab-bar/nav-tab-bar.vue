<template>
		<view class="tab-box">
			<view :class="actionId == index ? 'nav action' : 'nav'" v-for="(item, index) in navTabbar" :key="index" @click="() => navClick(item)">
				<view :class="item.icon"> </view>
				<view class="" style="margin-top: 10rpx;">
					{{item.name}}
				</view>
			</view>
		</view>
</template>

<script setup>
	import { defineProps, defineEmits, ref } from 'vue'
	const actionId = ref(0)
	
	// console.log(navTabbar)
	const props = defineProps({
		navTabbar:{
			type: Array,
			default: []
		}
	})
	const emits = defineEmits(['navClick']) 
	const navClick = (item) => {
		// console.log(33333, actionId);
		actionId.value = (item.id - 1)
		emits('navClick', item)
	}
	// console.log(props.navTabbar, '组件')
	// const tabArr = [{name: '年报', id:1}, {name: '日报', id: 2}, {name: '月报', id: 3}]
</script>

<style lang="scss">
	.tab-box{
		// position: fixed;
		// bottom: 0;
		// left: 0;
		width: 100%;
		height: auto;
		display: flex;
		padding: 20px 0;
		background-color: #f1f1f1;
	}
	.tab-box > .nav{
		flex:  1;
		text-align: center;
	}
	.tab-box > .action{
		color: $uni-color3;
	}
</style>