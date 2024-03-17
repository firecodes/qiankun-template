import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MicroApp from './micro';
import "@/styles/index.scss";
import "uno.css";
import { setupGlobalMethods } from '@/plugins'
// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
setupGlobalMethods(app)
// app.use(ElementPlus);
app.use(router)
app.mount('#pageMain')

// 启动微应用
MicroApp()
