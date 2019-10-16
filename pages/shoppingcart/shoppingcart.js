// pages/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noItem:'data:image/png;base64,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',
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
    startX:Number,
    startY:Number,
    recomend:[],
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
  // receive(ev) {
  //   // console.log(ev)
  //   // this.setData({
  //   //   totalNum:ev.detail.totalNum
  //   // })
  //   let nums = {
  //     totalNum: ev.detail.totalNum
  //   }
  //   this.triggerEvent('delieve', nums)
  // },
  touchstart(ev){
    console.log(ev)
    this.setData({
      startX:ev.changedTouches[0].clientX,
      startY:ev.changedTouches[0].clientY
    })
  },
  touchmove(ev) {
    console.log(ev)
    let clientX = ev.changedTouches[0].clientX
    let clientY = ev.changedTouches[0].clientY
    if(this.data.startX-clientX>50){
      this.setData({
        edit:true
      })
    } else if (this.data.startX - clientX < -50) {
      this.setData({
        edit: false
      })
    }
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
  toHome(){
    wx.redirectTo({
      url:'../../pages/index/index'
    })
  },
  delItem(ev){
    console.log(ev)
    this.data.cartDatas.splice(ev.currentTarget.dataset.ind,1)
    this.setData({
      cartDatas:this.data.cartDatas
    })
    wx.setStorageSync('cartData',this.data.cartDatas)

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
      url:'https://h5.watsons.com.cn/act/mop/aladdin/recommend?source=EXCLUSION&count=50&offset=0&items=16597',
      success(res){
        _this.setData({
          recomend:res.data.data.item_list
        })
      }
    })
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
    console.log(1)
    wx.setStorageSync('cartData',this.data.cartDatas)
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