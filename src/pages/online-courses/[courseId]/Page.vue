<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import useGetAllCourse from '../service';
import CourseBanner from '../_components/CourseBanner.vue'
import CourseDetail from '../_components/CourseDetail.vue'
import CoursePrice from '../_components/CoursePrice.vue'
import CourseProgramm from '../_components/CourseProgramm.vue'
const route = useRoute();
const courseStore = useOnlineCourseStore();
const courseDetail = ref<any>();
const courses = ref();


onMounted(async () => {
    await getDashboardCourse(Number(route.params.id)); 
    courseDetail.value = courseStore.getCourseDetail;
    courses.value = courseStore.getAll;
    console.log(courseDetail.value);
})

</script>
<template>

    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-else class="custom-container">
            <div>
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
            </div>
        </div>
        <Separator class='my-6' />

        <CourseSlider />
    </div>
</template>
