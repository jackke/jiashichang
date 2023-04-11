"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const utils_http = require("./utils/http.js");
require("./utils/config.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/login.js";
  "./subPackages/pages/cateringTopics/index.js";
  "./subPackages/pages/list-view/list-view.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  common_vendor.index.$https = utils_http.http;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
