import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  date: string
  image?: HTMLImageElement
  badge?: Badge
  authors?: ({
    name: string
    description?: string
    avatar?: Avatar
  } & Link)[]
}

declare module '#app' {
  interface NuxtApp {
    $hello(msg: string): string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $hello(msg: string): string
  }
}
