"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "title-view",
  props: {
    headStyle: {
      // 头部样式
      type: String,
      value: ""
    },
    listStyle: {
      // 列表样式
      type: String,
      value: ""
    },
    columnsProp: {
      // 是否开启 单元格合并  要合并单元格的valueName
      type: String,
      value: ""
      // observer: function(newVal,oldVal,change) {
      // this.initData()
      // }
    },
    dataList: {
      // y 数据
      type: Array,
      value: []
      // observer: function(newVal,oldVal,change) {
      // console.log(newVal,oldVal,change, '222222');
      // this.initData()
      // }
    },
    propList: {
      // x 数据
      type: Array,
      value: []
      // observer: function(newVal,oldVal,change) {
      // label： 名称
      // prop： valueName
      // style: 表格单统一样式
      // cloumnStyle: 合并单元格自定义样式
      // console.log(newVal,oldVal,change);
      // }
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    let columnsArr = common_vendor.ref([]);
    let yList = common_vendor.ref([]);
    let xList = common_vendor.ref([]);
    const initData = async (dataList) => {
      var x = props.propList;
      var y = dataList;
      let columns = [];
      let columnsSum = 0;
      let cArr = [];
      if (props.columnsProp) {
        y.forEach((item, index) => {
          if (columns.length > 0 && index > 0 && item[props.columnsProp] !== columns[columns.length - 1]) {
            cArr.push([0, columnsSum, columns.length]);
            columnsSum = index;
            columns = [];
          }
          if (index == y.length - 1) {
            cArr.push([0, columnsSum, y.length - columnsSum]);
          }
          columns.push(item[props.columnsProp]);
        });
      }
      columnsArr.value = cArr;
      xList.value = x;
      yList.value = y;
    };
    const listNavto = (e) => {
      console.log(e);
    };
    expose({
      initData
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(xList), (xItem, yindex, i0) => {
          return {
            a: common_vendor.t(xItem.label),
            b: yindex,
            c: common_vendor.s((xItem.style ? "flex:none;" : "") + (xItem.style || ""))
          };
        }),
        b: common_vendor.s(__props.headStyle),
        c: common_vendor.f(common_vendor.unref(yList), (item, yindex, i0) => {
          return {
            a: common_vendor.f(common_vendor.unref(xList), (xItem, xindex, i1) => {
              return {
                a: common_vendor.t(item[xItem.prop]),
                b: common_vendor.s(item[xItem.styleName]),
                c: common_vendor.f(common_vendor.unref(columnsArr), (columnItem, columnIndex, i2) => {
                  return common_vendor.e({
                    a: columnItem[1] == yindex && columnItem[0] == xindex
                  }, columnItem[1] == yindex && columnItem[0] == xindex ? {
                    b: common_vendor.t(item[xItem.prop]),
                    c: common_vendor.s(`${item.cloumnStyle};height:${(columnItem[2] * 100 || 100) + "%"}`)
                  } : {}, {
                    d: columnIndex
                  });
                }),
                d: xindex,
                e: common_vendor.s((xItem.style ? "flex:none;" : "") + (xItem.style || "")),
                f: common_vendor.o(($event) => listNavto(xItem), xindex)
              };
            }),
            b: yindex
          };
        }),
        d: common_vendor.n(common_vendor.unref(columnsArr).length && __props.columnsProp ? "list-text" : ""),
        e: common_vendor.s(__props.listStyle)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/components/title-view/title-view.vue"]]);
wx.createComponent(Component);
