// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redTrue:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAAAXNSR0IArs4c6QAABMpJREFUSA2dVn1oW1UUP+elabvUohW2tVHUbn/MgWNT3FTwa4ofndDphCEOLEWWJl0yrNWqDEfEIX7iyEebxg1xDtFu6iq6TDrUggX3n1YFRcHApHMO7bq51prkHX/3vrzyXpamHxfeux/nd87v3HPvPfcyzaNIoP9S4v/uJ+JVJOQnksuJ6Qy+MRJjlJp8Qxxt/3cuU1wJIMH4nTD+LL67QOCtgL0AR46Sx7OH+zpHZ8OVJZNg3zVk5hMgeEArMuVRD+Mb0bMx+W8YX0YsV1iO0AZgGTIT1bsg7QLpeCnpRWQSit1GBfoQwKUwOIH6ZSj3l1O2jUk47qecdKO/A+Q1IP0FpK2cjvxkY1TtIkPY7iNTPsF4NUSfkZfbOBn+y6lQqQ3SZsrRAIncqB01qm7lVOgHW2eGTEK9q6hQOIFwYDPQXmqKdHOUTRs431q6BpbQ5OmDINwCwt/g8HrbYUMZkYEBD4gOWUT8Affv7FoMkbLFb26douqVj8Lhb2CvmfLmfjWuiiajL/5sg2ANoL+Sb3m7JVr8n+ObpklqtoDwHNZws94HikzPyjRf0KYN3qU9WwSPRMWQQOxp6Ug8o9Q53XGKmF/Vpkzeo8cgvJ3EHIYXP1MqspqZRQMW+JOOeAzrFNFqhrcZGyMrTx2oo3NnT4Pahy13JcJobtYA4Y8XTRSIdc8QEX2piJRNfv2xC5jd51gixi5tNRDTmzWZQRhceJFgYivMvmZp8o/kq8cudBSWY7oHHgPhQ65TpSqrK8dPgrENyIs+x5CrWVyCA9pz4jGqMlp4b/tZN8jI6j54MDNu1J3G2j+cIKxBEMnnBBLw9ziDK5wy1ZbO5Gr8j+iMQXQeqWsT9+44WYpDeC27Qo1YM5nUgImCewbMv+txkRVUyH8tgTiOhlVA1Ijzk4GhBoQwR2w8jLP5nS1319gcVplUYRzT7alcMZyWhFPhT3EyOiFXWaQJ9TDCdguILkECOAonry4it3N/eMhql/kbxWUCD2bGWQ2R/LpSKKfDffB6m/ZezULMIczoOEJ3vYXl3cC8U6rn6otp2RXKgowyllCsI+BCgiYVfp88BBmrcNdhRjcVIfuQ1V8sgZfpsmWXOWNQda3K8rBBLbjHlpVBE/dFMkhs90JW3GmcIf+aUDmscwwhX4d1XQtHJ3D3fmVwfDs2Ah8BqI4kt9sJdrY5FRkhqlmLQ/oI+Zc/yNGN6kKtXPKFVzSAOY30ldNXDHbatRhU946JGWy0DFe2M5dUgsltZBYOwrlxMjwr1eWr1gxJU9+obyCWXoTzIxzkq+YyVkmO8K0n09ynMcI99i2vyfSgP/wctvcxxBjrNj0igcQNlQzOJpNQvAVH4zgcr4W9JHarRQoFHUZbUT/ZaHoQ/Tsgwu6TKPnr4/N5pskTb19GU//sgs6TiI46Uu+R/7o259q6yBQpCL1IUQnMMKCdYD4J5bfw6BlEOEb1WPGn7jA6lVRH4SGcwcdRq/ckXlj0PKd3vuTEqvZFZDYA2eJuEOLyE2c4kQN1xhmHwaVo+1EvsXWwGYbIY/QgR347M+ZozEqmMCK4hzp67yE24Tm1YsSV0iw7eEoQD4LkMGaOd8fspSJZqZr07K+n89OKsIEKnjNU1zC2kGfE/wg4wzvgfWe5AAAAAElFTkSuQmCC',
    datas:Object,
    num:0,
    same:false,
    tabNav:[
      { title: '开箱' },
      {title:'图片'}
    ],
    currentIndex:0,
  },
  changeIndex(ev){
    this.setData({
      currentIndex:ev.currentTarget.dataset.ind
    })
  },
  toHome(){
    wx.redirectTo({
      url:'../../pages/index/index'
    })
  },
  toShoppingcart(){
    wx.navigateTo({
      url:'../../pages/shoppingcart/shoppingcart'
    })
  },
  addToCart(ev){
    let cartData = wx.getStorageSync('cartData')
    // console.log(cartData)
    // let temp = this.data.datas
    let i = { ...this.data.datas,fix_num:1,item_type:true}
    // console.log(i)
    
    cartData.forEach(item=>{
      if(item.item_id==i.item_id){
        item.fix_num++;
        this.data.same=true;
      }
    })
    if (this.data.same==true){
      this.data.same = false
    }else{
      cartData.push(i)
    }
    this.setData({
      num:++this.data.num
    })
    wx.setStorageSync('cartData',cartData)
    // console.log(cartData)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.datas = JSON.parse(options.data)
    let cartData = wx.getStorageSync('cartData')
    let tempNum = 0
    for(let i = 0;i<cartData.length;i++){
      tempNum += cartData[i].fix_num
    }
    this.setData({
      datas:this.data.datas
      ,num:tempNum
    })
    // console.log(this.data.datas)
    wx.setNavigationBarTitle({
      title:this.data.datas.item_short_name
    })
    // wx.request({
    //   url:''
    // })
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
    let cartData = wx.getStorageSync('cartData')
    let tempNum = 0
    for (let i = 0; i < cartData.length; i++) {
      tempNum += cartData[i].fix_num
    }
    this.setData({
      datas: this.data.datas
      , num: tempNum
    })
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