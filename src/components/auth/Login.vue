<template>
    <div
        class=" w-[500px] max-md:w-[90%] block p-6 bg-slate-200 rounded-xl">
        <MainLogo class="dark:text-gray-900 text-gray-900" style="color: #111827;" />
        <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit()">
            <ErrorAlert v-if="message" :errorMessage="message" />
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Foydalanuvchi nomi</label>
                <input type="text" v-model="loginData.login" name="email" id="email"
                    class="bg-transparent border-green-500 forminput text-gray-900 dark:text-gray-900 placeholder-gray-700 dark:placeholder-gray-700 rounded-lg focus:ring-green-500 focus:border-gray-600 border-2 block w-full p-2.5"
                    placeholder="Foydalanuvchi nomini kiriting" required>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Parol</label>
                <input  type="password" v-model="loginData.password" name="password" id="password" placeholder="Parolni kiriting"
                    class="bg-transparent border-green-500 forminput text-gray-900 placeholder-gray-700 rounded-lg focus:ring-green-500 focus:border-gray-600 border-2 block w-full p-2.5"
                    required>
            </div>
            <div class="flex items-center justify-between">
                <a href="#" class="text-sm font-medium text-green-500 hover:underline dark:text-green-500">
                    Parolni unutdingizmi?
                </a>
            </div>
            <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full shadow-lg text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:opacity-80 dark:focus:ring-green-500"
                :class="isSubmitting ? 'cursor-not-allowed opacity-80' : ''"
            >
                <template v-if="!isSubmitting">
                    Kirish
                </template>
                <template v-else>
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Yuborilmoqda...
                </template>
            </button>
        </form>
    </div>

    <!--  -->
</template>
<script>
import { ApiService } from '@/services/apiServices.ts';
import { useUserStore } from '@/stores/userStore.ts';
import ErrorAlert from '@/ui/ErrorAlert.vue';
import MainLogo from '@/ui/MainLogo.vue';
export default {
    data() {
        return {
            loginData: {
                login: '',
                password: ''
            },
            message: '',
            isSubmitting: false
        };
    },
    components: {
        ErrorAlert,
        MainLogo
    },
    methods: {
        handleResult(result) {
            console.log("Urinish natijasi: ",result);   
        },
        async handleSubmit() {
            try {
                localStorage.setItem('status', '');
                this.message = '';
                this.isSubmitting = true;
                const response = await ApiService.post('/auth/login', this.loginData)
                
                // if(localStorage.getItem('status') == '200') {
                //     console.log("Tizimga muvaffaqiyatli kirildi");
                // }
                if(response.token) {
                    this.$router.push('/');
                    const userStore = useUserStore();
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('role', response.role);
                    localStorage.setItem('profileId', response.id);
                    localStorage.setItem('userId', response.id);
                    userStore.currentRole = response.role;
                }
            } catch (error) {
                    this.message = error.response.data.message
            } finally {
                this.isSubmitting = false;
            }
        }
    }
}
</script>
<style>
.blurbg{
    background: rgba(255, 255, 255, 0.541); /* Yalang'och shaffoflik */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.541);
    backdrop-filter: blur(7px); /* Blur effekt */
    z-index: 1;
}

</style>