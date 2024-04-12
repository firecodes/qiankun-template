<template>
  <form class="space-y-4" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="name" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="service">
      <FormItem>
        <FormLabel>Providers</FormLabel>
        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select an provider" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="(provider, index) in sms_gateways"
                :key="index"
                :value="provider.id"
              >
                {{ provider.name }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Account SID</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Account SID" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Auth Token</FormLabel>
        <FormControl>
          <Input type="text" placeholder="token" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <div class="flex justify-end gap-2">
      <Button type="submit"> Save Changes </Button>
      <Button type="button" variant="outline" @click="emit('onClose', false)">
        Close
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">

import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";

import { sms_gateways  } from "@/models/data";

const { form } = defineProps<{ form?: any }>();

const formSchema = toTypedSchema(
  z.object({
    name: z.string(),
    service: z.string(),
    username: z.string(),
    password: z.string(),
  })
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: form,
});

const emit = defineEmits(["onSubmitForm", "onClose"]);
const onSubmit = handleSubmit((form: any) => {
  emit("onSubmitForm", form);
});

</script>
