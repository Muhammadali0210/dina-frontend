<script setup lang="ts">
import { ref } from 'vue'
import { Loader } from 'lucide-vue-next'
import { topikBook } from '../store/index' // Ensure bookData is imported correctly


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


const loadingStates = ref<{ [key: number]: boolean }>({})

// Function to handle file download
const downloadFile = (downloadLink: string, index: number) => {
    loadingStates.value[index] = true
    setTimeout(() => {
        loadingStates.value[index] = false
        const link = document.createElement('a')
        link.href = downloadLink
        link.download = 'Kitob.pdf'
        link.click()
    }, 1000)
}
</script>

<template>
    <div>
        <swiper :slides-per-view="5" :space-between="30" :free-mode="true" :loop="true" :autoplay="{
            delay: 2000,
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
            <swiper-slide class="w-full" v-for="(book, index) in topikBook" :key="index">
                <div class="p-4 dark:bg-slate-900 bg-slate-100 text-white rounded-2xl shadow-lg ">
                    <img :src="book.imageUrl" :alt="book.title"
                        class="rounded-lg w-full sm:h-[250px] h-[300px] object-cover mx-auto" />
                    <h2 class="mt-4 text-lg font-semibold text-center  dark:text-white text-slate-900">{{
                        book.title }}</h2>
                    <div class="grid grid-cols-2 gap-2 mt-4">
                        <AlertDialog>
                            <AlertDialogTrigger as-child>
                                <button
                                    class="dark:bg-blue-600 bg-slate-200 flex justify-center  text-white px-2 py-2 rounded-md">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-width="2"
                                            d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                        <path stroke="currentColor" stroke-width="2"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                    <span class="dark:text-white text-slate-900"> Ko'rish</span>
                                </button>

                            </AlertDialogTrigger>
                            <AlertDialogContent class="m-auto h-[90%] w-[80%] max-w-[1200px] bg-white">
                                <AlertDialogCancel class="flex justify-end">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                    </svg>
                                </AlertDialogCancel>
                                <AlertDialogHeader class="h-full ">
                                    <iframe :src="book.bookUrl" width="600" height="780" class="w-full m-auto"></iframe>
                                </AlertDialogHeader>
                            </AlertDialogContent>
                        </AlertDialog>


                        <button @click="downloadFile(book.downloadLink, index)"
                            class="dark:bg-blue-600 bg-slate-200 text-white px-1 flex py-2 rounded-md">
                            <div v-if="!loadingStates[index]" class="flex justify-center m-auto">
                                <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                                </svg>
                                <span class="dark:text-white text-slate-900" v-if="!loadingStates[index]">
                                    Yuklash</span>
                            </div>
                            <span v-else class="flex items-center space-x-2">
                                <Loader class="animate-spin" /> Yuklash
                            </span>
                        </button>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
