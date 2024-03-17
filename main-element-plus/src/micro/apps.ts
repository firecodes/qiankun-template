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
	//   name: "app1", 
	//   entry: isDev ? "http://localhost:9001/" : "/apps/app1/",
	//   container: "#container", 
	//   activeRule: "/apps/one/#/app1/"
	// },
	// {
	//   name: "app2",
	//   entry:  isDev ? "http://localhost:9002/" : "/apps/app2/",
	//   container: "#container",
	//   activeRule: "/apps/one/#/app2/"
	// },
	{
		name: "sub-html",
		entry: isDev ? "http://localhost:9003/" : "/apps/sub-html/",
		container: "#container",
		activeRule: "/apps/one/#/sub-html"
	},
	// {
	//   name: "sub-react",
	//   entry: isDev ? "http://localhost:9004/": "/apps/sub-react/",
	//   container: "#container",
	//   activeRule: "/apps/one/#/sub-react/"
	// },
	// {
	// 	name: "sub-vue3-vite",
	// 	entry: isDev ? "http://localhost:9005/" : "/apps/sub-vue3-vite/",
	// 	container: "#container",
	// 	activeRule: "/apps/one/#/sub-vue3-vite"
	// },
	// {
	// 	name: "demo-react",
	// 	entry: isDev ? "http://localhost:9006/" : "/apps/demo-react/",
	// 	container: "#container",
	// 	activeRule: "/apps/one/#/demo-react/"
	// },
	// {
	// 	name: "demo-vue2",
	// 	entry: isDev ? "http://localhost:9007/" : "/apps/demo-vue2/",
	// 	container: "#container",
	// 	activeRule: "/apps/one/#/demo-vue2/"
	// },
	// {
	// 	name: "demo-vue3",
	// 	entry: isDev ? "http://localhost:9008/" : "/apps/demo-vue3/",
	// 	container: "#container",
	// 	activeRule: "/apps/one/#/demo-vue3/"
	// },
	{
		name: "sub-vue2",
		entry: isDev ? "http://localhost:9009/" : "/apps/sub-vue2/",
		container: "#container",
		activeRule: "/apps/one/#/sub-vue2"
	},
	// {
	// 	name: "sub-vue3",
	// 	entry: isDev ? "http://localhost:9010/" : "/apps/sub-vue3/",
	// 	container: "#container",
	// 	activeRule: "/apps/one/#/sub-vue3/"
	// },
];
export default apps;
