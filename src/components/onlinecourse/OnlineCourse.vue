<template lang="">
    <div class="custom-container">
        
    
    <div class="w-full  grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
      <div  v-for="(item , index) in kurData" :key="index" class="border w-full border-gray-400 dark:border-gray-700 dark:bg-slate-800 bg-white">
        <div class="relative">
            <img class="h-[180px] w-full object-cover" :src="item.image" alt="">
            <div class=" grid grid-cols-3 absolute bottom-0">
                <h3 class="text-[15px] text-white font-bold bg-gray-700 py-[2px] px-[10px]">{{item.name}}</h3>
                <h3 class="text-[15px] text-black font-bold bg-white py-[2px] px-[10px] border-t border-gray-700">{{item.status}}</h3>
                <h3 class="text-[15px] text-white font-bold bg-red-800 py-[2px] px-[10px]">{{item.price}}</h3>
            </div>
        </div>
        <div>
            <h1 class="dark:text-white text-gray-900 text-[20px] font-bold p-[10px]">Topik darslar...</h1>
        </div>
      </div>
    </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            kurData:[
                {
                    id: 1,
                    name: "Topik 1",
                    status: "Bepul",
                    price: 250000,
                    image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75"
                },
                {
                    id: 1,
                    name: "Topik 1",
                    status: "Bepul",
                    price: 250000,
                    image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75"
                },
                {
                    id: 1,
                    name: "Topik 1",
                    status: "Bepul",
                    price: 250000,
                    image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75"
                },
                {
                    id: 1,
                    name: "Topik 1",
                    status: "Bepul",
                    price: 250000,
                    image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75"
                },
                {
                    id: 1,
                    name: "Topik 1",
                    status: "Bepul",
                    price: 250000,
                    image: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75"
                },
               

            ]
        }
    }
}
</script>
<style lang="">

</style>
