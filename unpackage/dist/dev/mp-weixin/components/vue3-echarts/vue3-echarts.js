"use strict";
const common_vendor = require("../../common/vendor.js");
const components_vue3Echarts_wxCanvas = require("./wx-canvas.js");
const _sfc_main = {
  __name: "vue3-echarts",
  props: {
    canvasId: {
      type: String,
      default: "echarts"
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  emits: ["click"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const instance = common_vendor.getCurrentInstance();
    const exposeObj = {};
    var chartInstance;
    let ctx = null;
    common_vendor.onMounted(() => {
      common_vendor.registerPreprocessor((options) => {
        if (options && options.series) {
          if (options.series.length > 0) {
            options.series.forEach((series) => {
              series.progressive = 0;
            });
          } else if (typeof options.series === "object") {
            options.series.progressive = 0;
          }
        }
      });
    });
    common_vendor.onBeforeUnmount(() => {
      chartInstance && chartInstance.dispose();
    });
    const initChart = async (options) => {
      const canvasAttr = await getCanvasAttr2d();
      const { canvas, canvasWidth, canvasHeight, canvasDpr } = canvasAttr;
      chartInstance = common_vendor.init(canvas, null, {
        width: canvasWidth,
        height: canvasHeight,
        devicePixelRatio: canvasDpr
        // new
      });
      canvas.setChart(chartInstance);
      chartInstance.clear();
      chartInstance.setOption(options ? options : props.options);
      chartInstance.on("click", function(params) {
        emits("click", params);
      });
      exposeObj.chart = chartInstance;
    };
    const canvasToTempFilePath = (opt) => {
      var query = common_vendor.index.createSelectorQuery().in(instance);
      query.select("#" + props.canvasId).fields({ node: true, size: true }).exec((res) => {
        const canvasNode = res[0].node;
        opt.canvas = canvasNode;
        common_vendor.index.canvasToTempFilePath(opt, instance);
      });
    };
    exposeObj.canvasToTempFilePath = canvasToTempFilePath;
    const getCanvasAttr2d = function() {
      return new Promise((resolve, reject) => {
        const query = common_vendor.index.createSelectorQuery().in(instance);
        query.select("#" + props.canvasId).fields({
          node: true,
          size: true
        }).exec((res) => {
          const canvasNode = res[0].node;
          const canvasDpr = common_vendor.index.getSystemInfoSync().pixelRatio;
          const canvasWidth = res[0].width;
          const canvasHeight = res[0].height;
          ctx = canvasNode.getContext("2d");
          const canvas = new components_vue3Echarts_wxCanvas.WxCanvas(ctx, props.canvasId, true, canvasNode);
          common_vendor.setCanvasCreator(() => {
            return canvas;
          });
          resolve({
            canvas,
            canvasWidth,
            canvasHeight,
            canvasDpr
          });
        });
      });
    };
    const touchStart = (e) => {
      if (chartInstance && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = chartInstance.getZr().handler;
        handler.dispatch("mousedown", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch("mousemove", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), "start");
      }
    };
    const touchMove = (e) => {
      if (chartInstance && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = chartInstance.getZr().handler;
        handler.dispatch("mousemove", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), "change");
      }
    };
    const touchEnd = (e) => {
      if (chartInstance) {
        const touch = e.changedTouches ? e.changedTouches[0] : {};
        var handler = chartInstance.getZr().handler;
        handler.dispatch("mouseup", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch("click", {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), "end");
      }
    };
    const wrapTouch = function(event) {
      for (let i = 0; i < event.touches.length; ++i) {
        const touch = event.touches[i];
        touch.offsetX = touch.x;
        touch.offsetY = touch.y;
      }
      return event;
    };
    common_vendor.watch(
      props.options,
      (newValue, oldValue) => {
        if (newValue.series) {
          console.log("vue333333333333333", newValue, oldValue);
          common_vendor.nextTick$1(() => {
            initChart(newValue);
          });
        }
      },
      {
        deep: true,
        immediate: true
      }
    );
    exposeObj.initChart = initChart;
    expose(exposeObj);
    return (_ctx, _cache) => {
      return {
        a: __props.canvasId,
        b: __props.canvasId,
        c: common_vendor.o(touchStart),
        d: common_vendor.o(touchMove),
        e: common_vendor.o(touchEnd)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-03e82877"], ["__file", "/Users/zhangke/Documents/HBuilderProjects/jiashichang/components/vue3-echarts/vue3-echarts.vue"]]);
wx.createComponent(Component);
