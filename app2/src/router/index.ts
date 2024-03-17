
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import { RouteRecordRaw } from "vue-router";

import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
console.log(qiankunWindow.__POWERED_BY_QIANKUN__, "app2---");

const basePath = "app2";
const routes = [
  {
    path: "/",
    name: "",
    redirect: `${basePath}`,
  },
  {
    path: `/${basePath}`,
    name: `${basePath}`,
    component: () => import('@/components/layout.vue'),
    redirect: `/${basePath}/index`,
    children: [
      {
        path: `/${basePath}/index`,
        name: "index",
        meta: {},
        component: () => import("@/components/TheWelcome.vue"),
      },
      {
        path: `/${basePath}/welcomeItem`,
        name: "welcomeItem",
        meta: {},
        component: () => import("@/components/WelcomeItem.vue"),
      }, {
        path: `/${basePath}/helloWorld`,
        name: "helloWorld",
        meta: {},
        component: () => import("@/components/HelloWorld.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const router = createRouter({
//   history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/apps/app2" : "/"),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: () => import('../App.vue')//这个是我自己的路径
//     },
//     {
//       path: '/:catchAll(.*)',
//       name: "404",
//       component: () => import('../App.vue')//这个是我自己的路径
//     },
//   ]
// })
router.beforeEach((to, from, next) => {
  console.log(to, "----");
  next()
})
export default router