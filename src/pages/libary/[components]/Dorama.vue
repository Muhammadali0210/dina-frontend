<script setup lang="ts">
import { doroma } from '../store/index' // Ensure bookData is imported correctly


import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination, Autoplay } from 'swiper/modules'



</script>

<template>
    <div>
        <swiper :slides-per-view="5" :space-between="30" :free-mode="true" :loop="true" :speed="5000" :autoplay="{
            delay: 0,
            disableOnInteraction: false,
        }" :modules="[FreeMode, Pagination, Autoplay]" class="mySwiper w-full overflow-hidden" :breakpoints="{
            300: { slidesPerView: 1, spaceBetween: 10 },
            460: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
            1380: { slidesPerView: 5, spaceBetween: 20 },
        }">
            <swiper-slide class="w-full" v-for="(book, index) in doroma" :key="index">
                <a :href="book.nextUrl" target="_blank" rel="noopener noreferrer">
                    <div class="p-4 dark:bg-slate-900 bg-slate-100 text-white rounded-2xl shadow-lg ">
                        <img :src="book.imageUrl" :alt="book.title"
                            class="rounded-lg w-full sm:h-[250px] h-[300px] object-cover mx-auto" />
                        <h2 class="mt-4 text-lg font-semibold text-center  dark:text-white text-slate-900">{{
                            book.title }}</h2>
                        <div class="grid grid-cols-2 gap-2 mt-4">
                        </div>
                    </div>
                </a>
            </swiper-slide>
        </swiper>
    </div>
</template>
