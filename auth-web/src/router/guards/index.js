
// import { useTabStore } from '@/store'
import { useAuthStore } from '@/store'
// import api from '@/api'

const WHITE_LIST = ['/login', '/404']
export const EXCLUDE_TAB = ['/404', '/403', '/login']
const baseTitle = import.meta.env.VITE_TITLE

export function setupRouterGuards(router) {

  router.beforeEach(async (to) => {
    $loadingBar.start()

    const authStore = useAuthStore()
    const token = authStore.accessToken
    console.log("setupRouterGuards authStore", token, authStore)
    /** 没有token */
    if (!token) {
      if (WHITE_LIST.includes(to.path)) return true
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }

    // 有token的情况
    if (to.path === '/login') return { path: '/' }
    if (WHITE_LIST.includes(to.path)) return true

    console.log("setupRouterGuards authStore2", token, authStore)
    const routes = router.getRoutes()
    if (routes.find((route) => route.name === to.name)) return true

    console.log("setupRouterGuards authStore3", to.name, token, authStore)
    authStore.toHome()  // 进入首页 
  })

  router.afterEach((to) => {
    setTimeout(() => {
      $loadingBar.finish()
    }, 200)

    const pageTitle = to.meta?.title
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`
    } else {
      document.title = baseTitle
    }

    // if (EXCLUDE_TAB.includes(to.path)) return
    // const tabStore = useTabStore()
    // const { name, fullPath: path } = to
    // const title = to.meta?.title
    // const icon = to.meta?.icon
    // const keepAlive = to.meta?.keepAlive
    // tabStore.addTab({ name, path, title, icon, keepAlive })
  })

  router.onError(() => {
    $loadingBar.error()
  })

}
