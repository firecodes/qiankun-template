<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import 'reset-css'
import '~/assets/scss/common.scss'

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
  title: 'nuxt3-h5',
  // titleTemplate: title => title !== 'nuxt3-h5' ? `${title} · nuxt3-h5` : title,
  meta: [
    { name: 'description', content: 'nuxt3-h5 ✨ description' },
  ],
  script: [
    { src: '/iconfont/iconfont.js' },
  ],
})
</script>

<style>
html,
body,
#__nuxt {
  height: 100dvh;
  margin: 0;
  padding: 0;
  background: #111;
  color: white;
  color-scheme: dark;
}
</style>
