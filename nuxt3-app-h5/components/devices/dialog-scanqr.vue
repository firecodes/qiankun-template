<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline" size="sm" class="ml-auto hidden h-8 lg:flex">
        <Icon name="heroicons:qr-code" class="h-4 w-4" />
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Download Sms Gateway App</DialogTitle>
      </DialogHeader>
      <div class="flex items-center">
        <VueQrcode class="border" :scale="12" :value="apiGatewayUrl" />
      </div>
    </DialogContent>
  </Dialog>
</template>

<script lang="ts" setup>
import VueQrcode from "vue-qrcode";
const config = useRuntimeConfig();
const apiGatewayUrl = config.public.apiGatewayUrl;
</script>
