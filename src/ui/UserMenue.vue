<template>
    <button
        id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
        v-if="token"
        type="button"
        
        class="flex mx-3 text-sm border border-spacing-2 border-green-500 dark:border-gray-500 bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    >
        <img
            class="w-8 h-8 rounded-full"
            src="../assets/icons/user-avatar2.png"
            alt="user photo"
        />
    </button>
    <button @click="$router.push('/login')" v-else type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2 me-2 mb-0 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Kirish</button>
        
    
    

    <!-- Dropdown menu -->
    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li @click="$router.push('/profile')">
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profil</a>
        </li>
        <li @click="logOut()">
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Chiqish</a>
        </li>
        </ul>
    </div>
</template>
<script>
import { useUserStore } from '../stores/userStore';
export default {
    setup() {
        const userStore = useUserStore();
        return {
            userStore
        }
    },
    data() {
        return {
            token: localStorage.getItem('token'),
            isOpenMenue: false
        }
    },
    methods:{
        logOut() {
            localStorage.removeItem('token', '');
            localStorage.setItem('role', 'general');
            this.userStore.setCurrentRole('general');
            this.token = null;
            this.$router.push('/');
            this.isOpenMenue = false
        }
    },
    // watch(){
    //     localStorage.getItem('token').(newToken, oldToken) {
    //         this.token = newToken
    //     }
    // }
}
</script>
<style>
    
</style>