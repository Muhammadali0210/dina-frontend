<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

const props = defineProps({
    courseDetail: {
        type: Object,
        
    },
});

onMounted(() => {
    console.log(props.courseDetail); 
});
</script>
<template lang="">
   <div class="w-full bg-white/55 backdrop-blur-md dark:bg-gray-900 md:p-[30px] p-[20px] grid lg:grid-cols-2 grid-cols-1 gap-4">

    <div class="order-2 lg:order-1 p-2 ">
        <h1 class="dark:text-white  text-gray-900 text-[30px] font-bold">{{courseDetail.category}}</h1>
        <p class="dark:text-gray-400  md:text-[16px] text-[14px] py-[10px] text-gray-500">
            {{courseDetail.description}}
        </p>
        <div class="grid grid-cols-2 py-[10px]">
            <h3 class="text-gray-800 sm:text-[14px] text-[13px] dark:text-white">
                Davomiylik: <span class="font-bold">13 soat 11 daqiqa</span>
            </h3>
            <h3 class="text-gray-800 sm:text-[14px] text-[13px] dark:text-white ">
                Davomiylik: <span class="font-bold">13 soat 11 daqiqa</span>
            </h3>
        </div>
    </div>
    
    <div class="order-1 lg:order-2 p-2">
        <img class="bg-cover w-full  h-[300px] " :src="courseDetail.previewImage" alt="previewImage">
    </div>
</div>

</template>

