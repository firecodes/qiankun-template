import { registerMicroApps, start } from "qiankun";
const apps: any[] = [
  {
    name: "app1", // 应用的名字
    entry: "http://localhost:9001/", // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
    container: "#container", // 要渲染到的节点id，对应上一步中src/App.vue中的渲染节点
    activeRule: "/apps/app1"
  },
  {
    name: "app2",
    entry: "http://localhost:9002/",
    container: "#container",
    activeRule: "/apps/app2"
  },
  {
    name: "sub-html",
    entry: "http://localhost:9003/",
    container: "#container",
    activeRule: "/apps/sub-html"
  },
];

function registerApps() {
  try {
    registerMicroApps(apps, {
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        app => {
          console.log('after unmount', app)
        }
      ]
    }); // 注册应用
    start({
      prefetch: 'all', // 预加载
      sandbox: {
        //experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
      },
    }); // 开启应用
  } catch (err) {
    console.log(err)
  }
}
export default registerApps