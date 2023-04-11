<template>
	<view>
		<view class="code" id="pologin"></view>
	</view>
</template>

<!-- <script src="https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"></script> -->
<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getLogin()
		},
		methods: {
				getLogin() {
					console.log('h5 login');
							//获取引入的js
							const s = document.createElement("script");
							//给js文件加入type类型
							s.type = "text/javascript";
							// 微信提供的访问地址 或 自定义地址
							s.src = "https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js";
							const wxElement = document.body.appendChild(s);
							wxElement.onload = function() {
								// 微信登录实例JS对象
								const object = new WxLogin({
									self_redirect: false,
									// 页面中对应展示二维码的容器ID
									id: "pologin",
									appid: "wx69bb840ec96bf5cd", //wx69bb840ec96bf5cd ｜｜ wx34bb4df670576fd6
									scope: "snsapi_login",
									// 回调地址
									// redirect_uri: encodeURIComponent('https://ess.mingyizhi.cn/'),
									// 若在业务中需要有多个判定参数 可以通过拼接的方式放在 state 中
									state: Math.random(),
									style: "black",
									// 二维码样式及其它（关于样式自定义可在网上查阅到相关的实现）
									href: "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDMxMnB4O2hlaWdodDozMTJweDtib3JkZXI6IG5vbmUgIWltcG9ydGFudDttYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7fQouaW1wb3dlckJveCAudGl0bGUge2Rpc3BsYXk6IG5vbmU7fQouaW1wb3dlckJveCAuaW5mbyB7d2lkdGg6IDIwMHB4O30KLnN0YXR1c19pY29uIHtkaXNwbGF5OiBub25lfQouaW1wb3dlckJveCAuc3RhdHVzIHt0ZXh0LWFsaWduOiBjZW50ZXI7fSAKLmxvZ2luX2NvbnRhaW5lcntoZWlnaHQ6MjEwcHg7fQouaW5mb3tkaXNwbGF5OiBub25lO30KLmxvZ2luUGFuZWwge3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IC0xNHB4OyBsZWZ0OiAycHg7fQoudGl0bGV7CglkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7Cn0KLmluZm8gewoJZGlzcGxheTogbm9uZSAhaW1wb3J0YW50Owp9Cg=="
								});
							};
						},
		}
	}
</script>

<style>

</style>
