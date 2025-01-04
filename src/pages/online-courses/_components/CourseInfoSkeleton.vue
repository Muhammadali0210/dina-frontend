<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton';

</script>

<template>
    <div class=" w-full border-gray-400 dark:bg-slate-900 bg-white cursor-pointer">

        <div class="relative">
            <Skeleton class="h-[180px] dark:bg-gray-900 w-full object-cover" />
            <div class="grid grid-cols-3 absolute bottom-0">
            </div>
        </div>
        <div class="mt-4">
            <Skeleton class="h-[30px] w-3/4 bg-gray-300 dark:bg-gray-900" />
        </div>
    </div>
</template>
