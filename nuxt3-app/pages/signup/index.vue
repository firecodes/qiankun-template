<template>
  <div class="flex justify-center items-center h-screen">
    <form
      @submit.prevent="handleSubmit"
      class="w-80 p-8 border border-gray-300 rounded bg-gray-100"
    >
      <div class="mb-4">
        <label for="name" class="font-bold">Name:</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="font-bold">Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="font-bold">Password:</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="role" class="font-bold">Role:</label>
        <input
          type="text"
          id="role"
          v-model="formData.role"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Signup
      </button>
      <div class="mt-4 text-center">
        Already registered?
        <a href="/" class="text-blue-500 hover:underline">Login</a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
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
});


const formData = ref({
  name: "",
  email: "",
  password: "",
  role: "",
});
let role;

const handleSubmit = async () => {
  try {
    const response = await $fetch("http://localhost:4000/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        password: formData.value.password,
        role: formData.value.role,
      }),
    });

    // (formData.value);
    response;

    localStorage.setItem("userData", response.token);
    localStorage.setItem("role", response.role);
    if (localStorage.getItem("userData") && localStorage.getItem("role")) {
      if (localStorage.getItem("role") === "admin") {
        router.push("/adminpage");
      } else if (localStorage.getItem("role") === "user") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    }
  } catch (error) {
    console.error("Error during signup:", error);
  }
};
</script>
