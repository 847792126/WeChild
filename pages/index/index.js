//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '帮帮孩子',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //跳转到“我的”页面
  gotoMine: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //跳转到“我要找人”页面
  gotoLostPage: function(){
    wx.navigateTo({
      url: '../lost/lost'
    })
  },
  //跳转到“我找到了”页面
  gotoFoundPage: function () {
    wx.navigateTo({
      url: '../found/found'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})
