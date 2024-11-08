<template>
    <button
        v-if="token"
        type="button"
        @click="isOpenMenue = !isOpenMenue"
        class="flex mx-3 text-sm border border-spacing-2 bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    >
        <img
            class="w-8 h-8 rounded-full"
            src="../assets/icons/user-avatar2.png"
            alt="user photo"
        />
    </button>
    <button @click="$router.push('/login')" v-else type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2 me-2 mb-0 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Kirish</button>
        
    <!-- user menue -->
    <div
        v-if="isOpenMenue && token"
        class="absolute top-[60px] right-[10px] z-50 my-4 w-56  text-base list-none bg-white  divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
    >
        <div class="py-3 px-4">
            <span
            class="block text-sm font-semibold text-gray-900 dark:text-white"
            >Neil Sims</span
            >
            <span
            class="block text-sm text-gray-900 truncate dark:text-white"
            >name@flowbite.com</span
            >
        </div>
        <ul
            class="py-1 text-gray-700 dark:text-gray-300"
            aria-labelledby="dropdown"
        >
            <li>
            <a
                href="#"
                class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >My profile</a
            >
            </li>
            <li>
            <a
                href="#"
                class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >Account settings</a
            >
            </li>
        </ul>
        <ul
            class="py-1 text-gray-700 dark:text-gray-300"
            aria-labelledby="dropdown"
        >
            <li>
            <a
                href="#"
                class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                ><svg
                class="mr-2 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                ></path>
                </svg>
                My likes</a
            >
            </li>
            <li>
            <a
                href="#"
                class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                ><svg
                class="mr-2 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                ></path>
                </svg>
                Collections</a
            >
            </li>
        </ul>
        <ul
            class="py-1 text-gray-700 dark:text-gray-300"
        >
            <li @click="logOut()" class="cursor-pointer">
                <div
                    
                    class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Chiqish</div
                >
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
    data() {
        return {
            token: localStorage.getItem('token'),
            isOpenMenue: false
        }
    },
    methods:{
        logOut() {
            localStorage.removeItem('token', '');
            localStorage.removeItem('role');
            this.token = null;
            // this.$router.push('/');
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