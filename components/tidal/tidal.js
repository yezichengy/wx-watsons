// components/tidal/tidal.js
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
    lunbo:[],
    datas:[],
    todayOnsale:[],
    // todayOnsaleBg: {
    //   bg: '#fff'
    // }
  },
  lifetimes:{
    attached(){
      let _this = this
      wx.request({
        url:'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=[%22jujiashenghuo_topBig_forcase_180117%22,%22new_homelive_pingou%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=91aaf9e0-e806-11e9-98fc-ef0320be30e8',
        success(res){
          res = res.data.data.jujiashenghuo_topBig_forcase_180117.datas
          _this.setData({
            lunbo:res
          })
        }
      })
      wx.request({
        url:'https://h5.watsons.com.cn/topic/data/T20190130165946087?device_id=483c4420-eaff-11e9-9092-2153a1dab3f5',
        success(res){
          _this.setData({
            datas:res.data.data.layout
          })
        }
      })
      wx.request({
        url:'https://h5.watsons.com.cn/activity/specials/info?count=8&code=seckill_homelive_real&device_id=483c4420-eaff-11e9-9092-2153a1dab3f5',
        success(res){
          _this.setData({
            todayOnsale: res.data.data.specials_item_v_o_s
          })
        }
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
