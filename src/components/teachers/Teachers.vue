<template lang="">
    <div class="">
        <div class="flex items-center max-md:items-start max-lg:gap-2 justify-between flex-col flex-wrap md:flex-row pb-4 bg-transparent dark:bg-gray-900">
            <div class="flex items-center space-x-4 max-md:w-full"> 
                <button @click="addHandler" type="button" class="px-5 py-[6px] text-sm font-medium text-white inline-flex items-center bg-green-500 hover:opacity-80 focus:ring-4 focus:outline-none  rounded-lg text-center dark:bg-green-500 dark:hover:opacity-80 ">
                    <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                    </svg>
                    Qo'shish
                </button>

                <div class="relative max-md:w-full">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" v-model="searchQuery" class="block max-md:w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 max-sm:w-[100%] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
                </div>
            </div>
        </div>

        <div class="w-full max-xl:overflow-x-scroll rounded-lg">
            <template v-if="isLoading">
                    <Loader />
            </template>
            <template v-else>
                <template v-if="!users">
                    <NoDataFound />
                </template>
                <template v-else>
                    <table class="w-full max-xl:min-w-[950px] text-sm shadow-md sm:rounded-lg overflow-hidden text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 ">
                                    O'qtuvchi malumotlari
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Telefon nomer
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Guruhral
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3 w-[80px]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in filteredItems" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white">
                                <th class="px-6 py-2">
                                    <UserInfo :firstName="item.first_name" :lastName="item.last_name" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" :login="item.login" />
                                </th>
                                <td class="px-6 py-4 ">
                                    {{ item.phone }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ item.group_ids }}
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {{ item.role }}
                                    </div>
                                </td>
                                <td class="px-6 py-4 relative">
                                    <div class="flex gap-3 h-[18px]">
                                        <span class="cursor-pointer" @click="updateItem(item._id)">
                                            <img src="../../assets/icons/edit.svg" alt="E">
                                        </span>
                                        <span class="cursor-pointer" @click="openDeleteModal(item._id)">
                                            <img src="../../assets/icons/trash.svg" alt="E">
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </template>
        </div>
    </div>

    <DeleteModal
      v-if="isModalOpen"
      :modal="isModalOpen"
      :url="url"
      :id="selectedItemId"
      @close="closeDeleteModal"
      @deleted="handleDelete"
    />
</template>
<script>
import DeleteModal from '@/ui/DeleteModal.vue';
import UserInfo from '@/ui/UserInfo.vue';
import NoDataFound from '@/ui/NoDataFound.vue';
import { ApiService } from '@/services/apiServices';
import Loader from '@/ui/Loader.vue';
import { useCurrentIdStore } from '@/stores/currentId';
export default {
    components: {
        DeleteModal,
        UserInfo,
        Loader,
        NoDataFound
    },
    data() {
        return {
            searchQuery: '',
            isModalOpen: false,
            selectedItemId: null,
            url: '/teacher',
            users: null,
            token: localStorage.getItem("token"),
            isLoading: false
        }
    },
    computed: {
        filteredItems() {
            if (this.searchQuery) {
                return this.users.filter((item) =>
                    item.first_name.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
            return this.users;
        },
    },
    methods: {
        addHandler() {
            const currentIdStore = useCurrentIdStore();
            currentIdStore.setCurrentId(null);
            this.$router.push('/teachers/add');
        },
        openDeleteModal(id) {
            this.selectedItemId = id;
            this.isModalOpen = true;
        },
        closeDeleteModal() {
            this.isModalOpen = false;
            this.selectedItemId = null; // O'chirilayotgan IDni tozalash
        },
        handleDelete() {
            this.getUser();
            this.closeDeleteModal();
        },
        updateItem(id) {
            const currentIdStore = useCurrentIdStore();
            currentIdStore.setCurrentId(id);
            this.$router.push('/teachers/add');
        },
        async getUser() {
            try {
                this.isLoading = true;
                const response = await ApiService.getByIdToken(this.url, this.token);
                this.users = response;
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false;
            }
        }
    },
    mounted() {
        this.getUser();
    }
}
</script>
<style lang="">

</style>