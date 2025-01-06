

<script setup lang="ts">
import { vueVimeoPlayer } from 'vue-vimeo-player';
import { ref, defineProps } from "vue";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-vue-next";

const props = defineProps({
  lesson: {
    type: Object,
    required: true
  }
});

const isLoading = ref<boolean>(true);
const videoId = ref<string>('76979871'); // Props orqali video URL oling.

const playerOptions = {
  autoplay: true,
  loop: false,
  responsive: true
};

// Vimeo player yuklanishi tugagandan keyin chaqiriladi.
const onPlayerReady = () => {
  isLoading.value = false; // Loaderni o'chirish
};
</script>

<template>
  <div class="w-full h-auto">
    <!-- Loader ko'rinadi, agar isLoading true bo'lsa -->
    <div v-if="isLoading" class='relative h-[36vh] w-full rounded-md bg-secondary sm:h-[30] md:h-[50vh] lg:h-[75vh]'>
      <Skeleton class='absolute right-0 top-0 flex size-full items-center justify-center rounded-md bg-slate-500/80' />
      <div class="absolute right-0 top-0 h-full w-full flex size-full items-center justify-center">
        <Loader2 class='w-[100px] h-[100px] animate-spin text-primary' />
      </div>
    </div>
    
    <!-- Player yuklanganda ko'rinadi -->
    <vueVimeoPlayer
      v-show="!isLoading"
      :video-id="videoId"
      :options="playerOptions"
      @ready="onPlayerReady"
      class="w-full h-full"
    />
  </div>
</template>
