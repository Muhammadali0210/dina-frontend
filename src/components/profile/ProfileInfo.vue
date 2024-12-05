<template>
    <template v-if="isLoading">
        <Loader />
    </template>
    <template v-else>
        <div
            v-if="userData"
            class="w-full h-auto rounded-[20px] bg-white/75 backdrop-blur-md dark:bg-gray-800 shadow-lg overflow-hidden relative"
        >
            <!-- Banner Section -->
            
            <div
                class="banner w-full sm:h-[180px] h-[140px] rounded-t-[20px] bg-slate-400 relative flex sm:justify-start sm:pl-[30px] justify-center">
                <!-- Profil tasviri -->
                <img src="../../assets/image/banner-bg3.png" class="absolute top-0 left-0 w-full h-full object-cover">
                <img class="absolute w-[164px] h-[164px] rounded-full border-4 border-white bg-gray-700 dark:border-gray-800 bottom-[-82px]"
                    src="../../assets/image/useer-avatar.png" alt="Profile image">
                <button 
                    v-if="currentUserId == ''"
                    @click="editProfile"
                    type="button" 
                    class="flex gap-1 items-center absolute right-2 top-3 z-50  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                    Tahrirlash
                    <span>
                        <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>
                    </span>
                </button>
            </div>

            <div class="info mt-[100px]  mb-2 pl-[30px] text-left max-sm:text-center " >
                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{{ userData.data.first_name }} {{ userData.data.last_name }}</h1>
                <h3 class="text-sm text-gray-500  font-bold mt-1 dark:text-white">{{ userRole }}</h3>
            </div>

            <!-- Contact Info Section -->
            <div class="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 w-[95%] m-auto gap-4 mb-[20px]">

                <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                    <h1 class="block text-gray-600 m-0 dark:text-white">Guruh</h1>
                    <div class="flex items-center gap-2">
                        <img src="../../assets/icons/Phone.svg" alt="Phone Icon" class="w-[40px] h-[40px]">
                        <p class="text-gray-700 text-lg font-bold dark:text-white">{{ userData.data.group_name }}</p>
                    </div>
                </div>


                <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                    <h1 class="block text-gray-600 m-0 dark:text-white">Foydalanuvchi nomi</h1>
                    <div class="flex items-center gap-2">
                        <img src="../../assets/icons/parent.svg" alt="Mail Icon" class="w-[40px] h-[40px]">
                        <p class="text-gray-700 text-lg font-bold dark:text-white">{{ userData.data.login }}</p>
                    </div>
                </div>

                <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                    <h1 class="block text-gray-600 m-0 dark:text-white">Telegram ID</h1>
                    <div class="flex items-center gap-2">
                        <img src="../../assets/icons/Mail.svg" alt="Location Icon" class="w-[40px] h-[40px]">
                        <p class="text-gray-700 dark:text-white text-lg font-bold djordan@mail.comark:text-white">
                            {{ userData.data.telegram_id || '123456' }}
                        </p>
                    </div>
                </div>

                <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                    <h1 class="block text-gray-600 m-0 dark:text-white">Telefon raqam</h1>
                    <div class="flex items-center gap-2">
                        <img src="../../assets/icons/Phone.svg" alt="Location Icon" class="w-[40px] h-[40px]">
                        <p class="text-gray-700 text-lg font-bold dark:text-white">{{ userData.data.phone }}</p>
                    </div>
                </div>
            </div>

        </div>
        <template v-else>
            <NoDataFound />
        </template>
    </template>
</template>

<script>
import { useUserStore } from "@/stores/userStore";
import { ApiService } from "@/services/apiServices";
import Loader from "@/ui/Loader.vue";
import NoDataFound from "@/ui/NoDataFound.vue";
export default {
    data() {
        return {
            userData: null,
            userRole: localStorage.getItem('role'),
            isLoading: false,
            currentUserId: localStorage.getItem('userId')
        }
    },
    components: {
        Loader,
        NoDataFound
    },
    methods: {
        async getUserInfo() {
            try {
                this.isLoading = true
                if(localStorage.getItem('userId') == '') {
                    const res = await ApiService.getByIdToken(`/profile/${localStorage.getItem('profileId')}`);
                    this.userData = res
                } else {
                    const res = await ApiService.getByIdToken(`/profile/${localStorage.getItem('userId')}`);
                    this.userData = res
                }
            } catch (error) {
                console.log(error);
            }   finally {
                this.isLoading = false
            }
        },
        editProfile(){
            this.$router.push('/profile/edit');
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
