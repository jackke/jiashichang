"use strict";
const common_vendor = require("../common/vendor.js");
const utils_config = require("./config.js");
const getHttp = (url, data) => {
  let token = common_vendor.index.getStorageSync("tokenInfo").tokenValue || "";
  return new Promise((resolve, reject) => {
    common_vendor.wx$1.request({
      url: utils_config.common.apihost + url,
      header: {
        "content-type": "application/json;charset=UTF-8",
        "cockpit-token": token
      },
      method: "GET",
      data: data || "",
      success: function(res) {
        resolve(res.data);
      },
      fail: function(res) {
        reject(res);
      }
    });
  });
};
const postHttp = (url, data) => {
  let token = common_vendor.index.getStorageSync("tokenInfo").tokenValue || "";
  return new Promise((resolve, reject) => {
    common_vendor.wx$1.request({
      url: utils_config.common.apihost + url,
      header: {
        "content-type": "application/json;charset=UTF-8",
        "cockpit-token": token
      },
      method: "POST",
      data: data || "",
      success: function(res) {
        resolve(res.data);
      },
      fail: function(res) {
        reject(res);
      }
    });
  });
};
const httpTokenRequest = (opts, data) => {
  let token = common_vendor.wx$1.getStorageSync("tokenInfo").tokenValue;
  return new Promise((resolve, reject) => {
    common_vendor.wx$1.request({
      url: utils_config.common.apihost + opts.url,
      data,
      method: opts.method,
      header: opts.method == "get" ? {
        "cockpit-token": token,
        "X-Requested-With": "XMLHttpRequest",
        "Accept": "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      } : {
        "cockpit-token": token,
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json; charset=UTF-8"
      },
      success(res) {
        resolve(res.data);
      },
      fail(res) {
        reject(res.data);
      },
      complete() {
      }
    });
  });
};
const http = {
  getHttp,
  postHttp,
  httpTokenRequest
};
exports.http = http;
