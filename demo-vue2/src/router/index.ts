import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const basePath = "demo-vue2";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "",
    redirect: `${basePath}`,
  },
  {
    path: `/${basePath}`,
    name: `${basePath}`,
    component: () => import("../components/layout.vue"),
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

export default routes;
