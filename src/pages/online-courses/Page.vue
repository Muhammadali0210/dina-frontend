<script setup lang="ts">
import PageContainer from "@/components/PageContainer.vue";     
import useGetAllCourse from './service';
import { onMounted, ref } from "vue";
import CourseCard from "./_components/CourseCard.vue";
import { useCourseStore } from "./store";

const { isLoading, getAllCourse } = useGetAllCourse();
const data = ref<any>([])
const courseStore = useCourseStore()

onMounted(async () => {
    await getAllCourse();
    data.value = courseStore.getAll   
})
</script>
<template>
    <PageContainer title="Onlayn darsliklar" subtitle="Online darsliklar">
        <template v-if="isLoading">Loading...</template>
        <div v-else class="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            <CourseCard v-for="item in data" :key="item.id" :courseData="item"  />
        </div>
    </PageContainer>
</template>