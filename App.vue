<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "/static/iconfont.css";
	page{
		width: 100%;
		height: 100%;
		background-color: $uni-bg-color-grey;
		box-sizing: border-box;
		color: #2d2d2d;
	}
	image{
		width: 30rpx;
		height: 30rpx;
	}
	view{
		font-size: 26rpx;
		box-sizing: border-box;
		text-align: center;
	}
	scroll-view{
		box-sizing: border-box;
	}
	.picker-date{
		font-size: 20rpx;
		padding: 5rpx 20rpx;
		background: #f1f1f1;
		border-radius: 14rpx;
		box-shadow: 0rpx 0rpx 3rpx 0rpx rgba(162, 142, 129, 0.08) inset;
	}
	.content{
		display: flex;
		height: 100%;
		flex-direction: column;
		.content-list{
			flex: 1;
			overflow: hidden;
		}
	}
	.flex-b{
		display: flex;
		justify-content: space-between;
	}
</style>
