<template>
	<view class="index-image" v-if="isShowImage">
		<!-- <div style="height: 200rpx;"></div> -->
		<image src="/static/iPhone_14.png" mode=""></image>
	</view>
	<view class="content" v-else>
		<!-- 自定义 头部 -->
		<custom-box>
			<slot name="tab-nav">
				<view :class="customIndex == index ? 'custom-nav action' : 'custom-nav'" v-for="(item,index) in customNav" @click="onCustomNav(item, index)">{{item.functionName}} </view>
			</slot>
		</custom-box>
		
		<!-- 中间内容 -->
		<view class="content-list">
			<scroll-view style="height: 100%;" scroll-y="true">
				<view style="padding-bottom: 1px;">
					<view v-for="(item,index) in jyList" :key="index" style="margin: 20rpx 0;" @click="onToNav">
						<list-card :cardItem="item"></list-card>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 底部 按钮 -->
		<nav-tab-bar :navTabbar="navTabbar" @navClick="navRabClick" />
	</view>
</template>

<script>
	// import { onLoad, onShow } from "@dcloudio/uni-app";
	import { reactive, ref } from 'vue'
	
	// const navTabbar = ref()
	
	export default {
		data() {
			return {
				title: 'Hello',
				navTabbar: [],
				isShowImage: true,
				customNav: [],
				customIndex:0,
				jy_date: '2023-03-29',
				jyList: []
			}
		},
		onLoad() {
			this.userLogin()
		},
		methods: {
			// 登录
			userLogin(){
				 // 获取登录小程序的途径
				const sysInfo = uni.getSystemInfoSync();
				const that = this
				// console.log(222222,sysInfo, sysInfo.environment);
				if (sysInfo.environment == 'wxwork') {
								uni.qy.login({
									provider: "weixin",
									onlyAuthorize: true, // 微信登录仅请求授权认证
									success: function (res) {
										if (res.code) {
											that.wxLogin(res.code, sysInfo, 'wx32569723c1d69e2a', 2)
										}
									}
								});
							} else {
								uni.login({
									provider: "weixin",
									onlyAuthorize: true, // 微信登录仅请求授权认证
									success: function (res) {
										// console.log(res, 'wxlog');
										if (res.code) {
											that.wxLogin(res.code, sysInfo, '', 1)
										}
									}
							});
						}
			},
			wxLogin(code, sysInfo, corpId, loginSource) {
				// 获取appid
				const appIdRes = uni.getAccountInfoSync();
				let url = '/account/login';
				let data = {
					appId: appIdRes.miniProgram.appId,
					code: code,
					deviceInfo: sysInfo,
					loginSource: loginSource,
					corpId: corpId || '',
					version: 4.3 // 1.3
				}
				uni.$https.postHttp(url, data).then(res => {
					if (res) {
						let data = res.data
						let navTabbar = []
						if (data.power.length > 0){
							navTabbar.push({name: '日报', id : 1, icon: 'iconfont icon-ribao', nav: data.power})
						}
						if (data.reportPower.length > 0){
							navTabbar.push({name: '月报', id : 2, icon: 'iconfont icon-yuebao', nav: data.reportPower})
						}
						if (data.annualPower.length > 0){
							navTabbar.push({name: '年报', id : 3, icon: 'iconfont icon-nianbao', nav: data.annualPower})
						}
						this.navTabbar = reactive(navTabbar)
						this.isShowImage = false
						this.customNav = navTabbar[0].nav
						uni.setStorageSync("userInfo", res.data.userInfo)
						uni.setStorageSync("tokenInfo", res.data.tokenInfo)
						this.jyData()
						// console.log(navTabbar, this.navTabbar)
					}
				})
			},
			// 底部tabbar 事件
			navRabClick(e){
				this.customNav = e.nav
				// console.log(e, this.customNav)
			},
			// 头部 custom 事件
			onCustomNav(item, index){
				// console.log(item, 4444);
				this.customIndex = index
			},
			onToNav(){
				uni.navigateTo({
					url:"/subPackages/pages/cateringTopics/index"
				})
			},
			jyData(){
				// var token = wx.getStorageSync('tokenInfo').tokenValue
				var uid = uni.getStorageSync('userInfo').account
				let url = '/biz/project-businseeprojGroupHomepageNew'
				const data = {
					userid: uid,
					pageNo: 1,
					pageSize: 1000,
					stat_date: this.jy_date
				}
				uni.$https.getHttp(url, data).then(res => {
					if (res) {
						let list = res.data
						// let arr = []
						// if (that.data.format) return
						list.forEach((item) => {
							item.formatList = (item.format.replace(/all/, '')).split(',')
							// if (arr.indexOf(item.format.split('all')[1]) == -1) {
							// 	arr.push(item.format.split('all')[1])
							// }
						})
						this.jyList = list
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	// page{
	// 	width: 100%;
	// 	height: 100%;
	// }

	.index-image{
		width: 100%;
		height: 100%;
		text-align: center;
		display: flex;
		align-items: flex-end;
	}
	.index-image > image{
		width: 100%;
		height: 88%;
	}
	.custom-top {
		width: 100%;
		height: 180rpx;
		/* background-image: url(https://cdn.hopsontone.com/20230329140919_CqYHLf_navbg.png); */
		background-color: $uni-color3;
		/* background-size: 100% 100%; */
		display: flex;
		align-items: flex-end;
		padding-left: 20rpx;
	}
	.custom-top .custom-nav{
		height: 100rpx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		margin-right: 20rpx;
	}
	.custom-top .action{
		color: $uni-color2;
	}
	.content-list{
		padding: 0 15px;
	}
</style>
