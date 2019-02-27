# 基于dva 与 ant design 所编写的一个demo
## 暂时用于测试dva的一些方法、性能与antd组件
### umi官网地址https://umijs.org/zh/guide/
### 安装umi
### 首先得有 node，并确保 node 版本是 8.10 或以上
### 推荐使用 yarn 管理 npm 依赖，并使用国内源
### npm i yarn tyarn -g (后面文档里的 yarn 换成 tyarn)
### 然后全局安装 umi，并确保版本是 2.0.0 或以上。
### yarn global add umi

###  然后通过 umi g 创建一些页面，
###  umi g page index

###  启动本地服务器
###  umi dev

###  构建
###  umi build

###  本地验证
###  yarn global add serve
###  serve ./dist

###  部署
###  yarn global add now
###  now ./dist