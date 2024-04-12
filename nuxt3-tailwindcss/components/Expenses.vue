<template>
  <div class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 w-[80%]">
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label class="block text-gray-700 text-lg font-bold mb-2" for="name">
          Expense Name
        </label>
        <el-input
          v-model="name"
          class="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Please input Name of Transaction"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-lg font-bold mb-2"
          for="description"
        >
          Description
        </label>
        <el-input
          v-model="description"
          class="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :rows="2"
          type="textarea"
          placeholder="Please input Description"
        />
      </div>
      <!-- <div class="mb-6 ml-2">
        <label class="block text-gray-700 text-lg font-bold mb-2" for="amount">
          Category of Transaction
        </label>
        <el-select
          v-model="value"
          filterable
          placeholder="Select"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div> -->

      <div class="mb-6">
        <label class="block text-gray-700 text-lg font-bold mb-2" for="amount">
          Amount of Transaction
        </label>
        <el-input
          v-model="amount"
          class="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Please input Amount of Transaction"
        />
      </div>

      <div class="flex items-center justify-between ml-40">
        <button type="submit">
          <el-button
            @click="open1"
            class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </el-button>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ElNotification } from "element-plus";

const open1 = () => {
  ElNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};
import { useRouter } from "vue-router";
const router = useRouter();
let user;
const name = ref("");
const amount = ref("");
const description = ref("");
import { ref, defineProps } from "vue";

onMounted(() => {
  user = localStorage.getItem("userData");
});

const submitForm = async () => {
  const formData = {
    name: name.value,
    description: description.value,

    amount: amount.value,
  };
  formData;
  try {
    const response = await $fetch("http://localhost:4000/transaction", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user}`,
      },
      body: formData,
    });
    ("Transaction submitted successfully!");
    name.value = "";
    description.value = "";
    amount.value = "";
  } catch (error) {
    console.error("Error submitting transaction:", error);
    // Handle error appropriately
  }
};

const props = defineProps({
  newdata: {
    type: Array,
    required: true,
  },
});

// const data = ref(props.newdata);
// (data);
</script>
