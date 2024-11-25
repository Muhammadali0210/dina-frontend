<template>
    <div>
        <div class="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 px-4 max-md:px-0">
            <div v-for="(result, index) in results" :key="index"
                class="group relative rounded-xl overflow-hidden card w-full shadow-xl dark:bg-gray-900 dark:border-gray-700 border-gray-200 bg-white">
                <figure>
                    <img :src="result.link" alt="Results Image" class="w-full object-cover h-[320px] max-md:h-[450px]" />
                </figure>
                <div
                    class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center transition duration-300 group">
                    <div
                        class="text-center  opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                        <label for="my_modal_7"
                            class="btn bg-green-500 hover:bg-green-600 text-white text-lg border-none">Ko'rish</label>
                    </div>
                </div>
                <input type="checkbox" id="my_modal_7" class="modal-toggle " />
                <div class="modal bg-gray-900 " role="dialog">
                    <div class="modal-box m-0 p-0 overflow-hidden">
                        <img class="" :src="result.link " alt="" style="object-fit: cover;  background-position: 100px 50%;">
                    </div>
                    <label class="modal-backdrop" for="my_modal_7">Close</label>
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
