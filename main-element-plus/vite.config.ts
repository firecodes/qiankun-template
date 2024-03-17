import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const viteEnv = loadEnv(mode, process.cwd())
  const { VITE_TITLE, VITE_PUBLIC_PATH, VITE_PROXY_TARGET } = viteEnv

  return {
    // root: process.cwd(), // 项目根目录（index.html 文件所在的位置）,
    // publicDir: 'public', // 静态资源服务的文件夹
    // envDir: "./env", // 环境变量的存储路径
    base: !isBuild ? './' : '/apps/one/',
    logLevel: "info", // default
    clearScreen: false, // 默认值为true。调试时设置为false，可以看到更多信息
    resolve: {
      alias: {
        '@/': `${pathSrc}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        dts: 'src/components.d.ts',
      }),
      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            scale: 1.2,
            warn: true,
          }),
        ],
        transformers: [
          transformerDirectives(),
          transformerVariantGroup(),
        ]
      }),
    ],
    server: {
      open: false,
      proxy: {
        // '/api': {
        //   target: VITE_PROXY_TARGET,
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(new RegExp('^/api'), ''),
        //   secure: false,
        //   configure: (proxy, options) => {
        //     // 配置此项可在响应头中看到请求的真实地址
        //     proxy.on('proxyRes', (proxyRes, req) => {
        //       proxyRes.headers['x-real-url'] = new URL(req.url || '', options.target)?.href || ''
        //     })
        //   },
        // },
      },
    },
    build: {
      outDir: path.resolve(__dirname, "dist"),
      assetsDir: "static",
      emptyOutDir: false,
      target: "esnext", // default，最低为es2015
      cssCodeSplit: true, // default
      sourcemap: false, // default
    },
  }
})
