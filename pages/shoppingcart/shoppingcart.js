// pages/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    greenTrue:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAgVBMVEUAAABAzsNA0cQ9z8E+zsA9z8E9z8E+zsA9z8E+zsE+z8E9z8E+zsE/0MJE0sM9z8A+z8E9zsD///9Z1cnm+fdDz8L7/v5H0cPt+vnN8u9g18tS08dL0sX9/v7w+/rc9vTX9fLR8/DI8e2o6eKg5+B/39Z43dOF4Ne/7+qv6+WI4dgnpbVyAAAAEXRSTlMARDjA/PPu59mtpZmDbSLDkFnxnlUAAAEdSURBVDjLndXZcoMgGIZhBFcgms/UtHZf7XL/F1jHZAy7kPf4GQZG/CFmVHJWF0XNuKQkWCYqKFUi81LKYMXcy7cNnDWtbbMSnkprL7sc3vKdbvcIttfWxUbK2lm+hfN1322Jzcr2jBtE1JwsRVR0wV0c7pbTIbJsxiIoHsYDzokZV0F704/rHbwcz2dfHpUjymgLSbjfHnQLTljIvqoWjNQhewu1mhRYmzR7Z1oUCv7tPzX7ZlgUyjb+ni7aZVGrB/xe9b3LghEOTX8s9rkfB1hx/aN8HWfts5CEwtSzfR88N7oy9dFjK/uKTj4L4bj808/gv/yEISqW9MOmjIKkIZMyvtIGY/rITR/m4Wci8QGyo51NO3rto5n0HP8DkktmWXwdeqcAAAAASUVORK5CYII=',
    greenFalse:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAARVBMVEUAAACRkJCTk5OZmZmSkZGSkZGSkZGSkZGTkZGampqSkZGSkZGRkZGTkZGSkZGUkZGUlJSSkpKqqqqRkJCSkZGSkZGSkJDScxZmAAAAF3RSTlMA/jsM8+e/uWkQ2cWQfVxRJhwD1tKioRO0oJkAAADeSURBVDjLjZRZkoMwDAXVlle2EBK4/1FnYSYFKeOof91lq2TpyZEybbHzvovbVKTOLXIg3iqK64GU3aw6u5yA3r0pywAhq7zQHGBYTsUk/KhyQkdPKgfnQXCVCgKPl7UknnepcH+S/l8cCN9O1QoMf7finVzgPPtZzyiXjPS/PSTotaSBn65GsjTIRJEC2pIUikwkaZKYZCW3pcwqEdeWHFE65rY004lH25LiTZLpOVvh2+cWbKZmmr7F8sGmUbEMnWl8LYtgWinLclrW3BwY9uixh9geh+seh+s5Dr8APFoIiZxkbWQAAAAASUVORK5CYII=',
    delIcon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABDZJREFUWAntmEtIlFEUx2fGcZwZtAeRQmWBkGS1aiqSCETERxEtQoiQ2lQrgyiKaNWmqOgFrXqsgh6QtDN1MBNaVIS7LIxqY0FiLsIabRxn+p3PuR/3ew1Tzrjywp177znn/s//nvucz+/7x9TU1LQ2FAqdolsnOeDRPZ3JZG6hu9rT0/PVw8ZV7HeVeghbWlr2BAKBO36/f5WHiUUMqa/pdPpoX19fr0WRo5E3ocbGxnVlZWVDkFmBo2Ew+8m/qVsw0GfIEeTNlJuw+ZFKpbbE4/HRHDxMlQVMpM3NzRuIQh1gIUaXUZYlJSV7qXeQJ8nnyR/JuVItyvPkCsjdB6tbGYPvR5ak/b63t3dEyaU0CbE2lpaWlt6AyAHkEd2oiPUE2I+SyeSp/v7+n+LHINTQ0BCMRCKPIbM/6/wLI5imbRLOygtSgC3TGgasJgv4JJFIHBwcHEwFRQCZRiGD3R/KzrGxsYcVFRXJycnJohACOwN2qLKysgN/shvbw+HwbcrnBiGEp4UY5ZssmcDMzEwEIxEXPIHtE1Kzs7MPWJuH8LuTfAJHc4SITDWCNIKtVVVV5mKVyBacDYD4MjcLzeVk8b2e7DMihON95GOs/pPIoqKQRMe5SpF/2YHXcXFH3JgeOWdWs8vqIBWDyCUITqA/gvEvMSxUAr8crHv4WEF5gmkbZgo/DAwMfBMfJiFpSGptbW2g0wuq31hPtUNDQ7I1C5ZisVg0uyxWM9jtnENvdXDHXQTzkDJg4Zl1JZtvyY4uU2tT96VwHYSUgjLJJTqjtRekaixqD0/6TvC1tbWtYWTbCDPXUvy33odLd5e0uURf6nIO3PJoNNoyPT39Wq0RXe9WzxUhiz3hvcLaeirnhq7g7qtG/gx5t2wMXQeZw7S7uJQv6vJc9bwJEZ3KLNBKHZCIya6RdRGG2BJdh0x2kiQ5a/JKuabMDiCHlw8nRqmUkJB7yZheqSu5skUn55mlj25jr+cdIXvHYrU9CRGJzMTEhGXExSKh43oSwuiP3Pi68ULUcxFaCP8OH4uEHCGxCRYjZAuIo+kZITnMeHQv+Lb3PKk5hqagb56wEDRsKd0GYTxT7Cc1/UskBGCVSplP8iRk7wzoI8hEeeH12XSj6LqQzY6Pj9v/ncaR76af6PNKeRPio8FdEO+RLdOYfYq0u3njNfgK+Q57HzdbJXOEn9Eaz1pGJY4tzl3aCidXacEIBoPmZax86Z0dhFAajy+Ml8k/Wt24EHXeRvIhQp4s8gpI2TEdhDAaocM4hut5/56BVMH+LdbX10d4yJ3Gx1Lwv09NTX2yE3L86xADnqvn6HQha/yOUgjOOzHQKnA3ChD1s6zLy3ZQ1ymB+RWen/IZ5TgAm+2d/rcNlhCRJXETH9fccFwjpAyJlIxGPkTU8FS1LE5lk2/JGSW+PvPpZYBPLx+8+v0FmGN/cfPIA/YAAAAASUVORK5CYII=',
    datas:Object,
    cartDatas:[],
    totalPrice:0,
    tempPrice:0,
    tempNum:0,
    edit:false,
    allPick:true,
    num1:true,
    totalNum:0,
    headTitle:[
      {
        image_url:'https://image.watsons.com.cn//upload/27910d08.png',title:'正品保证'
      },
      {
        image_url: 'https://image.watsons.com.cn//upload/278ce554.png', title: '屈臣氏品牌'
      },
      {
        image_url: 'https://image.watsons.com.cn//upload/2e8ebc1f.png', title: '7天退货'
      }
    ]
  },
  changeType(ev){
    // console.log(ev)
    let ind = ev.currentTarget.dataset.ind
    this.data.cartDatas[ind].item_type = !this.data.cartDatas[ind].item_type
    this.setData({
      cartDatas:this.data.cartDatas
    })
    let checktype = this.data.cartDatas.filter(item=>{
      return item.item_type===false
    })
    if(checktype.length>0){
      this.setData({
        allPick:false
      })
    }else{
      this.setData({
        allPick: true
      })
    }
    if(this.data.cartDatas[ind].item_type){
      this.data.totalPrice += this.data.cartDatas[ind].min_app_price * this.data.cartDatas[ind].fix_num
      this.data.totalNum += this.data.cartDatas[ind].fix_num
    }else{
      this.data.totalPrice -= this.data.cartDatas[ind].min_app_price * this.data.cartDatas[ind].fix_num
      this.data.totalNum -= this.data.cartDatas[ind].fix_num
    }
    this.setData({
      totalPrice: this.data.totalPrice,
      totalNum: this.data.totalNum
    })
  },
  invert(){
    this.data.allPick = !this.data.allPick
    this.data.cartDatas.forEach(item=>{
      item.item_type = this.data.allPick
    })
    let m = 0;
    let n = 0;
    if(this.data.allPick){
      for (let i = 0; i < this.data.cartDatas.length; i++) {
        m += this.data.cartDatas[i].min_app_price * this.data.cartDatas[i].fix_num
        n += this.data.cartDatas[i].fix_num
      }
      this.setData({
        totalPrice: m,
        totalNum: n
      })
    }else{
      this.setData({
        totalPrice: 0,
        totalNum: 0
      })
    }
    this.setData({
      allPick:this.data.allPick,
      cartDatas:this.data.cartDatas
    })
  },
  edit(){
    this.setData({
      edit:!this.data.edit
    })
  },
  delItem(ev){
    console.log(ev)
    this.data.cartDatas.splice(ev.currentTarget.dataset.ind,1)
    this.setData({
      cartDatas:this.data.cartDatas
    })
    wx.setStorageSync('cartDatas',this.data.cartDatas)

    let m = 0;
    let n = 0;
    if (this.data.allPick) {
      for (let i = 0; i < this.data.cartDatas.length; i++) {
        m += this.data.cartDatas[i].min_app_price * this.data.cartDatas[i].fix_num
        n += this.data.cartDatas[i].fix_num
      }
      this.setData({
        totalPrice: m,
        totalNum: n
      })
    } else {
      this.setData({
        totalPrice: 0,
        totalNum: 0
      })
    }
  },
  incNum(ev){
    this.data.cartDatas[ev.currentTarget.dataset.ind].fix_num++;
    this.setData({
      cartDatas:this.data.cartDatas
    })
    let m = 0;
    let n = 0;
    if (this.data.allPick) {
      for (let i = 0; i < this.data.cartDatas.length; i++) {
        m += this.data.cartDatas[i].min_app_price * this.data.cartDatas[i].fix_num
        n += this.data.cartDatas[i].fix_num
      }
      this.setData({
        totalPrice: m,
        totalNum: n
      })
    } else {
      this.setData({
        totalPrice: 0,
        totalNum: 0
      })
    }
  },
  decNum(ev) {
    if (this.data.cartDatas[ev.currentTarget.dataset.ind].fix_num>=2){
    this.data.cartDatas[ev.currentTarget.dataset.ind].fix_num--;
    this.setData({
      num1:true
    })
    }else{
      this.setData({
        num1:false
      })
    }
    this.setData({
      cartDatas: this.data.cartDatas
    })
    let m = 0;
    let n = 0;
    if (this.data.allPick) {
      for (let i = 0; i < this.data.cartDatas.length; i++) {
        m += this.data.cartDatas[i].min_app_price * this.data.cartDatas[i].fix_num
        n += this.data.cartDatas[i].fix_num
      }
      this.setData({
        totalPrice: m,
        totalNum: n
      })
    } else {
      this.setData({
        totalPrice: 0,
        totalNum: 0
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url:'https://h5.watsons.com.cn/trade/cart',
      success(res){
        // console.log(res)
        _this.setData({
          datas:res.data.data
        })
      }
    })
    let cartData = wx.getStorageSync('cartData')
    for(let i=0;i<cartData.length;i++){
      this.data.totalPrice += cartData[i].min_app_price * cartData[i].fix_num
      this.data.totalNum += cartData[i].fix_num
    }
    this.setData({
      cartDatas:cartData,
      totalPrice: this.data.totalPrice,
      totalNum: this.data.totalNum
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