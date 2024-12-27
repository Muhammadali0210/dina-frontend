<script setup lang="ts">
import { defineProps, ref, onMounted, nextTick } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Grip, Pencil } from "lucide-vue-next";
import draggable from "vuedraggable";
import { Skeleton } from '@/components/ui/skeleton';

const router = useRoute()

const props = defineProps({
    sections: {
      type: Array,
      default: () => null
    },
    isLoading: Boolean
})
const sectionData = ref(props.sections)

const drag = ref(false)
// onMounted(async () => {
//   sectionData.value = props.sections
// })
</script>

<template>
    <Skeleton v-if="isLoading" class="w-full h-[30px]" />
  <template v-else>
    <div v-if="props.sections">
      <draggable
        v-model="props.sections"
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

            <RouterLink :to="{ name: 'SectionId', params: { id: router.params.id, sectionId: element._id } }" class="p-2">
              <Pencil class="size-4 cursor-pointer" />
          </RouterLink>
          </div>
        </template>
      </draggable>
    </div>
    <div v-else class="text-gray-500 dark:text-gray-400">
      Bo'lim mavjus emas
    </div>
  </template>
</template>
