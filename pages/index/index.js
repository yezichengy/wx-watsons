//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentIndex: 0,
    tips: '请稍后',
    show: true,
    animated: true,
    totalNum:0,
    list:[
      { title: '今日推荐' }, { title: '面膜中心' }, { title: '潮流购物' }, { title: '购全球' }
    ]
  },
  //事件处理函数
  onload() {
    this.timer = setInterval(() => {
      this.setData({
        show: !this.data.show
      })
    }, 2000)
    // console.log(wx.getStorageSync('cartData'))
    // if(wx.getStorageSync('cartData')){
    //   let cartData = JSON.stringify({
    //     item_name:'',
    //     item_id:'',
    //     item_image:'',
    //     item_weight:'',
    //     item_price:Number,
    //     item_num:Number,
    //     item_promotions:Array
    //   })
    //   wx.setStorage('cartData',cartData)
    // }
  },
  onUnload() {
    clearInterval(this.timer)
  },

  /**
   * 组件的方法列表
   */
  
    checkoutNav(ev) {
      let ind = ev.currentTarget.dataset.ind
      this.setData({
        currentIndex: ind
      })
    },
    getNum(ev){
      this.setData({
        totalNum:ev.detail.totalNum
      })
    }
  
  
 
})