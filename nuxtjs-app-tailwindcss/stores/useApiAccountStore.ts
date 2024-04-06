import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { useToast } from "@/components/ui/toast/use-toast";
import type { ApiAccount } from "@/models/schema";
import type { AccountGateway } from "@/models/schema";

const { toast } = useToast();

export const useApiAccountStore = defineStore("api-account-store", {
  state: () => ({
    isLoading: false,
    items: [] as ApiAccount[],
    item: {} as ApiAccount,
    accountGateway: {} as AccountGateway,
    availablePhoneNumbers: [] as any[],
  }),
  actions: {
    async getItems() {
      const { data } = await useApiFetch("/api/api-gateway/accounts");
      this.items = data.value as ApiAccount[];
    },
    async getItem(id: number) {
      const { data } = await useApiFetch(`/api/api-gateway/accounts/${id}`);
      const item = data.value as ApiAccount;
      return item;
    },
    async getAccountGateway(id: number) {
      const { data } = await useApiFetch(
        `/api/api-gateway/account/${id}/twilio`
      );
      this.accountGateway = data.value as AccountGateway;
    },
    async onSearchBuyNumbers(id: number, form: any) {
      this.isLoading = true;
      const { data, error } = await useApiFetch(
        `/api/api-gateway/account/${id}/twilio-search-buy-numbers`,
        {
          method: "POST",
          body: form,
        }
      );

      if (data.value) {
        this.isLoading = false;
        this.availablePhoneNumbers = data.value as any[];
      } else {
        toast({
          description: error.value?.data.message,
          variant: "destructive",
        });
        this.availablePhoneNumbers = [];
        this.isLoading = false;
        return false;
      }
    },
    async onBuyNumber(id: number, form: any) {
      this.isLoading = true;
      const { data } = await useApiFetch(`/api/api-gateway/account/${id}/twilio-buy-number`, {
        method: "POST",
        body: form,
        pick: ["message"],
      });
      if (data.value) {
        console.log(form.country);
        await this.onSearchBuyNumbers({ country: form.country });
        this.isLoading = false;
        toast({
          description: data.value?.message,
        });
      }
    },
    async onDeleteBuyNumber(id: number, _id: string) {
      this.isLoading = true;
      const { data, error } = await useApiFetch(`/api/api-gateway/account/${id}/twilio-buy-number/${_id}`, {
        method: "DELETE",
        pick: ["message"],
      });

      if (data.value) {
        await this.getAccountGateway(id);
        this.isLoading = false;
        toast({
          description: data.value?.message,
        });
      } else {
        toast({
          description: error.value?.data.message,
          variant: "destructive",
        });
        return false;
      }
    },
    async onStore(form: ApiAccount) {
      this.isLoading = true;
      const { data, error } = await useApiFetch("/api/api-gateway/accounts", {
        method: "POST",
        body: form,
        pick: ["message"],
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
      const { error, data } = await useApiFetch(
        `/api/api-gateway/accounts/${id}`,
        {
          method: "PUT",
          body: form,
          pick: ["message"],
        }
      );
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
      const { data } = await useApiFetch(`/api/api-gateway/accounts/${id}`, {
        method: "DELETE",
        pick: ["message"],
      });
      if (data.value) {
        await this.getItems();
        this.isLoading = false;
        toast({
          description: data.value?.message,
        });
      }
    }
  },
});
