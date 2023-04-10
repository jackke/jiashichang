"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_custom_box2 = common_vendor.resolveComponent("custom-box");
  _easycom_custom_box2();
}
const _easycom_custom_box = () => "../../../components/custom-box/custom-box.js";
if (!Math) {
  _easycom_custom_box();
}
const _sfc_main = {
  __name: "list-view",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          titleName: "详情列表"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/subPackages/pages/list-view/list-view.nvue"]]);
wx.createPage(MiniProgramPage);
