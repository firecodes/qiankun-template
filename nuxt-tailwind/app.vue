<script setup lang="ts">
import * as utils from '@/utils'
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

console.log('utils env', utils.evn.getEnv(), utils.evn.getEnvObject())
console.log('env', process.env)

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: '%s - Nuxt UI Pro - SaaS template',
  ogImage: 'https://saas-template.nuxt.dev/social-card.png',
  twitterImage: 'https://saas-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>
<!-- <script>
// Use a static import for server-side compatibility
import '~/assets/css/main.css'
// Caution: Dynamic imports are not server-side compatible
import('~/assets/css/main.css')
</script>

<style>
@import url("~/assets/css/main.css");
</style> -->
<!-- <template>
  <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template> -->
