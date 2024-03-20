import { createRouter, createWebHashHistory } from "vue-router";
import { setupRouterGuards } from "./guards";
import { useAuthStore, usePermissionStore, useUserStore } from "@/store";
import { getPermissions, getUserInfo } from "@/store/helper";
import { setRouteMenuMap, getRouteMenuMap, basicRoutes } from "./basic-routes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export async function setupRouter(app) {
  try {
    await initUserAndPermissions();
  } catch (error) {
    console.error("🚀 初始化失败", error);
  }
  setupRouterGuards(router);
  app.use(router);
}

export async function initUserAndPermissions() {
  const permissionStore = usePermissionStore();
  const userStore = useUserStore();
  const authStore = useAuthStore();

  if (!authStore.accessToken) {
    // const route = unref(router.currentRoute);
    // if (route.path !== "/login") {
    //   router.replace({ path: "/login", query: route.query });
    // }
    authStore.toLogin();
    return;
  }
  const [user, permissions] = await Promise.all([getUserInfo(), getPermissions()]);
  userStore.setUser(user);
  setRouteMenuMap(permissions)
  permissionStore.setPermissions(permissions);
  console.log("getRouteMenuMap:", getRouteMenuMap())
  // const routeComponents = import.meta.glob("@/views/**/*.vue");
  // permissionStore.accessRoutes.forEach((route) => {
  //   route.component = routeComponents[route.component] || undefined;
  //   !router.hasRoute(route.name) && router.addRoute(route);
  // });
}
