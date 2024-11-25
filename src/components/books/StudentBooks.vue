<template>
  <div>
    <div class="book-name text-3xl font-bold text-gray-700 dark:text-white mb-4">Boshlang'ich</div>
    <swiper :slides-per-view="'auto'" :space-between="20" :loop="true" :loop-fill-group-with-blank="true"
      :free-mode="true" :pagination="false" :modules="modules" class="mySwiper" @swiper="onSwiper"
      @slideChange="onSlideChange" :autoplay="{
        delay: 1500, disableOnInteraction: false
      }">
      <swiper-slide v-for="(book, index) in books" :key="index" class="max-h-[400px] max-w-[250px]">
        <div class="max-w-sm shadow-xl border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700">
          <a href="#">
            <img class="w-[250px] h-[230px] rounded-t-lg" src="../../assets/image/stb.jpg" :alt="book.title" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ book.title }}</h5>
            </a>
            <a href="#" @click="booksView"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ko'rish
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <button type="button"
              class="inline-flex ml-[15px] items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Yuklash
              <svg class="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="white"
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
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
        { title: '서울대 한국어 6A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 6A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 6A', image: '../../assets/image/sb2.jpg' },
        { title: '서울대 한국어 6A', image: '../../assets/image/sb2.jpg' },
      ],
    };
  },
  methods: {
    booksView() {
      this.$router.push('/booksview');
    },
  },
};
</script>

<style scoped>
/* Qo'shimcha uslublar */
</style>
