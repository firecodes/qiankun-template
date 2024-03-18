import { createRouter, createWebHashHistory } from 'vue-router'
import { setupRouterGuards } from './guards'
import { useAuthStore } from '@/store'
import { basicRoutes } from './basic-routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app) {
  try {
    await initUserAndPermissions()
  } catch (error) {
    console.error('🚀 初始化失败', error)
  }
  setupRouterGuards(router)
  app.use(router)
}

export async function initUserAndPermissions() {
  const authStore = useAuthStore()
  if (!authStore.accessToken) {
    const route = unref(router.currentRoute)
    if (route.path !== '/login') {
      router.replace({ path: '/login', query: route.query })
    }
    return
  }
  // 登录成功 跳转到首页
  // authStore.toHome() //location.href = `./one/`

  // const [user, permissions] = await Promise.all([getUserInfo(), getPermissions()])
  // userStore.setUser(user)
  // permissionStore.setPermissions(permissions)
  // const routeComponents = import.meta.glob('@/views/**/*.vue')
  // permissionStore.accessRoutes.forEach((route) => {
  //   route.component = routeComponents[route.component] || undefined
  //   !router.hasRoute(route.name) && router.addRoute(route)
  // })
}
