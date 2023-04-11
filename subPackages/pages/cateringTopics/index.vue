<!-- 餐饮专题 -->
<template>
	<view class="cateringTopics">
		<custom-box titleName="餐饮项目"></custom-box>
		<view class="flex-b tab-name">
			<view class="title-name">北京朝阳合生汇</view>
			<picker mode="date" :value="pickerDate" @change="onPickerDate">
				<view class="picker-date">{{pickerDate}}</view>
			</picker>
		</view>
		<view class="flex-b top-num">
			<view class="">
				开业日期
			</view>
			<view class="">
				餐位数
			</view>
		</view>
		
		<!-- 内容区 -->
		<view class="content">
			<title-name title="经营情况"></title-name>
			<view class="">
				<view class="" @click="listView">
					<card-box :itemData="item_xs">
						营业额<text class="txt-unit">(万元)</text> 
					</card-box>
				</view>
				<view class="" style="margin-top: 30rpx;">
					<card-box :itemData="item_mxs">
						上座率<text class="txt-unit">(万元)</text> 
					</card-box>
				</view>
				<view class="" style="margin-top: 30rpx;">
					<card-box :itemData="item_kl">
						人均消费<text class="txt-unit">(元)</text> 
					</card-box>
				</view>
				<view class="" style="margin-top: 30rpx;">
					<card-box :itemData="item_sum">
						月营业额 <text class="sx_date1" style="margin-left: 10rpx;"> 当月累计：{{sxDate}} </text> 
					</card-box>
				</view>
			</view>
			
			<view class="echart-box" style="height: 300px;">
				<echart-box ref="echartRef" canvasId="ec-chart1"></echart-box>
			</view>
			
			<title-name title="时段分析"></title-name>
			<view class="echart-box" style="height: 260px;overflow: hidden;">
				<echart-box ref="echartRef2" canvasId="ec-chart2"></echart-box>
			</view>
			<view class="echart-box" style="height: 260px;overflow: hidden;">
				<echart-box ref="echartRef3" canvasId="ec-chart3"></echart-box>
			</view>
			
			<view class="" style="padding: 20px 0;">
				<title-view ref="tView1" :propList="lableProp" class="table-content"></title-view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref, reactive, onMounted, toRefs} from 'vue';
	import utils from "@/utils/util.js";
	
	// import * as echarts from "echarts"
	// import * as echarts from "../../../components/mpvue-echarts/echarts.min.js";
	
	const echartRef = ref(null)
	const echartRef2 = ref(null)
	const echartRef3 = ref(null)
	const tView1 = ref(null)
	
	let itemData = {
		data1: '',
		data2: '',
		data3: '',
		data4: '',
	}
	let item_xs = ref(itemData)
	let item_mxs = ref(itemData)
	let item_kl = ref(itemData)
	let item_sum = ref(itemData)
	let sxDate = ref('2023-01-01 ~ 2023-04-10')
	let pickerDate = ref('2023-04-10')
	let headData = ref()
	let lableProp = ref([
		{label: '时段类型', prop: 'ppmemo', style:'width:20%;padding-left: 8rpx;'},
		{label: '笔数', prop: 'xssr'},
		{label: '金额(元)', prop: 'jml'},
		{label: '金额占比', prop: 'jmll'},
	])
	let echartOption = ref({
		title: '',
		xAxis: [],
		yAxis: [],
		series: []
	})
	let chartOptionData = ref([])
	const params = {
		project_code: "SH_JAXM",
		mucode: 201,
		pageNo: 1,
		pageSize: 20,
		jzdate: "2023-03-30"
	}
	// reactive(...params)
	// 页面加载完成事件
	onMounted(() => {
		onProjectLyMessage()
		onMohoShopBusiness()
		onMohoModityQs()
		onMohoModityQwqklb()
	})
	
	const onLoadData = () => {
		// let url = '/biz/project-zyly-projectLyMessage'
		// let data = params
		// uni.$https.getHttp(url, data).then(res => {
		// 	console.log(res)
		// })
	}
	// 卡片数据
	const onMohoShopBusiness = () => {
		let url = '/biz/project-zyly-mohoShopBusiness'
		let data = {
			project_code: "SH_JAXM",
			mucode: 201,
			pageNo: 1,
			pageSize: 20,
			jzdate: pickerDate.value
		}
		uni.$https.getHttp(url, data).then(res => {
			// var item_xs = reactive({}); // 销售
			// var item_mxs = reactive({}); // 月销售
			// var item_kl = reactive({}); //客流
			// var item_sum = reactive({}); // 交易
			let item = res.data[0] || {}
			item_xs.value = {
						...item,
						data1: item.xssr,
						data2: item.this_month_yrj,
						data3: item.week_xs_yoy,
						data4: item.month_xssr_yoy,
					};
			item_mxs.value = {
						...item,
						data1: item.this_month_budget,
						data2: item.this_month_accsale,
						data3: item.sale_rate,
						data4: item.sale_qk,
						data1Name: '当月预算',
						data2Name: '当月累计',
						data3Name: '完成率',
						data4Name: '缺口',
					}
			item_kl.value = {
						...item,
						data1: item.day_flow,
						data2: item.this_month_day_flow_yrj,
						data3: item.week_flow_yoy,
						data4: item.month_flow_yoy,
					}
					
			item_sum.value = {
						...item,
						data1: item.bs,
						data2: item.this_month_bs_yrj,
						data3: item.week_bs_yoy,
						data4: item.month_bs_yoy,
					}
			// console.log(res, item_xs, '卡片')
		})
	}
	// 头部信息
	const onProjectLyMessage = () => {
		let url = '/biz/project-zyly-mohoShopBusiness'
		let data = {
			project_code: "SH_JAXM",
			mucode: params.mucode,
			pageNo: 1,
			pageSize: 10,
			jzdate: pickerDate.value
		}
		uni.$https.getHttp(url, data).then(res => {
			console.log(res, '头部信息')
			
		})
	}
	// 图表echart 数据 柱状图
	const onMohoModityQs= () => {
		let url = '/biz/project-zyly-mohoModityQs'
		let data = {
			project_code: "SH_JAXM",
			mucode: 201,
			pageNo: 1,
			pageSize: 20,
			star_jzdate: "2023-03-24",
			end_jzdate: "2023-03-30"
		}
		uni.$https.getHttp(url, data).then(res => {
			console.log(res, '柱状图')
			let arr = res.data || []
			let max = [0]
			let min = [0]
		 var saleData = arr.map((item) => { //销售数据
				return item.xssr
			});
			var klData = arr.map((item) => { //客流数据
				return item.day_flow
			});
			var d_date = arr.map(function (item) { // x轴 文案
				// return dayjs(item.jzdate).format("M.DD")
				return item.jzdate_zs
			});
			
			max[0] = utils.getMaxNumber(Math.max(...saleData))
			max[1] = utils.getMaxNumber(Math.max(...klData))
			var optionData = []
			if (arr.length != 0){ 
				optionData.push(saleData, klData, d_date)
			}
			echartOption.value = {
				title: '销售(万元)',
				legendShow: true,
				xAxis: d_date,
				yAxis: [{name: '销售(万元)',max: max[0], min:0 }, {name: '客流(万人次)', max: max[1], min: 0}],
				series: [
					  {
					    name: '销售额',
					    type: 'bar',
					    data: saleData,
					  },
						{
							name: '客流量',
							type: 'line',
							data: klData,
						}
				]
			}
			
			echartRef.value.initChart(echartOption.value)
			
		})
	}
	// 图表echart 数据
	const onMohoModityQwqklb= () => {
		let url = '/biz/project-zyly-mohoModityQwqklb'
		let data = {
			project_code: "SH_JAXM",
			mucode: 201,
			pageNo: 1,
			pageSize: 20,
			jzdate: pickerDate.value
		}
		uni.$https.getHttp(url, data).then(res => {
			// console.log(res, '饼状图')
			let arr = res.data || []
			let option = {
				title: '',
				xAxis: '',
				yAxis: '',
				legendShow: false,
				series: [{
					type: 'pie',
					radius: ['40%', '70%'],
					center: ['50%', '40%'],
					data:  arr.map(item => {
						return {value: item.jml, name: item.ppmemo }
					})
				}]
			}
			// 拼图
			echartRef2.value.initChart(option)
			
			let option1 = {
				 title: '',
				 xAxis: '',
				 yAxis: '',
				 legendShow: false,
				 series: [{
				 	type: 'treemap',
					itemStyleColor: '#fff',
				 	data:  arr.map(item => {
				 		return {value: item.jml, name: item.ppmemo}
				 	})
				 }]
			}
			// 矩阵图
			echartRef3.value.initChart(option1)
			
			// 表格
			tView1.value.initData(arr)
		})
	}
	const onPickerDate = (val) => {
		pickerDate.value = val.detail.value
		onProjectLyMessage()
		onMohoShopBusiness()
		onMohoModityQs()
		onMohoModityQwqklb()
	}
	// 跳转页面
	const listView = () => {
		uni.navigateTo({
			url:'/subPackages/pages/list-view/list-view'
		})
	}

</script>

<style lang="scss">
	.cateringTopics{
		.tab-name{
			padding: 30rpx 20rpx 15rpx 20rpx;
			background-color: #fff;
			.title-name{
				font-size: 32rpx;
				font-weight: 500;
			}
		}
		.top-num{
			padding: 15rpx 20rpx 30rpx 20rpx;
			font-size: 20rpx;
			background-color: #fff;
		}
		.content{
			padding: 0 20rpx;
			.echart-box{
				padding: 30rpx 10rpx;
				background-color: #ffffff;
				margin-top: 20rpx;
			}
		}
		.sx_date1{
		  padding: 0 16rpx;
		  height: 32rpx;
		  font-size: 20rpx;
		  font-family: PingFang SC, PingFang SC-Regular;
		  font-weight: 400;
		  text-align: left;
		  color: #a79385;
		  line-height: 32rpx;
		  background: #f0edeb;
		  border-radius: 0 12rpx 0 12rpx;
		  /* position: absolute;
		  top: 0;
		  left: 0; */
		}
	}
</style>