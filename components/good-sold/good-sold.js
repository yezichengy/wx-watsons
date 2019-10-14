// components/good-sold/good-sold.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    same:false,
    totalNum:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(ev){
      // console.log(ev.currentTarget.dataset.item)
      let strData = JSON.stringify(ev.currentTarget.dataset.item)
      wx.navigateTo({
        url:'../../pages/detail/detail?data='+strData
      })
    },
    addToCart(ev) {
      let cartData = wx.getStorageSync('cartData')
      
      // console.log(cartData)
      // let temp = this.data.datas
      let i = { ...ev.currentTarget.dataset.datas, fix_num: 1, item_type: true }
      // console.log(i)

      cartData.forEach(item => {
        if (item.item_id == i.item_id) {
          item.fix_num++;
          this.data.same = true;
        }
      })
      if (this.data.same == true) {
        this.data.same = false
      } else {
        cartData.push(i)
      }
      // this.setData({
      //   num: ++this.data.num
      // })
      let datas = {
        totalNum:0
      }
      for (var j = 0; j < cartData.length; j++) {
        datas.totalNum += cartData[j].fix_num
      }
      this.setData({
        totalNum: datas.totalNum
      })
      // console.log(datas)
      this.triggerEvent('myevent',datas)
      wx.setStorageSync('cartData', cartData)
      // console.log(cartData)
    }
  }
})
