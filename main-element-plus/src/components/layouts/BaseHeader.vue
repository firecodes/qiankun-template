<script lang="ts" setup>
import { ComponentInternalInstance, getCurrentInstance, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import { toggleDark } from "@/composables";
const { appContext: { config: { globalProperties: global } } }: any = getCurrentInstance();//3.0.11
import * as utils from '@/utils'

const goApp = (path: string) => {
  const fullPath = `${utils.env.getPublickPath()}#/${path}`
  history.pushState({}, fullPath, fullPath);
  // history.pushState(null, item.activeRule, item.activeRule)
}

const page = {
  bindCurrent() {
    const path = window.location.pathname
    // if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
    //   this.current = path
    // }
  },
  listenRouterChange() {
    const _wr = function (type) {
      // const orig = history[type]
      // return function () {
      //   const rv = orig.apply(this, arguments)
      //   const e = new Event(type)
      //   e.arguments = arguments
      //   window.dispatchEvent(e)
      //   return rv
      // }
    }
    // history.pushState = _wr('pushState')
    window.addEventListener('pushState', this.bindCurrent)
    window.addEventListener('popstate', this.bindCurrent)
    // this.$once('hook:beforeDestroy', () => {
    //   window.removeEventListener('pushState', this.bindCurrent)
    //   window.removeEventListener('popstate', this.bindCurrent)
    // })
  }
}


</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Element Plus</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Qiankun Main Router</template>
      <el-menu-item index="2-1">
        <RouterLink to="/home">Home</RouterLink>
      </el-menu-item>
      <el-menu-item index="2-2">
        <RouterLink to="/about">About</RouterLink>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>Qiankun Sub APP</template>
      <el-menu-item index="3-1" @click="goApp('app1')">
        <a href="javascript:void(0)">app1</a>
      </el-menu-item>
      <el-menu-item index="3-2" @click="goApp('app2')">
        <a href="javascript:void(0)" to="app2">app2</a>
      </el-menu-item>
      <el-menu-item index="3-3" @click="goApp('sub-html')">
        <a href="javascript:void(0)">sub-html</a>
      </el-menu-item>
      <el-menu-item index="3-4" @click="goApp('sub-react')">
        <a href="javascript:void(0)">sub-react</a>
      </el-menu-item>
      <el-menu-item index="3-5" @click="goApp('sub-vue3-vite')">
        <a href="javascript:void(0)">sub-vue3-vite</a>
      </el-menu-item>
      <el-menu-item index="3-6" @click="goApp('demo-react')">
        <a href="javascript:void(0)">demo-react</a>
      </el-menu-item>
      <el-menu-item index="3-7" @click="goApp('demo-vue2')">
        <a href="javascript:void(0)">demo-vue2</a>
      </el-menu-item>
      <el-menu-item index="3-8" @click="goApp('demo-vue3')">
        <a href="javascript:void(0)">demo-vue3</a>
      </el-menu-item>
      <el-menu-item index="3-5" @click="goApp('sub-vue2')">
        <a href="javascript:void(0)">sub-vue2</a>
      </el-menu-item>
      <el-menu-item index="3-5" @click="goApp('sub-vue3')">
        <a href="javascript:void(0)">sub-vue3</a>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4" disabled>Info</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
<style>
.ep-menu a {
  width: 100%;
}
</style>