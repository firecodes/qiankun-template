<template>
  <div class="flex items-center">
    <VueQrcode class="border" :scale="12" :value="data" />
  </div>
  <div class="flex justify-end gap-2 mt-4">
    <Button type="button" variant="outline" @click="emit('onClose', false)">
      Close
    </Button>
  </div>
</template>
<script setup lang="ts">
import VueQrcode from "vue-qrcode";
defineProps<{
  data: any;
}>();
const emit = defineEmits(["onClose"]);
</script>
