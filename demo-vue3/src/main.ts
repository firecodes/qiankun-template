import "./public-path";
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const app = createApp(App);

console.log("container---init", window);

let instance: any = null;

function render(props: any) {
  const { container } = props;
  const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(
    //   (window as any).__POWERED_BY_QIANKUN__ ? "/vue3-demo/" : "/subapp/vue3/"
    // ),
    routes,
  });

  instance = createApp(App)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log("bootstrap");
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props: any) {
  console.log("mount", props);
  props.onGlobalStateChange((state: any, prev: any) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("props.onGlobalStateChange:", state, prev);
  });
  props.setGlobalState({ project: "demo-vue3" });
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  console.log("unmount", instance);
}
