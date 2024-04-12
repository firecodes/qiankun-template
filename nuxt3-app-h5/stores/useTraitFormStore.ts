import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";
import { type Group } from "@/models/schema";
import { type ApiGateway } from "@/models/schema";
import { type Device } from "@/models/schema";
import { type Message } from "@/models/schema";
import { type Role } from "@/models/schema";
import { type Permission } from "@/models/schema";
import { type ApiNumber } from "@/models/schema";


export const useTraitFormStore = defineStore("trait-form", {
  state: () => ({
    toggleSidebarMobile: true,
    devices: [] as Device[],
    groups: [] as Group[],
    apiGateways: [] as ApiGateway[],
    sender_ids: {},
    settings: {
      default_gateway: 0,
    },
    messages: [] as Message[],
    lastTwoMessages: [] as Message[],
    roles: [] as Role[],
    permissions: [] as Permission[],
    accountNumers: [] as ApiNumber[],
    countryCodes: [] as any[]
  }),
  actions: {
    async getDevices() {
      const { data } = await useApiFetch("/api/devices");
      this.devices = data.value as Device[];
    },
    async getGroups() {
      const { data } = await useApiFetch("/api/subscribers/groups", {
        pick: ["data"],
      });
      this.groups = data.value?.data as Group[];
    },
    async getMessages() {
      const { data } = await useApiFetch("/api/messaging/messages", {
        pick: ["data"],
      });
      this.messages = data.value?.data as Message[];
      this.lastTwoMessages = this.messages?.slice(-2);
    },
    async getApiGateways() {
      const { data } = await useApiFetch("/api/api-gateway/gateways");
      this.apiGateways = data.value as ApiGateway[];
    },
    async getSettings() {
      const { data } = await useApiFetch("/api/settings/user", {
        pick: ["data"],
      });
      this.settings = data.value?.data.settings;
      if (data.value?.data.brand_name) {
        this.sender_ids = [
          {
            id: data.value?.data.brand_name,
            name: `Brand Name (${data.value?.data.brand_name})`,
          },
          {
            id: "RANDOM_SID",
            name: "RANDOM SID",
          },
        ];
      } else {
        this.sender_ids = [
          {
            id: "RANDOM_SID",
            name: "RANDOM SID",
          },
        ];
      }
    },
    async getRoles() {
      const { data } = await useApiFetch("/api/settings/roles");
      this.roles = data.value as Role[];
    },
    async getPermissions() {
      const { data } = await useApiFetch("/api/settings/permissions");
      this.permissions = data.value as Permission[];
    },
    async getAccountNumbers() {
      const { data } = await useApiFetch(
        "/api/api-gateway/account/numbers?slug=twilio"
      );
      this.accountNumers = data.value as ApiNumber[];
    },
    async getCountryCodes() {
      const { data } = await useApiFetch(
        "/api/system/settings/country-codes"
      );
      this.countryCodes = data.value as any[];
    },
  },
});
