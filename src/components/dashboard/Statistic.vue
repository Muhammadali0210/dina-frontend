<template>
    <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">

        <div
            class="rounded-[35px] bg-white dark:bg-slate-800 shadow-lg p-[15px] max-md:p-[10px] max-md:rounded-[20px] flex justify-start gap-4 items-center">
            <div
                class="w-[65px] h-[65px] max-md:w-[55px] max-md:h-[55px]   bg-[#b7cdef5d] rounded-[45%] relative items-center">
                <img class=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[30px] h-[30px] "
                    src="../../assets/icons/user.svg" alt="user icon">
            </div>
            <div class="">
                <p class="font-bold dark:text-gray-300 text-gray-500">O'quvchilar</p>
                <h1 class="text-[40px] max-md:text-[30px] text-gray-700 dark:text-white leading-none font-extrabold">148
                </h1>
            </div>
        </div>

        <div
            class="rounded-[35px] bg-white dark:bg-slate-800 shadow-lg p-[15px] max-md:p-[10px] max-md:rounded-[20px] flex justify-start gap-4 items-center">
            <div
                class="w-[65px] h-[65px] max-md:w-[55px] max-md:h-[55px]  bg-[#e2bbe45b] rounded-[45%] relative items-center">
                <img class=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[30px] h-[30px] "
                    src="../../assets/icons/profile-2user.svg" alt="user icon">
            </div>
            <div class="">
                <p class="font-bold dark:text-gray-300 text-gray-500 ">Guruhlar</p>
                <h1 class="text-[40px] max-md:text-[30px] text-gray-700 dark:text-white leading-none font-extrabold">26
                </h1>
            </div>
        </div>


        <div
            class="rounded-[35px] bg-white dark:bg-slate-800 shadow-lg max-md:rounded-[20px] p-[15px] max-md:p-[10px] flex justify-start gap-4 items-center">
            <div
                class="w-[65px] h-[65px] max-md:w-[55px] max-md:h-[55px] bg-[#99d69c5c] rounded-[45%] relative items-center">
                <img class=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[30px] h-[30px] "
                    src="../../assets/icons/medal-star.svg" alt="user icon">
            </div>
            <div class="">
                <p class="font-bold dark:text-gray-300 text-gray-500">Natijalar</p>
                <h1 class="text-[40px] max-md:text-[30px] text-gray-700 dark:text-white leading-none font-extrabold">97
                </h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.box{
    color: #99d69c5c;
}
</style>