const path = require('path');
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@element-plus/nuxt", "@pinia/nuxt"],
  css: ["~/assets/css/style.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
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
