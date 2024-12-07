<template lang="">
    <div class="w-full bg-white dark:bg-gray-700 md:p-[20px] p-[10px] md:static  fixed bottom-0 left-0 grid md:grid-cols-1 grid-cols-2 ">
        <div class="">
            <h1 class="dark:text-white text-gray-700 text-[24px] font-bold" >Kurs narxi</h1>
             <h1 class="dark:text-white text-gray-700 text-[24px] font-bold">Pullik <span class="font-normal text-[20px]">350.000 UZS</span></h1>
        </div>
        <div @click="lessonHandler" class="flex items-center md:border-t  border-gray-300 pt-3">
            <button  class="w-full text-[14px] dark:text-black dark:bg-white bg-green-500 text-white  py-[13px] " type="">Kirish</button>
        </div>
    </div>
  
</template>
<script>
export default {
        methods:{
            lessonHandler(){
                this.$router.push('/course-full')
            }
        }
}
</script>
<style lang="">

</style>