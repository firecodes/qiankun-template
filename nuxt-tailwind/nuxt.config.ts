import { fileURLToPath } from 'node:url'
const define: any = {}
// 处理process.env以便在客户端能够取到
Object.keys(process.env).forEach((name) => {
  define['process.env.' + name] = JSON.stringify(process.env[name])
})
console.log('nuxt rnv', define)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    '~/plugins/hello'
  ],
  rootDir: process.env.NUXT_PUBLIC_ROOT || './',
  // baseURL: process.env.NUXT_APP_BASE_URL || './',
  // buildAssetsDir: '/_nuxt/',
  // cdnURL:  process.env.NUXT_APP_CDN_URL || './',
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  alias: {
    '@/': '/<rootDir>/',
    img: fileURLToPath(new URL('./assets/img', import.meta.url)),

    // '~': '/<srcDir>',
    // '@': '/<srcDir>',
    // '~~': '/<rootDir>',
    // '@@': '/<rootDir>',
    // assets: '/<srcDir>/assets',
    // public: '/<srcDir>/public'
  },
  // analyze: {
  //   analyzerMode: 'static'
  // },
  routeRules: {
    '/api/search.json': { prerender: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },
  devtools: {
    enabled: false
  },
  // postcss: {
  //   plugins: {
  //     // 这个工具可以实现自动添加CSS3前缀
  //     "autoprefixer": {
  //       overrideBrowserslist: ["last 5 version", ">1%", "ie >=8"]
  //     },
  //     'postcss-pxtorem': {
  //       rootValue: 37.5, // 指定转换倍率，我现在设置这个表示1rem=37.5px;
  //       propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
  //       mediaQuery: false, // 是否允许使用媒体查询，false媒体查询的代码可用，true不可用
  //       exclude: 'ignore',
  //       replace: true, // 替换包含rem的规则，而不是添加回退
  //       minPixelValue: 1, // 需要转换的最小值，一般1px像素不转换，以上才转换
  //       unitPrecision: 6, // 转换成rem单位的小数点后的保留位数
  //       selectorBalckList: ["van"], // 匹配不被转换为rem的选择器
  //     },
  //   },
  // },
  // debug: false,
  devServer: {
    host: '0.0.0.0',
    port: Number(process.env.NUXT_PORT) || 8000,
    // https: {
    //   key: './server.key',
    //   cert: './server.crt'
    // }
  },
  nitro: {
    devProxy: {
      // '/api/': {
      //   target: 'http:192.168.9.70:3000/api/',
      //   changeOrigin: true
      // }
    }
  },
  ssr: true,
  // extractCSS: process.env.NODE_ENV === 'production',
  vite: {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      'process.dev2': false,
      'process.test2': false,
      'import.meta.dev2': false,
      'import.meta.test2': false
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "~/assets/_colors.scss" as *;'
    //     }
    //   }
    // }
  }
})
