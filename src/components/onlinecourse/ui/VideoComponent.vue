<script>
import { Button } from '@/components/ui/button'

export default {
  props: {
    videoUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    nextVideo() {
      this.$emit('next-video'); // Emit an event to go to the next video
    }
  }
};</script>

<template>
  <div class="w-full ml-6 md:ml-0 m-auto">
    <div style="padding: 56.25% 0 0 0; position: relative">
      <iframe
        :src="videoUrl"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        title="TOPIKGA_TOLOV_AMALGA_OSHIRISH__#dinakorean_#topik_#korean_#koreystili"
        @ended="nextVideo"
      ></iframe>
    </div>
    <div class="flex justify-between mt-3">
      <Button class="px-[15px] py-[5px] bg-blue-800 rounded-lg" @click="nextVideo">Keyingi Dars</Button>
    </div>
  </div>
</template>

<style scoped>
/* Styles if needed */
</style>
