<template>
  <aside class="hidden xl:order-first xl:block xl:flex-shrink-0">
    <div class="relative flex h-full w-96 flex-col border-r">
      <div class="flex-shrink-0">
        <div class="flex h-16 flex-col justify-center px-6">
          <div class="flex items-baseline space-x-3">
            <h2 class="text-lg font-medium">Inbox</h2>
            <p class="text-sm font-medium">{{ messages.data.length }} messages</p>
          </div>
        </div>
        <div
          class="border-b border-t  px-6 py-2 text-sm font-medium"
        >
          Sorted by date
        </div>
      </div>
      <nav aria-label="Message list" class="min-h-0 flex-1 overflow-y-auto">
        <ul role="list" class="divide-y">
          <li
            v-for="message in messages.data"
            class="relative px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-100 hover:bg-gray-50 dark:focus-within:ring-gray-900 dark:hover:bg-gray-800"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <div @click="emit('onMessageDetails', message.from)" class="block focus:outline-none">
                  <span class="absolute inset-0"></span>
                  <p class="truncate text-sm font-medium">{{ message.from }} ({{ message.replies_count }})</p>
                  <p class="truncate text-sm">
                   {{ message.message }} 
                  </p>
                </div>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm"
                >{{ message.received_at }}</time
              >
            </div>
            <!-- <div class="mt-1">
              <p class="line-clamp-2 text-sm">
                Doloremque dolorem maiores assumenda dolorem facilis.
              </p>
            </div> -->
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script lang="ts" setup>
  const emit = defineEmits(["onMessageDetails"]);
  defineProps<{
    messages?: any;
  }>()
</script>