// components/global/global.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    datas:[],
    todayOnsale:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes:{
    attached(){
      let _this = this
      wx.request({
        url:'https://h5.watsons.com.cn/topic/data/T20190923185113952?device_id=483c4420-eaff-11e9-9092-2153a1dab3f5',
        success(res){
          _this.setData({
            datas:res.data.data.layout
          })
        }
      })
      wx.request({
        url:'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=20&group_id=21056&device_id=483c4420-eaff-11e9-9092-2153a1dab3f5',
        success(res){
          _this.setData({
            todayOnsale:res.data.data.item_list
          })
        }
      })
    }
  }
})
