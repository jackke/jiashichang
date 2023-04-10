// 新版 获取最大值
var getMaxNumber = (max) => {
  var num = 0
  if (max == 0) return num
  if (max > 0 && max < 1) {
    num = Number(max * 1.1).toFixed(2)
    return num
  }
  if (max > 0) {
    num = Math.ceil(max * 1.1)
  } else {
    num = Math.floor(max * 0.9)
  }
  return num
}
// 新版 获取最小值
var getMinNumber = (min) => {
  let num = 0
  if (min == 0) return num
  if (min > 0) {
    num = Math.floor(min * 0.85)
  } else {
    num = Math.floor(min * 1.15)
  }
  return num
}
// 编辑有问题 改成 export default {}
// module.exports = {
//   getMaxNumber,
//   getMinNumber
// }

export default {
	getMaxNumber,
	getMinNumber
}