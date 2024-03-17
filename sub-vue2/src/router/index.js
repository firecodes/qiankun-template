import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const basePath = 'sub-vue2'

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
    component: () => import('../views/Home.vue')
  }, {
    path: `/${basePath}/about`,
    name: 'about',
    meta: {},
    component: () => import('../views/About.vue')
  }]
}]

export default routes
