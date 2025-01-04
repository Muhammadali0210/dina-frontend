<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PageContainer from '@/components/PageContainer.vue';
import useGetAllCourse from './service';
import OnlineCourseCard from './_components/OnlineCourseCard.vue';
import { useOnlineCourseStore } from './store';
const router = useRouter();
const courseStore = useOnlineCourseStore();

const { isLoading, getAllCourse } = useGetAllCourse();
const data = ref();

onMounted( async () => {
    await getAllCourse();
    data.value = courseStore.getAll
})
</script>
<template>
    <PageContainer title="Publish qilingan kurslar" subtitle="Siz yaratgan barcha online darsliglar">
        <div v-if="isLoading">
            Loading...
        </div>
        <div v-else class="mt-4 grid grid-cols-3 gap-4 w-full">
            <OnlineCourseCard v-if="data" v-for="(item, index) in data" :key="index" :item="item" @click="router.push(`/online-courses/${item?._id}`)" />
        </div>
    </PageContainer>
</template>