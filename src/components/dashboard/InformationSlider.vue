<template>
    <div class="h-full p-[0px]">
        <div class="flex card justify-between mb-[10px]">
            <h1 class="max-lg:text-[30px] text-[30px] text-gray-800 font-bold dark:text-white">Yangiliklar</h1>
            <div class="gap-3 flex justify-end">
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

        <div class="bg-white shadow-lg p-[15px] overflow-hidden rounded-[10px] dark:bg-gray-800">

            <swiper ref="swiperRef" :onSwiper="onSwiperInit" :spaceBetween="10" :slidesPerView="2" :loop="true"
                :autoplay="{ delay: 2500, disableOnInteraction: false }" :breakpoints="{
                    400: { slidesPerView: 1, spaceBetween: 5 },
                    480: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 40 }
                }" :modules="modules" class="mySwiper">

                <swiper-slide @click="goToPage(index)" v-for="(slideData, index) in informationSlideData" :key="index">
                    <div class="card">
                        <img class="rounded-[15px] h-[150px] md:h-[160px] lg:h-[210px] w-full object-cover"
                            :src="slideData.url" alt="Image" />
                        <p
                            class="text-gray-800 dark:text-white text-sm md:text-base lg:text-lg font-bold leading-[23px] break-words pt-[10px]">
                            {{ slideData.description }}
                        </p>
                        <a v-if="slideData.link && slideData.LinkName" :href="slideData.link" download>
                            <button class="p-2 bg-blue-700 text-white dark:text-white rounded-lg">
                         {{ slideData.LinkName }}
                            </button>
                        </a>
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
import { useRouter } from 'vue-router';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const router = useRouter(); // useRouter ni o'zgarmas qilib olamiz

        const names = ['about', 'onlinelesson', 'card3', 'card4']
        const goToPage = (index) => {
            router.push({ name: names[index], params: { id: index + 1 } });
        };

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
                { url: 'https://ik.imagekit.io/vtroph5l9/Product/Mobiless.png?updatedAt=1750673168895', 
                  description: 'Dinakorean Mobile app', 
                  link:'/public/dina_app.apk',
                  LinkName:'Dasturni yuklash'
                },
                { url: 'https://ik.imagekit.io/vtroph5l9/Product/photo_2025-06-23_15-04-47.jpg?updatedAt=1750673186223',
                  description: 'Topik.Di Premium', 
                  link:'https://topikibt.netlify.app',
                  LinkName:'Topik IBT'
                },
                { url: 'https://ik.imagekit.io/vtroph5l9/Product/Dina_3.png?updatedAt=1739557937512', 
                  description: 'Topik.Di VIP' , 
                  link:'',
                  LinkName:''
                 },
                
            ],
            goToPage,
        };
    },
};
</script>
<style>
.card{
    cursor: pointer;
}
</style>