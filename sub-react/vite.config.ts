import { defineConfig, loadEnv } from 'vite'
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
import path from 'path'

const useDevMode = true;
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const viteEnv = loadEnv(mode, process.cwd())
  const { VUE_APP_PORT, VITE_PUBLIC_PATH, VITE_PROXY_TARGET } = viteEnv
  console.log("viteEnv---", viteEnv)
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      react(),
      qiankun("reactApp", {
        useDevMode,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    server: {
      port: 9004,
      host: "localhost",
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
