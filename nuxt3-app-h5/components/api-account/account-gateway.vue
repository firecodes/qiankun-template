<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="max-w-[150px]"> Friendly Name </TableHead>
        <TableHead>Type</TableHead>
        <TableHead class="text-right"> Balance </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">
          {{ item.friendly_name }}</TableCell
        >
        <TableCell>{{ item.type }}</TableCell>
        <TableCell class="text-right">
          {{ item.balance }} {{ item.currency }}</TableCell
        >
      </TableRow>
    </TableBody>
    <TableCaption>A list of your recent account.</TableCaption>
  </Table>
</template>

<script lang="ts" setup>
 defineProps<{ item?: any }>();
</script>

 
