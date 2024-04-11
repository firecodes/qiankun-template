const path = require('path');
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // nitro: {
  //   output: {
  //     publicDir: path.join(__dirname, 'dist')
  //   }
  // },
  app: {
    baseURL: '/qiankun-template/nuxt-app/',
    buildAssetsDir: 'nuxt_assets',
  },
  // experimental: {
  //   payloadExtraction: false
  // },
})
