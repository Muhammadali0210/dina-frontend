<template>
    <section class="bg-white dark:bg-gray-800">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">{{ title }}</h2>
            <ErrorAlert v-if="errorMessage" :errorMessage="errorMessage" />
            <template v-if="isLoading">
                <Loader />
            </template>
            <template v-else>
                <form @submit.prevent="handleSubmit()">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guruh nomi</label>
                            <input type="text" v-model="userData.name" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="O'qtuvchi ismni kiriting" required="">
                        </div>
                        <div class="w-full">
                            <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guruh darajasi</label>
                            
                            <div class="dropdown dropdown-bottom w-full">
                                <div tabindex="0" role="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-0">
                                    Guruh darajasini tanlang 
                                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </div>
                                <ul tabindex="0" class="dropdown-content menu z-[10] p-2 w-[300px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <li v-for="(group, index)  in groupsDegres" :key="index">
                                        <a class="cursor-pointer hover:bg-transparent">
                                            <input type="radio" v-model="userData.degree" :value="group" :checked="userData.degree === group" :id="group" name="radio-4" class="radio radio-accent bg-transparent" checked="checked" />
                                            <label :for="group" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ group }}</label>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-800">
                        <template v-if="isSubmiting">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Yuborilmoqda...
                        </template>
                        <template v-else>
                            {{ subtitle }}
                        </template>
                    </button>
                </form>
            </template>
        </div>
    </section>
</template>
<script>
import { ApiService } from '@/services/apiServices';
import { useCurrentIdStore } from '@/stores/currentId';
import Loader from '@/ui/Loader.vue';
import ErrorAlert from '@/ui/ErrorAlert.vue';
import { errorMessages } from 'vue/compiler-sfc';

export default {
    setup() {
        const currentIdStore = useCurrentIdStore();
        return {
            currentId: currentIdStore.getCurrentId,
        };
    },
    components: {
        Loader,
        ErrorAlert
    },
    data(){
        return {
            token: localStorage.getItem('token'),   
            userData: {
                name: "",
                degree: null,
            },
            groupsDegres: ["a1", "a2", "b1", "b2", "c1", "c2"],
            data: null,
            title: this.currentId ? "Guruhni malumotlarini o'zgartirish" : "Yangi guruh qo'shish",
            subtitle: this.currentId ? "O'zgartirish" : "Qo'shish",
            isLoading: false,
            isSubmiting: false,
            errorMessage: null,
            url: '/group'
        }
    },
    methods: {
        async getDataById(){
            try {
                this.isLoading = true;
                const response = await ApiService.getByIdToken(`${this.url}/${this.currentId}`, this.currentId, this.token);
                this.userData.name = response.name;
                this.userData.degree = response.degree;
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false;
            }
        },
        async handleSubmit(){
            this.isSubmiting = true;
            if(this.currentId){
                this.handleUpdate();
            } else {
                this.handleAdd();
            }
        },
        async handleAdd(){
            try {
                const response = await ApiService.postByToken(this.url, this.userData, this.token);
                this.$router.push('/group')
            } catch (error) {
                this.errorMessage = error.response.data.message
                console.log(error);
            } finally {
                this.isSubmiting = false;
            }
        },
        async handleUpdate(){
            try {
                const response = await ApiService.updateByIdToken(`${this.url}/${this.currentId}`, this.userData, this.token);
                this.$router.push('/group')
            } catch (error) {
                this.errorMessage = error.response.data.message
                console.log(error);
            } finally {
                this.isSubmiting = false;
            }
        },

    },
    
    async mounted() {
        if(this.currentId){
            this.getDataById();
        }
    },  
}
</script>
<style>
    
</style>