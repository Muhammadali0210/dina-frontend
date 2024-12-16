<script>
import {
  Card,
  
} from '@/components/ui/card'

export default {
    data() {
        return {
            results: [
                {
                    link: './src/assets/image/results.jpg',
                    title: 'Dilrabo Hamzayeva',
                    resultInfo: "Eshitish:85 O’qish: 68 Yozish: 89"
                },
                {
                    link: './src/assets/image/results.jpg',
                    title: 'Dilrabo Hamzayeva',
                    resultInfo: "Eshitish:85 O’qish: 68 Yozish: 89"
                },
                {
                    link: './src/assets/image/results.jpg',
                    title: 'Dilrabo Hamzayeva',
                    resultInfo: "Eshitish:85 O’qish: 68 Yozish: 89"
                },
                {
                    link: './src/assets/image/results.jpg',
                    title: 'Dilrabo Hamzayeva',
                    resultInfo: "Eshitish:85 O’qish: 68 Yozish: 89"
                },
            ]
        };
    }
};
</script>
<template>
    <Card>
        <div class="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 px-4 max-md:px-0">
            <div v-for="(result, index) in results" :key="index"
                class="group relative rounded-xl overflow-hidden card w-full shadow-xl dark:bg-gray-900 dark:border-gray-700 border-gray-200 bg-white">
                <img src="../../assets/image/results.jpg" alt="">
            </div>
        </div>

    </Card>
</template>


<style>
/* Maxsus CSS talab qilinmaydi, Tailwind ishlatilmoqda */
</style>
