import { useTabStore, useAuthStore } from "@/store";
import { getRouteMenuMap, rc, rcByPath } from "../basic-routes";
const EXCLUDE_TAB = ["/404", "/403", "/login"];
const WHITE_LIST = ["/404"];

export function setupRouterGuards(router) {
  router.beforeEach(async (to) => {
    $loadingBar.start();
    const authStore = useAuthStore();
    const token = authStore.accessToken;
    console.log("setupRouterGuards authStore", token, authStore)
    /* 没有token */
    if (!token) {
      if (WHITE_LIST.includes(to.path)) return true;
      // return { path: "login", query: { ...to.query, redirect: to.path } };
    }

    // 有token的情况
    // if (to.path === "/login") return { path: "/" };
    if (WHITE_LIST.includes(to.path)) return true;

    console.log("setupRouterGuards authStore2", token, authStore)
    // const routes = router.getRoutes();
    // if (routes.find((route) => route.name === to.name)) return true;
  });

  router.afterEach((to) => {
    setTimeout(() => {
      $loadingBar.finish();
    }, 200);

    // const baseTitle = import.meta.env.VITE_TITLE;
    // const pageTitle = to.meta?.title;
    // if (pageTitle) {
    //   document.title = `${pageTitle} | ${baseTitle}`;
    // } else {
    //   document.title = baseTitle;
    // }

    // if (EXCLUDE_TAB.includes(to.path)) return;
    const tabStore = useTabStore();
    const { fullPath: path } = to;
    if (rc(to.path)) {
      const name = rc(to.path).code;
      const title = rc(to.path).name;
      const icon = rc(to.path).icon;
      const keepAlive = rc(to.path).keepAlive;
      const tabItem = { name, path, title, icon, keepAlive }
      console.log("tabStore.addTab:", tabItem)
      tabStore.addTab(tabItem);
    }
  });

  router.onError(() => {
    $loadingBar.error();
  });
}
