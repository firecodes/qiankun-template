<template>
  <div>
    <h1>Data</h1>

    <div>{{ store.userdata }}</div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "~/store/useStore";
import { ref, onMounted } from "vue";

let user: string = "";
// user = localStorage.getItem("userData");
// console.log(user);

// onMounted(() => {
//   const user = localStorage.getItem("userData"); // Set your user token here
//   console.log(user);
// });

if (process.client) {
  user = localStorage.getItem("userData");
}
// const { userdata, error } = useDataStore();
const store = useDataStore();
// const newData = ref(null);

onMounted(async () => {
  try {
    // console.log(user);
    await store.fetchData(user);
    console.log(store.userdata);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
