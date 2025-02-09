<script setup lang="ts">
// import { vueVimeoPlayer } from "vue-vimeo-player";
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
    <!-- <div
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
    /> -->
    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1052517119?h=cef0ad2726&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="1-Dars"></iframe></div>
  </div>
</template>
