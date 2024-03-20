export const basicRoutes = [{
  path: '/',
  name: '',
  redirect: "/home",
},
{
  path: "/home",
  name: "Home",
  component: () => import("@/views/home/index.vue"),
  meta: {},
},
{
  path: "/403",
  name: "403",
  component: () => import("@/views/error-page/403.vue"),
  meta: {},
},
{
  path: "/*",
  name: "404",
  component: () => import("@/views/error-page/404.vue"),
  meta: {
    layout: "empty",
  },
},];



export const basePermissions = [
  {
    "name": "Qiankun APP",
    "code": "Base",
    "type": "MENU",
    "parentId": null,
    "path": "",
    "redirect": null,
    "icon": "i-fe:grid",
    "component": null,
    "layout": "",
    "keepAlive": null,
    "method": null,
    "description": null,
    "show": true,
    "enable": true,
    "order": 0,
    "children": [{
      "name": "app1",
      "code": "app1",
      "type": "MENU",
      "parentId": 9,
      "path": "/app1",
      "redirect": null,
      "icon": "i-me:awesome",
      "layout": null,
      "keepAlive": null,
      "method": null,
      "description": null,
      "show": true,
      "enable": true,
      "order": 1
    }, {
      "name": "app2",
      "code": "app2",
      "type": "MENU",
      "parentId": 9,
      "path": "/app2",
      "redirect": null,
      "icon": "i-me:awesome",
      "layout": null,
      "keepAlive": null,
      "method": null,
      "description": null,
      "show": true,
      "enable": true,
      "order": 1
    }, {
      "name": "sub-html",
      "code": "sub-html",
      "type": "MENU",
      "parentId": 9,
      "path": "/sub-html",
      "redirect": null,
      "icon": "i-me:awesome",
      "layout": null,
      "keepAlive": null,
      "method": null,
      "description": null,
      "show": true,
      "enable": true,
      "order": 1
    }, {
      "name": "sub-react",
      "code": "sub-react",
      "type": "MENU",
      "parentId": 9,
      "path": "/sub-react",
      "redirect": null,
      "icon": "i-me:awesome",
      "layout": null,
      "keepAlive": null,
      "method": null,
      "description": null,
      "show": true,
      "enable": true,
      "order": 1
    }, {
      "name": "sub-vue3-vite",
      "code": "sub-vue3-vite",
      "type": "MENU",
      "parentId": 9,
      "path": "/sub-vue3-vite",
      "redirect": null,
      "icon": "i-me:awesome",
      "layout": null,
      "keepAlive": null,
      "method": null,
      "description": null,
      "show": true,
      "enable": true,
      "order": 1
    }, {
      "name": "demo-vue2",
      "code": "demo-vue2",
      "type": "MENU",
      "parentId": 9,
      "path": "/demo-vue2",
      "redirect": null,
      "icon": "i-me:awesome",
      "layout": null,
      "keepAlive": null,
      "method": null,
      "description": null,
      "show": true,
      "enable": true,
      "order": 1
    }, {
      "name": "demo-vue3",
      "code": "demo-vue3",
      "type": "MENU",
      "parentId": 9,
      "path": "/demo-vue3",
      "redirect": null,
      "icon": "i-me:awesome",
      "layout": null,
      "keepAlive": null,
      "method": null,
      "description": null,
      "show": true,
      "enable": true,
      "order": 1
    }, {
      "name": "sub-vue2",
      "code": "sub-vue2",
      "type": "MENU",
      "parentId": 9,
      "path": "/sub-vue2",
      "redirect": null,
      "icon": "i-me:awesome",
      "layout": null,
      "keepAlive": null,
      "method": null,
      "description": null,
      "show": true,
      "enable": true,
      "order": 1
    }]
  },
  {
    "name": "主项目路由",
    "code": "Demo",
    "type": "MENU",
    "parentId": null,
    "path": null,
    "redirect": null,
    "icon": "i-fe:grid",
    "component": null,
    "layout": null,
    "keepAlive": null,
    "method": null,
    "description": null,
    "show": true,
    "enable": true,
    "order": 1,
    "children": [
      {
        "name": "home",
        "code": "home",
        "type": "MENU",
        "parentId": null,
        "path": "/home",
        "redirect": null,
        "icon": "i-fe:user",
        "component": "/src/views/home/index.vue",
        "layout": null,
        "keepAlive": null,
        "method": null,
        "description": null,
        "show": true,
        "enable": true,
        "order": 1
      }, {
        "name": "403",
        "code": "403",
        "type": "MENU",
        "parentId": 6,
        "path": "/403",
        "redirect": null,
        "icon": "i-fe:image",
        "component": "/src/views/error-page/403.vue",
        "layout": null,
        "keepAlive": null,
        "method": null,
        "description": null,
        "show": true,
        "enable": true,
        "order": 2
      },
    ]
  },
  {
    code: "ExternalLink",
    name: "外链(可内嵌打开)",
    type: "MENU",
    icon: "i-fe:external-link",
    order: 98,
    enable: true,
    show: true,
    children: [{
      code: "ShowDocs",
      name: "qiankun-template",
      type: "MENU",
      path: "https://firecodes.github.io/qiankun-template/",
      icon: "i-me:docs",
      order: 1,
      enable: true,
      show: true,
    }],
  },
];

export let routeMap = new Map()
export const setRouteMenuMap = (menuList = []) => {
  menuList.forEach(item => {
    if (item.path) {
      routeMap.set(item.path, item)
    }
    setRouteMenuMap(item.children)
  });
}
export const getRouteMenuMap = () => {
  return routeMap //Array.from(routeMap.values())
}
export const rc = (routeKey) => {
  return routeMap.get(routeKey)
}
export const rcByPath = (routePath) => {
  return Array.from(routeMap.values()).find((route) => route.path === routePath)
}