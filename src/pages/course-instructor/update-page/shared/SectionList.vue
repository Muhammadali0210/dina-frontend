<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Grip, Pencil, Trash2 } from "lucide-vue-next";
import draggable from "vuedraggable";

const props = defineProps({
    sections: {
        type: Array,
        default: () => null
    }
})

const drag = ref(false)
</script>

<template>
  <div v-if="props.sections !== null">
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
            <h1 class="dark:text-white text-gray-700">{{ element.path }}</h1>
          </div>

          <div class="flex items-center gap-2 p-2">
            <Pencil class="size-4 cursor-pointer" />
            <Trash2 class="size-4 cursor-pointer" />
          </div>
        </div>
      </template>
    </draggable>
  </div>
  <div v-else class="text-gray-500 dark:text-gray-400">
    Bo'lim mavjus emas
  </div>
</template>
