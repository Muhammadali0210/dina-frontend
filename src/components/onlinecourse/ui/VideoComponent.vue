<script setup lang="ts">
import LessonTask  from '../ui/LessonTask.vue'
import { useRouter } from 'vue-router' // Vue Routerni import qilish
import { defineProps } from 'vue'

// const props = defineProps({
//   videoUrl: {
//     type: String,
//     required: true
//   }
// })

const router = useRouter()
  const nextPage = () => {
    router.push('/task')
  }
</script>

<template>
  <div class="">
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe src="https://player.vimeo.com/video/1038871146?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="TOPIKGA_TOLOV_AMALGA_OSHIRISH">
      </iframe>
    </div>
    <div class="flex justify-between mt-4">
      <button @click="nextPage" class="py-2 px-4 bg-blue-500 text-white rounded-lg">Oldingi dars</button>
      <button class="py-2 px-4 bg-blue-500 text-white rounded-lg">Keyingi dars</button>
    </div>
  </div>
</template>

<style scoped>

</style>
