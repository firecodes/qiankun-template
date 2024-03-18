
import { defineStore } from 'pinia'
import { useRouterStore } from '@/store'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: undefined,
  }),
  actions: {
    setToken({ accessToken }) {
      this.accessToken = accessToken
    },
    resetToken() {
      this.$reset()
    },
    toLogin() {
      const { router, route } = useRouterStore()
      router.replace({ path: '/login', query: route.query, })
    },
    toHome() { // 登录成功 跳转到首页
      const { router, route } = useRouterStore()
      if (route.query.redirect) {
        const path = route.query.redirect
        delete route.query.redirect
        // 可以对路径做判断
        const routes = router.getRoutes()
        const item = routes.find((route) => route.name === path)
        if (item) {
          router.push({ path, query: route.query })
        } else {
          // location.href = path;
        }
      } else {
        // location.href = `../one/`
      }
    },
    async logout() {
      this.toLogin()
    },
  },
  persist: {
    key: 'vue-naivue-admin_auth',
  },
})
