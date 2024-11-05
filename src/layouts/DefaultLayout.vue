<template>
    <div class="antialiased bg-slate-200 dark:bg-gray-900">
        <Header />
        <Sidebar />

        <main class="p-4 md:ml-64 min-h-screen h-auto pt-20 ">
            <slot />
        </main>
    </div>
</template>
<script>
import Sidebar from '../components/sidebar/Sidebar.vue';
import Header from '../components/header/Header.vue'
export default {
    components: {
        Sidebar,
        Header
    }
}
</script>
<style>
    
</style>