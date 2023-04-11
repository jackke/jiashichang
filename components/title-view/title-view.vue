<template>
	<!-- 案例 -->
	<!-- <table-view dataList="{{project_lable_data}}" propList="{{project_lable_prop}}" class="table-content" columnsProp="project_name"></table-view> -->
	<!-- 外部table组件 -->
	<view class="table-box">
	    <view class="table-header" :style="headStyle">
	      <view v-for="(xItem, yindex) in xList"  :key="yindex" :style="(xItem.style ? 'flex:none;': '') + (xItem.style || '')">
	        <text>{{xItem.label}}</text>
	      </view>
	    </view>
	    <!-- 
	      头部标题： xList = project_lable_prop
	      案例：
	      project_lable_prop: [
	      {label: '项目', prop: 'project_name', style:'width:20%;padding-left: 8rpx;'},
	      {label: '指标', prop: 'subject_name'},
	      {label: '预算', prop: 'budget'},
	      {label: '实际', prop: 'actual'},
	      {label: '完成率', prop: 'pc', styleName: 'wclStyle'},
	      {label: '同比', prop: 'year_erlier', styleName: 'tbStyle'},
	    ],
	    中间内容  yList = project_lable_data
	     案例：
	    project_lable_data.push({project_name: item.project_name, ...byteItem, cloumnStyle: 'margin-left:-8rpx;color: #2A55B7;', wclStyle: byteItem.wcl_red == 1 ? 'color:#d1431e;' : '', tbStyle: 'color:red;'})
	      表格自定义样式 
	      案例
	      xItem.styleName[yItem.wclSty] = 第33行 style
	    -->
	    <view :style="listStyle">
	      <view v-for="(item, yindex) in yList" :key="yindex" class="table-list" >
	        <!-- 普通 单元格 -->
	        <view v-for="(xItem, xindex) in xList" :key="xindex" :style="(xItem.style ? 'flex:none;': '') + (xItem.style || '')" @click="listNavto(xItem)">
	        
	          <view :class="columnsArr.length && columnsProp ? 'list-text' : ''" :style="item[xItem.styleName]" >{{item[xItem.prop]}}</view>
	          
	          <!-- 合并 单元格 -->
	          <view v-for="(columnItem, columnIndex) in columnsArr" :key="columnIndex">
	            <view class="merge-cell"  v-if="columnItem[1] == yindex && columnItem[0] == xindex" :style="`${item.cloumnStyle};height:${((columnItem[2] * 100) || 100) + '%'}`">{{item[xItem.prop]}}</view>
	          </view>
	        </view>
	      </view>
	    </view>
	</view>
</template>

<script setup>
	import {ref, reactive, defineProps, defineEmits, defineExpose, toRefs} from 'vue'
	
	let columnsArr = ref([])
	let yList = ref([])
	let xList = ref([])
	
	const props = defineProps({
				headStyle: { // 头部样式
		      type: String,
		      value: ''
		    },
		    listStyle: { // 列表样式
		      type: String,
		      value: ''
		    },
		    columnsProp:{ // 是否开启 单元格合并  要合并单元格的valueName
		      type: String,
		      value: '',
		      // observer: function(newVal,oldVal,change) {
		        // this.initData()
		      // }
		    },
		    dataList:{ // y 数据
		      type: Array,
		      value: [],
		      // observer: function(newVal,oldVal,change) {
		        // console.log(newVal,oldVal,change, '222222');
		        // this.initData()
		      // }
		    },
		    propList: {// x 数据
		      type: Array,
		      value: [],
		      // observer: function(newVal,oldVal,change) {
		        // label： 名称
		        // prop： valueName
		        // style: 表格单统一样式
		        // cloumnStyle: 合并单元格自定义样式
		
		        // console.log(newVal,oldVal,change);
		      // }
		    }
	})
  // const emits =	defineEmits(['initChange'])

	  // 初始化数据
	const initData = async (dataList) => {
	      // console.log(11111111, this.properties.dataList, this.properties.propList);
	     var x = props.propList
	     var y = dataList
	     let data = []
	     let columns = []
	     let columnsSum = 0
	     let mergeNum = 0
	     let cArr = []
	     if (props.columnsProp) {
	      y.forEach((item, index) => {
	         if (columns.length > 0 && index > 0 && item[props.columnsProp] !== columns[columns.length - 1]) {
	          //[x开始,y开始,合并个数]
	          cArr.push([0, columnsSum, columns.length])
	          columnsSum = index
	          columns = []
	         }
	         //给最后一条 添加要合并的数据
	         if (index == y.length - 1){ 
	          cArr.push([0, columnsSum, (y.length) - columnsSum])
	         }
	        columns.push(item[props.columnsProp])
	       })
	      //  console.log(columnsSum, columnsArr);
	     }
			 
			 columnsArr.value = cArr
			 xList.value = x
			 yList.value = y
	     // this.setData({
	     //  xList: xList,
	     //  yList: yList,
	     //  data: data,
	     //  columnsArr: columnsArr
	     // })
	}
	// 列表跳转
	const listNavto = (e) => {
		console.log(e);
	}
	
	// const initChange = () => {
	// 	initData()
	// }
	
	defineExpose({
		initData
	})
	// export default {
	// 	name:"title-view",
	// 	data() {
	// 		return {
				
	// 		};
	// 	}
	// }
</script>

<style lang="scss">
.table-box{
  width: 100%;
  color: #282B32;
  box-sizing: border-box;
}
.table-header{
  display: flex;
  align-items: center;
  font-size: 24rpx;
  color: #6D7275;
  background: rgba(236, 236, 236, 1);
  height: 72rpx;
  line-height: 72rpx;
  border-top: 1rpx solid #E2E2E2;
  border-bottom: 1rpx solid #E2E2E2;
}
.table-header > view{
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8rpx;
}
.table-header > view:nth-child(1){
  justify-content: flex-start;
}
.list-text{
  /* width: 100%; */
  white-space: nowrap;
  overflow: hidden;
}
.table-list{
  display: flex;
  line-height: 36rpx;
  box-sizing: border-box;
  /* align-items: center; */
}
.table-list > view{
  flex: 1;
  /* padding-right: 8rpx; */
  font-size: 26rpx;
  padding: 20rpx 8rpx 20rpx 0;
  /* text-align: right; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
}
.table-list > view:nth-child(1){
  justify-content: flex-start;
}
.table-list > view::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rpx;
  background-color: #E2E2E2;
  z-index: 1;
}
/* .table-tr{
  width: 100%;
  padding: 0 10rpx;
  display: flex;
} */
.merge-cell{
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-color: #ffffff;
  display: flex;
  align-items: center;
  z-index: 9;
  /* white-space:pre-line; */
}
.merge-cell::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rpx;
  background-color: #E2E2E2;
  z-index: 1;
}

</style>