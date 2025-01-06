<script setup lang="ts">
import { vueVimeoPlayer } from "vue-vimeo-player";
import { ref, defineProps, watch } from "vue";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-vue-next";

const props = defineProps({
  lesson: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  getLoading: {
    type: Boolean,
    default: true,
  },
});

const isLoading = ref<boolean>(true);
const videoId = ref<string | null>(null);

const playerOptions = {
  autoplay: true,
  loop: false,
  responsive: true,
};

watch(
  () => props.lesson?.videoUrl,
  (newVideoUrl) => {
    if (newVideoUrl) {
      videoId.value = newVideoUrl;
      isLoading.value = false
    } else {
      videoId.value = null;
      isLoading.value = true; // Video mavjud bo'lmasa, loader ko'rinadi
    }
  },
  { immediate: true } // Dastlabki holatni ham tekshirish
);
</script>

<template>
  <div class="w-full h-auto">
    <vueVimeoPlayer
      v-if="!isLoading && videoId"
      :video-id="videoId"
      :options="playerOptions"
      @ready="isLoading = false"
      class="w-full h-full"
    />
  </div>
</template>
