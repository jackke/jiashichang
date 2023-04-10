"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      navTabbar: [],
      isShowImage: true,
      customNav: [],
      customIndex: 0,
      jy_date: "2023-03-29",
      jyList: []
    };
  },
  onLoad() {
    this.userLogin();
  },
  methods: {
    // 登录
    userLogin() {
      const sysInfo = common_vendor.index.getSystemInfoSync();
      const that = this;
      if (sysInfo.environment == "wxwork") {
        common_vendor.index.qy.login({
          provider: "weixin",
          onlyAuthorize: true,
          // 微信登录仅请求授权认证
          success: function(res) {
            if (res.code) {
              that.wxLogin(res.code, sysInfo, "wx32569723c1d69e2a", 2);
            }
          }
        });
      } else {
        common_vendor.index.login({
          provider: "weixin",
          onlyAuthorize: true,
          // 微信登录仅请求授权认证
          success: function(res) {
            if (res.code) {
              that.wxLogin(res.code, sysInfo, "", 1);
            }
          }
        });
      }
    },
    wxLogin(code, sysInfo, corpId, loginSource) {
      const appIdRes = common_vendor.index.getAccountInfoSync();
      let url = "/account/login";
      let data = {
        appId: appIdRes.miniProgram.appId,
        code,
        deviceInfo: sysInfo,
        loginSource,
        corpId: corpId || "",
        version: 4.3
        // 1.3
      };
      common_vendor.index.$https.postHttp(url, data).then((res) => {
        if (res) {
          let data2 = res.data;
          let navTabbar = [];
          if (data2.power.length > 0) {
            navTabbar.push({ name: "日报", id: 1, icon: "iconfont icon-ribao", nav: data2.power });
          }
          if (data2.reportPower.length > 0) {
            navTabbar.push({ name: "月报", id: 2, icon: "iconfont icon-yuebao", nav: data2.reportPower });
          }
          if (data2.annualPower.length > 0) {
            navTabbar.push({ name: "年报", id: 3, icon: "iconfont icon-nianbao", nav: data2.annualPower });
          }
          this.navTabbar = common_vendor.reactive(navTabbar);
          this.isShowImage = false;
          this.customNav = navTabbar[0].nav;
          common_vendor.index.setStorageSync("userInfo", res.data.userInfo);
          common_vendor.index.setStorageSync("tokenInfo", res.data.tokenInfo);
          this.jyData();
        }
      });
    },
    // 底部tabbar 事件
    navRabClick(e) {
      this.customNav = e.nav;
    },
    // 头部 custom 事件
    onCustomNav(item, index) {
      this.customIndex = index;
    },
    onToNav() {
      common_vendor.index.navigateTo({
        url: "/subPackages/pages/cateringTopics/index"
      });
    },
    jyData() {
      var uid = common_vendor.index.getStorageSync("userInfo").account;
      let url = "/biz/project-businseeprojGroupHomepageNew";
      const data = {
        userid: uid,
        pageNo: 1,
        pageSize: 1e3,
        stat_date: this.jy_date
      };
      common_vendor.index.$https.getHttp(url, data).then((res) => {
        if (res) {
          let list = res.data;
          list.forEach((item) => {
            item.formatList = item.format.replace(/all/, "").split(",");
          });
          this.jyList = list;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_custom_box2 = common_vendor.resolveComponent("custom-box");
  const _easycom_list_card2 = common_vendor.resolveComponent("list-card");
  const _easycom_nav_tab_bar2 = common_vendor.resolveComponent("nav-tab-bar");
  (_easycom_custom_box2 + _easycom_list_card2 + _easycom_nav_tab_bar2)();
}
const _easycom_custom_box = () => "../../components/custom-box/custom-box.js";
const _easycom_list_card = () => "../../components/list-card/list-card.js";
const _easycom_nav_tab_bar = () => "../../components/nav-tab-bar/nav-tab-bar.js";
if (!Math) {
  (_easycom_custom_box + _easycom_list_card + _easycom_nav_tab_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShowImage
  }, $data.isShowImage ? {} : {
    b: common_vendor.f($data.customNav, (item, index, i0) => {
      return {
        a: common_vendor.t(item.functionName),
        b: common_vendor.n($data.customIndex == index ? "custom-nav action" : "custom-nav"),
        c: common_vendor.o(($event) => $options.onCustomNav(item, index))
      };
    }),
    c: common_vendor.f($data.jyList, (item, index, i0) => {
      return {
        a: "3b5b3418-1-" + i0,
        b: common_vendor.p({
          cardItem: item
        }),
        c: index,
        d: common_vendor.o((...args) => $options.onToNav && $options.onToNav(...args), index)
      };
    }),
    d: common_vendor.o($options.navRabClick),
    e: common_vendor.p({
      navTabbar: $data.navTabbar
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
