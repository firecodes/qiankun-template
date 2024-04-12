<template>
  <div>
    <h3 class="text-lg font-medium">Account</h3>
    <p class="text-sm text-muted-foreground">
      Update your account settings. Set your preferred language and timezone.
    </p>
  </div>
  <Separator />
  <form class="space-y-8" @submit="onSubmit">
    <div class="grid grid-cols-2 gap-4">
      <FormField v-slot="{ componentField }" name="first_name">
        <FormItem>
          <FormLabel>First Name</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Your first name"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="last_name">
        <FormItem>
          <FormLabel>Last Name</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Your name"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <FormField v-slot="{ componentField }" name="brand_name">
        <FormItem>
          <FormLabel>Brand Name</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Your brand name"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="company">
        <FormItem>
          <FormLabel>Company</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Your company"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <FormField v-slot="{ componentField }" name="address">
      <FormItem>
        <FormLabel>Address</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Tell us a little bit about your address."
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <div class="flex justify-start">
      <Button type="submit"> Update account </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import * as z from "zod";
import { format } from "date-fns";
import { toTypedSchema } from "@vee-validate/zod";
import { Check, ChevronsUpDown } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { languages } from "@/models/data";
import { useForm } from "vee-validate";

const filterFunction = (list: typeof languages, search: string) =>
  list.filter((i) => i.value.toLowerCase().includes(search.toLowerCase()));

const modelStore = useSettingsStore();
watchEffect(() => modelStore.getUser());
const user = computed(() => modelStore.user);

const open = ref(false);

const accountFormSchema = toTypedSchema(
  z.object({
    first_name: z.string(),
    last_name: z.string(),
    brand_name: z.string(),
    company: z.string().optional(),
    address: z.string().optional(),
    dob: z
      .date({
        required_error: "A date of birth is required.",
      })
      .optional(),
    language: z
      .string()
      .nonempty({
        message: "Please select a language.",
      })
      .optional(),
  })
);

const { handleSubmit } = useForm({
  validationSchema: accountFormSchema,
  initialValues: {
    first_name: user.value.first_name,
    last_name: user.value.last_name,
    brand_name: user.value.brand_name,
    company: user.value.company,
    address: user.value.address,
  },
});

const onSubmit = handleSubmit(async (form: any) => {
  await modelStore.onUpdateAccount(form);
});

definePageMeta({
  layout: "settings",
  middleware: "auth",
});
useHead({
  title: "Account",
});
</script>
