<!-- actual -->

<template>
  <div class="flex justify-center items-center h-screen bg-gray-200">
    <div class="bg-white rounded-lg shadow-md p-8">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="email" class="block font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label for="password" class="block font-semibold">Password:</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <div class="text-center">
          <span class="text-gray-700">Not registered?</span>
          <nuxt-link to="/signup" class="text-blue-500 hover:underline"
            >Create an account</nuxt-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const formData = ref({
  email: "",
  password: "",
});
const open2 = () => {
  ElNotification({
    title: "Log Out",
    message: "Log Out Succefully",
    type: "warning",
  });
};

let role;
// onMounted(() => {

// });

onBeforeMount(() => {
  role = localStorage.getItem("role");
  role;
  if (role == "admin") {
    router.push("/adminpage");
  }
  if (role == "user") {
    router.push("/dashboard");
  } else {
    router.push("/");
  }
  ("hiii");
});
const handleSubmit = async () => {
  try {
    const response = await $fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: {
        email: formData.value.email,
        password: formData.value.password,
      },
    });
    response.role;

    formData.value.email = "";
    localStorage.setItem("userData", response.token);
    localStorage.setItem("role", response.role);
    formData.value.password = "";
    if (response.role == "admin") {
      router.push("/adminpage");
    } else {
      router.push("/dashboard");
    }
    open1();
  } catch (error) {
    console.error("Error during login:", error);
  }
};
import { ElNotification } from "element-plus";
const open1 = () => {
  ElNotification({
    title: "User",
    message: "Login Succesfully",
    type: "success",
  });
};
</script>
<style scoped></style>
