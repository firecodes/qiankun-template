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

router.afterEach((to, from, next) => {
  console.log(to, "-=---");
})
export default router;
