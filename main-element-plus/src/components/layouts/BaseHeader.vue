<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { toggleDark } from "~/composables";
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Element Plus</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Home Router</template>
      <el-menu-item index="2-1">
        <RouterLink to="/">Home</RouterLink>
      </el-menu-item>
      <el-menu-item index="2-2">
        <RouterLink to="/about">About</RouterLink>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <template #title>Sub Router</template>
      <el-menu-item index="3-1">
        <RouterLink to="/app1">app1</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-2">
        <RouterLink to="/app2">app2</RouterLink>
      </el-menu-item>
    </el-menu-item>
    <el-menu-item index="4" disabled>Info</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
