import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  // 文章详情
  {
    path: '/content',
    name: 'content',
    component: () => import('../views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

