// components/face-mask/face-mask.js
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
    specialItem:[],
    onsaleItem:[],
    hours: '',
    minutes: '',
    seconds: '',
  },
  lifetimes:{
    attached(){
      let _this = this
      let timer = setInterval(function () {
        // 获取倒计时
        let date = new Date()
        let dates = date.toString().substring(8, 10)
        dates = parseInt(dates)
        dates++;
        dates = dates[1] ? dates : '0' + dates
        dates = '2019/10/' + dates + ' 00:00:00'
        let countDown = new Date(new Date(dates).valueOf() - new Date().valueOf())
        _this.setData({
          hours: (countDown.getHours() - 8).toString(),
          minutes: countDown.getMinutes().toString(),
          seconds: countDown.getSeconds().toString()
        })
      }, 1000)
      wx.request({
        url:'https://h5.watsons.com.cn/tms/aladdin/get?code=Mask_center_banner_index_1',
        success(res){
          _this.setData({
            lunbo:res.data.data.datas
          })
        }
      }),
      wx.request({
        url:'https://h5.watsons.com.cn/activity/specials/info?code=Mask_center_products_index_4&access_token=undefined',
        success(res){
          if (res.data.data.specials_item_v_o_s){
          _this.setData({
            specialItem: res.data.data.specials_item_v_o_s
          })
          }
        }
      })
      wx.request({
        url:'https://h5.watsons.com.cn/activity/specials/info?count=8&code=seckill_maskcenter_real&stock_code=&device_id=91aaf9e0-e806-11e9-98fc-ef0320be30e8',
        success(res){
          if (res.data.data.specials_item_v_o_s){
          _this.setData({
            onsaleItem: res.data.data.specials_item_v_o_s
          })
          }
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
