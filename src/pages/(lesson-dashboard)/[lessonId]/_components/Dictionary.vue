<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton';
import { BadgeCheck } from "lucide-vue-next"
import { Separator } from '@/components/ui/separator';
import { useLessonStore } from '../store';
import { defineProps } from 'vue';
const courseStore = useLessonStore();

const props = defineProps({
    lesson: {
        type: Object,
        required: false,
    },
})
</script>

<template>
    <div class="mt-4 shadow-md rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-[#0b0f1a] dark:to-secondary p-4 lg:p-6">
        <Skeleton v-if="courseStore.lessonLoading" class="w-[200px] h-6" />
        <h1 v-else class="text-xl font-bold">{{ props.lesson?.title }}</h1>
        <Separator class="my-2" />
        <h2 class='text-lg font-semibold'>
            Darsga oid lug'atlar
        </h2>

        <div v-if="courseStore.lessonLoading" class='mt-5 grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2'>
            <div v-for="item in 6" class="flex gap-2" :key="item">
                <BadgeCheck class='size-5 text-blue-500' />
                <Skeleton class="w-[200px] h-4" />
            </div>
        </div>
        <div v-else class='mt-5 grid max-sm:grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            <div v-for="item in 10" class="flex gap-2" :key="item">
                <BadgeCheck class='size-5 text-blue-500' />
                <!-- <p class='flex-1'>{{item}}</p> -->
                <p class='flex-1'>apple - olma</p>
            </div>
        </div>
    </div>
</template>