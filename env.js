const accountInfo = wx.getAccountInfoSync();
const {envVersion} = accountInfo.miniProgram;

const ENV_CONFIG = {
  develop: {
    baseUrl: 'https://u-kh.jxnq.net:32512',
    envName: '开发版',
  },
  trial: {
    baseUrl: 'https://u-kh.jxnq.net:32512',
    envName: '体验版',
  },
  release: {
    baseUrl: 'https://kh.yundasys.com',
    envName: '正式版',
  },
};

export default ENV_CONFIG[envVersion] || ENV_CONFIG.release;