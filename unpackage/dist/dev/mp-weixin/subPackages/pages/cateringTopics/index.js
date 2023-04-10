"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_util = require("../../../utils/util.js");
if (!Array) {
  const _easycom_custom_box2 = common_vendor.resolveComponent("custom-box");
  const _easycom_title_name2 = common_vendor.resolveComponent("title-name");
  const _easycom_card_box2 = common_vendor.resolveComponent("card-box");
  const _easycom_echart_box2 = common_vendor.resolveComponent("echart-box");
  const _easycom_title_view2 = common_vendor.resolveComponent("title-view");
  (_easycom_custom_box2 + _easycom_title_name2 + _easycom_card_box2 + _easycom_echart_box2 + _easycom_title_view2)();
}
const _easycom_custom_box = () => "../../../components/custom-box/custom-box.js";
const _easycom_title_name = () => "../../../components/title-name/title-name.js";
const _easycom_card_box = () => "../../../components/card-box/card-box.js";
const _easycom_echart_box = () => "../../../components/echart-box/echart-box.js";
const _easycom_title_view = () => "../../../components/title-view/title-view.js";
if (!Math) {
  (_easycom_custom_box + _easycom_title_name + _easycom_card_box + _easycom_echart_box + _easycom_title_view)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const echartRef = common_vendor.ref(null);
    const echartRef2 = common_vendor.ref(null);
    const echartRef3 = common_vendor.ref(null);
    const tView1 = common_vendor.ref(null);
    let itemData = {
      data1: "",
      data2: "",
      data3: "",
      data4: ""
    };
    let item_xs = common_vendor.ref(itemData);
    let item_mxs = common_vendor.ref(itemData);
    let item_kl = common_vendor.ref(itemData);
    let item_sum = common_vendor.ref(itemData);
    let sxDate = common_vendor.ref("2023-01-01 ~ 2023-04-10");
    common_vendor.ref();
    let lableProp = common_vendor.ref([
      { label: "时段类型", prop: "ppmemo", style: "width:20%;padding-left: 8rpx;" },
      { label: "笔数", prop: "xssr" },
      { label: "金额(元)", prop: "jml" },
      { label: "金额占比", prop: "jmll" }
    ]);
    let echartOption = common_vendor.ref({
      title: "",
      xAxis: [],
      yAxis: [],
      series: []
    });
    common_vendor.ref([]);
    const params = {
      project_code: "SH_JAXM",
      mucode: 201,
      pageNo: 1,
      pageSize: 20,
      jzdate: "2023-03-30"
    };
    common_vendor.onMounted(() => {
      onProjectLyMessage();
      onMohoShopBusiness();
      onMohoModityQs();
      onMohoModityQwqklb();
    });
    const onMohoShopBusiness = () => {
      let url = "/biz/project-zyly-mohoShopBusiness";
      let data = {
        project_code: "SH_JAXM",
        mucode: 201,
        pageNo: 1,
        pageSize: 20,
        jzdate: "2023-03-30"
      };
      common_vendor.index.$https.getHttp(url, data).then((res) => {
        let item = res.data[0] || {};
        item_xs.value = {
          ...item,
          data1: item.xssr,
          data2: item.this_month_yrj,
          data3: item.week_xs_yoy,
          data4: item.month_xssr_yoy
        };
        item_mxs.value = {
          ...item,
          data1: item.this_month_budget,
          data2: item.this_month_accsale,
          data3: item.sale_rate,
          data4: item.sale_qk,
          data1Name: "当月预算",
          data2Name: "当月累计",
          data3Name: "完成率",
          data4Name: "缺口"
        };
        item_kl.value = {
          ...item,
          data1: item.day_flow,
          data2: item.this_month_day_flow_yrj,
          data3: item.week_flow_yoy,
          data4: item.month_flow_yoy
        };
        item_sum.value = {
          ...item,
          data1: item.bs,
          data2: item.this_month_bs_yrj,
          data3: item.week_bs_yoy,
          data4: item.month_bs_yoy
        };
      });
    };
    const onProjectLyMessage = () => {
      let url = "/biz/project-zyly-mohoShopBusiness";
      let data = {
        mucode: params.mucode,
        pageNo: 1,
        pageSize: 10
      };
      common_vendor.index.$https.getHttp(url, data).then((res) => {
        console.log(res, "头部信息");
      });
    };
    const onMohoModityQs = () => {
      let url = "/biz/project-zyly-mohoModityQs";
      let data = {
        project_code: "SH_JAXM",
        mucode: 201,
        pageNo: 1,
        pageSize: 20,
        star_jzdate: "2023-03-24",
        end_jzdate: "2023-03-30"
      };
      common_vendor.index.$https.getHttp(url, data).then((res) => {
        console.log(res, "柱状图");
        let arr = res.data || [];
        let max = [0];
        var saleData = arr.map((item) => {
          return item.xssr;
        });
        var klData = arr.map((item) => {
          return item.day_flow;
        });
        var d_date = arr.map(function(item) {
          return item.jzdate_zs;
        });
        max[0] = utils_util.utils.getMaxNumber(Math.max(...saleData));
        max[1] = utils_util.utils.getMaxNumber(Math.max(...klData));
        if (arr.length != 0)
          ;
        echartOption.value = {
          title: "销售(万元)",
          legendShow: true,
          xAxis: d_date,
          yAxis: [{ name: "销售(万元)", max: max[0], min: 0 }, { name: "客流(万人次)", max: max[1], min: 0 }],
          series: [
            {
              name: "销售额",
              type: "bar",
              data: saleData
            },
            {
              name: "客流量",
              type: "line",
              data: klData
            }
          ]
        };
        echartRef.value.initChart(echartOption.value);
      });
    };
    const onMohoModityQwqklb = () => {
      let url = "/biz/project-zyly-mohoModityQwqklb";
      let data = {
        project_code: "SH_JAXM",
        mucode: 201,
        pageNo: 1,
        pageSize: 20,
        jzdate: "2023-03-30"
      };
      common_vendor.index.$https.getHttp(url, data).then((res) => {
        let arr = res.data || [];
        let option = {
          title: "",
          xAxis: "",
          yAxis: "",
          legendShow: false,
          series: [{
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "40%"],
            data: arr.map((item) => {
              return { value: item.jml, name: item.ppmemo };
            })
          }]
        };
        echartRef2.value.initChart(option);
        let option1 = {
          title: "",
          xAxis: "",
          yAxis: "",
          legendShow: false,
          series: [{
            type: "treemap",
            itemStyleColor: "#fff",
            data: arr.map((item) => {
              return { value: item.jml, name: item.ppmemo };
            })
          }]
        };
        echartRef3.value.initChart(option1);
        tView1.value.initData(arr);
      });
    };
    const listView = () => {
      common_vendor.index.navigateTo({
        url: "/subPackages/pages/list-view/list-view"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          titleName: "餐饮项目"
        }),
        b: common_vendor.p({
          title: "经营情况"
        }),
        c: common_vendor.p({
          itemData: common_vendor.unref(item_xs)
        }),
        d: common_vendor.o(listView),
        e: common_vendor.p({
          itemData: common_vendor.unref(item_mxs)
        }),
        f: common_vendor.p({
          itemData: common_vendor.unref(item_kl)
        }),
        g: common_vendor.t(common_vendor.unref(sxDate)),
        h: common_vendor.p({
          itemData: common_vendor.unref(item_sum)
        }),
        i: common_vendor.sr(echartRef, "08f950b9-6", {
          "k": "echartRef"
        }),
        j: common_vendor.p({
          canvasId: "ec-chart1"
        }),
        k: common_vendor.p({
          title: "时段分析"
        }),
        l: common_vendor.sr(echartRef2, "08f950b9-8", {
          "k": "echartRef2"
        }),
        m: common_vendor.p({
          canvasId: "ec-chart2"
        }),
        n: common_vendor.sr(echartRef3, "08f950b9-9", {
          "k": "echartRef3"
        }),
        o: common_vendor.p({
          canvasId: "ec-chart3"
        }),
        p: common_vendor.sr(tView1, "08f950b9-10", {
          "k": "tView1"
        }),
        q: common_vendor.p({
          propList: common_vendor.unref(lableProp)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/subPackages/pages/cateringTopics/index.vue"]]);
wx.createPage(MiniProgramPage);
