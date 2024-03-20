import { defineStore } from "pinia";
import { useUserStore, usePermissionStore, useTabStore, useRouterStore } from "@/store";
import * as utils from "@/utils";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: undefined,
  }),
  actions: {
    setToken({ accessToken }) {
      this.accessToken = accessToken;
    },
    resetToken() {
      this.$reset();
    },
    toLogin() {
      // const { router, route } = useRouterStore();
      // router.replace({ path: "/login", query: route.query });
      if (utils.env.isProd) {
        window.location.href = `../auth/#/login`;
      }
    },
    async switchCurrentRole(data) {
      this.resetLoginState();
      await nextTick();
      this.setToken(data);
    },
    resetLoginState() {
      const { resetUser } = useUserStore();
      const { resetRouter } = useRouterStore();
      const { resetPermission, accessRoutes } = usePermissionStore();
      const { resetTabs } = useTabStore();
      // 重置路由
      resetRouter(accessRoutes);
      // 重置用户
      resetUser();
      // 重置权限
      resetPermission();
      // 重置Tabs
      resetTabs();
      // 重置token
      this.resetToken();
    },
    async logout() {
      this.resetLoginState();
      this.toLogin();
    },
  },
  persist: {
    key: "vue-naivue-admin_auth",
  },
});
