<script setup lang="ts">
import Separator from '@/components/ui/separator/Separator.vue';
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
    }
})
</script>

<template>
    <div class="bg-white dark:bg-gray-800 p-4 rounded-md max-w-[1400px] mx-auto max-sm:p-2 max-sm:min-h-[100vh] max-sm:rounded-none">
        <div>
            <h3 class="text-4xl font-extrabold text-gray-700 dark:text-white max-sm:text-2xl">{{ props.title }}</h3>
            <p class="text-sm text-muted-foreground">
                {{ props.subtitle }}
            </p>
            <Separator class="my-2" />
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>