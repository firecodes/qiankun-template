<template>
  <!-- <h1 class="w-[full] text-3xl">Make Transaction</h1> -->
  <el-select
    v-model="value"
    filterable
    placeholder="Select"
    style="width: 240px"
    @change="changeinput"
    class="mr-28"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <div v-if="compvalue === 'Transaction'" class="w-[80%] m-12 ml-12">
    <Transaction @my-event="Action" />
  </div>
  <div v-else class="w-[80%] m-12 ml-12">
    <Expenses />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
//
const emit = defineEmits(["customEvent"]);
function Action() {
  console.log("emit event");
  emit("customEvent");
}
const props = defineProps({
  initialOptions: {
    type: Array,
    required: true,
  },
});
let compvalue = ref<any>(""); // Initialize compvalue as empty string

const changeinput = () => {
  compvalue.value = value.value; // Update compvalue directly
  compvalue.value; // Log for verification
};

const value = ref<string[]>([]);
const options = ref(props.initialOptions);
options.value; // Log options for verification
</script>
