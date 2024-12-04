<template lang="html">
    <div v-for="item in courseData" :key="index"
        class="border w-full border-gray-400 dark:border-gray-700 dark:bg-slate-800 bg-white">
        <div class="relative">
            <img class="h-[180px] w-full object-cover" :src="item.image" alt="course image">
            <div class="grid grid-cols-3 absolute bottom-0">
                <h3 class="text-[15px] text-white font-bold bg-gray-700 py-[2px] px-[10px]">{{ item.name }}</h3>
                <h3 class="text-[15px] text-black font-bold bg-gray-300 py-[2px] px-[10px] ">{{item.status }}</h3>
                <h3 class="text-[15px] text-white font-bold bg-red-800 py-[2px] px-[10px]">{{ item.price }}
                </h3>
            </div>
        </div>
        <div>
            <h1 class="dark:text-white text-gray-900 text-[20px] font-bold p-[10px]">Topik darslar...</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        courseData: {
            type: Array,
            required: true
        }
    },
    methods: {
        // Narxni formatlash (so'm yoki dollar formatida)
        formatPrice(price) {
            return price.toLocaleString('uz-UZ', { style: 'currency', currency: 'UZS' });
        }
    }
}
</script>

<style lang="css">
/* Kerakli uslublar */
</style>
