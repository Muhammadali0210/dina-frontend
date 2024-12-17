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
    data(){
        return{
            activeCourse: null,
             accordionItems: [
                {
                    value: 'item-1',
                    title: '1 - Modul',
                    lessonData: [
                        { id: '1', title: '#1 - Dars' },
                        { id: '2', title: '#2 - Dars' },
                       
                    ],
                },
                {
                    value: 'item-2',
                    title: '2 - Modul',
                    lessonData: [
                        { id: '4', title: '#4 - Dars' },
                       
                    ],
                },
                {
                    value: 'item-3',
                    title: '3 - Modul',
                    lessonData: [
                        { id: '7', title: '#7 - Dars' },
                        { id: '8', title: '#8 - Dars' },
                        { id: '9', title: '#9 - Dars' },
                        { id: '9', title: '#9 - Dars' },
                    ],
                },
            ]

        }
    }
}
</script>
<template>
    <main :class="{ 'translate-x-0': sidebarStore.isOpen }"
        class="fixed top-0 left-0 z-40 w-80 h-screen pt-0 transition-transform -translate-x-full bg-white  border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
        <ProgressBar />
        <LessonModul :data="accordionItems" />
    </main>
</template>
