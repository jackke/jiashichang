"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "title-name",
  props: {
    title: {
      type: String,
      default: ""
    },
    titleTag: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.title),
        b: __props.titleTag
      }, __props.titleTag ? {
        c: common_vendor.t(__props.titleTag)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/components/title-name/title-name.vue"]]);
wx.createComponent(Component);
