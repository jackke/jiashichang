<template>
	<view class="echart" disable-scroll="true">
		 <vue3-echarts disable-scroll="true" class="echart" ref="echarts" :options="state.eOptions" canvasId="echarts" @click="handelChart"></vue3-echarts>
	</view>
</template>

<script setup>
import {ref, reactive, defineProps, defineEmits, defineExpose, toRefs} from 'vue'

function getOption(option) {
	// let {} = option
  return {
    title: {
      text: option.title,
      top: 25,
      left: 5,
      textStyle:{
        fontWeight: '400',
        color: 'rgba(150,155,158,1)',
        fontSize: 9,
      },
    },
    color: option.color || ['#CBAE99', '#2A55B7'],
    grid: {
      top: '20%',
      left: 20,
      right: 20,
      bottom: '10',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'shadow'
      // },
      confine: true,
      formatter: function (params) {
        return params[0].name + ':\n' + params[0].seriesName + ":\t" + params[0].data + '(万元)\n' +
          params[1].seriesName + ":\t" + params[1].data + '(万人次)'
      }
    },
    legend: {
			show: option.legendShow || false,
      data: option.legend,
      x: 'center',            //水平方向的位置'left'，'center'，'right'        
      textStyle: {            //图例文字属性设置
        color: '#969b9e',
        fontSize: '10',
      },
      padding: [0, 0, 0, 0],
    },
    // xAxis: option.xAxis,
		xAxis:{
				type: 'category',
				show: option.xAxis ? true : false,
        data: option.xAxis,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(150,155,158,1)',
            width: 0.5
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(150,155,158,0.3)',
            type: "dashed",
            width: 0.5
          }
        }
    },
    // yAxis: option.yAxis,
		yAxis:  option.yAxis.length == 0 || !option.yAxis ? {type: 'value'} : option.yAxis.map((item, index)=> {
				return {
							show: item.show || true,
							scale: true,
							type: "value",
							name: index == 0 ? '' : item.name,
							interval: Math.round(item.max / 2),
							max: item.max,
							min: item.min || 0,
							nameTextStyle: {
							  // padding: max[0] == 0 ? [0,0,0,50] : [0,0,0,0],
							  color: 'rgba(150,155,158,1)',
							  fontSize: 9
							},
							axisLabel: {
							  formatter: '{value}',
							  color: 'rgba(150,155,158,0.45)',
							  fontSize: 9
							},
							splitLine: {
							  lineStyle: {
							    type: 'dashed'
							  }
							}
					  }
				}),
		series: option.series.map((item, index)=> {
					return {
								name: item.name || '',
								type: item.type || 'bar',
								barWidth: '10',
								radius: item.radius || '',
								center: item.center || '',
								// width: '10%',
								data: item.data,
								yAxisIndex: index,
								lineStyle:{
								      width: 1,
								},
								itemStyle : {
									normal:{
										label : {
										 show: item.type !== 'bar' ? true : false,
										 color: item.itemStyleColor || 'rgba(42,85,183,1)',
										 fontSize: 10
										},
										barBorderRadius: 8,
									},
									// barBorderRadius: [8, 8, 8, 8], // 重点
								},
								breadcrumb: {
									show: false
								}
						  }
					}),
  }
}


const props = defineProps({
	initData:{
		type: Array,
		default:[]
	},
	canvasId: {
		type: String,
		default: 'ec-charts'
	},
	eOption:{
		type: Object,
		default: {}
	}
})
const prop = toRefs(props)
const echarts = ref() // ref echart

let state = reactive({
	eOptions: {}
})

const initChart = async (option) => {
	// console.log('initChart', option);
	state.eOptions = getOption(option)
	echarts.value.initChart(state.eOptions)
	// console.log('initChart', state.eOptions);
}


// chart 点击回调函数
const handelChart = val=>{
    console.log(val)
}

// 暴露函数方法
defineExpose({initChart})
</script>

<style lang="scss">
.echart{
	width: 100%;
	height: 100%;
}
</style>