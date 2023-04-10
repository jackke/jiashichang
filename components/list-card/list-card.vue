<template>
	<view class="card-box">
		<view class="card-top">
			<view class="card-title">
				<view class="card-text">{{cardItem.project_name}} </view>
				<view v-for="(tag, index) in cardItem.formatList" :key="index">
					<view class="card-tag">{{tag}} </view>
				</view>
			</view>
			<view class="card-money">
				<view class="card-tag">{{option[optionIndex].title || ''}}</view>
				<view class="card-num">
					<text>{{cardItem.index_value1}}</text>
					<text>{{option[optionIndex].tMark}}</text>
				</view>
			</view>
		</view>
		<view class="card-buttom">
			<view class="card-l">
				<view class=""></view>
				<view class="">{{option[optionIndex].lText}}</view>
				<view class="">{{cardItem.index_value2}}{{option[optionIndex].lMark}}</view>
			</view>
			<view class="card-r">
				<view class=""></view>
				<view class="">{{option[optionIndex].rText}}</view>
				<view class="">{{cardItem.index_value3}}{{option[optionIndex].rMark}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref, reactive, defineProps, defineEmits} from 'vue'
	const optionArr = ['商业', '办公', '产业', '酒寓', '餐饮']
	const option = reactive({
		0: {
			title: '销售',
			tMark: '万',
			lIcon: '',
			lValue: '',
			lText: '客流量',
			lMark: '万',
			rIcon: '',
			rValue: '',
			rText: '出租率',
			rMark: '%',
		},
		1: {
			title: '出租率',
			tMark: '%',
			lIcon: '',
			lValue: '',
			lText: '本月新签',
			lMark: '㎡',
			rIcon: '',
			rValue: '',
			rText: '起租率',
			rMark: '%',
		},
		2: {
			title: '出租率',
			tMark: '%',
			lIcon: '',
			lValue: '',
			lText: '本月新签',
			lMark: '㎡',
			rIcon: '',
			rValue: '',
			rText: '起租率',
			rMark: '%',
		},
		3: {
			title: '入住率',
			tMark: '%',
			lIcon: '',
			lValue: '',
			lText: '平均房价',
			lMark: '元',
			rIcon: '',
			rValue: '',
			rText: 'RevPar',
			rMark: '元',
		},
		4: {
			title: 'NOP实际',
			tMark: '万',
			lIcon: '',
			lValue: '',
			lText: 'NOP目标',
			lMark: '万',
			rIcon: '',
			rValue: '',
			rText: 'NOP达成',
			rMark: '万',
		}
		
	})
	const props = defineProps({
		cardItem:{
			type: Object,
			default: {}
		},
	})
	
	const optionIndex = reactive(optionArr.indexOf(props.cardItem.formatList[0]))
	
	
</script>

<style lang="scss">
.card-box{
	width: 100%;
	height: auto;
	background-color: #fff;
	border-radius: 20px;
	padding: 20px;
}
.card-top{
	display: flex;
	justify-content: space-between;
}
.card-title{
	flex: 1;
	.card-text{
		font-size: 35rpx;
		text-align: left;
	}
	
}
.card-top .card-tag{
	width: 70rpx;
	margin-top: 10rpx;
	background-color: $uni-color2;
	font-size: 22rpx;
	border-radius: 0 12rpx 0 12rpx;
	color: $uni-color1;
}
.card-money{
	display: flex;
	align-items: flex-start;
	.card-tag{
		width: auto;
		font-size: 26rpx;
		// height: 50rpx;
		padding: 5rpx 20rpx;
		background-color: $uni-color2;
		color: $uni-color1;
		border-radius: 50rpx;
		border: 1rpx solid $uni-color1;
		margin-top: 0;
	}
	.card-num{
		display: flex;
		margin-left: 10rpx;
		> text:nth-child(1){
			font-size: 50rpx;
		}
		> text:nth-child(2){
			font-size: 20rpx;
			padding-bottom: 16rpx;
			display: flex;
			align-items: flex-end;
		}
	}
}
.card-buttom{
	display: flex;
	justify-content: space-between;
	margin-top: 20rpx;
	.card-l{
		display: flex;
		>view:nth-child(2){
			color: #999;
		}
	}
	.card-r{
		display: flex;
		>view:nth-child(2){
			color: #999;
		}
	}
}

</style>