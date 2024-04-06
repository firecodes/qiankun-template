<template>
  <div v-if="message?.contact" class="min-h-0 flex-1 overflow-y-auto">
    <div class="pb-6 pt-5 shadow dark:border-b">
      <div class="px-4 sm:flex sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
        <div class="sm:w-0 sm:flex-1">
          <!-- <h1 id="message-heading" class="text-lg font-medium">
            Re: New pricing for existing customers
          </h1> -->
          <p class="mt-1 truncate text-sm">{{ message?.contact?.phone }}</p>
        </div>
        <div class="sr-only">toolbar</div>
      </div>
    </div>
    <ul role="list" class="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8">
      <li
        v-for="reply in message.data"
        class="px-4 py-6 shadow dark:border sm:rounded-lg sm:px-6"
      >
        <div class="sm:flex sm:items-baseline sm:justify-between">
          <h3 class="text-base font-medium">
            <span>{{ reply.message }}</span>
            <!-- space -->
            <!-- <span>wrote</span> -->
          </h3>
          <p class="mt-1 whitespace-nowrap text-sm sm:ml-3 sm:mt-0">
            <time datetime="2021-01-27T16:35">{{ reply.time }}</time>
          </p>
        </div>
        <div class="mt-4 space-y-6 text-sm">
          <p>
            {{ reply.short_msg }}
          </p>
          <!-- <p>
            <strong style="font-weight: 600">Monica White</strong><br />Customer
            Service
          </p> -->
        </div>
      </li>
    </ul>
    <Separator class="mt-auto" />

    <div class="p-4">
      <form class="space-y-4" @submit="onSubmit">
        <div class="grid gap-4">
          <FormField v-slot="{ componentField }" name="message">
            <FormItem>
              <FormLabel class="sr-only">message</FormLabel>
              <FormControl>
                <Textarea
                  class="p-4"
                  :placeholder="`Reply ${message?.contact?.phone}...`"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="flex items-center">
            <FormField v-slot="{ value, handleChange }" name="mute_this_thread">
              <FormItem>
                <div class="flex items-center gap-2">
                  <FormLabel class="flex items-center gap-2 text-xs font-normal">
                    Mute this thread
                  </FormLabel>
                  <FormControl>
                    <Switch :checked="value" @update:checked="handleChange" />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>
            <Button type="submit" size="sm" class="ml-auto"> Send </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";

const props = defineProps<{
  message?: any;
}>();

const phone = computed(() => props.message?.contact?.phone);

const formSchema = toTypedSchema(
  z.object({
    message: z.string(),
    mute_this_thread: z.boolean(),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    mute_this_thread: false,
  },
});

const emit = defineEmits(["onSubmitReply"]);

const onSubmit = handleSubmit((values) => {
  emit("onSubmitReply", {
    message: values.message,
    mute_this_thread: values.mute_this_thread,
    thread_id: props.message?.contact?.phone,
    number_id: 1,
  });
});
</script>
