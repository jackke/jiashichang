<template>
	<!-- 整场经营 卡片 -->
	<view class="cord-box">
	    <!-- top -->
	    <view class="cord-header" bindtap="btnNav">
	      <view class="flex align-conter">
	        <!-- <image style="display: {{tImg ? 'block' : 'none'}};" class="imgs_30" src="../../../subPackages/images/sunny.png"></image> -->
	        <view class="box_tit">
	          <!-- 销售额<text class="txt-unit">(万元)</text> -->
	          <slot></slot>
	        </view>
	      </view>
	      <view v-if="btnShow" >
	        <!-- <image  src="/images/next.png"></image> -->
	      </view>
	    </view>
	
	    <!-- content -->
	    <view class="cord-content">
	      <view class="" style="flex:1">
	        <view class="cord-num">
	          {{ itemData.data1 || '-'}}
	        </view>
	        <view class="cord-text">{{itemData.data1Name || '当日'}}</view>
	      </view>
	      <view class="" style="flex:1">
	        <view class="cord-num">
	          {{ itemData.data2  || '-'}}
	        </view>
	        <view class="cord-text">{{itemData.data2Name || '本月日均'}}</view>
	      </view>
	      <view style="flex:1">
	        <view>
	          <view v-if="itemData.data3" class="cord-num" :style="`color:${itemData.data3>=0?(itemData.data3==0?'':'#7FCD13'):'#D1431E;'}`">
	            <view>
	              <!-- <image style="width: 22rpx;height: 22rpx;" src="{{itemData.data3>=0?(itemData.data3==0?'':'../../../images/icon/up.png'):'../../../images/icon/down.png'}}"></image> -->
	            </view>
	            {{(itemData.data3>=0?itemData.data3:(-itemData.data3))||'-'}}{{itemData.data3?'%':''}}
	          </view>
	          <view v-else class="cord-num"> - </view>
	        </view>
	        <view class="cord-text">{{itemData.data3Name || '同比上周'}}</view>
	      </view>
	      <view style="flex:1">
	        <view >
	          <view v-if="itemData.data4" class="cord-num" :style="`color:${itemData.data4>=0?(itemData.data4==0?'':'#7FCD13'):'#D1431E;'};`">
	            <view>
	              <!-- <image style="width: 22rpx;height: 22rpx;" src="{{itemData.data4>=0?(itemData.data4==0?'':'../../../images/icon/up.png'):'../../../images/icon/down.png'}}"></image> -->
	            </view>
	            {{(itemData.data4>=0?itemData.data4:(-itemData.data4))||'-'}}{{itemData.data4?'%':''}}
	          </view>
	          <view v-else class="cord-num"> -  </view>
	        </view>
	        <view class="cord-text">{{itemData.data4Name || '同比上月'}}</view>
	      </view>
	    </view>
	</view>
</template>

<script setup>
	import {ref, reactive, defineProps, defineEmits, onMounted, watch} from 'vue'
	onMounted(() => {
		// console.log(props.itemData, '组件 itemData')
	})
	const props = defineProps({
			itemData: { 
				type: Object,
				value: {data1:'', data2:'', data3: '', data4:''},
			},
			btnShow: {
				type: Boolean,
				value: false
			},
			tImg: {
				type: Boolean,
				value: true
			},
	})
	// watch(props.itemData, (val) => {
	// 	console.log(val, 'watch');
	// })

</script>

<style lang="scss">
/* @import "/subPackages/pages/zyly_brand/index.wxss" */
.cord-box{
  background-color: #ffffff;
  border-radius: 20rpx;
  font-size: 32rpx;
  color: #282b32;
  padding: 24rpx;
  text-align: center;
}
.flex {
  display: flex;
  position: relative;
}
.cord-header{
  display: flex;
  justify-content: space-between;
  padding-bottom: 16rpx;
  /* padding: 0 23rpx; */
}
.cord-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 16rpx; */
}
.cord-text{
  color: #6d7275;
  font-size: 24rpx;
  font-weight: 400;
  font-family: PingFang SC, PingFang SC-Regular;
  margin-top: 10rpx;
}
.cord-num{
  font-family: DIN Alternate, DIN Alternate-Bold;
  font-size: 32rpx;
  color: #282b32;
  font-weight: 700;
  display: flex;
  justify-content: center;
}

image{
  width: 24rpx;
  height: 24rpx;
}
.box_tit{
  font-weight: 500;
  font-size: 24rpx;
  color: #282b32;
}
.box_tit text{
  font-weight: 300;
  margin-left: 6rpx;
  font-size: 18rpx;
}
.imgs_30{
  width: 26rpx;
  height: 26rpx;
}
.align-conter{
  align-items: center;
}


</style>