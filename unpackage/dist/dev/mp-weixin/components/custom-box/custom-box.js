"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "custom-box",
  props: {
    titleName: {
      type: String,
      default: ""
    },
    titleStatus: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const navigateBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.titleName
      }, __props.titleName ? {
        b: common_vendor.o(navigateBack),
        c: common_vendor.t(__props.titleName)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/components/custom-box/custom-box.vue"]]);
wx.createComponent(Component);
