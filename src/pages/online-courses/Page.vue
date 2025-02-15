<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PageContainer from '@/components/PageContainer.vue';
import useGetAllCourse from './service';
import OnlineCourseCard from './_components/OnlineCourseCard.vue';
import CourseInfoSkeleton from '@/pages/online-courses/_components/CourseInfoSkeleton.vue'
import { useOnlineCourseStore } from './store';
const router = useRouter();
const courseStore = useOnlineCourseStore();

const { isLoading, getAllCourse } = useGetAllCourse();
const data = ref();


onMounted( async () => {
    await getAllCourse();
    data.value = courseStore.getAll
    console.log(data.value);
    
    
})
</script>
<template>
    <PageContainer title="Kurslar" subtitle="Sizda mavjud bo'lgan kurslar">
        <div v-if="isLoading" class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <CourseInfoSkeleton v-for="index in 2" :key="index" />
        </div>
        <div v-else class="mt-4 grid xl:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4 w-full">
            <OnlineCourseCard v-if="data" v-for="(item, index) in data" :key="index" :item="item"
                @click="router.push(`/online-courses/${item?._id}`)" />
        </div>

    </PageContainer>
</template>