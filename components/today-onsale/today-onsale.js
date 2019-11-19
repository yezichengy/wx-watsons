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
      setInterval(function () {
        // 获取倒计时
        let date = new Date().toString().replace(/\d+:\d+:\d+/, '23:59:59')
        // console.log(date)
        let countDown = new Date(new Date(date).valueOf() - new Date().valueOf())
        // console.log(countDown)
        let tmr = new Date().getHours()
        if(tmr>8){
        _this.setData({
          hours: (countDown.getHours() -8).toString(),
          minutes: countDown.getMinutes().toString(),
          seconds: countDown.getSeconds().toString()
        })
        }else if(tmr<8){
          _this.setData({
            hours: (countDown.getHours() +24).toString(),
            minutes: countDown.getMinutes().toString(),
            seconds: countDown.getSeconds().toString()
          })
        }
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
