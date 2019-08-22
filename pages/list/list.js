//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    info: []
  },
  onLoad: function (res) {
    const self = this
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    wx.getSystemInfo({
      success(data) {
        const arr = []
        for(let key in data){
          const obj = {
            key: key,
            val: data[key]
          }
          arr.push(obj)
        }
        self.setData({
          info: arr
        })
      }
    })
  }
})
