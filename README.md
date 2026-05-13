# 车机系统升级资料分享小程序

基于原生微信小程序框架开发的车机系统升级资料分享应用，使用 TDesign UI 组件库。

## 项目简介

车机系统升级资料分享小程序是一款面向车主及维修人员的资料查询工具，提供车机系统升级资料的搜索与浏览功能。

## 技术栈

- **框架**: 原生微信小程序
- **UI组件**: [TDesign 小程序组件库](https://tdesign.tencent.com/miniprogram/components/overview)
- **样式**: Less 预处理器
- **代码规范**: ESLint + Prettier

## 功能特性

- 车机系统升级资料搜索
- 资料详情浏览
- 搜索结果展示

## 项目结构

```
├── api/                 # API 接口封装
├── pages/              # 页面
│   └── home/           # 首页
├── components/         # 公共组件
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
- 文件夹使用 kebab-case 命名
- 组件文件夹使用 kebab-case 命名

### 提交规范

项目使用 Husky + Lint-staged 进行提交前代码检查。

## 主要页面说明

### 首页
- 车机系统升级资料搜索
- 资料列表展示

## API 配置

在 `api/request.js` 中配置接口地址和请求拦截器。

## 开源协议

本项目遵循 [MIT 协议](https://github.com/TDesignOteam/tdesign-miniprogram-starter/blob/main/LICENSE)。

## 相关链接

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [TDesign 小程序组件库](https://tdesign.tencent.com/miniprogram/components/overview)
