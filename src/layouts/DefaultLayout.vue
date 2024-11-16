<template>
    <div class="antialiased bg-slate-200 dark:bg-gray-900">
        <Header />
        <Sidebar />
        <main class="p-4 lg:ml-64 min-h-screen h-auto pt-20" @click="sidebarStore.closeSidebar">
            <RouterView />
        </main>
    </div>
</template>
<script>
import Sidebar from '../components/sidebar/Sidebar.vue';
import Header from '../components/header/Header.vue';
import { RouterView } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import { useSidebarStore } from '../stores/sidebarStore';
import { ApiService } from '@/services/apiServices';
import { useGroupStore } from '@/stores/groupStore';

export default {
    setup() {
        const sidebarStore = useSidebarStore();
        const groupStore = useGroupStore();
        return {
            sidebarStore,
            groupStore
        }    
    },
    components: {
        Sidebar,
        Header,
    },
    methods: {
        async getGroup(){
            try {
                const response = await ApiService.get("/group");
                this.groupStore.setGroups(response);
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.getGroup();
    }
}
</script>
<style></style>