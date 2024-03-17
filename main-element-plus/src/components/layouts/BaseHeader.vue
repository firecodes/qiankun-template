<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { toggleDark } from "@/composables";
import { ref } from "vue";

const c = ref(1);
const isActive = (num: number) => {
  if (c.value === num) {
    return "active";
  }
};

const goApp = (path: string) => {
  history.pushState({}, "", path);
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
      <el-menu-item index="3-1" @click="goApp('/apps/app1/')">
        <a href="javascript:void(0)">app1</a>
      </el-menu-item>
      <el-menu-item index="3-2" @click="goApp('/apps/app2/')">
        <a href="javascript:void(0)" to="/apps/app2/">app2</a>
      </el-menu-item>
      <el-menu-item index="3-3" @click="goApp('/apps/sub-html/')">
        <a href="javascript:void(0)" to="/apps/sub-html">sub-html</a>
      </el-menu-item>
      <el-menu-item index="3-4" @click="goApp('/apps/sub-react/')">
        <a href="javascript:void(0)" to="/apps/sub-react/">sub-react</a>
      </el-menu-item>
      <el-menu-item index="3-5" @click="goApp('/apps/sub-vue3-vite/')">
        <a href="javascript:void(0)" to="/apps/sub-vue3-vite">sub-vue3-vite</a>
      </el-menu-item>
      <el-menu-item index="3-6" @click="goApp('/apps/demo-react/')">
        <a href="javascript:void(0)" to="/apps/demo-react/">demo-react</a>
      </el-menu-item>
      <el-menu-item index="3-7" @click="goApp('/apps/demo-vue2/')">
        <a href="javascript:void(0)" to="/apps/demo-vue2/">demo-vue2</a>
      </el-menu-item>
      <el-menu-item index="3-8" @click="goApp('/apps/demo-vue3/')">
        <a href="javascript:void(0)" to="/apps/demo-vue3/">demo-vue3</a>
      </el-menu-item>
      <el-menu-item index="3-5" @click="goApp('/apps/vue2/')">
        <a href="javascript:void(0)" to="/apps/sub-vue2/">sub-vue2</a>
      </el-menu-item>
      <el-menu-item index="3-5" @click="goApp('/apps/sub-vue3/')">
        <a href="javascript:void(0)" to="/apps/sub-vue3/">sub-vue3</a>
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