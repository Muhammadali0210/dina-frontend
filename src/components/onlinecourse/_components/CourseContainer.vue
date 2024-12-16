<script setup lang="ts">
const props = defineProps({
    title: String,
    subtitle: String
})
</script>

<template>
    <div class="bg-white dark:bg-gray-800 p-4 rounded-md">
        <div>
            <h3 class="text-4xl font-extrabold">{{ props.title }}</h3>
            <p class="text-sm text-muted-foreground">
                {{ props.subtitle }}
            </p>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>