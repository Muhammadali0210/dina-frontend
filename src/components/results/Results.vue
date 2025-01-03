<script setup lang="ts">
import { ref } from "vue"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import PageContainer from "../PageContainer.vue";
import { resultData }  from '@/constants/index';

const data = ref<any>([]);
data.value = resultData
</script>
<template>
    <PageContainer title="Natijalar" subtitle="Bizning o'quvchilarimiz olgan natijalari">
        <div class="grid  max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            <div v-for="(result, index) in data" :key="index"
                class="h-[350px]  max-sm:h-[240px]  group relative rounded-xl overflow-hidden card w-full ">

                <img class="" :src="result.link" alt="">
                class="h-[350px] max-sm:h-[300px] border border-border group relative rounded-xl overflow-hidden card w-full ">
                
            class="h-[350px] max-sm:h-[300px] border border-border group relative rounded-xl overflow-hidden card w-full ">


                <img :src="result.link" alt="result image" class="w-full h-full object-cover" >
                <Dialog class="p-0">
                    <DialogTrigger
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm px-5 py-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ko'rish
                    </DialogTrigger>
                    <DialogContent class="p-0">
                        <DialogTitle class="sr-only">Rasmni ko'rish</DialogTitle>
                        <DialogDescription class="sr-only">
                        </DialogDescription>
                        <img class="p-0" :src="result.link" alt="result image">
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </PageContainer>
</template>
