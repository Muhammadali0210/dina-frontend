<script setup lang="ts">
import Navbar from './_components/Navbar.vue';
import Sidebar from './_components/Sidebar.vue'
import { RouterView } from 'vue-router';
import { useSidebarStore } from '@/stores/sidebarStore';

const sidebarStore = useSidebarStore();
</script>

<template>
    <div class="bg-slate-200 dark:bg-gray-900 ">
        <div class="grid grid-cols-2">
            <Navbar/>
            <Sidebar/>
        </div>
        <div class="p-0  md:pt-16 max-md:pt-16 lg:ml-80 min-h-screen" @click="sidebarStore.closeSidebar">
            <RouterView />
        </div>
    </div>
</template>

