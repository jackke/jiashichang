// let dev = 'uat'
let dev = 'uat'
const common = {
  apihost: 'https://cbzs.crehopson.com/cockpit'
}
if (dev === 'uat') {
  common.apihost = 'https://cbzs-uat.crehopson.com/cockpit'
}

export default common

// module.exports = common