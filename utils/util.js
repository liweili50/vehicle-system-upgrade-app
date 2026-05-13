// 复制到本地临时路径，方便预览
export const getLocalUrl = (path, name) => {
  const fs = wx.getFileSystemManager();
  const tempFileName = `${wx.env.USER_DATA_PATH}/${name}`;
  fs.copyFileSync(path, tempFileName);
  return tempFileName;
};

// 手机号正则验证
export const isCNMobileLoose = (phoneNumber) => /^1[3-9]\d{9}$/.test(phoneNumber);

// 身份证号正则验证
export const isCNIDLoose = (id) => /^(?:\d{6}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]|\d{15})$/.test(id);

export const virtualMobileRegExp = /^(1[3-9]\d{9}|700\d{12})(?:-\d{4})?$/;

export const landlineRegex = /(^(400(-?\d{3,4}){2}|400\d{7,8})$)|(^(0\d{2,3}-?)?\d{7,8}$)/;
