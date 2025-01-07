<script setup lang="ts">
import { formatLessonTime } from '@/lib/colculate-duration'
import { Video } from 'lucide-vue-next'
import { defineProps } from 'vue';
import type { ILesson } from '@/types';

defineProps({
    lesson: Object
})

</script>

<template>
    <div
        class='flex items-center justify-between py-2 hover:opacity-75'
        :key="lesson?._id"
        role='button'
    >
        <div class='flex items-center gap-2'>
            <Video />
            <p>{{ lesson?.title }}</p>
        </div>
        <p v-if="lesson">{{ formatLessonTime(lesson as ILesson) }}</p>
    </div>
</template>