<template>
    <section class="bg-white dark:bg-gray-800">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Yangi o'qtuvchi qo'shish</h2>
            <form @submit.prevent="handleSubmit()">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="w-full">
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ism</label>
                        <input type="text" v-model="userData.first_name" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="O'qtuvchi ismni kiriting" required="">
                    </div>
                    <div class="w-full">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Familya</label>
                        <input type="text" v-model="userData.last_name" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="O'qtuvchi familyasini kiriting" required="">
                    </div>
                    <div class="w-full">
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" v-model="userData.login" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Usernameni kiriting" required="">
                    </div>
                    <div class="w-full">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parol</label>
                        <input type="text" v-model="userData.password" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Parolni kiriting" required="">
                    </div>
                    <div class="w-full">
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon nomer</label>
                        <input type="text" v-model="userData.phone" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="+998 xx xxx xx xx" required="">
                    </div>
                    <div class="w-full">
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guruhlar</label>
                        
                        <button id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Guruhni tanlang 
                            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        <!-- Dropdown menu -->
                        <div id="dropdownDefaultCheckbox" class="z-10 hidden w-[300px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                                <li v-for="(item, index)  in groups" :key="index">
                                    <div class="flex items-center">
                                        <input :id="item._id" v-model="userData.group_ids" :value="item._id" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label :for="item._id" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ item.name }}</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>
                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Add product
                </button>
            </form>
        </div>
    </section>
</template>
<script>
import { initFlowbite, initDropdowns } from 'flowbite'
import { ApiService } from '@/services/apiServices';
export default {
    data(){
        return {
            token: localStorage.getItem('token'),   
            userData: {
                role: "teacher",
                first_name: "",
                last_name: "",
                login: "",
                password: "",
                phone: "",
                telegram_id: "",
                group_ids: []
            },
            groups: []  
        }
    },
    methods: {
        async getGroups(){
            try {
                const response = await ApiService.get('/group');
                this.groups = response;
            } catch (error) {
                console.log(error);
            }
        },
        async handleSubmit(){
            try {
                const response = await ApiService.post('/teacher', this.userData);
            } catch (error) {
                console.log(error);
            }
        },

    },
    created() {
        this.getGroups();
        initFlowbite();
        initDropdowns();
    },
    mounted() {
        initFlowbite();
        initDropdowns();
    },  
}
</script>
<style>
    
</style>