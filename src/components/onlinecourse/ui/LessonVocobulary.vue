<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
</script>
<template lang="">
    
    <div class="custom-container bg-gray-800 p-4">
    <h1 class="dark:text-white text-[32px] font-bold">Lug'atlar</h1>
    <p class="text-[14px] dark:text-gray-300">Har bir darslik uchun lug'at</p>
        <Table class="bg-gray-900">
    <TableCaption></TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">
          T/R
        </TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead class="text-right">
          Amount
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">
          1
        </TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell class="text-right">
          $250.00
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
    </div>
</template>
<style lang="">
    
</style>