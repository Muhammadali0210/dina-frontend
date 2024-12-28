<script setup lang="ts">
import { defineProps, ref, onMounted, nextTick, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Grip, Pencil } from "lucide-vue-next";
import draggable from "vuedraggable";
import { Skeleton } from '@/components/ui/skeleton';
import { useLessonStore } from '../stores/lesson-store';
import { ScrollArea } from '@/components/ui/scroll-area';

const lessonStore = useLessonStore();

const router = useRoute()

const props = defineProps({
  isLoading: Boolean
})
const lessons = ref([])

const drag = ref(false)

watch(
  () => lessonStore.getLesson,
  (newLessons) => {
    if (newLessons) {
      lessons.value = newLessons;
    }
  }
);

onMounted(async () => {
  lessons.value = lessonStore.getLesson;
})
</script>

<template>
    <Skeleton v-if="isLoading" class="w-full h-[30px]" />
  <template v-else>
    <ScrollArea 
      v-if="lessons.length !== 0" 
      :class="lessons.length <= 6 ? 'h-auto' : 'h-[300px] pr-3'"
    >
      <draggable
        v-model="lessons"
        group="people"
        @start="drag = true"
        @end="drag = false"
        item-key="index"
      >
        <template #item="{ element }">
          <div
            class="w-full bg-white dark:bg-gray-800 mb-2 shadow-sm flex items-center overflow-hidden justify-between rounded-md border border-border dark:border-gray-600"
          >
            <div class="flex items-center gap-3">
              <div class="bg-slate-100 dark:bg-gray-700 p-2">
                <Grip class="size-5" />
              </div>
              <h1 class="dark:text-white text-gray-700">{{ element.title }}</h1>
            </div>

            <div class="p-2">
              <Pencil class="size-4 cursor-pointer" />
            </div>
            
          </div>
        </template>
      </draggable>
    </ScrollArea>
    <div v-else class="text-gray-500 dark:text-gray-400">
      Bo'lim mavjus emas
    </div>
  </template>
</template>
