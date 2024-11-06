<template>

    <a href="#"
        class=" w-[25%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <a href="#" class="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="../../assets/icons/logo.png" alt="logo">
            DinaKorean
        </a>
        <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="handleLogin()">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Login</label>
                <input type="text" v-model="login" name="email" id="email"
                    class="bg-gray-50  text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Loginni kiriting !" required>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parol</label>
                <input type="password" v-model="password" name="password" id="password" placeholder="••••••••"
                    class="bg-gray-50  text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 ,"
                    required>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-start">
                    <!-- <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required="">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div> -->
                </div>
                <a href="#" class="text-sm font-medium text-green-500 hover:underline dark:text-green-500">Forgot
                    password?</a>
            </div>
            <button type="submit"
                class="w-full text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:opacity-80 dark:focus:ring-green-500">Sign
                in</button>
            <p class="text-sm text-red-600" v-if="errorMessages">{{ errorMessages }}</p>
        </form>

    </a>

    <!--  -->
</template>
<script>
export default {
    data() {
        return {
            login: '',
            password: '',
            isPasswordError: false,
            errorMessages: '',
        };
    },
    methods: {
        handleLogin() {
            if (this.login === "admin" && this.password === "12345") {
                this.isPasswordError = false;
                this.$router.push("/")

            } else {

                this.isPasswordError = true;
                this.errorMessages = "Login yoki parol xato";
            }
        }
    }
}
</script>
<style></style>