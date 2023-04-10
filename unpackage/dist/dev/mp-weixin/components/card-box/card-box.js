"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "card-box",
  props: {
    itemData: {
      type: Object,
      value: { data1: "", data2: "", data3: "", data4: "" }
    },
    btnShow: {
      type: Boolean,
      value: false
    },
    tImg: {
      type: Boolean,
      value: true
    }
  },
  setup(__props) {
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.btnShow
      }, __props.btnShow ? {} : {}, {
        b: common_vendor.t(__props.itemData.data1 || "-"),
        c: common_vendor.t(__props.itemData.data1Name || "当日"),
        d: common_vendor.t(__props.itemData.data2 || "-"),
        e: common_vendor.t(__props.itemData.data2Name || "本月日均"),
        f: __props.itemData.data3
      }, __props.itemData.data3 ? {
        g: common_vendor.t((__props.itemData.data3 >= 0 ? __props.itemData.data3 : -__props.itemData.data3) || "-"),
        h: common_vendor.t(__props.itemData.data3 ? "%" : ""),
        i: common_vendor.s(`color:${__props.itemData.data3 >= 0 ? __props.itemData.data3 == 0 ? "" : "#7FCD13" : "#D1431E;"}`)
      } : {}, {
        j: common_vendor.t(__props.itemData.data3Name || "同比上周"),
        k: __props.itemData.data4
      }, __props.itemData.data4 ? {
        l: common_vendor.t((__props.itemData.data4 >= 0 ? __props.itemData.data4 : -__props.itemData.data4) || "-"),
        m: common_vendor.t(__props.itemData.data4 ? "%" : ""),
        n: common_vendor.s(`color:${__props.itemData.data4 >= 0 ? __props.itemData.data4 == 0 ? "" : "#7FCD13" : "#D1431E;"};`)
      } : {}, {
        o: common_vendor.t(__props.itemData.data4Name || "同比上月")
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/components/card-box/card-box.vue"]]);
wx.createComponent(Component);
