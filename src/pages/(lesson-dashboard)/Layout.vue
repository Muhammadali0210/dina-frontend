<script setup lang="ts">
import Navbar from './_components/Navbar.vue';
import Sidebar from './_components/Sidebar.vue'
import { RouterView } from 'vue-router';
import { useSidebarStore } from '@/stores/sidebarStore';

const sidebarStore = useSidebarStore();
</script>

<template>
    <div class="antialiased bg-slate-200 dark:bg-gray-900 ">
        <div class="grid grid-cols-2">
            <Navbar/>
            <Sidebar/>
        </div>
        <main class=" p-0  pt-20  lg:ml-80 min-h-screen" @click="sidebarStore.closeSidebar">
            <h1>Video Player</h1>
            <!-- <RouterView /> -->
        </main>
    </div>
</template>

