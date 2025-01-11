<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import VideoLesson from "./_components/VideoLesson.vue";
import { useLessonStore } from "./store";
import { useGetLesson } from "./service";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-vue-next";
import Dictionary from "./_components/Dictionary.vue";

const route = useRoute();
const lessonStore = useLessonStore();
const { isLoading, getLesson } = useGetLesson();

const lesson = ref();

watch(
  () => route.query.lessonid,
  async (newLessonId, oldLessonId) => {
    if (newLessonId !== oldLessonId) {
      await getLesson(Number(newLessonId));
      lesson.value = lessonStore.getLesson;
      lessonStore.lessonLoading = false;
    }
  }
);

onMounted(async () => {
  await getLesson(Number(route.query.lessonid));
  lesson.value = lessonStore.getLesson;
  lessonStore.lessonLoading = false;
});
</script>
<template>
  <div class="p-2 md:p-5 max-w-[1000px] mx-auto">
    <VideoLesson
      :lesson="lesson"
    />
    
    <Dictionary :lesson="lesson" />
  </div>
</template>
