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
            
            <DatePicker @dateSelected="handleDate" />  
            
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
                    <form @submit.prevent="handleCreate()">
                        <table class="max-sm:text-[14px] w-full max-xl:min-w-[560px] text-sm shadow-md sm:rounded-lg overflow-hidden text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="pl-4 max-sm:pl-2 pr-0 py-3 ">
                                        T/R
                                    </th>
                                    <th scope="col" class="px-0 py-3 ">
                                        Ism familya
                                    </th>
                                    <th scope="col" class="px-0 py-3 ">
                                        Oy
                                    </th>
                                    <th scope="col" class="px-0 py-3 ">
                                        To'lov statusi
                                    </th>
                                    <th scope="col" class="px-0 py-3 ">
                                        To'lov summasi
                                    </th>
                                    <th scope="col" class="px-0 py-3 ">
                                        To'lov turi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in filteredItems" :key="index" @click="openModal(item)"  class="cursor-pointer font-medium bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white">
                                    <th class="pl-4 max-sm:pl-2 pr-0 py-2">
                                        {{ index + 1 }}
                                    </th>
                                    <th class="px-0 py-2 flex gap-2 max-sm:gap-0 max-sm:flex-col">
                                        <span>{{ item.first_name }}</span>
                                        <span>{{ item.last_name }}</span>
                                    </th>
                                    <th class="px-0 py-2">
                                        {{ new Date(item.payment.month).toLocaleString('default', { month: 'long', year: 'numeric' }) }}
                                    </th>
                                    <th class="px-0 py-2">
                                        <div 
                                            class="inline text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 border" 
                                            :class="item.payment.status ? 'bg-green-100 text-green-800 dark:text-green-400 border-green-400' : 'bg-red-100 text-red-800 dark:text-red-400 border-red-400' ">
                                            {{ item.payment.status ? "To'langan" : "To'lanmagan"}}
                                        </div>
                                    </th>
                                    <th class="px-0 py-2 z-10">
                                        {{ item.payment.amount }} So'm
                                    </th>
                                    <th class="px-0 py-2">
                                        {{ item.payment.payment_type }} 
                                    </th>

                                </tr>
                            </tbody>
                        </table>
                    </form>
                </template>
            </template>
        </div>
        <!-- Buttons -->
    </div>
    <PaymentModal v-if="userData" :data="userData" :paymentmodal="paymentmodal" @reLoad="reLoadHanler()" @closePaymentModal="closeModal" />
</template>
<script>
import NoDataFound from '@/ui/NoDataFound.vue';
import { ApiService } from '@/services/apiServices';
import Loader from '@/ui/Loader.vue';
import { useCurrentIdStore } from '@/stores/currentId';
import DatePicker from '@/ui/DatePicker.vue';
import PaymentModal from '@/ui/PaymentModal.vue';
import { useRoute } from "vue-router"
export default {
    setup() {
        const currentIdStore = useCurrentIdStore()
        const router = useRoute()
        return {
            currentIdStore,
            router
        }
    },
    components: {
        Loader,
        NoDataFound,
        DatePicker,
        PaymentModal
    },
    data() {
        return {
            searchQuery: '',
            url: '/payment/group',
            users: null,
            token: localStorage.getItem("token"),
            isLoading: false,
            choosenDate: null,
            isToday: false,
            currentData: {
                group_id: null,
                month: null,
            },
            paymentData:[],
            isSubmiting: false,
            userData: null,
            paymentmodal: false
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
                this.currentData.month = this.choosenDate.slice(0, 7)
                this.currentData.group_id = this.router.params.id
                const res = await ApiService.postByToken(this.url, this.currentData, this.token)
                this.users = res
                this.isLoading = false
            } catch (err) {
                console.log(err)
                this.isLoading = false
            }
        },
        reLoadHanler() {
            this.getUsers()
        },
        handleDate(date){
            this.choosenDate = date
            this.getUsers()
        },
        async handleCreate() {
            try {
                this.isSubmiting = true
                this.paymentData = this.users.map((item) => {
                    return {
                        status: item.payment.status,
                        homework: item.payment.homework,
                        date: this.choosenDate,
                        student_id: item.student_id,
                        group_id: this.currentIdStore.currentId,
                    }
                })
                const response = await ApiService.postByToken('/payment/create', this.paymentData, this.token);
                this.$router.push('/payment')
            } catch (error) {
                console.log(error);
            } finally {
                this.isSubmiting = false;
            }
        },

        // paynment modal 
        openModal(item) {
            if(!item.payment.status){
                this.userData = item
                this.paymentmodal = true
            }
        },
        closeModal() {
            this.paymentmodal = false
        }
    },
    mounted() {
        this.choosenDate = new Date(new Date().getTime() + 60 * 5 * 60 * 1000).toISOString().slice(0, 10);
        this.getUsers()
    }
}
</script>
<style lang="">

</style>