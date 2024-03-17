const { name } = require('../package.json');
const isDev = process.env.NODE_ENV === 'development';
console.log("process:", process)

module.exports = {
  'publicPath': process.env.VITE_PUBLIC_PATH,
  // outputDir:'dist'
  'chainWebpack': config => config.resolve.symlinks(false),
  'configureWebpack': {
    'output': {
      // 把子应用打包成 umd 库格式
      'library': `${name}-[name]`,
      'libraryTarget': 'umd',
      'jsonpFunction': `webpackJsonp_${name}`
    }
  },
  devServer: {
    'port': process.env.VUE_APP_PORT,
    'headers': {
      'Access-Control-Allow-Origin': '*'
    }
  }
};
