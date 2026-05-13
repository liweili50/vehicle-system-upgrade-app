Component({
  properties: {
    // 运单号
    trackingNumber: {
      type: String,
      value: ''
    },
    // 最新物流状态
    latestStatus: {
      type: String,
      value: ''
    },
    // 物流详情数据
    logisticsData: {
      type: Array,
      value: []
    }
  },

  methods: {
    onCardClick() {
      // 触发自定义事件，通知父组件显示弹窗
      this.triggerEvent('showPopup', {
        trackingNumber: this.data.trackingNumber,
        logisticsData: this.data.logisticsData
      });
    },
    /**
   * 复制订单号
   */
  copyOrderNumber(e) {
    const {orderNo} = e.currentTarget.dataset;
    
    if (!orderNo) {
      wx.showToast({
        title: '运单号为空',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    // 调用小程序API复制到剪贴板
    wx.setClipboardData({
      data: orderNo,
      success: (res) => {
        // 复制成功后给用户反馈
        wx.showToast({
          title: '已复制到剪贴板',
          icon: 'success',
          duration: 1500
        });
        
        // // 如果需要，可以触发一些震动反馈
        // wx.vibrateShort({
        //   type: 'light'
        // });
        
        // 可以在这里添加日志记录等操作
        console.log('订单号已复制:', orderNo);
      },
      fail: (err) => {
        console.error('复制失败:', err);
        wx.showToast({
          title: '复制失败，请重试',
          icon: 'error',
          duration: 2000
        });
      }
    })
  },
  }
})