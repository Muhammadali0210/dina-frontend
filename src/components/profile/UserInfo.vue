<template>
    <div
        v-if="userData"
        class="container w-full max-w-[1017px] h-auto rounded-[20px] bg-white dark:bg-gray-800 shadow-lg overflow-hidden relative ">
        <!-- Banner Section -->
        <div
            class="banner w-full sm:h-[180px] h-[140px] rounded-t-[20px] bg-slate-400 relative flex sm:justify-start sm:pl-[30px] justify-center">
            <!-- Profil tasviri -->
            <img src="../../assets/image/banner-bg3.png" class="absolute top-0 left-0 w-full h-full object-cover">
            <img class="absolute w-[164px] h-[164px] rounded-full border-4 border-white bg-gray-700 dark:border-gray-800 bottom-[-82px]"
                src="../../assets/image/useer-avatar.png" alt="Profile image">
        </div>




        <div class="info mt-[100px]  mb-2 pl-[30px] text-left max-sm:text-center " >
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{{ userData.first_name }} {{ userData.last_name }}</h1>
            <h3 class="text-sm text-gray-500  font-bold mt-1 dark:text-white">{{ userRole }}</h3>
        </div>

        <!-- Contact Info Section -->
        <div class="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 w-[95%] m-auto gap-4 mb-[20px]">

            <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                <h1 class="block text-gray-600 m-0 dark:text-white">Guruh</h1>
                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/Phone.svg" alt="Phone Icon" class="w-[40px] h-[40px]">
                    <p class="text-gray-700 text-lg font-bold dark:text-white">{{ userData.group_name }}</p>
                </div>
            </div>


            <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                <h1 class="block text-gray-600 m-0 dark:text-white">Foydalanuvchi nomi</h1>
                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/parent.svg" alt="Mail Icon" class="w-[40px] h-[40px]">
                    <p class="text-gray-700 text-lg font-bold dark:text-white">{{ userData.login }}</p>
                </div>
            </div>

            <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                <h1 class="block text-gray-600 m-0 dark:text-white">Telegram ID</h1>
                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/Mail.svg" alt="Location Icon" class="w-[40px] h-[40px]">
                    <p class="text-gray-700 dark:text-white text-lg font-bold djordan@mail.comark:text-white">
                        {{ userData.telegram_id || '123456' }}
                    </p>
                </div>
            </div>

            <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                <h1 class="block text-gray-600 m-0 dark:text-white">Telefon raqam</h1>
                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/Phone.svg" alt="Location Icon" class="w-[40px] h-[40px]">
                    <p class="text-gray-700 text-lg font-bold dark:text-white">{{ userData.phone }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore";
export default {
    data() {
        return {
            userData: null,
            userRole: localStorage.getItem('role')
        }
    },
    methods: {
        getUserInfo() {
            const userStore = useUserStore();
            this.userData = userStore.userInfo;
        }
    },
    mounted(){
        this.getUserInfo();
    }
};
</script>

<style scoped>
.profil-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
