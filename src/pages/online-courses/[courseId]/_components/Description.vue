<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  BarChart2,
  Clock,
  Infinity,
  Languages,
  MonitorPlay,
  Cable
} from 'lucide-vue-next';
import { ref, defineProps } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Skeleton } from '@/components/ui/skeleton';
import { useOnlineCourseStore } from '../../store'
const courseStore = useOnlineCourseStore();

defineProps({
  course: Object
})

const router = useRouter();
const route = useRoute();
const isLoading = ref(false);

const onCart = () => {
  window.open('https://dinakoreanmasterclass.uz/', '_blank');
  console.log("Savatchaga qo'shish");
}

const token = localStorage.getItem('token');

const goToDashboard = () => {
  router.push(`/lesson-dashboard/${route.params.id}`);
}
</script>
<template>
  <div class="rounded-md border bg-secondary/50 p-4 shadow-lg dark:shadow-white/20 lg:sticky lg:top-16 lg:p-6">
    <div v-if="courseStore.detailLoader" class="flex items-center justify-between">
      <div class="text-2xl font-bold flex gap-2">
        <Skeleton class="w-[80px] h-6" /> UZS 
      </div>
      <div class="font-bold flex gap-2">
        <Skeleton class="w-[80px] h-6" /> UZS
      </div>
    </div>
    <div v-else class="flex items-center justify-between">
      <div class="text-2xl font-bold">
        
        {{ course?.currentPrice }} UZS 
      </div>
      <div class="font-bold line-through">
        {{ course?.oldPrice }} UZS
      </div>
    </div>

    <Button
      v-if="!token"
      size="lg"
      class="relative mt-2 w-full font-bold"
      @click="onCart"
      :disabled="isLoading"
    >
      Ariza qoldirish
    </Button>
    <Button
      v-if="token"
      size="lg"
      class="relative mt-2 w-full font-bold"
      @click="goToDashboard"
      :disabled="isLoading"
    >
      Kursni ko'rish
    </Button>

    <p v-if="!token" class="my-3 text-center text-sm text-muted-foreground">
      Kursni sotib olish istagingiz bo'lsa arizaz qoldiring. Sizga qo'ng'roq qilamiz
    </p>

    <div class='mt-4 flex items-center justify-between border-b pb-2'>
      <div class='flex items-center gap-2 font-space-grotesk'>
        <MonitorPlay class='size-5' />
        <span class='font-bold'>Darslar</span>
      </div>
      <Skeleton v-if="courseStore.detailLoader" class="w-[50px] h-4" />
      <p v-else class='text-muted-foreground'>{{ course?.totalLessons }}</p>
    </div>

    <div class='mt-2 flex items-center justify-between border-b pb-2'>
      <div class='flex items-center gap-2 font-space-grotesk'>
        <Clock class='size-5' />
        <span class='font-bold'>Davomiyligi</span>
      </div>
      <Skeleton v-if="courseStore.detailLoader" class="w-[50px] h-4" />
      <p v-else class='text-muted-foreground'>
        {{ course?.totalDuration.split('.')[0] }}:{{ course?.totalDuration.split('.')[1] }}
      </p>
    </div>

    <div class='mt-2 flex items-center justify-between border-b pb-2'>
      <div class='flex items-center gap-2 font-space-grotesk'>
        <BarChart2 class='size-5' />
        <span class='font-bold'>Darajasi</span>
      </div>
      <Skeleton v-if="courseStore.detailLoader" class="w-[50px] h-4" />
      <p v-else class='capitalize text-muted-foreground'>{{ course?.level }}</p>
    </div>

    <div class='mt-2 flex items-center justify-between border-b pb-2'>
      <div class='flex items-center gap-2 font-space-grotesk'>
        <Languages class='size-5' />
        <span class='font-bold'>Til</span>
      </div>
      <Skeleton v-if="courseStore.detailLoader" class="w-[50px] h-4" />
      <p v-else class='capitalize text-muted-foreground'>{{ course?.language }}</p>
    </div>

    <div class='mt-2 flex items-center justify-between border-b pb-2'>
      <div class='flex items-center gap-2 font-space-grotesk'>
        <Cable class='size-5' />
        <span class='font-bold'>Kategoriya</span>
      </div>
      <Skeleton v-if="courseStore.detailLoader" class="w-[50px] h-4" />
      <p v-else class='capitalize text-muted-foreground'>{{ course?.category }}</p>
    </div>

    <div class='mt-2 flex items-center justify-between border-b pb-2'>
      <div class='flex items-center gap-2 font-space-grotesk'>
        <Infinity class='size-5' />
        <span class='font-bold'>Bir umr kirish </span>
      </div>
      <p class='text-muted-foreground'>Ha</p>
    </div>
  </div>
</template>

