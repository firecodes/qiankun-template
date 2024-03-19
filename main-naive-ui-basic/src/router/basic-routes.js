export const basicRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      title: "页面飞走了",
      layout: "empty",
    },
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      title: "没有权限",
      layout: "empty",
    },
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   component: () => import("@/views/profile/index.vue"),
  //   meta: {
  //     title: "个人资料",
  //   },
  // },
];
