<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const lessonHandler = () => {
    router.push('/course-full'); 
};


const props = defineProps({
    courseDetail: {
        type: Object,
        
    },
});

</script>

<template lang="">
    <div class="w-full bg-white dark:bg-gray-900 md:p-[20px] p-[10px] md:static  fixed bottom-0 left-0 grid md:grid-cols-1 grid-cols-2 ">
        <div class="">
            <h1 class="dark:text-white text-gray-700 text-[24px] font-bold" >Kurs narxi</h1>
             <h1 class="dark:text-white text-gray-700 text-[24px] font-bold">Pullik <span class="font-normal text-[20px]">{{courseDetail.currentPrice}} UZS</span></h1>
        </div>
        <div @click="lessonHandler" class="flex items-center md:border-t  border-gray-300 pt-3">
            <button  class="w-full text-[14px] dark:text-black dark:bg-white bg-green-500 text-white  py-[13px] " type="">Kirish</button>
        </div>
    </div>
  
</template>

