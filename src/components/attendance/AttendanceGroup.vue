<template>
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
            
            <DatePicker2 @dateSelected="handleDate" />  
            
        </div>
        <div class="w-full max-xl:overflow-x-scroll rounded-lg">
            <template v-if="isLoading">
                    <CustomLoader />
            </template>
            <template v-else>
                <template v-if="!users">
                    <NoDataFound />
                </template>
                <template v-else>
                    <form @submit.prevent="handleCreate()">
                        <table class="w-full max-xl:min-w-[360px] text-sm shadow-md sm:rounded-lg overflow-hidden text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="pl-4 max-sm:pl-2 pr-0 py-3 ">
                                        T/R
                                    </th>
                                    <th scope="col" class="px-0 py-3 ">
                                        Ism familya
                                    </th>
                                    <th scope="col" class="px-0 py-3 ">
                                        Davomat
                                    </th>
                                    <th scope="col" class="px-0 py-3 ">
                                        Uyga fazifa
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in filteredItems" :key="index" class="font-medium bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white">
                                    <th class="pl-4 max-sm:pl-2 pr-0 py-2">
                                        {{ index + 1 }}
                                    </th>
                                    <th class="px-0 py-2 flex gap-2 max-sm:gap-0 max-sm:flex-col">
                                        <span>{{ item.first_name }}</span>
                                        <span>{{ item.last_name }}</span>
                                    </th>
                                    <th class="px-0 py-2">
                                        <label class="inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" v-model="item.attendance.status" :checked="item.attendance.status" :disabled="isDisabled" class="sr-only peer">
                                            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                        </label>
                                    </th>
                                    <th class="px-0 py-2 z-10">
                                        <label class="z-10 inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" v-model="item.attendance.homework" :checked="item.attendance.homework" :disabled="isDisabled"  class="z-1 sr-only peer">
                                            <div class=" relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                        </label>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <div class="flex justify-end items-center mt-4" v-if="filteredItems && isToday">
                            <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-0 sm:mt-0 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-800">
                                <template v-if="isSubmiting">
                                    <Loader class="animate-spin" />
                                    Yuborilmoqda...
                                </template>
                                <template v-else>
                                    {{ subtitle }}
                                </template>
                            </button>
                        </div>
                    </form>
                </template>
            </template>
        </div>
        <!-- Buttons -->
    </div>

</template>
<script>
import NoDataFound from '@/ui/NoDataFound.vue';
import { ApiService } from '@/services/apiServices';
import CustomLoader from '@/ui/Loader.vue';
import { useCurrentIdStore } from '@/stores/currentId';
import DatePicker from '@/ui/DatePicker.vue';
import DatePicker2 from '@/ui/DatePicker2.vue';
import { useRoute } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast';
import { Loader } from 'lucide-vue-next';

export default {
    setup() {
        const router = useRoute()
        const currentIdStore = useCurrentIdStore()
        const { toast } = useToast()
        return {
            currentIdStore,
            router,
            toast
        }
    },
    components: {
        CustomLoader,
        NoDataFound,
        DatePicker,
        DatePicker2,
        Loader
    },
    data() {
        return {
            searchQuery: '',
            url: '/attendance/group',
            users: null,
            token: localStorage.getItem("token"),
            isLoading: false,
            choosenDate: null,
            isActive: false,
            isDisabled: false,
            isToday: false,
            currentData: {
                group_id: null,
                date: null,
            },
            attendanceData:[],
            isSubmiting: false,
            subtitle: ''
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
            try {
                this.isLoading = true
                this.currentData.date = this.choosenDate
                this.currentData.group_id = parseInt(this.router.params.id)
                
                const res = await ApiService.postByToken(this.url, this.currentData, this.token)
                this.users = res
                this.isActive = res[0].attendance.is_active
                this.isToday = res[0].attendance.date.slice(0, 10) == new Date(new Date().getTime() + 60 * 5 * 60 * 1000).toISOString().slice(0, 10)
                if(!this.isToday) {
                    this.isDisabled = true
                } else {
                    this.isDisabled = false
                }
                this.subtitle = this.isActive ? "O'zgartirish" : "Saqlash"
                this.isLoading = false
            } catch (err) {
                console.log(err)
                this.isLoading = false
            }
        },
        handleDate(date){
            this.choosenDate = date
            this.getUsers()
        },
        async handleCreate() {
            try {
                this.isSubmiting = true
                this.attendanceData = this.users.map((item) => {
                    return {
                        status: item.attendance.status,
                        homework: item.attendance.homework,
                        date: this.choosenDate,
                        student_id: item.student_id,
                        group_id: parseInt(this.router.params.id),
                        is_active: this.isActive ? true : false
                    }
                })

                const response = await ApiService.postByToken('/attendance/create', this.attendanceData, this.token);
                this.$router.push('/attendance')
            } catch (error) {
                console.log(error);
            } finally {
                this.isSubmiting = false;
            }
        }
    },
    mounted() {
        this.choosenDate = (new Date(new Date().getTime() + 60 * 5 * 60 * 1000).toISOString().slice(0, 10));
        this.getUsers()
    }
}
</script>
<style lang="">

</style>