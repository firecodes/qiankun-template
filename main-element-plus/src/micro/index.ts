import NProgress from "nprogress";
import { addGlobalUncaughtErrorHandler, registerMicroApps, start } from "qiankun";
import apps from "./apps";

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
    start({ prefetch: true, sandbox: {} });
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
  console.error(event);
});

export default registerApps