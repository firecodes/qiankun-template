<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]"> SID </TableHead>
        <TableHead> Phone Number</TableHead>
        <TableHead class="text-right"> </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(item, index) in items" key="index">
        <TableCell class="font-medium">{{ item.sid }} </TableCell>
        <TableCell>{{ item.phoneNumber }} </TableCell>
        <TableCell class="text-right">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button size="sm" variant="destructive">
                <Icon name="radix-icons:trash" class="w-4 h-4 mr-1" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction @click="onDeleteBuyNumber(item.sid)"
                  >Continue</AlertDialogAction
                >
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell :colSpan="3">
          <Dialog>
            <DialogTrigger as-child>
              <Button variant="outline" size="sm">
                <Icon name="radix-icons:plus" class="w-4 h-4 mr-1" />
                Buy Number
              </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Buy New Number</DialogTitle>
              </DialogHeader>
              <form @submit="onSubmit">
                <div class="flex items-center space-x-2">
                  <div class="grid flex-1 gap-2">
                    <FormField v-slot="{ componentField }" name="country">
                      <FormItem>
                        <Select v-bind="componentField">
                          <FormControl>
                            <SelectTrigger class="h-9">
                              <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem
                                v-for="(country, index) in countryCodes"
                                :value="index"
                              >
                                {{ country }}
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    </FormField>
                  </div>
                  <Button type="submit" size="sm" class="px-4">
                    <span class="sr-only">Search</span>
                    <Icon name="radix-icons:magnifying-glass" class="w-4 h-4" />
                  </Button>
                </div>
              </form>
              <div
                v-if="availablePhoneNumbers.length"
                class="grid gap-4 py-4 overflow-y-auto px-6"
              >
                <div class="flex flex-col gap-2 justify-between max-h-[30dvh]">
                  <div
                    class="flex items-center justify-start"
                    v-for="availablePhoneNumber in availablePhoneNumbers"
                  >
                    <div class="flex-1 text-sm">
                      {{ availablePhoneNumber.phoneNumber }}
                    </div>
                    <Button
                      @click="onBuyNumer(availablePhoneNumber.phoneNumber)"
                      size="sm"
                      variant="outline"
                    >
                      <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
                      <Icon
                        v-else
                        name="heroicons:shopping-cart-solid"
                        class="w-4 h-4 mr-2"
                      />
                      BUY
                    </Button>
                  </div>
                </div>
              </div>
              <div class="text-xs" v-else-if="isLoading">loading...</div>
              <div class="text-xs" v-else>No results.</div>
            </DialogContent>
          </Dialog>
        </TableCell>
      </TableRow>
    </TableBody>
    <TableCaption>A list of your recent numbers.</TableCaption>
  </Table>
</template>

<script lang="ts" setup>
import * as z from "zod";
import { Loader2 } from "lucide-vue-next";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { _indigo } from "#tailwind-config/theme/borderColor";

defineProps<{ items?: any }>();
const id: number = useRoute().params.id;
const country = ref<string>();
const traitFormStore = useTraitFormStore();
const modelStore = useApiAccountStore();

watchEffect(() => traitFormStore.getCountryCodes());
const isLoading = computed(() => modelStore.isLoading);
const countryCodes = computed(() => traitFormStore.countryCodes);
const availablePhoneNumbers = computed(() => modelStore.availablePhoneNumbers);

const formSchema = toTypedSchema(
  z.object({
    country: z.string(),
  })
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((form: any) => {
  modelStore.onSearchBuyNumbers(id, form);
  country.value = form.country;
});

const onBuyNumer = (phone: any) => {
  modelStore.onBuyNumber(id, {
    phone: phone,
    country: country.value,
  });
};
const onDeleteBuyNumber = (_id: string) => modelStore.onDeleteBuyNumber(id, _id);

</script>
