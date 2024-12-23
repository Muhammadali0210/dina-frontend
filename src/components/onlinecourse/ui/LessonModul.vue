import { clsx } from 'clsx';
<script  lang="ts" setup>
import {
       Accordion,
       AccordionContent,
       AccordionItem,
       AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from '@/components/ui/checkbox'
import {lessonData} from '@/constants/LessonData'
import {ref} from "vue"

const data = ref<any>([])
data.value = lessonData
</script>
<template>
  <Accordion type="single" collapsible>
    <Accordion type="single" class="w-full" collapsible>
      <AccordionItem class="border-b border-gray-400 dark:border-gray-700" v-for="item in data" :key="item.value" :value="item.value">
        <AccordionTrigger
          class="px-4 dark:data-[state=open]:bg-gray-900/30 data-[state=open]:bg-slate-200 data-[state=open]:border-b data-[state=open]:border-gray-400 dark:data-[state=open]:border-gray-800 hover:no-underline">{{ item.modul
          }}
        </AccordionTrigger>
        <AccordionContent
          class="p-3 bg-slate-100  dark:bg-gray-700/30 border-t border-gray-300 dark:border-gray-700 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700  w-full flex items-center justify-between"
          v-for="subLesson in item.lessonData" :key="subLesson.id">
          <span class="flex justify-between items-center ">
            <svg class="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                clip-rule="evenodd" />
            </svg>
            <div>
              {{ subLesson.title }}
            </div>
          </span>
          <Checkbox />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Accordion>


</template>
<style lang="">
       
</style>