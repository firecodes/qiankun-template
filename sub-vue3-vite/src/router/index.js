import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

let basePath = `sub-vue3-vite`
const routes = [{
  path: '/',
  name: '',
  redirect: `${basePath}`,
}, {
  path: `/${basePath}`,
  name: `${basePath}`,
  component: () => import('../components/layout.vue'),
  redirect: `/${basePath}/Home`,
  children: [{
    path: `/${basePath}/home`,
    name: 'home',
    meta: {},
    component: () => import('../views/HomeView.vue')
  }, {
    path: `/${basePath}/content`,
    name: 'content',
    meta: {},
    component: () => import('../views/AboutView.vue')
  }, {
    path: `/${basePath}/helloWorld`,
    name: 'helloWorld',
    meta: {},
    component: () => import('../components/HelloWorld.vue')
  }]
}]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

