<script setup lang="ts">
import { ref, onMounted } from "vue";
import CourseContainer from "./_components/CourseContainer.vue";
import Loader from "@/ui/Loader.vue";
import NoDataFound from '@/ui/NoDataFound.vue';
import { ApiService } from "@/services/apiServices";
import type { Course } from '@/types/index';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle
} from "@/components/ui/card";

const isLoading = ref<boolean>(false);
const data = ref<Course[]>([]);
const getAllCourses = async () => {
  try {
    isLoading.value = true;
    const res: Course[] = await ApiService.getByIdToken("/course");
    data.value = res;
    console.log(data.value);
    
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
    if(data.value.length === 0){
        getAllCourses();
    }
});
</script>

<template>
  <CourseContainer
    title="Barcha kurslar"
    subtitle="Siz yaratgan barcha online darsliglar"
  >
    <Loader v-if="isLoading" />
    <div v-else class="mt-4 grid grid-cols-3 gap-4 w-full max-lg:grid-cols-2 max-md:grid-cols-1">
      <Card v-if="data" v-for="(item, index) in data" :key="index" class="p-2">
        <CardContent class="p-0 rounded-sm overflow-hidden">
            <img :src="item.previewImage === null ? '../../assets/image/emptyimg.png' : item.previewImage" alt="course rasm" class="w-full h-[200px] object-cover">
        </CardContent>
        <CardFooter class="flex justify-between p-0 mt-3">
          <CardTitle>{{ item.title }}</CardTitle>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>

      <NoDataFound v-else />
    </div>
  </CourseContainer>
</template>
