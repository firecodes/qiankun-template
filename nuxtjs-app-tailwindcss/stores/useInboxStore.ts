import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { useToast } from "@/components/ui/toast/use-toast";
import type { Inbox } from "~/models/schema";
const { toast } = useToast();

export const useInboxStore = defineStore("inbox", {
  state: () => ({
    isLoading: false,
    items: [] as Inbox[],
    item: {} as Inbox,
  }),
  actions: {
    async getItems() {
      const { data } = await useApiFetch("/api/messaging/inbox");
      this.items = data.value as Inbox[];
    },
    async getItem(contact: string) {
      const { data } = await useApiFetch(
        `/api/messaging/inbox/contact/${contact}`
      );
      this.item = data.value as Inbox;
    },
    async onReply(form: any) {
      this.isLoading = true;
      const { data, error } = await useApiFetch(
        "/api/messaging/conversations",
        {
          method: "POST",
          body: form,
          pick: ["message"],
        }
      );
      if (!error.value) {
        const thread_id = form?.thread_id;
        await this.getItem(thread_id);
        toast({
          description: data.value?.message,
        });
        this.isLoading = false;
      } else {
        toast({
          description: error.value?.data.message,
          variant: "destructive",
        });
        await this.getItems();
        this.isLoading = false;
      }
    },
  },
});
