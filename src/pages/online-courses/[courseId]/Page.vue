<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card'
import Description from './_components/Description.vue';
import Overview from './_components/Overview.vue';
import Hero from './_components/Hero.vue';
import {useGetDashboardCourse} from './service';
import { useOnlineCourseStore } from '../store'
const { isLoading, data, getDashboardCourse } = useGetDashboardCourse();
import CourseSlider from './_components/CourseSlider.vue';
const route = useRoute();
const courseStore = useOnlineCourseStore();
const courseDetail = ref<any>();
const courses = ref();


onMounted(async () => {
    await getDashboardCourse(Number(route.params.id)); 
    courseDetail.value = courseStore.getCourseDetail;
    courses.value = courseStore.getAll;
})

</script>
<template>
    <div class='mx-auto max-w-6xl max-md:px-3 max-md:pt-4'>
        <div class='grid grid-cols-3 gap-4 pt-0'>
            <div class='col-span-2 max-lg:col-span-3 space-y-4'>
                <Hero :course="courseDetail" />
                <Overview :course="courseDetail" />
            </div>
            <div class='col-span-1 max-lg:col-span-3'>
                <Description :course="courseDetail" />
            </div>
        </div>
        <Separator class='my-6' />

        <CourseSlider />
    </div>
</template>