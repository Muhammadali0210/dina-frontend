<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import PageContainer from "@/components/PageContainer.vue";
import NoDataFound from '@/ui/NoDataFound.vue';
import CourseCard from './_components/CourseCard.vue';
import Loading from "./shared/Loading.vue";
import useGetAllCourse from "./servise";
const router = useRouter();

const { isLoading, data, getAllCourse } = useGetAllCourse();

onMounted( async () => {
  await getAllCourse();
});
</script>

<template>
  <PageContainer
    title="Barcha kurslar"
    subtitle="Siz yaratgan barcha online darsliglar"
  >
    <Loading v-if="isLoading" />

    <div v-else class="mt-4 grid grid-cols-3 gap-4 w-full max-lg:grid-cols-2 max-md:grid-cols-1">
      <CourseCard v-if="data" v-for="(item, index) in data" :key="index" :data="item" />
      <NoDataFound v-else />
    </div>
  </PageContainer>
</template>
