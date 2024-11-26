<template>
    <div class=" h-full p-[0px]">
        <div class="flex justify-between mb-[15px]">
            <h1 class="text-[30px] text-gray-800 font-bold dark:text-white">Contunie Watching</h1>
            <div class="gap-3 flex">
                <button class="bg-white h-[40px] w-[40px] rounded-[50%] relative hover:bg-green-500 "><img
                        class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
                        src="../../assets/icons/arrow-left.svg" alt=""></button>
                <button class="bg-white h-[40px] w-[40px] rounded-[50%] relative hover:bg-green-500"><img
                        class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
                        src="../../assets/icons/arrow-right.svg" alt=""></button>
            </div>
        </div>

        <div class="bg-white shadow-lg p-[20px] overflow-hidden rounded-[25px] dark:bg-gray-800">

            <swiper :spaceBetween="20" :slidesPerView="3" :freeMode="true" :loop="true" :centeredSlides="true" :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" :navigation="false" :modules="modules" class="mySwiper">
                <swiper-slide class="" v-for="(slideData, index) in informationSlideData" :key="index">
                    <div class="card">
                        <img class="rounded-[25px]  h-[180px]" :src="slideData.url" alt="">
                        <div class="inline-block w-[50%] mt-2 rounded-[35px] bg-[#92d0bc41] px-4 py-[0px]">
                            <h1 class="flex items-center text-sm font-bold text-[#20d199]">
                                <img class="w-4" src="../../assets/icons/code.svg" alt="Icon">{{ slideData.title }}
                            </h1>
                        </div>
                        <p class="text-gray-800 dark:text-white text-lg font-bold leading-[23px] break-words pt-[15px]">
                            {{ slideData.description }}
                        </p>
                    </div>
                </swiper-slide>

            </swiper>

        </div>
    </div>

</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
            informationSlideData:[
                {
                    url: './src/assets/image/inf.jpg',
                    title: 'FRONT-END',
                    description: 'Beginner\'s Guide to Becoming a Professional programmer Developer',
                    image: './src/assets/image/inf.jpg',
                },
                {
                    url: './src/assets/image/inf3.jpg',
                    title: 'UI/UX DESIGN',
                    description: 'Optimizing User Expriendence with the Best UI/UX Desigin',
                    image: './src/assets/image/inf.jpg',
                }, {
                    url: './src/assets/image/inf.jpg',
                    title: 'FRONT-END',
                    description: 'Beginner\'s Guide to Becoming a Professional programmer Developer',
                    image: './src/assets/image/inf.jpg',
                },
                {
                    url: './src/assets/image/inf3.jpg',
                    title: 'UI/UX DESIGN',
                    description: 'Optimizing User Expriendence with the Best UI/UX Desigin',
                    image: './src/assets/image/inf.jpg',
                },                
            ]
        };
    },
    
}
</script>
<style>
.box {
    color: #06f5a9;
}
</style>