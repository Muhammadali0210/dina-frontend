<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import PageContainer from "@/components/PageContainer.vue";
import NoDataFound from '@/ui/NoDataFound.vue';
import CourseInstructorCard from './shared/CourseInstructorCard.vue'
import CourseInstructorCardSkleton from "./shared/CourseInstructorCardSkleton.vue";
import { ApiService } from "@/services/apiServices";
import type { Course } from '@/types/index';

const router = useRouter();
const isLoading = ref<boolean>(false);
const data = ref<Course[]>([]);
const getAllCourses = async () => {
  try {
    isLoading.value = true;
    const res: Course[] = await ApiService.getByIdToken("/course");
    data.value = res;
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
  <PageContainer
    title="Barcha kurslar"
    subtitle="Siz yaratgan barcha online darsliglar"
  >
    <CourseInstructorCardSkleton v-if="isLoading" />
    <div v-else class="mt-4 grid grid-cols-3 gap-4 w-full max-lg:grid-cols-2 max-md:grid-cols-1">
      <CourseInstructorCard v-if="data.length > 0" @click="router.push(`/course-instructor/update/${item._id}`)" v-for="(item, index) in data" :key="index" :data="item" />

      <NoDataFound v-else />
    </div>
  </PageContainer>
</template>
