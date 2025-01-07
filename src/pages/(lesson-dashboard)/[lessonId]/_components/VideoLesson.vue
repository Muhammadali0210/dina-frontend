<script setup lang="ts">
import { vueVimeoPlayer } from "vue-vimeo-player";
import { ref, defineProps, watch } from "vue";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-vue-next";
import { useLessonStore } from "../store";

const props = defineProps({
  lesson: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const lessonStore = useLessonStore();

const isLoading = ref<boolean>(true);
const lessonLoading = ref<boolean>(lessonStore.lessonLoading);
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
      isLoading.value = false;
    } else {
      videoId.value = null;
      isLoading.value = true; // Video mavjud bo'lmasa, loader ko'rinadi
    }
  },
  { immediate: true } // Dastlabki holatni ham tekshirish
);
</script>

<template>
  <div class="w-full min-h-[20vh] sm:min-h-[36vh] md:min-h-[50vh] lg:min-h-[50vh]">
    <div
      v-if="lessonStore.lessonLoading || !videoId"
      class="relative w-full rounded-md bg-secondary h-[30vh] sm:h-[36vh] md:h-[50vh] lg:h-[75vh]"
    >
      <Skeleton
        class="absolute right-0 top-0 flex size-full items-center justify-center rounded-md bg-slate-500/80"
      />
      <div
        class="absolute right-0 top-0 h-full w-full flex size-full items-center justify-center"
      >
        <Loader2 class="w-[100px] h-[100px] animate-spin text-primary" />
      </div>
    </div>
    <vueVimeoPlayer
      v-if="videoId && !lessonStore.lessonLoading"
      :video-id="videoId"
      :options="playerOptions"
      @ready="lessonStore.lessonLoading = false"
      class="w-full h-full"
    />
  </div>
</template>
