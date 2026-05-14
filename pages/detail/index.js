import upgradeData from '../../data/upgradeData';

Page({
  data: {
    detail: {},
    showAd: false,
    canSkip: false,
    adCountdown: 3,
    adVideoUrl: '', // 在此填入广告视频地址
  },
  onLoad(options) {
    const id = Number(options.id);
    const item = upgradeData.find((i) => i.id === id);
    if (item) {
      this.setData({ detail: item });
    }

    this._countdownTimer = setInterval(() => {
      const count = this.data.adCountdown - 1;
      if (count <= 0) {
        clearInterval(this._countdownTimer);
        this._countdownTimer = null;
        this.setData({ canSkip: true, adCountdown: 0 });
      } else {
        this.setData({ adCountdown: count });
      }
    }, 1000);
  },
  onUnload() {
    this._clearTimers();
  },
  _clearTimers() {
    if (this._countdownTimer) {
      clearInterval(this._countdownTimer);
      this._countdownTimer = null;
    }
  },
  onAdEnded() {
    this._clearTimers();
    this.setData({ showAd: false });
  },
  onAdError() {
    this._clearTimers();
    this.setData({ showAd: false });
  },
  skipAd() {
    if (!this.data.canSkip) return;
    this._clearTimers();
    this.setData({ showAd: false });
  },
  copyUrl() {
    const { url } = this.data.detail;
    if (!url) return;
    wx.setClipboardData({
      data: url,
      success: () => {
        wx.showToast({ title: '链接已复制，请在浏览器中打开', icon: 'none' });
      },
    });
  },
});
