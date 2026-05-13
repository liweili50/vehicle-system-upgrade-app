# 客户管家小程序

基于原生微信小程序框架开发的客户管家应用，使用 TDesign UI 组件库。

## 项目简介

客户管家小程序是一款面向企业管理者的客户关系管理工具，提供客户邀请下单、订单查询、个人信息维护等核心功能。

## 技术栈

- **框架**: 原生微信小程序
- **UI组件**: [TDesign 小程序组件库](https://tdesign.tencent.com/miniprogram/components/overview)
- **样式**: Less 预处理器
- **代码规范**: ESLint + Prettier

## 功能特性

- 用户登录（账号密码登录 / 手机验证码登录）
- 首页信息展示（轮播图、卡片展示）
- 订单查询（关键词搜索、分页加载、下拉刷新）
- 个人中心
- 自定义 TabBar
- WebSocket 实时消息推送
- Mock 数据支持

## 项目结构

```
├── api/                 # API 接口封装
├── pages/              # 页面
│   ├── home/           # 首页
│   ├── my/             # 个人中心
│   ├── login/          # 登录页
│   ├── login-code/     # 验证码登录
│   └── order-query/    # 订单查询
├── components/         # 公共组件
│   ├── card/           # 卡片组件
│   └── nav/            # 导航组件
├── custom-tab-bar/     # 自定义 TabBar
├── mock/               # Mock 数据
├── utils/              # 工具函数
├── static/             # 静态资源
├── app.js              # 小程序逻辑
├── app.json            # 小程序配置
└── package.json        # 项目依赖
```

## 快速开始

### 环境要求

- 微信开发者工具
- Node.js >= 12.0.0
- 微信小程序基础库 >= 2.6.5

### 安装依赖

```bash
npm install
```

### 开发调试

1. 打开微信开发者工具
2. 导入项目目录
3. 点击"编译"按钮运行项目
4. 可以在开发者工具中预览和调试

## 开发规范

### 代码检查

```bash
# 运行代码检查
npm run lint

# 自动修复代码格式
npm run lint:fix
```

### 文件命名

- 页面文件统一使用 `index.js/json/wxml/less` 命名
- 文件夹使用 kebab-case 命名（如 `order-query`）
- 组件文件夹使用 kebab-case 命名

### 提交规范

项目使用 Husky + Lint-staged 进行提交前代码检查。

## 主要页面说明

### 登录页面
- 支持账号密码登录
- 支持手机号验证码登录
- 用户协议勾选验证

### 首页
- 轮播图展示
- 卡片信息展示
- 下拉刷新

### 订单查询
- 关键词搜索（订单号/客户名）
- 订单列表展示
- 上拉加载更多
- 订单状态标签
- 查看订单详情

### 个人中心
- 用户信息展示
- 功能入口

## 配置说明

### Mock 数据

在 `config.js` 中可以配置是否使用 Mock 数据：

```javascript
module.exports = {
  isMock: true, // 是否使用 Mock 数据
};
```

### API 配置

在 `api/request.js` 中配置接口地址和请求拦截器。

## 开源协议

本项目遵循 [MIT 协议](https://github.com/TDesignOteam/tdesign-miniprogram-starter/blob/main/LICENSE)。

## 相关链接

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [TDesign 小程序组件库](https://tdesign.tencent.com/miniprogram/components/overview)
