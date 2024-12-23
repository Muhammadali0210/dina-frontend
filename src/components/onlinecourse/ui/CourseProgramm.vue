<script setup lang="ts">
import CourseItemList from '../ui/CourseItemList.vue'
import { ref } from "vue"
import { lessonData } from '@/constants/LessonData'

interface Lesson {
    lessonData: { length: number },
}

const lesson = ref<any>(lessonData);

const lessonCounter = lesson.value.reduce((acc: number, item: Lesson) => acc + item.lessonData.length, 0);
const lessonModuleCount = lessonData.length;  
</script>


<template>
    <div class="w-full bg-white dark:bg-gray-700 p-[30px]">
        <h1 class="dark:text-white text-gray-900 font-bold text-[24px]">Dastur</h1>
        <div class="gridT grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">

            <div class="text-left">
                <svg class="w-[50px] h-[50px] text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                        d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
                </svg>
                <h3 class="dark:text-white text-gray-700 text-[16px]">Modullar Soni</h3>
                <h1 class="dark:text-white text-gray-700 text-[24px]">{{ lessonModuleCount  }} Ta</h1>
            </div>

            <div class="text-left">
                <svg class="w-[50px] h-[50px] text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z" />
                </svg>
                <h3 class="dark:text-white text-gray-700 text-[16px]">Darslar Soni</h3>
                
                <h1 class="dark:text-white text-gray-700 text-[24px]">{{ lessonCounter }} Ta</h1>
            </div>

            <div class="text-left">
                <svg class="w-[50px] h-[50px] text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <h3 class="dark:text-white text-gray-700 text-[16px]">Kurs davomiyligi</h3>
                <h1 class="dark:text-white text-gray-700 text-[24px]">11 soat</h1>
            </div>

        </div>
        <CourseItemList/>
         </div>
</template>


<style scoped>
     @media (max-width: 450px) {
    .gridT {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>