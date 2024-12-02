<template lang="">
    <div class="text-gray-800 dark:text-white" >
        Video Kurs
    </div>
    <div>
    <iframe class="w-[70%] h-[70vh] m-auto" src="https://www.youtube.com/embed/lXGFKMFTQEg?si=724h4lDvqAQL86qi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h1 class="text-center text-gray-700 text-[20px] dark:text-white ">KOREYS TILINI QAYSI KITOBDAN O’RGANISH YAXSHI?🇰🇷</h1>
        <button @click="nextClick" class="p-[10px] bg-green-500 dark:text-white"  type="">Keyingisi...</button>
    </div>

</template>
<script>
export default {
    methods: {
        nextClick(){
            this.$router.push('/onlinevideo')
        }
    }
}
</script>
<style lang="">
    
</style>