// const env = import.meta.env
import * as utils from '@/utils'
console.log(`main one __process__:`, utils.env)
const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);

const apps[] = [
  {
    name: `app1`,
    entry: utils.env.isDev ? `http://localhost:9001/` : `${utils.env.getRootPath()}app1/`,
    container: `#container`,
    // activeRule: `${utils.env.getPublicPath()}#/app1`
    activeRule: getActiveRule(`#/app1`),
    props: {
      routerBase: `#/app1` // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    }
  },
  {
    name: `app2`,
    entry: utils.env.isDev ? `http://localhost:9002/` : `${utils.env.getRootPath()}app2/`,
    container: `#container`,
    activeRule: `${utils.env.getPublicPath()}#/app2`,
    // activeRule: getActiveRule(`#/app2`),
    props: {
      routerBase: `#/app2` // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    }
  },
  {
    name: `sub-html`,
    entry: utils.env.isDev ? `http://localhost:9003/` : `${utils.env.getRootPath()}sub-html/`,
    container: `#container`,
    // activeRule: `${utils.env.getPublicPath()}#/sub-html`,
    activeRule: getActiveRule(`#/sub-html`),
    props: {
      routerBase: `#/sub-html` // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    }
  },
  {
    name: `sub-react`,
    entry: utils.env.isDev ? `http://localhost:9004/` : `${utils.env.getRootPath()}sub-react/`,
    container: `#container`,
    activeRule: `${utils.env.getPublicPath()}#/sub-react`
  },
  {
    name: `sub-vue3-vite`,
    entry: utils.env.isDev ? `http://localhost:9005/` : `${utils.env.getRootPath()}sub-vue3-vite/`,
    container: `#container`,
    activeRule: `${utils.env.getPublicPath()}#/sub-vue3-vite`
    // activeRule: getActiveRule(`#/sub-vue3-vite`)
  },
  // {
  // 	name: `demo-react`,
  // 	entry: utils.env.isDev ? `http://localhost:9006/` : `${utils.env.getRootPath()}demo-react/`,
  // 	container: `#container`,
  // 	activeRule: `${utils.env.getPublicPath()}#/demo-react`
  // },
  {
    name: `demo-vue2`,
    entry: utils.env.isDev ? `http://localhost:9007/` : `${utils.env.getRootPath()}demo-vue2/`,
    container: `#container`,
    // activeRule: `${utils.env.getPublicPath()}#/demo-vue2`
    activeRule: getActiveRule(`#/demo-vue2`)
  },
  {
    name: `demo-vue3`,
    entry: utils.env.isDev ? `http://localhost:9008/` : `${utils.env.getRootPath()}demo-vue3/`,
    container: `#container`,
    // activeRule: `${utils.env.getPublicPath()}#/demo-vue3`
    activeRule: getActiveRule(`#/demo-vue3`)
  },
  {
    name: `sub-vue2`,
    entry: utils.env.isDev ? `http://localhost:9009/` : `${utils.env.getRootPath()}sub-vue2/`,
    container: `#container`,
    activeRule: `${utils.env.getPublicPath()}#/sub-vue2`
  },
  // {
  // 	name: `sub-vue3`,
  // 	entry: utils.env.isDev ? `http://localhost:9010/` : `${utils.env.getRootPath()}sub-vue3/`,
  // 	container: `#container`,
  // 	activeRule: `${utils.env.getPublicPath()}#/sub-vue3`
  // },
];
export default apps;
