<script setup lang="ts">
import PageContainer from "@/components/PageContainer.vue";
import { ref } from "vue"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

const data = ref<Object>([
  {
    id: 1,
    title:'나라',
    title1:'davlat'
  },
  {
    id: 2,
    title: '중국',
    title1: 'Xitoy'
  },
  {
    id: 3,
    title: '일본',
    title1: 'Yaponiya'
  },
  {
    id: 4,
    title: '일본',
    title1: 'Yaponiya'
  },
  {
    id: 5,
    title: '나라',
    title1: 'davlat'
  },
  {
    id: 6,
    title: '중국',
    title1: 'Xitoy'
  },
  {
    id: 7,
    title: '일본',
    title1: 'Yaponiya'
  },
  {
    id: 8,
    title: '일본',
    title1: 'Yaponiya'
  },
])



</script>
<template >

  <PageContainer class="mt-4" title="Lug'atlar" subtitle="Har bir mavzu uchun">
    <div class="grid md:grid-cols-4 gap-10  grid-cols-2">
      <ul class="" v-for="vocabulary in data" :key="vocabulary.id">
        <li>{{ vocabulary.title }} - {{ vocabulary.title1 }}</li>
      </ul>
    </div>

  </PageContainer>
</template>
<style lang="">
    
</style>