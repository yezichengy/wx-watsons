// components/news/news.js
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
    sylunbo: [],
    midlunbo:[],
    newWelfare: [],
    categaryNavs: [],
    topicCase: [],
    specialItem:[],
    todayOnsaleBg:{
      bg:'https://image.watsons.com.cn//upload/84d70a40.jpg'
    },
    newNav:[],
    goodSold:[],
    scrollImg1:[],
    scrollImg2:[],
    populars1: [],//畅销品类1
    populars2: [],//畅销品类2
    populars3: [],//畅销品类3
    populars4: [],//畅销品类4
    pop1: [],
    pop2: [],
    preEle:[],
    pop3: [],
    pop4:[],
    popHots: [{ data: '' }, { data: '' }, { data: '' }, { data: '' }],
    doubleEle:[],
    pop5:[],
    topBrands:[],
    transLayout:'',
    currentContent: 0,
    currentIndex: 0,
    tips: '请稍后',
    show: true,
    totalNum:0,
    animated: true,
    list: [
      { title: '人气王' }, { title: '新品王' }, { title: '断货榜' }, { title: '限时抢' }
    ]
  },

  /**
   * 组件的方法列表
   */
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      let _this = this
      // http请求
      wx.request({
        url:'https://h5.watsons.com.cn/tms/aladdin/get?code=show_picture1&version=&app_channel=wap&plat=wap&access_token=&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res){
          _this.setData({
            scrollImg1:res.data.data.datas
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/tms/aladdin/get?code=show_picture1&version=&app_channel=wap&plat=wap&access_token=&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res) {
          _this.setData({
            scrollImg2: res.data.data.datas
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=[%22new_header%22,%22sylunbo%22,%22new_Home_coupon_180105_4%22,%22New_home_20-navigation%22,%22%E4%B8%B4%E6%97%B6%22,%22dao_liu_app%22,%22pingou_B%22,%22Home_AboveTopic_activity_170505_7%22,%22Home_TopicCase_170505_7%22,%22Home_CategaryNavs_170505_7%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=de469550-e28b-11e9-bf42-81a7719fece5',
        header: {
          'content-type': 'application/json',
        },
        success(res) {
          res = res.data.data
          _this.setData({
            sylunbo: res.sylunbo.datas,
            categaryNavs: res.Home_CategaryNavs_170505_7.datas,
            topicCase: res.Home_TopicCase_170505_7.datas,
          })
        }
      })
      wx.request({
        url:'https://h5.watsons.com.cn/topic/data/T20191009152720373?device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res){
          _this.setData({
            preEle:res.data.data.layout
          })
        }
      })
        wx.request({
          url: 'https://h5.watsons.com.cn/topic/data/T20190725161432612?device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            _this.setData({
              newWelfare: res.data.data.layout
            })
          }
        })
      wx.request({
        url:'https://h5.watsons.com.cn/activity/specials/info?count=8&code=Home_flashSale__Top_Img&stock_code=&device_id=de469550-e28b-11e9-bf42-81a7719fece5',
        header:{
          'content-type':'application/json'
        },
          success(res){
            _this.setData({
              specialItem: res.data.data.specials_item_v_o_s
            })
          }
      }),
      wx.request({
        url:'https://h5.watsons.com.cn/topic/data/Newhome_20-navigation?device_id=de469550-e28b-11e9-bf42-81a7719fece5',
        success(res){
          _this.setData({
            transLayout:res.data.data.layout[0].content.image
          })
        }
      })  
      wx.request({
        url:'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=[%22newhome_10icon_one_img2%22,%22newhome_10icon_one_img1%22,%22new_Home_4navs_180105_1%22,%22Home_seckill%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=de469550-e28b-11e9-bf42-81a7719fece5',
        success(res){
          _this.setData({
            newNav: res.data.data.new_Home_4navs_180105_1.datas
          })
        }
      }),
      // 畅销品类
      wx.request({
        url:'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=18&group_id=21300&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res){
          _this.setData({
            populars1:res.data.data.item_list
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=15&group_id=21301&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res) {
          _this.setData({
            populars2: res.data.data.item_list
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=15&group_id=21302&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res) {
          _this.setData({
            populars3: res.data.data.item_list
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=12&group_id=21304&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res) {
          _this.setData({
            populars4: res.data.data.item_list
          })
        }
      })
      wx.request({
        url:'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=12&group_id=21224&device_id=c7f3c2d0-ea5d-11e9-8ceb-0da78da74196',
        success(res){
          _this.setData({
            goodSold:res.data.data.item_list
          })
        }
      })
      wx.request({
        url:'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=100&group_id=21228&device_id=c7f3c2d0-ea5d-11e9-8ceb-0da78da74196',
        success(res){
          _this.setData({
            pop1:res.data.data.item_list
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=100&group_id=21243&device_id=c7f3c2d0-ea5d-11e9-8ceb-0da78da74196',
        success(res) {
          _this.setData({
            pop2: res.data.data.item_list
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=100&group_id=21248&device_id=c7f3c2d0-ea5d-11e9-8ceb-0da78da74196',
        success(res) {
          _this.setData({
            pop3: res.data.data.item_list
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=100&group_id=21249&device_id=c7f3c2d0-ea5d-11e9-8ceb-0da78da74196',
        success(res) {
          _this.setData({
            pop4: res.data.data.item_list
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=100&group_id=21250&device_id=c7f3c2d0-ea5d-11e9-8ceb-0da78da74196',
        success(res) {
          _this.setData({
            pop5: res.data.data.item_list
          })
        }
      })
      wx.request({
        url:'https://h5.watsons.com.cn/topic/data/T20190929153358983?device_id=483c4420-eaff-11e9-9092-2153a1dab3f5',
        success(res){
          _this.setData({
            topBrands:res.data.data.layout[6].content.brands
          })
        }
      })
      wx.request({
        url:'https://h5.watsons.com.cn/topic/data/T20191009170816768?device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res){
          _this.setData({
            doubleEle:res.data.data.layout
          })
        }
      })
      // 网红单品请求
      wx.request({
        url:'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=12&group_id=21296&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res){
          let temp = _this.data.popHots
          temp[0].data = res.data.data.item_list
          _this.setData({
            popHots:temp,
            goodSold:res.data.data.item_list
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=12&group_id=21297&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res) {
          let temp = _this.data.popHots
          temp[1].data = res.data.data.item_list
          _this.setData({
            popHots: temp
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=12&group_id=21298&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res) {
          let temp = _this.data.popHots
          temp[2].data = res.data.data.item_list
          _this.setData({
            popHots: temp
          })
        }
      })
      wx.request({
        url: 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=12&group_id=21299&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res) {
          let temp = _this.data.popHots
          temp[3].data = res.data.data.item_list
          _this.setData({
            popHots: temp
          })
        }
      })
      // 中间轮播插件
      wx.request({
        url:'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=[%22chajian%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=f84b8db0-eafc-11e9-999c-e3f3fa14879b',
        success(res){
          _this.setData({
            midlunbo:res.data.data.chajian.datas
          })
        }
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function () {
    // 在组件实例进入页面节点树时执行
  },
  detached: function () {
    // 在组件实例被从页面节点树移除时执行
  },
  methods: {
    tabChange(e) {
      console.log('tab change', e)
    },
    checkoutNav(ev) {
      let ind = ev.currentTarget.dataset.ind
      this.setData({
        currentIndex: ind,
        goodSold:this.data.popHots[ind].data
      })
    },
    receive(ev){
      // console.log(ev)
      // this.setData({
      //   totalNum:ev.detail.totalNum
      // })
      let nums = {
        totalNum: ev.detail.totalNum
      }
      this.triggerEvent('delieve',nums)
    }
  }
})
