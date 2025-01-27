<script setup lang="ts">
import Section from './Section.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Progress } from '@/components/ui/progress'
import { useSidebarStore } from '@/stores/sidebarStore';
import { useGetDashboardCourse } from '../service';
import Loading from './Loading.vue';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-vue-next';
import { useDashboardCourseStore } from '../store';
import { ref, watch } from 'vue';

const sidebarStore = useSidebarStore();
const route = useRoute();
const { isLoading, getDashboardCourse } = useGetDashboardCourse();

const courseStore = useDashboardCourseStore();
const course = ref<any>();

watch(() => courseStore.getAll, () => {
    course.value = courseStore.getAll
})
const reload = async() => {
    await getDashboardCourse(Number(route.params.id));
    course.value = courseStore.getAll
}
onMounted(async() => {
    await getDashboardCourse(Number(route.params.id));
    course.value = courseStore.getAll
})
</script>
<template>
    <main :class="{ 'translate-x-0': sidebarStore.isOpen }"
        class="fixed top-0 left-0 z-40 w-80 h-screen pt-0 max-md:pt-[10vh] transition-transform -translate-x-full bg-white  border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
        <template v-if="isLoading"><Loading/></template>
        <template v-else>
            <template v-if="course">
                <div class="px-2 py-1 space-y-1   border-b border-gray-300 dark:border-gray-600">
                    <h1 class="font-bold">{{ course?.course?.title || 'Kurs nomi' }}</h1>
                    <Progress class=" bg-gray-200 dark:bg-gray-700" :model-value="course?.progressPercentage" /> 
                    <h1 class=" text-sm font-medium">{{course?.progressPercentage}}% Tugadi</h1>
                </div>
                <Section :sections="course?.sections" />
            </template>
            <div v-else class="flex flex-col h-full items-center justify-center">
                <h1 class="text-center mb-3">Internet bilan bog'liq muommo mavjud. Malumotlar yuklanmadi!</h1>
                <Button @click="reload"><Download />Qayta yuklash</Button>
            </div>
        </template>
    </main>
</template>
