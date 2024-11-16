<template lang="">
<!--Admin uchun card-->
<Minicard/>

       <swiper
    :pagination="true"
    :modules="modules"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :loop="true"
    class="mySwiper rounded-[24px]"
  >
     <swiper-slide v-for="pageData in mainPageDate"  class=" bg-gradient-to-r from-[#925FE2] to-[#DFCFF7]" >
    <div class="hero">
    <div class="hero-content flex-col lg:flex-row-reverse">
    <img
      src="../../assets/image/girl-banner.svg"
      class="h-[300px]" />
    <div>
      <h1 class="text-5xl font-bold text-white">{{pageData.title}}</h1>
      <p class="py-6 text-black">
       {{pageData.text}}
      </p>
      <button class="btn bg-[#925FE2] text-white">{{pageData.btnTitle}}</button>
    </div>
  </div>
</div
></swiper-slide>
  </swiper>



   
    
</template>
<script>
import Minicard from "./Minicard.vue"
import { useUserStore } from '@/stores/userStore';
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Minicard,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  mounted() {

  },
  created() {

  },
  data() {
    return {
      mainPageDate: [
        { title: 'Kores tili 0 dan yangi guruh !', text: " Soulte Hangugo 서울대 한국어 1A uchun yangi guruh ochilmoqda ulgurub qoling ! Joylar cheklangan", btnTitle: "A'zo bolish" },
        { title: 'Kores tili 0 dan yangi guruh !', text: " Soulte Hangugo 서울대 한국어 1A uchun yangi guruh ochilmoqda ulgurub qoling ! Joylar cheklangan", btnTitle: "A'zo bolish" },
        { title: 'Dina Korean!', text: " Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi." }
      ]
    }
  }

}
</script>
<style lang="">

</style>