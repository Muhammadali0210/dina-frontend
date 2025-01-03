<script setup lang="ts">
import PageContainer from "@/components/PageContainer.vue";     
import useGetAllCourse from './service';
import { onMounted } from "vue";

const { isLoading, data, getAllCourse } = useGetAllCourse();

onMounted(async () => {
    await getAllCourse();
})
</script>
<template>
    <PageContainer title="Online Courses" subtitle="Online darsliklar">
        <div>
            <h1>Courses</h1>
            <div v-for="(item, index) in data" :key="index">
                {{ item }}
            </div>
        </div>
    </PageContainer>
</template>