const isDev = process.env.NODE_ENV === "development";
// import { name } from './package.json'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require("./package.json");
const publicPath = process.env.VITE_PUBLIC_PATH;
const port = 9008;
const publicPathVal = isDev ? `//localhost:${port}` : publicPath;

console.log("process.env:", publicPath, name);
module.exports = {
  publicPath: publicPath,
  // outputDir:'dist'
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
    config.module
      .rule("fonts")
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 4096, // 小于4kb将会被打包成 base64
        fallback: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[hash:8].[ext]",
            publicPathVal,
          },
        },
      })
      .end();
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 4096, // 小于4kb将会被打包成 base64
        fallback: {
          loader: "file-loader",
          options: {
            name: "img/[name].[hash:8].[ext]",
            publicPathVal,
          },
        },
      });
    // config.module.rule('fonts').type('asset/inline').set('generator', {});
    // config.module.rule('images').type('asset/inline').set('generator', {});
  },
  devServer: {
    port: port,
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
