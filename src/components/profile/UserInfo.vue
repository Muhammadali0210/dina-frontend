<template lang="html">
    <div
        class="container w-full max-w-[1017px] h-auto rounded-[20px] bg-white dark:bg-gray-800 shadow-lg overflow-hidden relative ">
        <!-- Banner Section -->
        <div class="banner w-full h-[140px] rounded-t-[20px] bg-blue-700 relative">
            <img class="w-full h-full rounded-t-[20px]" src="../../assets/image/Masking.svg" alt="Banner image">
        </div>


        <div class=" flex md:items-center md:justify-start justify-center items-center">
            <img class="absolute w-[164px] h-[164px]  rounded-full border-4 border-white top-[40px] md:left-[30px]"
                src="../../assets/icons/user-avatar2.png" alt="Profile image">

            <div class="info mt-[80px] ml-[30px] text-left">
                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Abubakir Sobitov</h1>
                <h3 class="text-sm text-gray-500 mt-1 dark:text-white">Admin</h3>
            </div>
        </div>

        <!-- Contact Info Section -->
        <div class="flex flex-col w-[95%] m-auto md:flex-row md:justify-start md:items-start gap-4 mb-[20px]">

            <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                <h1 class="block text-gray-600 m-0 dark:text-white">Guruh</h1>
                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/Phone.svg" alt="Phone Icon" class="w-[40px] h-[40px]">
                    <p class="text-black text-lg font-bold dark:text-white">Topik A24</p>
                </div>
            </div>


            <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                <h1 class="block text-gray-600 m-0 dark:text-white">Foydalanuvchi nomi</h1>
                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/parent.svg" alt="Mail Icon" class="w-[40px] h-[40px]">
                    <p class="text-black text-lg font-bold dark:text-white">bigbosdev</p>
                </div>
            </div>

            <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                <h1 class="block text-gray-600 m-0 dark:text-white">Telegram ID</h1>
                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/Mail.svg" alt="Location Icon" class="w-[40px] h-[40px]">
                    <p class="text-black dark:text-white text-lg font-bold djordan@mail.comark:text-white">@Bigbosdev
                    </p>
                </div>
            </div>

            <div class="flex items-start gap-2 w-full p-[5px] flex-col text-left">
                <h1 class="block text-gray-600 m-0 dark:text-white">Telefon raqam</h1>
                <div class="flex items-center gap-2">
                    <img src="../../assets/icons/Location.svg" alt="Location Icon" class="w-[40px] h-[40px]">
                    <p class="text-black text-lg font-bold dark:text-white">+12 345 6789 0</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Profile",
};
</script>

<style scoped>
.profil-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
