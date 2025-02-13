<script setup lang="ts">
import { ApiService } from '@/services/apiServices';
import { useCurrentIdStore } from '@/stores/currentId';
import Loader from '@/ui/Loader.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const currentIdStore = useCurrentIdStore();

const userData = ref({
    first_name: "",
    last_name: "",
    login: "",
    phone: "",
    telegram_id: "",
})
const router = useRouter();
const isLoading = ref<boolean>(false);
const isSubmiting = ref<boolean>(false);
const errorMessage = ref("");

const handleSubmit = async () => {
    try {
        errorMessage.value = ""
        isSubmiting.value = true
        const res = await ApiService.updateByIdToken('/user-info', userData.value);
        console.log(res);
        router.push('/profile');
    } catch (error) {
        if (error instanceof Error) {
            // @ts-ignore
            errorMessage.value = error.response.data.message;
            console.log(error);
        } else {
            console.error('Unknown error:', error);
        }
    }finally {
        isSubmiting.value = false
    }
    
}

const getUserInfo = async () => {
    try {
        isLoading.value = true;
        const res = await ApiService.getByIdToken(`/user-info`);
        Object.assign(userData.value, res);
        console.log(userData.value);
        
    } catch (error) {
        console.log(error);
        
    } finally {
        isLoading.value = false;
    }
}

onMounted(async () => {
    await getUserInfo();
})
</script>
<template>
    <div class="w-full  h-auto p-[20px] bg-white dark:bg-gray-800 shadow-lg overflow-hidden relative">
        <div class="flex flex-col max-w-2xl mx-auto  justify-center items-center gap-4">
            <!-- <div class="w-[150px] h-[150px] relative rounded-full">
                <img src="../../assets/image/useer-avatar.png" alt="" class="rounded-full shadow-lg">
                <div class="absolute cursor-pointer shadow-md flex items-center justify-center bottom-0 right-0 z-50 w-[40px] h-[40px] bg-green-500 rounded-full">
                    <span class="z-50 cursor-pointer">
                        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-lcursor-pointerinecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
                        </svg>
                    </span>
                    <input type="file" class="w-full h-full opacity-0 absolute z-50 cursor-pointer">
                </div>
            </div> -->
            <template v-if="isLoading">
                <Loader />
            </template>
            <template v-else>
                <h3 v-if="errorMessage" class="text-red-500">{{ errorMessage }}</h3>
                <form @submit.prevent="handleSubmit()" class="w-full">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ism</label>
                            <input type="text" v-model="userData.first_name" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="O'qtuvchi ismni kiriting" required>
                        </div>
                        <div class="w-full">
                            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Familya</label>
                            <input type="text" v-model="userData.last_name" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="O'qtuvchi familyasini kiriting" required>
                        </div>
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Foydalanuvchi nomim</label>
                            <input type="text" v-model="userData.login" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Usernameni kiriting" required>
                        </div>
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon nomer</label>
                            <input type="text" v-model="userData.phone" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="+998 xx xxx xx xx" required>
                        </div>
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telegram ID</label>
                            <input type="text" v-model="userData.telegram_id" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Telegram ID">
                        </div>
                    </div>
                    <div class="flex items-center justify-end gap-4 mt-4">
                        <button 
                            type="button" 
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                            Bekor qilish
                        </button>
                        <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary">
                            <template v-if="isSubmiting">
                                <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                Yuborilmoqda...
                            </template>
                            <template v-else>
                                Saqlash
                            </template>
                        </button>
                    </div>
                </form>
            </template>
        </div>
    </div>
</template>

