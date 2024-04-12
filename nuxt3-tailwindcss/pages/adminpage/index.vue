<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">Admin Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(user, index) in users"
        :key="index"
        class="bg-white rounded-lg shadow-md p-4"
      >
        <h2 class="text-lg font-semibold mb-2">{{ user.name }}</h2>
        <p class="text-gray-600 mb-2">Balance: ${{ user.balance }}</p>
        <button
          @click="openAddMoneyModal(user)"
          class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Money
        </button>
      </div>
    </div>

    <!-- Add Money Modal -->
    <div
      v-if="showAddMoneyModal"
      class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
    >
      <div class="bg-white rounded-lg p-8">
        <h2 class="text-lg font-semibold mb-4">
          Add Money to {{ selectedUser.name }}
        </h2>
        <input
          v-model="amountToAdd"
          type="number"
          class="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
          placeholder="Enter amount"
        />
        <div class="flex justify-end">
          <button
            @click="addMoney"
            class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 mr-2"
          >
            Add
          </button>
          <button
            @click="closeAddMoneyModal"
            class="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  <button
    v-if="admin"
    class="absolute top-5 right-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    @click="logoutHandler"
  >
    Log Out
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

interface User {
  id: number;
  name: string;
  balance: number;
}

const users = ref<any>([]);
const showAddMoneyModal = ref(false);
const selectedUser = ref<any>(null);
const amountToAdd = ref(0);
const router = useRouter();
let admin: any;
onMounted(async () => {
  admin = localStorage.getItem("userData");
  fetchUserData();
  if (!localStorage.getItem("userData")) {
    router.push("/");
  }
  // open1();
});
// import { ElNotification } from "element-plus";

// const open1 = () => {
//   ElNotification({
//     title: "Admin",
//     message: "Login Succesfully",
//     type: "success",
//   });
// };
const logoutHandler = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("role");
  router.push("/");
};

onBeforeMount(() => {
  if (localStorage.getItem("userData") && localStorage.getItem("role")) {
    if (localStorage.getItem("role") === "admin") {
      router.push("/adminpage");
    } else if (localStorage.getItem("role") === "user") {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }

  // ("first");
});
// Fetch user data
const fetchUserData = async () => {
  try {
    const response = await $fetch("http://localhost:4000/admin", {
      method: "GET",
      headers: { Authorization: `Bearer ${admin}` },
    });
    // (response);

    if (!response) {
      throw new Error("Failed to fetch user data");
    }
    users.value = await response;
    // users.value = userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

// Add money to the selected user
const addMoney = async () => {
  try {
    if (selectedUser.value && amountToAdd.value > 0) {
      const userId = selectedUser.value.id;
      const response = await $fetch(`http://localhost:4000/admin/${userId}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${admin}` },

        body: { amount: amountToAdd.value },
      });
      if (!response) {
        throw new Error("Failed to add money");
      }
      // Update user balance locally
      selectedUser.value.balance += amountToAdd.value;
      closeAddMoneyModal();
    }
  } catch (error) {
    console.error("Error adding money:", error);
  }
};

// Method to open add money modal
const openAddMoneyModal = (user: User) => {
  selectedUser.value = user;
  showAddMoneyModal.value = true;
};

// Method to close add money modal
const closeAddMoneyModal = () => {
  showAddMoneyModal.value = false;
  amountToAdd.value = 0;
};
</script>
