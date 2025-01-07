<script setup lang="ts">
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { calculateTotalDuration } from '@/lib/colculate-duration'
import { ChevronsUpDown, Dot } from 'lucide-vue-next'
import LessonList from './LessonList.vue'
import { ref, defineProps } from "vue"

const props = defineProps({
  section: Object
})

</script>

<template>
  <AccordionItem
    :value="section?.title"
    class="mt-1 border-none"
  >
    <AccordionTrigger
      class="accordion-course flex w-full items-center justify-between bg-primary p-4 hover:no-underline"
    >
      <div class="flex items-center gap-2">
        <ChevronsUpDown
          stroke-width="1.75"
          class="size-4"
        />
        <div class="text-left font-space-grotesk text-[14px] font-semibold">
          {{ section?.title }}
        </div>
      </div>
      <div class="hidden items-center text-sm lg:flex">
        <div>
          {{ section?.lessonId.length }} ta dats
        </div>
        <Dot />
        <div>
          {{ calculateTotalDuration(section?.lessonId) }} soat
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div class="mt-2 border-l-2 border-l-gray-800 p-4">
        <LessonList
          v-for="lesson in section?.lessonId"
          :key="lesson._id"
          :lesson="lesson"
        />
      </div>
    </AccordionContent>
  </AccordionItem>
</template>


