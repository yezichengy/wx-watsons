// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:Array,
    searchHis:[],
    nowSearch:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
  },
  search: function (value) {
    let _this = this 
    this.setData({
      nowSearch:value.detail.value
    })
    let word = value.detail.value
    if(word.length>0){
      wx.request({
        url: 'https://h5.watsons.com.cn/search/suggest?word=' + word,
        success(res) {
          console.log(res)
          if (res.data.data.new_word_list){
            _this.setData({
              result: res.data.data.new_word_list
            })
          }
          if(_this.data.searchHis.length==0){
            wx.setStorageSync('searchCont',word)
          }
          if(wx.getStorageSync('searchCont')){
            let tempHis = JSON.parse(wx.getStorageSync('searchCont')) || []
            // _this.searchHis 
            // _this.setData({
            //   searchHis:
            // })
          }
          wx.setStorageSync('searchCont',word)
        }
      })
    }else{
      _this.setData({
        result:[]
      })
    }
  },
  del(e){
    this.setData({
      nowSearch:'',
      result:[]
    })
  },
  toBack(){
    wx.navigateBack()
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