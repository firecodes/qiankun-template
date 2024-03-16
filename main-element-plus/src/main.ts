import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MicroApp from './micro';
import "~/styles/index.scss";
import "uno.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
// app.use(ElementPlus);
app.use(router)

app.mount('#app')

// 启动微应用
MicroApp()
