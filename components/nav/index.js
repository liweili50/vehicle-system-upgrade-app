Component({
  options: {
    styleIsolation: 'shared',
  },
  properties: {
    navType: {
      type: String,
      value: 'title',
    },
    titleText: String,
    showBack: {
      type: Boolean,
      value: true,
    },
    showHome: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    visible: false,
  },
  methods: {
    onBack() {
      wx.navigateBack();
    },
    onGoHome() {
      wx.reLaunch({
        url: '/pages/home/home',
      });
    },
  },
});
