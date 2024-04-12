// store/dataStore.ts
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    userdata: null,
    // isLoading: false,
    error: null,
  }),

  actions: {
    async fetchData(user: string) {
      try {
        // this.isLoading = true;
        const response = await fetch("http://localhost:4000/user", {
          method: "GET",
          headers: { Authorization: `Bearer ${user}` },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        console.log(responseData);

        this.userdata = responseData;
        console.log(this.userdata);
      } catch (error) {
        console.error("Error fetching data:", error);
        // this.error = error.message;
      } finally {
        // this.isLoading = false;
      }
    },
  },
});
