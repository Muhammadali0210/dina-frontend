<script setup lang="ts">
import { defineProps } from "vue";
import { Card } from "@/components/ui/card";
import { useRouter } from "vue-router";
const props = defineProps({
    courseData: Object,
});
const router = useRouter();
</script>
<template>
  <div
    v-if="courseData"
    @click="router.push(`/online-courses/${courseData?._id}`)"
    class="border rounded-md overflow-hidden shadow-md w-full border-borde dark:bg-gray-900 bg-white cursor-pointer"
  >
    
    <div class="relative">
      <img class="h-[180px] w-full object-cover" :src="courseData.previewImage" alt="course image" />
      <div class="grid grid-cols-3 absolute bottom-0">
        <h3 class="text-[15px] text-white font-bold bg-gray-700 py-[2px] px-[10px]">
          {{ courseData.level.toLowerCase() }}
        </h3>
        <h3 class="text-[15px] text-black font-bold bg-gray-300 py-[2px] px-[10px]">
          Pullik
        </h3>
        <h3 class="text-[15px] text-white font-bold bg-red-800 py-[2px] px-[10px]">
          {{ courseData.currentPrice }}
        </h3>
      </div>
    </div>
    
    <h1 class="dark:text-white text-gray-900 text-[20px] max-md:text-[18px] font-bold p-[10px]">
    {{ courseData.title }}
    </h1>
  </div>
</template>
