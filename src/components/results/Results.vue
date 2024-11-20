<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
            <div v-for="(result, index) in results" :key="index"
                class="group relative rounded-xl overflow-hidden card w-full shadow-xl dark:bg-gray-900 dark:border-gray-700 border-gray-200 bg-white">
                <figure>
                    <img :src="result.link" alt="Results Image" class="w-full object-cover h-[450px]" />
                </figure>
                <div
                    class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center transition duration-300">
                    <div class="text-center">
                        <h1
                            class="text-white text-[30px] text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                            {{ result.title }}
                        </h1>
                        <p class="text-white mt-[20px] text-lg opacity-0 group-hover:opacity-100 transition duration-300">
                            {{ result.resultInfo }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
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




            ]
        };
    }
};
</script>

<style>
/* Maxsus CSS talab qilinmaydi, Tailwind ishlatilmoqda */
</style>
