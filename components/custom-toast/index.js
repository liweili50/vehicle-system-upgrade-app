// components/custom-toast/custom-toast.js
Component({
  properties: {
    message: String,
    type: { // success, error, warning, info
      type: String,
      value: 'info'
    },
    duration: {
      type: Number,
      value: 3000
    },
    show: {
      type: Boolean,
      value: false
    }
  },
  
  data: {
    // iconMap: {
    //   success: '/icons/success.png',
    //   error: '/icons/error.png',
    //   warning: '/icons/warning.png',
    //   info: '/icons/info.png'
    // }
  },
  
  methods: {
    show(message, type = 'info', duration = 3000) {
      this.setData({
        message,
        type,
        show: true
      })
      
      if (duration > 0) {
        setTimeout(() => {
          this.hide()
        }, duration)
      }
    },
    
    hide() {
      this.setData({ show: false })
    },
    
    onTap() {
      this.hide()
    }
  }
})