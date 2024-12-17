import { clsx } from 'clsx';
<script  lang="ts" setup>

import {
       Accordion,
       AccordionContent,
       AccordionItem,
       AccordionTrigger,
} from "@/components/ui/accordion"


import { Checkbox } from '@/components/ui/checkbox'



defineProps({
  data: {
    type: Object,
    required: true,
  },
});

</script>
<template>
  <Accordion class="mt-2" type="single" collapsible>
    <Accordion type="single" class="w-full" collapsible>
      <AccordionItem class="" v-for="item in data" :key="item.value" :value="item.value">
        <AccordionTrigger
          class="px-2 dark:data-[state=open]:bg-gray-700 data-[state=open]:bg-gray-300 hover:no-underline">{{ item.title
          }}
        </AccordionTrigger>
        <AccordionContent
          class="dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-700 mt-[1px] pl-4 pt-3 w-full flex items-center justify-between"
          v-for="subLesson in item.lessonData" :key="subLesson.id">
          <span class="flex justify-between items-center ">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                clip-rule="evenodd" />
            </svg>
            <div class="mt-">
              {{ subLesson.title }}
            </div>
          </span>
          <Checkbox class="ml-4 mr-4" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Accordion>


</template>
<style lang="">
       
</style>