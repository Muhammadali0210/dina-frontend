<template>
    <div class="antialiased bg-slate-200 dark:bg-gray-900 flex items-center justify-center min-h-screen">
        <RouterView />
    </div>
</template>
<script>
import { RouterView } from 'vue-router';
import { initFlowbite } from 'flowbite';
export default {
    created() {
        initFlowbite();
    },
    mounted() {
        initFlowbite();
    },
}
</script>
<style></style>