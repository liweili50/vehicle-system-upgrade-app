// app.js
import config from './config';
import createBus from './utils/eventBus';
import request from './api/request';

App({
  onLaunch() {
    this.handleAppUpdate();
    this.eventBus.on('login-success', () => {
      this.handleGetUserInfo();
    });
    this.eventBus.on('logout', () => {
      this.handleLogout();
    });
  },
  onShow() {
    if (!this.globalData.userInfo) {
      this.handleGetUserInfo();
    }
  },
  globalData: {
    userInfo: null,
  },
  /** 全局事件总线 */
  eventBus: createBus(),
  handleAppUpdate() {
    const updateManager = wx.getUpdateManager();

    updateManager.onCheckForUpdate((res) => {
      // console.log(res.hasUpdate)
    });

    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        },
      });
    });
  },
  async handleGetUserInfo() {
    const Token = wx.getStorageSync('access_token');
    if (!Token) return;
    try {
      const res = await request('/cm/user/queryUserInfo', 'post');
      this.globalData.userInfo = res.data;
      this.eventBus.emit('user-info-updated', res.data);
    } catch (e) {
      console.warn('获取用户信息失败', e);
      this.handleLogout(); // token 失效直接退出
    }
  },

  handleLogout() {
    wx.removeStorageSync('access_token');
    this.globalData.userInfo = null;
    // 通知所有页面：用户信息已清空
    this.eventBus.emit('user-info-updated', null);
  },
});