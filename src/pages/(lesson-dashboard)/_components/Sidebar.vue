<script setup lang="ts">
import Section from './Section.vue';
import { Progress } from '@/components/ui/progress'
import { useSidebarStore } from '@/stores/sidebarStore';

const sidebarStore = useSidebarStore();
</script>
<template>
    <main :class="{ 'translate-x-0': sidebarStore.isOpen }"
        class="fixed top-0 left-0 z-40 w-80 h-screen pt-0 transition-transform -translate-x-full bg-white  border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="lg:mt-0 px-2 py-[11px] space-y-1  border-b border-gray-600">
            <div class="flex justify-between">
            <h1 class="dark:text-white text-[18px] font-bold leading-[18px]">O'zlashtirish</h1>
            <h1 class="dark:text-white text-[18px] font-bold leading-[18px]">64%</h1>
            </div>
            <Progress class="" :model-value="64" /> 
        </div>
        <Section />
    </main>
</template>
