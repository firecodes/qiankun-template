import NProgress from "nprogress";
import { setDefaultMountApp, runAfterFirstMounted, removeGlobalUncaughtErrorHandler, addGlobalUncaughtErrorHandler, registerMicroApps, start } from "qiankun";
import { initGlobalState, MicroAppStateActions } from 'qiankun';

import apps from "./apps";

// 初始化 state
const state = {
  apps,
  mode: 'cors',
  credentials: 'include',
  name: 'state',
}
const actions: MicroAppStateActions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("onGlobalStateChange", state, prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();

console.log("registerApps:", apps, state)
/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
function registerApps() {
  try {
    registerMicroApps(apps, {
      // qiankun 生命周期钩子 - 微应用加载前
      beforeLoad: (app: any) => {
        // 加载微应用前，加载进度条
        NProgress.start();
        console.log("before load", app.name);
        return Promise.resolve();
      },
      // qiankun 生命周期钩子 - 微应用加载前
      beforeMount: (app: any) => {
        // 加载微应用前，加载进度条
        console.log('before mount', app)
        return Promise.resolve();
      },
      // qiankun 生命周期钩子 - 微应用挂载后
      afterMount: (app: any) => {
        // 加载微应用前，进度条加载完成
        NProgress.done();
        console.log("after mount", app.name);
        return Promise.resolve();
      }
    });
    start({
      singular: false,
      prefetch: false,
      sandbox: { experimentalStyleIsolation: true },
      getTemplate(tpl) {
        return tpl.replace('<script src="/to-be-replaced.js"><script>', '');
      },
      // excludeAssetFilter(assetUrl: string) {
      //   console.log("excludeAssetFilter mount", assetUrl);
      //   return false
      // },
      async fetch(url: any, ...args) {
        if (url === 'http://to-be-replaced.js') {
          return {
            async text() { return ''; },
          };
        }
        // 给指定的微应用 entry 开启跨域请求
        if (url === 'http://app.alipay.com/entry.html') {
          return window.fetch(url, {
            ...args,
            mode: 'cors',
            credentials: 'include',
          });
        }
        // if (url.include('/demo-vue3')) {
        //   return window.fetch(url, {
        //     ...args,
        //     mode: 'cors',
        //     credentials: 'include',
        //   });
        // }
        // http://localhost:9008/#/demo-vue3/Map
        // if (url.include('//api.map.baidu.com')) {
        //   return window.fetch(url, {
        //     ...args,
        //     mode: 'cors',
        //     credentials: 'include',
        //   });
        // }
        return window.fetch(url, ...args);
      }
    });
    // setDefaultMountApp('/app1');
    // 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本
    // runAfterFirstMounted(() => startMonitor());
    // start({ prefetch: true, sandbox: {strictStyleIsolation: true} });
    // 
    // start({
    //   prefetch: 'all', // 预加载
    //   sandbox: {
    //     //experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
    //   },
    // });
  } catch (err) {
    console.log(err)
  }
}

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error("addGlobalUncaughtErrorHandler===", event);
});
removeGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error("removeGlobalUncaughtErrorHandler===", event);
});
export default registerApps