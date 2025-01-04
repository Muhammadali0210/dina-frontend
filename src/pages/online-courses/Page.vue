<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PageContainer from '@/components/PageContainer.vue';
import useGetAllCourse from './service';
import OnlineCourseCard from './_components/OnlineCourseCard.vue';
import CourseInfoSkeleton from '@/pages/online-courses/_components/CourseInfoSkeleton.vue';
import { useOnlineCourseStore } from './store';

const router = useRouter();
const courseStore = useOnlineCourseStore();

const { isLoading, getAllCourse } = useGetAllCourse();
const data = ref([]);
const steklon = ref(0);

onMounted(async () => {
    await getAllCourse();
    data.value = courseStore.getAll;

    // Skeletonlar sonini hisoblash
    steklon.value = Object.keys(data.value).length; // `data.value` dan foydalaniladi
});
</script>

<template>
    <PageContainer title="Publish qilingan kurslar" subtitle="Siz yaratgan barcha online darsliglar">
        <!-- Skeletonlar yuklanayotgan paytda ko'rsatiladi -->
        <div v-if="isLoading" class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <CourseInfoSkeleton v-for="index in 2" :key="index" />
        </div>

        <!-- Kurslar ro'yxati -->
        <div v-else class="mt-4 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
            <OnlineCourseCard
                v-for="(item, index) in data"
                :key="index"
                :item="item"
                @click="router.push(`/online-courses/${item?._id}`)"
            />
        </div>
    </PageContainer>
</template>
