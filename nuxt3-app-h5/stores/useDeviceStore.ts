import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { useToast } from "@/components/ui/toast/use-toast";
import type { Device } from "~/models/schema";
import type { DeviceQrCode } from "~/models/schema";


const { toast } = useToast();

export const useDeviceStore = defineStore("device-store", {
  state: () => ({
    isLoading: false,
    onUploadProgress: false,
    items: [] as Device[],
    item: {} as Device,
    itemQr: {} as DeviceQrCode,
  }),
  actions: {
    async getItems() {
      const { data } = await useApiFetch("/api/devices");
      this.items = data.value as Device[];
    },
    async onStore(form: any) {
      this.isLoading = true;
      const { data, error } = await useApiFetch("/api/devices", {
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
      } else {
        toast({
          description: error.value?.data.message,
          variant: "destructive",
        });
        this.isLoading = false;
      }
    },
    async getItem(id: number) {
      const { data } = await useApiFetch(`/api/devices/${id}`);
      this.item = data.value as Device;
    },
    async getQrcode(id: number) {
      const { data } = await useApiFetch(`/api/devices/${id}/qrcode`);
      this.itemQr = data.value as DeviceQrCode;
    },
    async onUpdate(id: number, form: any) {
      const { error, data } = await useApiFetch(`/api/devices/${id}`, {
        method: "PUT",
        body: form,
        pick: ['message']
      });
      if (data.value) {
        this.isLoading = false;
        await this.getItems();
        toast({
          description: data.value?.message,
        });
      } else {
        toast({
          description: error.value?.data.message,
          variant: "destructive",
        });
      }
    },
    async onDelete(id: number) {
      const { error, data } = await useApiFetch(`/api/devices/${id}`, {
        method: "DELETE",
        pick: ['message']
      });
      if (!error.value) {
        await this.getItems();
        this.isLoading = false;
      } else {
        toast({
          description: data.value?.message
        });
      }
    },
  },
});
