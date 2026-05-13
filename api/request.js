import config from '~/config';

const { baseUrl } = config;

function request(url, method = 'GET', data = {}, config = {}) {
  const header = config || {
    'content-type': 'application/json',
  };

  const tokenString = wx.getStorageSync('access_token');

  if (tokenString) {
    header.token = tokenString;
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method,
      data,
      dataType: 'json',
      header,
      success(res) {
        if (res.data.code === 200) {
          resolve(res.data);
        } else if (res.data.code === 2001) {
          wx.showModal({
            title: '登录过期',
            content: '您的登录已过期，请重新登录',
            showCancel: true,
            confirmText: '去登录',
            cancelText: '取消',
            success: (modalRes) => {
              if (modalRes.confirm) {
                wx.removeStorageSync('access_token');
                const app = getApp()
                app.eventBus.emit('logout');
                wx.navigateTo({
                  url: '/pages/login-code/index',
                });
              }
            },
          });
          reject(res);
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.message,
          });
          reject(res);
        }
      },
      fail(err) {
        reject(err);
      },
    });
  });
}

export default request;
