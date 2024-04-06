<template>
  <form class="space-y-4" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>Gateway</FormLabel>
        <FormControl>
          <Input type="text" placeholder="gateway" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="sender" v-model="form.sender">
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
    <FormField v-slot="{ componentField }" name="numbers">
      <FormItem>
        <FormLabel>Numbers</FormLabel>
        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select numbers" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="(accountNumber, index) in accountNumbers"
                :key="index"
                :value="accountNumber.id"
              >
                {{ accountNumber.number }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ value, handleChange }" type="checkbox" name="one_way_sms">
      <FormItem class="flex flex-row items-start gap-x-3 space-y-0">
        <FormControl>
          <Checkbox :checked="value" @update:checked="handleChange" />
        </FormControl>
        <div class="space-y-1 leading-none">
          <FormLabel>One Way SMS</FormLabel>
        </div>
      </FormItem>
    </FormField>
    <div>
      <FieldArray v-slot="{ fields }" name="speed">
        <div
          v-for="(field, index) in fields"
          :key="field.key"
          class="grid grid-cols-3 items-center gap-4"
        >
          <FormField v-slot="{ componentField }" :name="`speed[${index}].sms`">
            <FormItem>
              <FormLabel :class="cn(index !== 0 && 'sr-only')"> Sending Speed </FormLabel>
              <div class="relative flex items-center">
                <FormControl>
                  <Input type="number" v-bind="componentField" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" :name="`speed[${index}].interval`">
            <FormItem>
              <FormLabel
                :class="cn(index !== 0 && 'sr-only')"
                class="mt-1 text-xs text-gray-600"
              >
                Interval
              </FormLabel>
              <div class="relative flex items-center">
                <FormControl>
                  <Input type="number" v-bind="componentField" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" :name="`speed[${index}].unit`">
            <FormItem>
              <FormLabel
                :class="cn(index !== 0 && 'sr-only')"
                class="mt-1 text-xs text-gray-600"
              >
                Unit
              </FormLabel>
              <div class="relative flex items-center">
                <FormControl>
                  <Select v-bind="componentField">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an unit" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem
                          v-for="unit in sending_units"
                          :key="unit.value"
                          :value="unit.value"
                        >
                          {{ unit.label }}
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
      </FieldArray>
    </div>
    <div class="flex justify-end gap-2">
      <Button type="submit"> Save Changes </Button>
      <Button type="button" variant="outline" @click="emit('onClose', false)">
        Close
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import { toTypedSchema } from "@vee-validate/zod";
import { FieldArray, useForm } from "vee-validate";
import * as z from "zod";
import { cn } from "@/lib/utils";

import { sms_gateways, numbers, sending_units } from "@/models/data";

const props = defineProps<{ form?: any }>();
const modelStore = useTraitFormStore();

watchEffect(() => modelStore.getAccountNumbers());
const accountNumbers = computed(() => modelStore.accountNumers);

const default_form: Ref = ref({
  name: "",
  one_way_sms: true,
  speed: [
    {
      sms: 100,
      interval: 1,
      unit: "h",
    },
  ],
});

const formSchema = toTypedSchema(
  z.object({
    name: z.string(),
    sender: z.string(),
    numbers: z.number(),
    one_way_sms: z.boolean().default(true),
    speed: z
      .array(
        z.object({
          sms: z.number(),
          interval: z.number(),
          unit: z.string(),
        })
      )
      .optional(),
  })
);

const form = computed(() => (props.form ? props.form : default_form.value));

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: form.value,
});

const emit = defineEmits(["onSubmitForm", "onClose"]);
const onSubmit = handleSubmit((values) => {
  emit("onSubmitForm", {
    name: values.name,
    sender: values.sender,
    numbers: [values.numbers],
    one_way_sms: values.one_way_sms,
    speed: values.speed[0],
  });
});
</script>
