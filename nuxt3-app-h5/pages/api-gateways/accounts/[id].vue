<template>
  <section class="main-content">
    <AppBreadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="px-4">
      <Tabs default-value="account" class="max-w-[700px]">
        <TabsList>
          <TabsTrigger value="account"> Account </TabsTrigger>
          <TabsTrigger value="numbers"> Numbers </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Account :item="account"/>
        </TabsContent>
        <TabsContent value="numbers">
          <Numbers :items="purchasNumbers"/>
        </TabsContent>
      </Tabs>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Account from "@/components/api-account/account-gateway.vue";
import Numbers from "@/components/api-account/numbers.vue";
import { useBreadcrumbs } from "@/composables/useBreadcrumbs";
const { breadcrumbs } = useBreadcrumbs();

const id:number = useRoute().params.id;

const modelStore = useApiAccountStore();
watchEffect(() => modelStore.getAccountGateway(id));
const account = computed(() => modelStore.accountGateway);
const purchasNumbers = computed(() => account?.value?.purchasNumbers);

definePageMeta({
  middleware: ["auth"],
  breadcrumb: "Accounts",
});

useHead({
  title: "Accounts",
});
</script>
