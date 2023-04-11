"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
    this.getLogin();
  },
  methods: {
    getLogin() {
      console.log("h5 login");
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js";
      const wxElement = document.body.appendChild(s);
      wxElement.onload = function() {
        new WxLogin({
          self_redirect: false,
          // 页面中对应展示二维码的容器ID
          id: "pologin",
          appid: "wx69bb840ec96bf5cd",
          //wx69bb840ec96bf5cd ｜｜ wx34bb4df670576fd6
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
