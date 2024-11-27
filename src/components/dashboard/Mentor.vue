<template>
    <h1 class="text-gray-700 dark:text-white font-bold text-lg mb-4">Ustozlar</h1>

    <template v-if="isLoading">
        Loading...
    </template>
    <template v-else>
        <div class="bg-[#e0f4f97a] dark:bg-gray-700 rounded-2xl" v-if="users">
            <div v-for="(item, index) in  users" class="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div class="collapse-title text-xl font-medium">
                    <div class="dark:bg-gray-700 flex justify-between items-center">
                        <!-- <img class="w-[60px] h-[60px] rounded-full"
                            alt="user avatar"> -->
                        <div class="leading-tight">
                            <h1 class="text-gray-700  dark:text-white font-bold text-base">{{ item.first_name}} {{
                                item.last_name }}</h1>
                            <p class="text-gray-500 text-sm">{{ item.role }}</p>
                        </div>
                    </div>
                </div>
                <div class="collapse-content">
                    <div>
                        <h1 class="text-[15px] dark:text-white text-gray-700 font-bold">Telefon raqam: {{ item.phone }}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<script>
import { ApiService } from '@/services/apiServices'; 
import axios from "axios"
// import {userStore} from '@/stores/sidebarStore'

export default {
    data() {
        return {
            users: null, 
            token: localStorage.getItem("token"),
            isLoading: false,
            url: "/teacher"
        };
    },
    methods: {
        async getUser() {
            try {
                this.isLoading = true; 
                const response = await ApiService.getByIdToken(this.url, this.token);
                console.log(response);  // Get user data from the response.data
                this.users = response; 
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false; 
            }
        },
    },
    created() {
        this.getUser(); 
        
    }
};
</script>

<style scoped>
/* Qo'shimcha stil */
.box {
    color: #c6e8e3d4;
}
</style>
