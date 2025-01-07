<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import {useOnlineCourseStore} from '../../store';
import { ref, watch } from 'vue'
import type { Course } from '@/types';
import { Separator } from '@/components/ui/separator';
import useGetAllCourse from '../../service'

const { isLoading, getAllCourse } = useGetAllCourse();
const courseStore = useOnlineCourseStore();
const onlineCourses = ref<Course[]>(courseStore.getAll);

watch(() => courseStore.onlineCourses, async() => {
  await getAllCourse();
  onlineCourses.value = courseStore.getAll;
}, { immediate: true });

</script>

<template>
  <div class="max-w-6xl max-md:mx-auto pb-10">
    <h1 class="text-4xl font-bold">
      Barcha kurslar
    </h1>

    <Carousel
      class="relative w-full max-w-6xl"
      :opts="{
        align: 'start',
        loop: true
      }"
    >
      <CarouselContent>
        <CarouselItem v-for="(item, index) in onlineCourses" :key="index" class="md:basis-1/2 lg:basis-1/3">
          <div class="p-0">
            <Card class="p-2">
              <CardContent class="flex aspect-square items-center justify-center h-[200px] w-full p-0">
                <img class="h-full w-full object-cover rounded-md overflow-hidden" :src="item?.previewImage as string" :alt="item?.title as string">
              </CardContent>
              <Separator class="mt-1" />
              <h1 class="text-xl font-semibold">{{ item?.title }}</h1>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="absolute left-[-10px] top-1/2 -translate-y-1/2" />
      <CarouselNext class="absolute right-[-10px] top-1/2 -translate-y-1/2" />
    </Carousel>
  </div>
</template>