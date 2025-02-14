<script setup lang="ts">
import { useUserStore } from "@/stores/userStore";
import { ApiService } from "@/services/apiServices";
import Loader from "@/ui/Loader.vue";
import NoDataFound from "@/ui/NoDataFound.vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const userData = ref<any>(null);
const isLoading = ref(false);
const currentUserId = ref(localStorage.getItem('userId'));
const userRole = ref(localStorage.getItem('role'));

async function getUserInfo() {
    try {
        isLoading.value = true;
        if (route.params.id) {
            const res = await ApiService.getByIdToken(`/profile/${route.params.id}`);
            userData.value = res;
        } else {
            const Id = localStorage.getItem('Id');
            const res = await ApiService.getByIdToken(`/profile/${Id}`);
            userData.value = res;
        }
    } catch (error) {
        console.log(error);
    } finally {
        isLoading.value = false;
    }
}

watch(
    () => route.params.id,      
    () => {
        getUserInfo();
    }
)

function editProfile() {
    router.push('/profile/edit');
}

onMounted(() => {
    getUserInfo();
});
</script>
<template>
    <template v-if="isLoading">
        <Loader />
    </template>
    <template v-else>
        <div v-if="userData"
            class="w-full h-auto rounded-[20px] bg-white/75 backdrop-blur-md dark:bg-gray-800 shadow-lg overflow-hidden relative">
            <!-- Banner Section -->

            <div
                class="banner w-full sm:h-[180px] h-[140px] rounded-t-[20px] bg-slate-400 relative flex sm:justify-start sm:pl-[30px] justify-center">
                <!-- Profil tasviri -->
                <img src="../../assets/image/banner-bg3.png" class="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy">
                <img class="absolute w-[164px] h-[164px] rounded-full border-4 border-white bg-gray-700 dark:border-gray-800 bottom-[-82px]"
                    src="@/assets/icons/avatar.png" alt="Profile image" loading="lazy">
                <button v-if="!route.params.id" @click="editProfile" type="button"
                    class="flex gap-1 items-center absolute right-2 top-3 z-50  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                    Tahrirlash
                    <span>
                        <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>
                    </span>
                </button>
            </div>

            <div class="info mt-[100px]  mb-2 pl-[30px] text-left max-sm:text-center ">
                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{{ userData.data?.first_name }} {{
                    userData.data?.last_name }}</h1>
                <h3 class="text-sm text-gray-500  font-bold mt-1 dark:text-white">{{ userRole }}</h3>
            </div>

            <!-- Contact Info Section -->
            <div class="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 w-[95%] m-auto gap-4 mb-[20px]">

                <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                    <h1 class="block text-gray-600 m-0 dark:text-white">Guruh</h1>
                    <div class="flex items-center gap-2">
                        <svg class="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                                clip-rule="evenodd" />
                        </svg>

                        <p class="text-gray-700 text-lg font-bold dark:text-white">{{ userData.data.group_name }}</p>
                    </div>
                </div>


                <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                    <h1 class="block text-gray-600 m-0 dark:text-white">Foydalanuvchi nomi</h1>
                    <div class="flex items-center gap-2">
                        <svg class="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2"
                                d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p class="text-gray-700 text-lg font-bold dark:text-white">{{ userData.data.login }}</p>
                    </div>
                </div>

                <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                    <h1 class="block text-gray-600 m-0 dark:text-white">Telegram ID</h1>
                    <div class="flex items-center gap-2">
                        <svg class="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
                        </svg>
                        <p class="text-gray-700 dark:text-white text-lg font-bold djordan@mail.comark:text-white">
                            {{ userData.data.telegram_id || '123456' }}
                        </p>
                    </div>
                </div>

                <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                    <h1 class="block text-gray-600 m-0 dark:text-white">Telefon raqam</h1>
                    <div class="flex items-center gap-2">
                        <svg class="w-[40px] h-[40px]  text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                        </svg>
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

