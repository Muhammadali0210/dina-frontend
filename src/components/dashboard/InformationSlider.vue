<template>
    <div class="h-full p-[0px]">
        <div class="flex justify-between mb-[15px]">
            <h1 class="text-[30px] text-gray-800 font-bold dark:text-white">Continue Watching</h1>
            <div class="gap-3 flex">
                <!-- Oldingi slayd tugmasi -->
                <button @click="slidePrev" class="bg-white h-[40px] w-[40px] rounded-[50%] relative hover:bg-green-500">
                    <img class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
                        src="/src/assets/icons/arrow-left.svg" alt="Prev">
                </button>
                <!-- Keyingi slayd tugmasi -->
                <button @click="slideNext" class="bg-white h-[40px] w-[40px] rounded-[50%] relative hover:bg-green-500">
                    <img class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
                        src="/src/assets/icons/arrow-right.svg" alt="Next">
                </button>
            </div>
        </div>

        <div class="bg-white shadow-lg p-[20px] overflow-hidden rounded-[25px] dark:bg-gray-800">
            <!-- Swiper komponenti -->
            <swiper ref="swiperRef" :onSwiper="onSwiperInit" 
                :spaceBetween="10"
                :slidesPerView="1"
                :loop="true"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :breakpoints="{
                400: { slidesPerView: 1, spaceBetween: 5 },
                480: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 }
                }"
                :modules="modules"
                class="mySwiper"
                >
                <!-- Swiper slaydlari -->
                <swiper-slide v-for="(slideData, index) in informationSlideData" :key="index">
                    <div class="card">
                        <img class="rounded-[15px] h-[150px] md:h-[180px] lg:h-[200px] w-full object-cover"
                            :src="slideData.url" alt="Image" />
                        <p
                            class="text-gray-800 dark:text-white text-sm md:text-base lg:text-lg font-bold leading-[23px] break-words pt-[10px]">
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
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ref } from 'vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const swiperRef = ref(null);

        const onSwiperInit = (swiper) => {
            swiperRef.value = swiper;
            console.log("Swiper is ready!");
        };

        const slideNext = () => {
            if (swiperRef.value) {
                swiperRef.value.slideNext();
            } else {
                console.warn("Swiper is not ready yet!");
            }
        };

        const slidePrev = () => {
            if (swiperRef.value) {
                swiperRef.value.slidePrev();
            } else {
                console.warn("Swiper is not ready yet!");
            }
        };

        return {
            swiperRef,
            onSwiperInit,
            slidePrev,
            slideNext,
            modules: [Autoplay, Pagination, Navigation],
            informationSlideData: [
                { url: '/src/assets/image/han1.jpg', description: 'Beginner\'s Guide to Becoming a Front-End Developer' },
                { url: '/src/assets/image/han2.jpg', description: 'Optimizing User Experience' },
                { url: '/src/assets/image/inf.jpg', description: 'Mastering Front-End Skills' },
                { url: '/src/assets/image/inf3.jpg', description: 'Perfecting the User Journey' },
            ],
        };
    }

};
</script>

<style>
.box {
    color: #06f5a9;
}
</style>
