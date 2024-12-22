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
      this.$emit('next-video'); 
  }
}
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
      <button class="py-2 px-4 bg-blue-500 text-white rounded-lg">Oldingi dars</button>
      <button class="py-2 px-4 bg-blue-500 text-white rounded-lg">Keyingi dars</button>
    </div>
  </div>
</template>

<style scoped>

</style>
