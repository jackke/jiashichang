<template>
	<view class="tabs">
		<custom-box titleName="详情列表">
			<view class="date-picker">
				<picker mode="date" @change="(val) => datePicker(val, 1)" :value="lDate" :end="lDate">
					<view>{{lDate}}</view>
				</picker>
				<view style="padding: 0 10rpx;"> - </view>
				<picker mode="date" @change="(val) => datePicker(val, 2)" :value="rDate" :start="rDate">
					<view>{{rDate}}</view>
				</picker>
			</view>
		</custom-box>
		<view style="flex: 1;overflow: hidden;">
			<scroll-view ref="tabbar1" id="tab-bar" class="tab-bar" :scroll="true" :scroll-y="true" :show-scrollbar="false"
				:scroll-into-view="scrollInto">
				<view style="flex-direction: column; padding: 20rpx;">
					<title-view ref="tView1" :propList="lableProp" headStyle="position: sticky;top: 0;z-index:9" class="table-content"></title-view>
					<!-- <view style="flex-direction: row;">
						<view class="uni-tab-item" v-for="(tab,index) in tabList" :key="tab.id" :id="tab.id"
							:ref="'tabitem'+index" :data-id="index" :data-current="index" @click="ontabtap">
							<text class="uni-tab-item-title"
								:class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
						</view>
					</view> -->
					<!-- 	<view class="scroll-view-indicator">
						<view ref="underline" class="scroll-view-underline" :class="isTap ? 'scroll-view-animation':''"
							:style="{left: indicatorLineLeft + 'px', width: indicatorLineWidth + 'px'}"></view>
					</view> -->
				</view>
			</scroll-view>
		</view>
		
		<!-- <view class="tab-bar-line"></view>
		<swiper class="tab-view" ref="swiper1" id="tab-bar-view" :current="tabIndex" :duration="300"
			@change="onswiperchange" @transition="onswiperscroll" @animationfinish="animationfinish"
			@onAnimationEnd="animationfinish">
			<swiper-item class="swiper-item" v-for="(page, index) in tabList" :key="index">
				<swiper-page class="swiper-page" :pid="page.pageid" ref="page"></swiper-page>
			</swiper-item> -->
		<!-- </swiper> -->
	</view>
</template>

<script setup>
import {ref, reactive, onMounted, toRefs} from 'vue';

	let scrollInto = reactive('scrollInto')
	let lDate = ref('2023-04-09')
	let rDate = ref('2023-04-09')
	let startDate = ref('2023-01-01')
	let endDate = ref()
	
	const tView1 = ref(null)
	const lableProp = reactive([
		{label: '日期', prop: 'jzdate_day', style:'width:20%;padding-left: 8rpx;'},
		{label: '营业额(元)', prop: 'xssr'},
		{label: '人均消费(元)', prop: 'sl'},
		{label: '上座率', prop: 'jmll'},
	])
	
	
	onMounted(() => {
		initData()
	})

const initData = () => {
	let url = '/biz/project-zyly-mohoModityDetail'
	let data = {
		project_code: "SH_JAXM",
		mucode: 201,
		ppmemo: "all",
		start_jzdate: lDate.value,
		end_jzdate: rDate.value,
		pageNo: 1,
		pageSize: 10000
	}
	uni.$https.getHttp(url, data).then(res => {
		let dataList = res.data || []
		tView1.value.initData(dataList)
	})
}

const datePicker = (val, type) => {
	console.log(val);
	if (type == 1) {
		lDate.value = val.detail.value
	} else {
		rDate.value = val.detail.value
	}
	initData()
}

</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
	.tabs{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
.date-picker{
	margin: 18rpx 18rpx 12rpx 0;
	padding: 6rpx 10rpx;
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 10rpx;
	display: flex;
	// font-size: 16rpx;
	view {
		font-size: 22rpx;
	}
}
.tab-bar {
	// flex: 1;
	height: 100%;
	overflow: hidden;
}
</style>
