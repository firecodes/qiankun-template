import "@/styles/reset.css";
import "@/styles/global.scss";
import "uno.css";

import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "./store";
import { setupNaiveDiscreteApi } from "@/plugins";
import { setupDirectives } from "./directives";
import MicroApp from './micro';

async function bootstrap() {
  const app = createApp(App);
  setupStore(app);
  setupNaiveDiscreteApi();
  setupDirectives(app);
  await setupRouter(app);
  app.mount("#pageMain");
  // 启动微应用
  MicroApp()
}

bootstrap();
