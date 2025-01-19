<template>
    <div class="bg-white dark:bg-gray-800 p-4 rounded-md max-w-[1400px] mx-auto">
        <div class="flex justify-between border-b border-gray-600 mb-4">
            <div class=" ">

                <div class="flex items-center gap-2">
                    <h3 class="text-4xl max-md:text-2xl font-extrabold text-gray-700 dark:text-white">
                        Guruhlar
                    </h3>

                </div>
                <p class="text-sm text-muted-foreground">Barcha guruhlar</p>
            </div>
            <AlertDialog>
                <AlertDialogTrigger>
                    <span class="cursor-pointer text-sm flex gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg">
                        <svg class="w-5 h-5  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14m-7 7V5" />
                        </svg>
                        <span class="text-white ">Qo'shish</span>
                    </span>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AddUpdateGroup />
                    <AlertDialogAction @click="refreshData" class="ml-2 text-white absolute bottom-2 right-2">Saqlash
                    </AlertDialogAction>
                </AlertDialogContent>



            </AlertDialog>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <GroupSkalation v-if="isLoading" v-for="n in 5" :key="n" />
            <Card v-else v-for="(item, index) in filteredItems" :key="index"
                class="p-4 flex relative items-center gap-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg">
                <div>
                    <div @click="nextPage(item._id, item.teacher)" class="w-full flex gap-4">
                        <div>
                            <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-lg font-semibold text-gray-800 dark:text-white">{{ item.name }}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-300">{{ item.studentCount }}</p>
                        </div>
                    </div>

                </div>
                <div class="absolute top-2 right-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M12 6h.01M12 12h.01M12 18h.01" />
                            </svg>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent class="dark:bg-gray-900 bg-white">
                            <AlertDialog>
                                <AlertDialogTrigger @click="updateItem(item._id)"
                                    class="hover:bg-gray-100 dark:hover:bg-slate-800 rounded-[4px] transition-colors duration-200">
                                    <span class="cursor-pointer flex gap-2 px-2.5 pt-1 py-1">
                                        <img src="../../assets/icons/edit.svg" alt="E" />
                                        <span>Tahrirlash</span>
                                    </span>
                                </AlertDialogTrigger>

                                <AlertDialogContent class="max-w-4xl w-full bg-white dark:bg-gray-800">
                                    <AddUpdateGroup :item-id="selectedItemId" />
                                    <AlertDialogAction @click="refreshData"
                                        class="ml-2 text-white absolute bottom-2 right-2">Saqlash
                                    </AlertDialogAction>
                                </AlertDialogContent>
                            </AlertDialog>
                            <DropdownMenuItem>
                                <div class="cursor-pointer flex justify-between gap-2"
                                    @click="openDeleteModal(item._id)">
                                    <img src="../../assets/icons/trash.svg" alt="E" />
                                    <span>O'chirish</span>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div class="absolute bottom-2 right-2">
                    <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">{{ item.degree }}</p>
                </div>

            </Card>
        </div>
        <DeleteModal 
            v-if="isModalOpen" 
            :modal="isModalOpen" 
            :url="deleteUrl" 
            :id="selectedItemId" 
            @close="closeDeleteModal"
            @deleted="handleDelete"
        />
    </div>


</template>
<script>
import DeleteModal from '@/ui/DeleteModal.vue';
import GroupSkalation from './components/GroupSkalation.vue'
import AddUpdateGroup from './Add&UpdateGroup.vue';
import { ApiService } from '@/services/apiServices';
import { useCurrentIdStore } from '@/stores/currentId';
import {
    Card,
} from '@/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogFooter,
} from '@/components/ui/alert-dialog'

export default {
    components: {
        DeleteModal,
        AddUpdateGroup,
        GroupSkalation,
        Card,
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuTrigger,
        AlertDialog,
        AlertDialogContent,
        AlertDialogTrigger,
        AlertDialogAction,
        AlertDialogCancel,
        AlertDialogFooter,
    },
    data() {
        return {
            searchQuery: '',
            isModalOpen: false,
            selectedItemId: null,
            url: '/groups',
            deleteUrl: '/group',
            users: null,
            token: localStorage.getItem("token"),
            isLoading: false
        }
    },
    computed: {
        filteredItems() {
            return this.searchQuery
                ? this.users.filter((item) => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
                : this.users;

        },




    },
    methods: {
        async refreshData() {
            try {
                this.isLoading = true;
                const response = await ApiService.getByIdToken(this.url);
                this.users = response;


            } catch (error) {
                console.error("Bazadan ma'lumot olishda xatolik:", error);
            } finally {
                this.isLoading = false;
            }
        },
        openDeleteModal(id) {
            this.selectedItemId = id;
            this.isModalOpen = true;
        },
        closeDeleteModal() {
            this.isModalOpen = false;
            this.selectedItemId = null;
        },
        handleDelete() {
            this.refreshData();
            this.closeDeleteModal();
        },
        updateItem(id) {
            const currentIdStore = useCurrentIdStore();
            currentIdStore.setCurrentId(id);
        },
        nextPage(id) {
            const currentIdStore = useCurrentIdStore();
            currentIdStore.currentId = null;
            this.$router.push({
                path: '/group/student',
                query: { id },
            });
        }

    },
    mounted() {
        this.refreshData();
    }
}
</script>

<style lang=""></style>


