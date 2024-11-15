<template>
        
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" >
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
            
            <button @click="$router.push('/login')" v-else type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2 me-2 ml-3 mb-0 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Kirish</button>
        </div>
        <ul tabindex="0" class="dropdown-content menu shadow-2xl border z-[10] p-2 w-[300px] text-gray-800 dark:text-white bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700 dark:divide-gray-600">
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
    methods: {
        logOut() {
            localStorage.removeItem('token', '');
            localStorage.setItem('role', 'general');
            this.userStore.setCurrentRole('general');
            this.token = null;
            this.$router.push('/');
            this.isOpenMenue = false
        }
    }
}
</script>
<style></style>