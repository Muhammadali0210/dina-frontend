<script>
import LessonModul from '../ui/LessonModul.vue'
import { useSidebarStore } from '@/stores/sidebarStore';

import ProgressBar from './ProgressBar.vue'


export default {
    setup() {
        const sidebarStore = useSidebarStore();
        return { sidebarStore }
    },
    methods: {
        changePage() {
            this.sidebarStore.isOpen = false;
        },
        setActiveLesson(lessonId){
            this.activeLesson = lessonId;
        }
    },
    components: {
        LessonModul,
        ProgressBar
    },
}
</script>
<template>
    <main :class="{ 'translate-x-0': sidebarStore.isOpen }"
        class="fixed top-0 left-0 z-40 w-80 h-screen pt-0 transition-transform -translate-x-full bg-white  border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
        <ProgressBar />
        <LessonModul  />
    </main>
</template>
