//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (res) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    const eventChannel = this.getOpenerEventChannel()
    if (eventChannel.on) {
      eventChannel.on('acceptDataFromOpenedPage', function (data) {
        console.log(3333333, res, data)
      })
    }
  }
})
