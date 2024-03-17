
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import { RouteRecordRaw } from "vue-router";

import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
console.log(qiankunWindow.__POWERED_BY_QIANKUN__, "app1---");

const basePath = "app1";

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
        component: () => import("../views/Home.vue"),
      },
      {
        path: `/${basePath}/about`,
        name: "about",
        meta: {},
        component: () => import("../views/About.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router