import { fileURLToPath, URL } from 'node:url'
import qiankun from 'vite-plugin-qiankun'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const viteEnv = loadEnv(mode, process.cwd())
  const { VUE_APP_PORT, VITE_PUBLIC_PATH, VITE_PROXY_TARGET } = viteEnv
  console.log("viteEnv---", viteEnv)
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      vue(),
      qiankun('vue3', {
        useDevMode: true
      })
    ],
    define: {
      // process: JSON.stringify(process || {})
    },
    server: {
      port: 9005,
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
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    // output: {
    //   // 把子应用打包成 umd 库格式
    //   library: `app2-[name]`,
    //   libraryTarget: 'umd',
    //   jsonpFunction: `webpackJsonp_app2`
    // },
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
