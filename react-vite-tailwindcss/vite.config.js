import { defineConfig, loadEnv } from 'vite'
import react from "@vitejs/plugin-react";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const viteEnv = loadEnv(mode, process.cwd())
  const { VITE_PUBLIC_PATH, VITE_PROXY_TARGET } = viteEnv
  console.log("viteEnv---", viteEnv, isBuild)
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      react(),
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
      port: 5173,
      host: "localhost",
      // proxy: {
      //   '/api': {
      //     target: 'https://api.surmon.me',
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //     changeOrigin: true,
      //     headers: {
      //       origin: 'https://surmon.me',
      //       referer: 'https://surmon.me'
      //     }
      //   }
      // }
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
