<template lang="">
    <div class="">
        <div class="flex items-center max-md:items-start max-lg:gap-2 justify-between flex-col flex-wrap md:flex-row pb-4 bg-transparent dark:bg-gray-900">
            <div class="flex items-center space-x-4 max-md:w-full"> 

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
                    <table class="w-full max-xl:min-w-[650px] text-sm shadow-md sm:rounded-lg overflow-hidden text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="pl-4 pr-0 py-3 ">
                                    Studentlar malumotlari
                                </th>
                                
                                <th scope="col" class="px-0 py-3 w-[80px]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in filteredItems" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white">
                                <th class="pl-4 pr-0 py-2">
                                    {{ item.first_name }} {{ item.last_name }}
                                    <!-- <UserInfo :firstName="item.first_name" :lastName="item.last_name" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" :login="item.login" /> -->
                                </th>
        
                                <td class="px-0 py-4 relative">
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </template>
        </div>
    </div>

</template>
<script>
import UserInfo from '@/ui/UserInfo.vue';
import NoDataFound from '@/ui/NoDataFound.vue';
import { ApiService } from '@/services/apiServices';
import Loader from '@/ui/Loader.vue';
import { useCurrentIdStore } from '@/stores/currentId';
export default {
    setup() {
        const currentIdStore = useCurrentIdStore()
        return {
            currentIdStore
        }
    },
    components: {
        UserInfo,
        Loader,
        NoDataFound
    },
    data() {
        return {
            searchQuery: '',
            url: '/attendance/group',
            users: null,
            token: localStorage.getItem("token"),
            isLoading: false,
            data: {
                group_id: this.currentIdStore.currentId,
                date: new Date().toISOString().slice(0, 10)
            }
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
        async getUsers() {
            this.isLoading = true
            try {
                const res = await ApiService.postByToken(this.url, this.data, this.token)
                this.users = res
                console.log(res);
                
                this.isLoading = false
            } catch (err) {
                console.log(err)
                this.isLoading = false
            }
        }
    },
    mounted() {
        this.getUsers()
    }
}
</script>
<style lang="">

</style>