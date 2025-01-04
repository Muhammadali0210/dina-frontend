<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useOnlineCourseStore } from '../store';
import { ref, onMounted } from 'vue';
import useGetAllCourse from '../service';
import CourseBanner from '../_components/CourseBanner.vue'
import CourseDetail from '../_components/CourseDetail.vue'
import CoursePrice from '../_components/CoursePrice.vue'
import CourseProgramm from '../_components/CourseProgramm.vue'
import CourseForWho from '../_components/CourseForWho.vue'
import PageContainer from '@/components/PageContainer.vue'
const route = useRoute();
const courseStore = useOnlineCourseStore();
const { isLoading, getAllCourse } = useGetAllCourse();

const courseDetail = ref<any>();


onMounted(async () => {
    const count = courseStore.getAll
    if(count.length == 0) await getAllCourse();

    const allData = await courseStore.getAll
    courseDetail.value = allData.find((item: any) => item._id == route.params.id);
})

</script>
<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <PageContainer title="Kurslar haqida">
                <div class=" grid grid-cols-1 gap-4">
                    <CourseBanner v-if="courseDetail" :courseDetail=courseDetail />
                    <div class="grid md:grid-cols-12 gap-4 grid-cols-1">
                        <div class="md:col-span-8 col-span-6">
                            <CourseDetail />
                        </div>
                        <div class="md:col-span-4 col-span-6">
                            <CoursePrice v-if="courseDetail" :courseDetail=courseDetail />
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="md:col-span-8 col-span-12 ">
                            <CourseProgramm />
                            <CourseForWho />
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    </div>
</template>
