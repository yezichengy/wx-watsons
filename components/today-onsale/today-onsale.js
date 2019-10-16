// components/today-onsale/today-onsale.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:Array,
    background:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
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
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(ev) {
      // console.log(ev.currentTarget.dataset.item)
      let strData = JSON.stringify(ev.currentTarget.dataset.item)
      wx.navigateTo({
        url: '../../pages/detail/detail?data=' + strData
      })
    },
  }
})
