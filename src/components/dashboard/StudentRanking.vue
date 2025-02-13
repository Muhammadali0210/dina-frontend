<script setup lang="ts">
import { defineProps } from 'vue';
import { ScrollArea } from '../ui/scroll-area';

const props = defineProps({
    data: Object
})
</script>

<template>
    <div class="p-5 dark:bg-slate-800 bg-white rounded-[10px] ">
        <p class="dark:text-slate-300 text-slate-500 font-bold text-lg">Video darslardagi o'quvchilar reytingi !</p>
        <ScrollArea
            v-if="props.data?.studentsWithProgressPercentage.length !== 0"
            :class="props.data?.studentsWithProgressPercentage.length <= 6 ? 'h-auto' : 'h-[500px] pr-3'"
        >
            <main class="flex justify-between mb-3" v-for="(item, index) in props.data?.studentsWithProgressPercentage" :key="index">
                <div class="flex gap-2">
                    <img class="w-[45px] h-[45px] rounded-full overflow-hidden" src="@/assets/icons/avatar.png" alt="">
                    <h1 class="grid grid-cols-1">
                        <span class="">{{ item.first_name + ' ' + item.last_name }}</span>
                        <span>D-team</span>
                    </h1>
                </div>
                <div class="flex items-center space-x-2">
                    <span
                        class="dark:bg-slate-900 bg-slate-200 sm:px-[20px] px-[13px] sm:py-[10px] py-[8px] rounded-md flex items-center justify-center">
                        <label>{{ item.progressPercentage.toFixed(0) }} %</label>
                    </span>
                    <span class="dark:text-white font-medium text-lg">{{ index + 1 }}</span>
                </div>
            </main>
        </ScrollArea>
    </div>

</template>