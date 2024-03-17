// const env = import.meta.env
import * as utils from '@/utils'
console.log(`main one __process__:`, utils.env)

// const apps = [
// 	{
// 		name: `vue3-demo`,
// 		entry: utils.env.isDev ? `//localhost:3001/` : `/subapp/vue3/`,
// 		activeRule: `/vue3-demo`,
// 		container: `#subapp-viewport`, // 子应用挂载的div
// 		props: {
// 			routerBase: `/vue3-demo` // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
// 		}
// 	},
// 	{
// 		name: `vue2-demo`,
// 		entry: utils.env.isDev ? `//localhost:3002/` : `/subapp/vue2/`,
// 		activeRule: `/vue2-demo`,
// 		container: `#subapp-viewport`, // 子应用挂载的div
// 		props: {
// 			routerBase: `/vue2-demo` // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
// 		}
// 	},
// 	{
// 		name: `react-demo`,
// 		entry: utils.env.isDev ? `//localhost:3003/` : `/react-demo/`,
// 		activeRule: `/react-demo`,
// 		container: `#subapp-viewport`, // 子应用挂载的div
// 		props: {
// 			routerBase: `/react-demo` // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
// 		}
// 	}
// ];
const apps: any[] = [
	// {
	//   name: `app1`, 
	//   entry: utils.env.isDev ? `http://localhost:9001/` : `/apps/app1/`,
	//   container: `#container`, 
	//   activeRule: `${utils.env.getPublickPath()}#/app1/`
	// },
	// {
	//   name: `app2`,
	//   entry:  utils.env.isDev ? `http://localhost:9002/` : `/apps/app2/`,
	//   container: `#container`,
	//   activeRule: `${utils.env.getPublickPath()}#/app2/`
	// },
	{
		name: `sub-html`,
		entry: utils.env.isDev ? `http://localhost:9003/` : `/apps/sub-html/`,
		container: `#container`,
		activeRule: `${utils.env.getPublickPath()}#/sub-html`
	},
	// {
	//   name: `sub-react`,
	//   entry: utils.env.isDev ? `http://localhost:9004/`: `/apps/sub-react/`,
	//   container: `#container`,
	//   activeRule: `${utils.env.getPublickPath()}#/sub-react/`
	// },
	// {
	// 	name: `sub-vue3-vite`,
	// 	entry: utils.env.isDev ? `http://localhost:9005/` : `/apps/sub-vue3-vite/`,
	// 	container: `#container`,
	// 	activeRule: `${utils.env.getPublickPath()}#/sub-vue3-vite`
	// },
	// {
	// 	name: `demo-react`,
	// 	entry: utils.env.isDev ? `http://localhost:9006/` : `/apps/demo-react/`,
	// 	container: `#container`,
	// 	activeRule: `${utils.env.getPublickPath()}#/demo-react/`
	// },
	// {
	// 	name: `demo-vue2`,
	// 	entry: utils.env.isDev ? `http://localhost:9007/` : `/apps/demo-vue2/`,
	// 	container: `#container`,
	// 	activeRule: `${utils.env.getPublickPath()}#/demo-vue2/`
	// },
	// {
	// 	name: `demo-vue3`,
	// 	entry: utils.env.isDev ? `http://localhost:9008/` : `/apps/demo-vue3/`,
	// 	container: `#container`,
	// 	activeRule: `${utils.env.getPublickPath()}#/demo-vue3/`
	// },
	{
		name: `sub-vue2`,
		entry: utils.env.isDev ? `http://localhost:9009/` : `/apps/sub-vue2/`,
		container: `#container`,
		activeRule: `${utils.env.getPublickPath()}#/sub-vue2`
	},
	// {
	// 	name: `sub-vue3`,
	// 	entry: utils.env.isDev ? `http://localhost:9010/` : `/apps/sub-vue3/`,
	// 	container: `#container`,
	// 	activeRule: `${utils.env.getPublickPath()}#/sub-vue3/`
	// },
];
export default apps;
