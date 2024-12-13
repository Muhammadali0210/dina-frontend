import { clsx } from 'clsx';
<script  lang="ts" setup>

import {
       Accordion,
       AccordionContent,
       AccordionItem,
       AccordionTrigger,
} from "@/components/ui/accordion"


import { Checkbox } from '@/components/ui/checkbox'

const defaultValue = 'item-1'

defineProps({
  data: {
    type: Object,
    required: true,
  },
});

</script>
<template>
 <Accordion class="" type="single" collapsible>
  <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
    <AccordionItem class="hover:bg-slate-700" v-for="item in data" :key="item.value" :value="item.value">
      <AccordionTrigger class="pl-4">{{ item.title }}</AccordionTrigger>
      <AccordionContent 
        class="bg-gray-900 pl-4 pt-4 w-full hover:bg-slate-700 flex items-center justify-between"
        v-for="subLesson in item.lessonData" 
        :key="subLesson.id">
        <span>{{ subLesson.title }}</span>
        <Checkbox class="ml-4 mr-4"   />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</Accordion>


</template>
<style lang="">
       
</style>