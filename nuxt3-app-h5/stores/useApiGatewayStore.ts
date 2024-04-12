import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { useToast } from "@/components/ui/toast/use-toast";
import type { ApiGateway } from "@/models/schema";

const { toast } = useToast();

export const useApiGatewayStore = defineStore("api-gateway", {
  state: () => ({
    isLoading: false,
    items: [] as ApiGateway[],
    item: {} as ApiGateway,
  }),
  actions: {
    async getItems() {
      const { data } = await useApiFetch("/api/api-gateway/gateways");
      this.items = data.value as ApiGateway[];
    },
    async getItem(id: number) {
      const { data } = await useApiFetch(`/api/api-gateway/gateways/${id}`);
       this.item = data.value as ApiGateway;
    },
    async onStore(form: ApiGateway) {
      this.isLoading = true;
      const { data, error } = await useApiFetch("/api/api-gateway/gateways", {
        method: "POST",
        body: form,
        pick: ['message']
      });
      if (!error.value) {
        await this.getItems();
        this.isLoading = false;
        toast({
          description: data.value?.message,
        });
        return true;
      } else {
        toast({
          description: error.value?.data.message,
          variant: "destructive",
        });
        await this.getItems();
        this.isLoading = false;
        return false;
      }
    },
    async onUpdate(id: number, form: any) {
      this.isLoading = true;
      const { error, data } = await useApiFetch(`/api/api-gateway/gateways/${id}`, {
        method: "PUT",
        body: form,
        pick: ['message']
      });
      if (data.value) {
        await this.getItems();
        this.isLoading = false;
        toast({
          description: data.value?.message,
        });
        return true;
      } else {
        toast({
          description: error.value?.data.message,
          variant: "destructive",
        });
        return false;
      }
    },
    async onDelete(id: number) {
      this.isLoading = true;
      const { data } = await useApiFetch(`/api/api-gateway/gateways/${id}`, {
        method: "DELETE",
        pick: ['message']
      });
      if (data.value) {
        await this.getItems();
        this.isLoading = false;
        toast({
          description: data.value?.message,
        });
      }
    },
  },
});
