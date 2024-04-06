<template>
  <section class="main-cotent w-full">
    <!-- <MessageToolbar /> -->
    <MessageDetails :message="item" @onSubmitReply="onSubmitReply" />
  </section>
  <Messages :messages="items" @onMessageDetails="onMessageDetails" />
</template>

<script lang="ts" setup>
import Messages from "~/components/inbox/messages.vue";
// import MessageToolbar from "~/components/inbox/toolbar.vue";
import MessageDetails from "~/components/inbox/message-details.vue";
import { useInboxStore } from "@/stores/useInboxStore";

const modelStore = useInboxStore();
watchEffect(() => modelStore.getItems());

const items = computed(() => modelStore.items);
const item = computed(() => modelStore.item);

const onMessageDetails = async (contact: string) => {
  await modelStore.getItem(contact);
};
const onSubmitReply = async (form: any) => {
  await modelStore.onReply(form);
};

definePageMeta({
  middleware: ["auth"],
});

useHead({
  title: "Inbox",
});

</script>
