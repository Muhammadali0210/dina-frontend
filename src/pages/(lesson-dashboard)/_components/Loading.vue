<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>
  
<template>
    <div class="w-full">
        <div class="h-[10vh] w-full px-2 py-1 space-y-1  border-b border-gray-600">
            <Skeleton class="h-4 mt-1 w-[70%] " />
            <Skeleton class="h-4 w-full bg-gray-400 rounded-none" />
            <h1 class=" text-sm font-medium">0% Tugadi</h1>
        </div>
        <div class="mx-auto mt-1 flex w-[98%] flex-col space-y-1">
            <div v-for="i in 4" :key="i" class="bg-slate-300 dark:bg-gray-900 flex h-12 items-center justify-between px-2 py-4">
                <div class="flex flex-1 items-center space-x-2">
                    <Skeleton class="h-4 w-4 bg-blue-400" />
                    <Skeleton class="h-4 w-1/3 bg-blue-400" />
                </div>
                <Skeleton class="h-4 w-4 bg-blue-400" />
            </div>
        </div>
    </div>
</template>
  
  