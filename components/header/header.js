// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentNum:{
      type:Number,
      observer:function(newVal,oldVal){
        console.log(newVal)
        console.log(oldVal)
        console.log(this)
        this.setData({
          cN:newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    totalNum:0,
    cN:0
  },
  lifetimes:{
    attached(){
      let cartData = wx.getStorageSync('cartData')
      for(var i=0;i<cartData.length;i++){
        this.data.totalNum += cartData[i].fix_num
      }
      this.setData({
        totalNum:this.data.totalNum
      })
      console.log(this)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toSearch() {
      wx.navigateTo({
        url: '../../pages/search/search'
      })
    },
    toMine(){
      wx.navigateTo({
        url:'../../pages/mine/mine'
      })
    },
    toShoppingCart(){
      wx.navigateTo({
        url: '../../pages/shoppingcart/shoppingcart'
      })
    }
  }
})
