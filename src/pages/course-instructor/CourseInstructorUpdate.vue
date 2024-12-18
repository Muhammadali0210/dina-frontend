<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ApiService } from "@/services/apiServices";
import type { Course } from '@/types/index';
import PageContainer from "@/components/PageContainer.vue";
import CourseFieldCard from "./_components/CourseFieldCard.vue";
import useGetCourseInfo from "./service";

const { isLoading, data, getCourseInfo } = useGetCourseInfo();
onMounted(() => {
  console.log(isLoading.value);
  getCourseInfo();
  console.log(data.value);
});

// const isLoading = ref<boolean>(false);
// const data = ref<Course>(null as unknown as Course);
// const getCourseInfo = async () => {
//   try {
//     isLoading.value = true;
//     const res: Course = await ApiService.getByIdToken(`/course/${router.params.id}`);
//     data.value = res;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     isLoading.value = false;
//   }
// };

// onMounted(() => {
//   getCourseInfo();
// });
</script>

<template>
  <PageContainer
    title="123"
    subtitle="456"
  >
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-3">
        <CourseFieldCard name="Kurst nomi" #default="{ state }">
          <div v-if="state">Salom</div>
          <div v-else>Nima gap</div>
        </CourseFieldCard>

        <CourseFieldCard name="Qisqacha malumot" #default="{ state }">
          <div v-if="state">Salom</div>
          <div v-else>Nima gap</div>
        </CourseFieldCard>
      </div>
    </div>
  </PageContainer>
</template>
