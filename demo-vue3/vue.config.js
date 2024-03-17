const isDev = process.env.NODE_ENV === "development";
// console.log("process:", process);
// import { name } from './package.json'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require("./package.json");

module.exports = {
  publicPath: process.env.VITE_PUBLIC_PATH,
  // outputDir:'dist'
  chainWebpack: (config) => config.resolve.symlinks(false),
  devServer: {
    port: 9008,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: `${name}-[name]`,
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
      // 按需加载相关，设置为 webpackJsonp_微应用名称 即可
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
