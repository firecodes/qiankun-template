import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(), //  createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: '/home'
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});
// const childrenPath = ['/app1', '/app2'];
router.beforeEach((to, from, next) => {
  if (to.name) { // 有 name 属性，说明是主应用的路由
    return next();
  }
  // if (childrenPath.some((item) => to.path.includes(item))) {
  //   return next();
  // }
  // next({ name: 'home' });
  next()
});
router.afterEach((to, from, next) => {
  console.log("main page router.afterEach", to, from);
})
export default router;
