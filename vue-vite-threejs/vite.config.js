import qiankun from 'vite-plugin-qiankun'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      }
    },
    // base: './',
    build: {
      outDir: path.resolve(__dirname, "dist"),
      assetsDir: "static",
      emptyOutDir: false,
      target: "esnext", // default，最低为es2015
      cssCodeSplit: true, // default
      sourcemap: false, // default
      // sourcemap: true,
      commonjsOptions: {
        strictRequires: true, // 兼容commonjs
      }
    }
  }
})
