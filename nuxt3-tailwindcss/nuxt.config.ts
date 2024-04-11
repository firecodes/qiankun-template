const path = require('path');
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
  ],
  // devServer: {
  //   host: '127.0.0.1'
  // },
  // app: {
  //   baseURL: '/qiankun-template/nuxt3-h5/',
  //   buildAssetsDir: 'nuxt_assets',
  // },
  // experimental: {
  //   payloadExtraction: false
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  }
})
