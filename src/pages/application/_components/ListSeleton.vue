<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton';

</script>
<template>
    <div class="w-full overflow-x-auto hide-scrollbar">
        <div class="dark:bg-slate-900 bg-slate-100 p-3 rounded-md my-1 grid grid-cols-1 min-w-max">
            <div class="flex flex-wrap gap-4 justify-between items-center min-w-max">
                <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-2 m:grid-cols-2 min-w-max">
                    <Skeleton class="w-[100px] h-4" />
                    <Skeleton class="w-[150px] h-4" />
                </div>

                <!-- Contact Info Section -->
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 min-w-max">
                    <Skeleton class="w-[80px] h-4" />
                    <Skeleton class="w-[120px] h-4" />
                </div>

                <!-- Date and Time Section -->
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 sm:hidden">
                    <Skeleton class="w-[50px] h-4" />
                    <Skeleton class="w-[70px] h-4" />
                </div>

                <div class="max-sm:hidden flex gap-4 items-center min-w-max">
                    <Skeleton class="w-[60px] h-4" />
                </div>
            </div>
        </div>
    </div>
</template>
