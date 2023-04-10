import host from "./config.js"
// var host = require('./config')

const getHttp = (url, data) => {
	let token = uni.getStorageSync('tokenInfo').tokenValue || ''
	return new Promise((resolve, reject) => {
		wx.request({
				url: host.apihost + url,
				header: {
					"content-type": "application/json;charset=UTF-8",
					"cockpit-token": token
				},
				method: 'GET',
				data: data || '',
				success: function (res) {
						resolve(res.data);
				},
				fail: function (res) {
						reject(res);
				},
		})
	})
}
const postHttp = (url, data) => {
	let token = uni.getStorageSync('tokenInfo').tokenValue || ''
	return new Promise((resolve, reject) => {
		wx.request({
				url: host.apihost + url,
				header: {
					"content-type": "application/json;charset=UTF-8",
					"cockpit-token": token
				},
				method: 'POST',
				data: data || '',
				success: function (res) {
						resolve(res.data);
				},
				fail: function (res) {
						reject(res);
				},
		})
	})
}

const httpTokenRequest = (opts, data) => {
	let token =wx.getStorageSync('tokenInfo').tokenValue
		return new Promise((resolve, reject) =>{
			wx.request({
        url: host.apihost + opts.url,
        data: data,
        method: opts.method,
        header: opts.method == 'get' ? {
          "cockpit-token":token,
          'X-Requested-With': 'XMLHttpRequest',
          "Accept": "application/json",
          "Content-Type": "application/json; charset=UTF-8"
          
        } : {
          "cockpit-token":token,
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json; charset=UTF-8'
        },
        success(res){
            resolve(res.data)
        },
        fail(res){
          reject(res.data)
        },
        complete(){

        }
      })
		})
	}

export default {
	getHttp,
	postHttp,
	httpTokenRequest
}