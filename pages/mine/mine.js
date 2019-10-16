// pages/mine/mind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },

  /**
   * 生命周期函数--监听页面加载
   */
  updatePic(){
    // wx.request({
    //   url:'https://h5.watsons.com.cn/imgCode',
    //   success(res){
    //     console.log(res.data)
    //   }
    // })

  },
  logout(){
    this.setData({
      userInfo: {}
    })
    wx.removeStorageSync('user_1')
  },
  toLogin(){
    wx.login({

      success: function (e) {

        console.log(e);

        var code = e.code;

        wx.getUserInfo({

          success: function (res) {

            console.log(res);

            var encryptedData = encodeURIComponent(res.encryptedData);
            console.log(encryptedData)
            // thirdLogin(code, encryptedData, res.iv);//调用服务器api

          }

        })

      }

    });
  },
  getUserData(ev){
    console.log(ev)
    if(ev.detail.userInfo){
      wx.setStorageSync('user_1',ev.detail.userInfo)
      this.setData({
        userInfo:ev.detail.userInfo
      })
    }
  },
  onLoad: function (options) {
    if(wx.getStorageSync('user_1')){
      this.setData({
        userInfo:wx.getStorageSync('user_1')
      })
    }
    console.log(1)

    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
            }
          })
        }
      }
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (wx.getStorageSync('user_1')) {
      this.setData({
        userInfo: wx.getStorageSync('user_1')
      })
    }
    console.log(1)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})