// components/tab-bar/tab-bar.js
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
    currentContent: 0,
    currentIndex: 0,
    tips: '请稍后',
    show: true,
    animated: true
  },
  lifetimes:{
    attached() {
      this.timer = setInterval(() => {
        this.setData({
          show: !this.data.show
        })
      }, 2000)
    },
    detached() {
      clearInterval(this.timer)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    checkoutNav(ev) {
      let ind = ev.currentTarget.dataset.ind
      this.setData({
        currentIndex: ind
      })
    },
    
  }
})
