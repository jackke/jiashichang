"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_custom_box2 = common_vendor.resolveComponent("custom-box");
  const _easycom_title_view2 = common_vendor.resolveComponent("title-view");
  (_easycom_custom_box2 + _easycom_title_view2)();
}
const _easycom_custom_box = () => "../../../components/custom-box/custom-box.js";
const _easycom_title_view = () => "../../../components/title-view/title-view.js";
if (!Math) {
  (_easycom_custom_box + _easycom_title_view)();
}
const _sfc_main = {
  __name: "list-view",
  setup(__props) {
    let scrollInto = common_vendor.reactive("scrollInto");
    let lDate = common_vendor.ref("2023-04-09");
    let rDate = common_vendor.ref("2023-04-09");
    common_vendor.ref("2023-01-01");
    common_vendor.ref();
    const tView1 = common_vendor.ref(null);
    const lableProp = common_vendor.reactive([
      { label: "日期", prop: "jzdate_day", style: "width:20%;padding-left: 8rpx;" },
      { label: "营业额(元)", prop: "xssr" },
      { label: "人均消费(元)", prop: "sl" },
      { label: "上座率", prop: "jmll" }
    ]);
    common_vendor.onMounted(() => {
      initData();
    });
    const initData = () => {
      let url = "/biz/project-zyly-mohoModityDetail";
      let data = {
        project_code: "SH_JAXM",
        mucode: 201,
        ppmemo: "all",
        start_jzdate: lDate.value,
        end_jzdate: rDate.value,
        pageNo: 1,
        pageSize: 1e4
      };
      common_vendor.index.$https.getHttp(url, data).then((res) => {
        let dataList = res.data || [];
        tView1.value.initData(dataList);
      });
    };
    const datePicker = (val, type) => {
      console.log(val);
      if (type == 1) {
        lDate.value = val.detail.value;
      } else {
        rDate.value = val.detail.value;
      }
      initData();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(lDate)),
        b: common_vendor.o((val) => datePicker(val, 1)),
        c: common_vendor.unref(lDate),
        d: common_vendor.unref(lDate),
        e: common_vendor.t(common_vendor.unref(rDate)),
        f: common_vendor.o((val) => datePicker(val, 2)),
        g: common_vendor.unref(rDate),
        h: common_vendor.unref(rDate),
        i: common_vendor.p({
          titleName: "详情列表"
        }),
        j: common_vendor.sr(tView1, "c9d3f414-1", {
          "k": "tView1"
        }),
        k: common_vendor.p({
          propList: lableProp,
          headStyle: "position: sticky;top: 0;z-index:9"
        }),
        l: common_vendor.unref(scrollInto)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/subPackages/pages/list-view/list-view.vue"]]);
wx.createPage(MiniProgramPage);
