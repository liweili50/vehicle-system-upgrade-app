import dayjs from "dayjs";

Component({
  properties: {
    // 是否显示弹窗
    show: {
      type: Boolean,
      value: false
    },
    // 物流详情数据
    logisticsData: {
      type: Array,
      value: []
    },
    // 中转停滞信息
    stagnationInfo: {
      type: Object,
      value: null
    }
  },

  data: {
    // 动画实例
    animation: null
  },

  methods: {
    // 关闭弹窗
    onClose() {
      this.triggerEvent('close');
    },
    
    // 阻止触摸事件冒泡
    preventTouchMove() {
      
    },
    
    // 格式化时间显示
    formatTime(timeStr) {
      if (!timeStr) return '';
      return dayjs(timeStr).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  
  observers: {
    'show': function(show) {
      if (show) {
        // 显示时执行动画
        const animation = wx.createAnimation({
          duration: 300,
          timingFunction: 'ease'
        });
        animation.translateY(0).step();
        this.setData({ animation: animation.export() });
      }
    }
  }
})