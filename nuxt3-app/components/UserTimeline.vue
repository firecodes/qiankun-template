<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Your Transactions</h1>
    <el-timeline style="max-width: 600px">
      <el-timeline-item
        v-for="(activity, index) in paginatedActivities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
      >
        <span>{{ activity.Senderstatus }}</span>
        <!-- <p>To : {{ activity.name }}</p> -->

        <p>Amount : ${{ activity.amount }}</p>
        <!-- <p>For {{ activity.description }}</p> -->
      </el-timeline-item>
    </el-timeline>
    <el-pagination
      class="absolute bottom-15"
      layout="prev, pager, next"
      :total="activities.length"
      :page-size="4"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script setup>
import { MoreFilled } from "@element-plus/icons-vue";
import { ref, onMounted, computed } from "vue";

let user;
onMounted(() => {
  user = localStorage.getItem("userData");
  fetchTransactionHistory();
});

const activities = ref([]);
const currentPage = ref(1);

const fetchTransactionHistory = async () => {
  try {
    const response = await fetch(
      "http://localhost:4000/transaction/usertouser",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${user}` },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    activities.value = data.map((item) => ({
      content: item.name,
      timestamp: item.date,
      amount: item.amount,
      name: item.name,
      Receiverstatus: item.Receiverstatus,
      Senderstatus: item.Senderstatus,
      description: item.description,
      size: Math.random() > 0.5 ? "large" : "medium",
      type: Math.random() > 0.5 ? "primary" : "success",
      icon: MoreFilled,
      color: getRandomColor(),
      hollow: Math.random() > 0.5,
    }));
  } catch (error) {
    console.error("Error fetching transaction history:", error);
  }
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const paginatedActivities = computed(() => {
  const startIndex = (currentPage.value - 1) * 4;
  const endIndex = startIndex + 4;
  return activities.value.slice(startIndex, endIndex);
});

const handleCurrentChange = (page) => {
  currentPage.value = page;
};
</script>
