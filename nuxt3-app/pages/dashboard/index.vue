<!-- home -->

<template>
  <div class="flex" :key="data?.balance">
    <div class="w-[100%] bg-slate-100 flex justify-center items-center">
      <div class="w-[100%] h-full bg-white rounded-lg shadow-xl p-8">
        <h1 class="text-4xl font-bold mb-8">Your Transaction</h1>

        <!-- Balance and Expense section -->
        <div class="flex items-center gap-[10%] mb-12">
          <div
            class="p-5 px flex justify-evenly items-center w-[100%] shadow-xl"
          >
            <div class="flex flex-col items-center">
              <h2 class="text-2xl font-semibold text-green-500 mb-2">
                Balance
              </h2>
              <p class="text-3xl font-bold">${{ data?.balance }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div><Timeline :initial-option="newdata" /></div>
          <div class="flex justify-center items-center">
            <hr class="w-[190px] transform rotate-90" />
          </div>
          <div><UserTimeline :initial-option="newdata" /></div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <h1 class="w-[full] text-4xl font-bold m-8">Make Transaction</h1>
      <div class="w-full flex flex-col items-center m-4">
        <!-- <Expenses :data="data.value" /> -->
        <Input
          :initial-options="options"
          class="mt-4"
          @customEvent="handleCustomEvent"
        />
      </div>
    </div>
  </div>
  <button
    v-if="user"
    class="absolute top-5 right-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    @click="logoutHandler"
  >
    Log Out
  </button>
</template>
<script setup>
import { useDataStore } from "~/store/useStore";
import { ref, onMounted } from "vue";
const router = useRouter();
let user;
let data = ref({});
// let newdata = ref({});
// const { userdata, error } = useDataStore();
const store = useDataStore();
onMounted(async () => {
  user = localStorage.getItem("userData");
  if (!localStorage.getItem("userData")) {
    router.push("/");
  }

  handleCustomEvent();

  // await fetchData();
  // (data);
  // open1();
});
const handleCustomEvent = async () => {
  console.log("2nd emit");
  try {
    // console.log(user);
    await store.fetchData(user);
    data.value = store.userdata;

    window.reload();
    console.log(data.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // console.log(data.value);
};
const logoutHandler = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("role");
  router.push("/");
};
// In your Vue component or utility file

// const fetchData = async () => {
//   try {
//     const response = await $fetch("http://localhost:4000/user", {
//       method: "GET",
//       headers: { Authorization: `Bearer ${user}` },
//     });

//     if (!response) {
//       throw new Error("Network response was not ok");
//     }
//     data.value = response;
//     newdata = response;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Propagate the error to the calling function/component
//   }
// };

const options = [
  { value: "Expense", label: "Expense" },
  { value: "Transaction", label: "Transaction" },
];
</script>
