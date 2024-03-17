import { fileURLToPath, URL } from 'node:url'

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const viteEnv = loadEnv(mode, process.cwd())
  const { VUE_APP_PORT, VITE_PUBLIC_PATH, VITE_PROXY_TARGET } = viteEnv
  console.log("viteEnv--", viteEnv)
  return {
    // root: process.cwd(), // 项目根目录（index.html 文件所在的位置）,
    // publicDir: 'public', // 静态资源服务的文件夹
    // envDir: "./env", // 环境变量的存储路径
    base: VITE_PUBLIC_PATH,
    logLevel: "info", // default
    clearScreen: false, // 默认值为true。调试时设置为false，可以看到更多信息    
    server: {
      watch: { usePolling: true },
      hmr: true,
      port: 9001,
      headers: {
        'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
      },
    },
    plugins: [
      vue(),
      qiankun('vue3', {
        useDevMode: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      outDir: path.resolve(__dirname, "dist"),
      assetsDir: "static",
      emptyOutDir: false,
      target: "esnext", // default，最低为es2015
      cssCodeSplit: true, // default
      sourcemap: false, // default
    }
  }
})

