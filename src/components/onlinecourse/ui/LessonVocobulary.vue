<script setup lang="ts">
import PageContainer from "@/components/PageContainer.vue";
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
<template >

  <PageContainer title="Lug'atlar" subtitle="Har bir mavzu uchun">
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
  </PageContainer>
</template>
<style lang="">
    
</style>