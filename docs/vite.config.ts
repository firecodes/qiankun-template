import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
export default defineConfig({
  plugins: [vueJsx(), vueSetupExtend()],
  server: {
    host: '0.0.0.0',
    port: 6666,
    open: false,
    https: false,
  },
})
