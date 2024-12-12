import { clsx } from 'clsx';
<script  lang="ts" setup>
import {
       Accordion,
       AccordionContent,
       AccordionItem,
       AccordionTrigger,
} from "@/components/ui/accordion"
// export default {
//        Accordion,
//        AccordionContent,
//        AccordionItem,
//        AccordionTrigger,
// }
</script>
<template lang="">
 <Accordion type="single" collapsible class="border-b border-gray-400 px-4">
  <AccordionItem value="item-1">
    <AccordionTrigger>1 - Modul</AccordionTrigger>
    <AccordionContent class="cursor-pointer">
     #1 - Dars
    </AccordionContent>
  </AccordionItem>
</Accordion>


</template>

<style lang="">
       
</style>