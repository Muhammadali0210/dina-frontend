<template>
    <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        <div class="rounded-[35px] bg-white dark:bg-slate-800 shadow-lg p-[15px] flex justify-start gap-4 items-center">
            <div class="w-[70px] h-[70px] bg-[#b7cdef5d] rounded-[45%] relative items-center">
                <img class=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[30px] h-[30px] "
                    src="../../assets/icons/user.svg" alt="user icon">
            </div>
            <div class="">
                <p class="font-bold">O'quvchilar soni:</p>
                <h1 class="text-[40px] text-black dark:text-white leading-none font-extrabold">100</h1>
            </div>
        </div>


        <div class="rounded-[35px] bg-white dark:bg-slate-800 shadow-lg p-[15px] flex justify-start gap-4 items-center">
            <div class="w-[70px] h-[70px] bg-[#e2bbe45b] rounded-[45%] relative items-center">
                <img class=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[30px] h-[30px] "
                    src="../../assets/icons/profile-2user.svg" alt="user icon">
            </div>
            <div class="">
                <p class="font-bold">Guruhlar soni:</p>
                <h1 class="text-[40px] text-black dark:text-white leading-none font-extrabold">10</h1>
            </div>
        </div>


        <div class="rounded-[35px] bg-white dark:bg-slate-800 shadow-lg p-[15px] flex justify-start gap-4 items-center">
            <div class="w-[70px] h-[70px] bg-[#99d69c5c] rounded-[45%] relative items-center">
                <img class=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[30px] h-[30px] "
                    src="../../assets/icons/medal-star.svg" alt="user icon">
            </div>
            <div class="">
                <p class="font-bold">Natijalar soni:</p>
                <h1 class="text-[40px] text-black dark:text-white leading-none font-extrabold">10</h1>
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