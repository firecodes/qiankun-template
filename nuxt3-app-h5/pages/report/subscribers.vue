<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import MainContent from "~/components/report/main-content.vue";
  import LineChart from "~/components/report/subscriber/line-chart.vue";
  import StatusCard from "~/components/report/subscriber/status-card.vue";

  const unsubscriberStore = useUnsubscriberStore();

  await watchEffect(() => unsubscriberStore.getItems());

  const { items } = storeToRefs(unsubscriberStore);

  definePageMeta({
    middleware: ["auth"],
    breadcrumb: "Subscribers",
  });
  useHead({
    title: "Subscribers",
  });
</script>

<template>
  <section class="main-content">
    <MainContent>
      <div class="border">
        <StatusCard />
        <LineChart />
      </div>
    </MainContent>
  </section>
</template>
