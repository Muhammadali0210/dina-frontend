<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import VideoLesson from './_components/VideoLesson.vue';
import { useLessonStore } from './store';
import { useGetLesson } from './service';

const route = useRoute();
const lessonStore = useLessonStore();
const { isLoading, getLesson } = useGetLesson(); 

const lesson = ref();

onMounted(async () => {
    await getLesson(Number(route.query.lessonid));
    lesson.value = lessonStore.getLesson;
})

</script>
<template>
    <div class="p-2 md:p-5">
        <VideoLesson v-if="lesson" :lesson="lesson" />
        <h1 class="p-5 mt-4 bg-gray-300 dark:bg-gray-800 w-full">Lug'atlar va mashqlar</h1>  
    </div>
</template>
