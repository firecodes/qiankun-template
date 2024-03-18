import { RouteRecordRaw } from "vue-router";
const basePath = "demo-vue3";

const routes: Array<RouteRecordRaw> = [
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
      {
        path: `/${basePath}/Map`,
        name: "Map",
        meta: {},
        component: () => import("../views/Map.vue"),
      },
    ],
  },
];

export default routes;
