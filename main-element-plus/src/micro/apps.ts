const isDev = process.env.NODE_ENV === "development";

// const apps = [
// 	{
// 		name: "vue3-demo",
// 		entry: isDev ? "//localhost:3001/" : "/subapp/vue3/",
// 		activeRule: "/vue3-demo",
// 		container: "#subapp-viewport", // 子应用挂载的div
// 		props: {
// 			routerBase: "/vue3-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
// 		}
// 	},
// 	{
// 		name: "vue2-demo",
// 		entry: isDev ? "//localhost:3002/" : "/subapp/vue2/",
// 		activeRule: "/vue2-demo",
// 		container: "#subapp-viewport", // 子应用挂载的div
// 		props: {
// 			routerBase: "/vue2-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
// 		}
// 	},
// 	{
// 		name: "react-demo",
// 		entry: isDev ? "//localhost:3003/" : "/react-demo/",
// 		activeRule: "/react-demo",
// 		container: "#subapp-viewport", // 子应用挂载的div
// 		props: {
// 			routerBase: "/react-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
// 		}
// 	}
// ];
const apps: any[] = [
	// {
	//   name: "app1", // 应用的名字
	//   entry: "http://localhost:9001/", // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
	//   container: "#container", // 要渲染到的节点id，对应上一步中src/App.vue中的渲染节点
	//   activeRule: "/apps/app1/"
	// },
	// {
	//   name: "app2",
	//   entry: "http://localhost:9002/",
	//   container: "#container",
	//   activeRule: "/apps/app2/"
	// },
	// {
	//   name: "sub-html",
	//   entry: "http://localhost:9003/",
	//   container: "#container",
	//   activeRule: "/apps/sub-html/"
	// },
	// {
	//   name: "sub-react",
	//   entry: "http://localhost:9004/",
	//   container: "#container",
	//   activeRule: "/apps/sub-react/"
	// },
	{
		name: "sub-vue",
		entry: "http://localhost:9005/",
		container: "#container",
		activeRule: "/apps/sub-vue/"
	},
	// {
	//   name: "demo-react",
	//   entry: "http://localhost:9006/",
	//   container: "#container",
	//   activeRule: "/apps/demo-react/"
	// },
	// {
	//   name: "demo-vue2",
	//   entry: "http://localhost:9007/",
	//   container: "#container",
	//   activeRule: "/apps/demo-vue2/"
	// },
	// {
	//   name: "demo-vue3",
	//   entry: "http://localhost:9008/",
	//   container: "#container",
	//   activeRule: "/apps/demo-vue3/"
	// },
	{
		name: "sub-vue2",
		entry: "http://localhost:9009/",
		container: "#container",
		activeRule: "/apps/sub-vue2/"
	},
	{
		name: "sub-vue3",
		entry: "http://localhost:9010/",
		container: "#container",
		activeRule: "/apps/sub-vue3/"
	},
];
export default apps;
