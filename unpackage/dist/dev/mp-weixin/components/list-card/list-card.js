"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "list-card",
  props: {
    cardItem: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const optionArr = ["商业", "办公", "产业", "酒寓", "餐饮"];
    const option = common_vendor.reactive({
      0: {
        title: "销售",
        tMark: "万",
        lIcon: "",
        lValue: "",
        lText: "客流量",
        lMark: "万",
        rIcon: "",
        rValue: "",
        rText: "出租率",
        rMark: "%"
      },
      1: {
        title: "出租率",
        tMark: "%",
        lIcon: "",
        lValue: "",
        lText: "本月新签",
        lMark: "㎡",
        rIcon: "",
        rValue: "",
        rText: "起租率",
        rMark: "%"
      },
      2: {
        title: "出租率",
        tMark: "%",
        lIcon: "",
        lValue: "",
        lText: "本月新签",
        lMark: "㎡",
        rIcon: "",
        rValue: "",
        rText: "起租率",
        rMark: "%"
      },
      3: {
        title: "入住率",
        tMark: "%",
        lIcon: "",
        lValue: "",
        lText: "平均房价",
        lMark: "元",
        rIcon: "",
        rValue: "",
        rText: "RevPar",
        rMark: "元"
      },
      4: {
        title: "NOP实际",
        tMark: "万",
        lIcon: "",
        lValue: "",
        lText: "NOP目标",
        lMark: "万",
        rIcon: "",
        rValue: "",
        rText: "NOP达成",
        rMark: "万"
      }
    });
    const optionIndex = common_vendor.reactive(optionArr.indexOf(props.cardItem.formatList[0]));
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.cardItem.project_name),
        b: common_vendor.f(__props.cardItem.formatList, (tag, index, i0) => {
          return {
            a: common_vendor.t(tag),
            b: index
          };
        }),
        c: common_vendor.t(option[optionIndex].title || ""),
        d: common_vendor.t(__props.cardItem.index_value1),
        e: common_vendor.t(option[optionIndex].tMark),
        f: common_vendor.t(option[optionIndex].lText),
        g: common_vendor.t(__props.cardItem.index_value2),
        h: common_vendor.t(option[optionIndex].lMark),
        i: common_vendor.t(option[optionIndex].rText),
        j: common_vendor.t(__props.cardItem.index_value3),
        k: common_vendor.t(option[optionIndex].rMark)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/components/list-card/list-card.vue"]]);
wx.createComponent(Component);
