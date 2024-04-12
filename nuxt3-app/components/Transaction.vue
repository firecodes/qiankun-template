<template>
  <div class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 w-[80%]">
    <form @submit.prevent="submitForm">
      <div class="mb-4 w-[full] mr-3">
        <label
          class="block text-gray-700 text-lg font-bold mb-2 w-[full]"
          for="name"
        >
          Name of User
        </label>
        <el-select
          v-model="username"
          filterable
          remote
          reserve-keyword
          placeholder="Please enter a keyword"
          :remote-method="remoteMethod"
          :loading="loading"
          style="width: 100%"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-lg font-bold mb-2"
          for="description"
        >
          Payment Detail
        </label>
        <el-input
          v-model="description"
          class="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :rows="2"
          type="textarea"
          placeholder="Please input Description"
        />
      </div>

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
        <button type="submit" @click="$emit('myEvent')">
          <el-button
            class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </el-button>
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { ElNotification } from "element-plus";
import { useDataStore } from "~/store/useStore";

const succesToast = () => {
  ElNotification({
    title: "Success",
    message: "Amount Transffered Succesfully",
    type: "success",
  });
};
const errorToast = () => {
  ElNotification({
    title: "Failed",
    message: "Insufficient Balance",
    type: "error",
  });
};
const username = ref<string[]>([]);
const amount = ref("");
const description = ref("");
const options = ref([]);
let user: any;
interface IUserData {}

let userData: IUserData[] = [];
onMounted(async () => {
  user = localStorage.getItem("userData");
  // await fetchUserData();
});

const remoteMethod = async (query: string) => {
  if (query.length >= 3) await fetchUserData(query);
};
const fetchUserData = async (searchID: string) => {
  try {
    if (searchID.length >= 3) {
      const response = await fetch(
        `http://localhost:4000/user/search?keyword=${searchID}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );

      userData = await response.json();

      options.value = userData.map((user: any) => ({
        value: user.id.toString(),
        label: user.name,
      }));
    } else {
      return;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
const store = useDataStore();

const submitForm = async () => {
  const formData = {
    amount: parseFloat(amount.value),
    receiverId: username.value,
    description: description.value,
  };
  // (formData);

  try {
    const response = await $fetch("http://localhost:4000/transaction/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user}`,
      },
      body: formData,
    });

    succesToast();

    if (!response) {
      throw new Error("Failed to submit form data");
    }
  } catch (error) {
    console.error("Error submitting form data:", error);
    errorToast();
  }

  // try {
  //   // console.log(user);
  //   await store.fetchData(user);
  //   // data.value = store.userdata;
  //   // console.log(data.value);
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }

  username.value = "";
  amount.value = "";
  description.value = "";
};
</script>
