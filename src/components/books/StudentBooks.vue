<template>
  <swiper :slidesPerView="'auto'" :spaceBetween="30" :loop="true" :loopFillGroupWithBlank="true" :freeMode="true"
    :pagination="false" :modules="modules" class="mySwiper" :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }">
    <swiper-slide v-for=" (book, index) in books" :key="index" class="max-h-[400px] max-w-[250px]">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="w-[250px] h-[230px] rounded-t-lg" src="../../assets/image/stb.jpg" :alt="book.title" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ book.title }}</h5>
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ko'rish
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination, Autoplay],
      books: [
        { title: '서울대 한국어 1A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 2A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 3A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 4A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 5A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 5A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 5A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 5A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 6A', image: '../../assets/image/sb2.jpg' },
        // More book objects as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add additional styles if needed */
</style>
