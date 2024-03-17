<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { toggleDark } from "@/composables";
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
      <el-menu-item index="3-1">
        <RouterLink to="/apps/app1/">app1</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-2">
        <RouterLink to="/apps/app2/">app2</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-3">
        <RouterLink to="/apps/sub-html/">sub-html</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-4">
        <RouterLink to="/apps/sub-react/">sub-react</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-5">
        <RouterLink to="/apps/sub-vue3-vite/">sub-vue3-vite</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-6">
        <RouterLink to="/apps/demo-react/">emo-react</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-7">
        <RouterLink to="/apps/demo-vue2/">demo-vue2</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-8">
        <RouterLink to="/apps/demo-vue3/">demo-vue3</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-5">
        <RouterLink to="/apps/sub-vue2/">sub-vue2</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-5">
        <RouterLink to="/apps/sub-vue3/">sub-vue3</RouterLink>
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