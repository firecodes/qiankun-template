
### 项目安装
yarn config set electron_mirror https://cdn.npm.taobao.org/dist/electron/
yarn add electron --save-dev

###### 下载安装
## 安装项目依赖扩展组件
yarn install

# 启动本地开发环境
yarn dev
# 启动本地开发环境桌面客户端
yarn electron:dev

## 生产环境构建项目
yarn build

## 生产环境桌面客户端打包
yarn electron:build
```

electron_mirror "https://cdn.npm.taobao.org/dist/electron/"
electron_mirror=https://npm.taobao.org/mirrors/electron
npm config set electron_mirror=https://npm.taobao.org/mirrors/electron/
npm config set ELECTRON_BUILDER_BINARIES_MIRROR=//npm.taobao.org/mirrors/electron-builder-binaries/