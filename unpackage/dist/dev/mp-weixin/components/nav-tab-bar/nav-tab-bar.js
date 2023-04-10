"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "nav-tab-bar",
  props: {
    navTabbar: {
      type: Array,
      default: []
    }
  },
  emits: ["navClick"],
  setup(__props, { emit: emits }) {
    const actionId = common_vendor.ref(0);
    const navClick = (item) => {
      actionId.value = item.id - 1;
      emits("navClick", item);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.navTabbar, (item, index, i0) => {
          return {
            a: common_vendor.n(item.icon),
            b: common_vendor.t(item.name),
            c: common_vendor.n(actionId.value == index ? "nav action" : "nav"),
            d: index,
            e: common_vendor.o(() => navClick(item), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/components/nav-tab-bar/nav-tab-bar.vue"]]);
wx.createComponent(Component);
