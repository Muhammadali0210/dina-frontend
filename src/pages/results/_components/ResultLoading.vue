<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton';
</script>

<template>
    <div class="grid  max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        <Skeleton v-for="i in 3" :key="i" class="h-[350px] max-sm:h-[240px] rounded-xl w-full" />
    </div>    
</template>