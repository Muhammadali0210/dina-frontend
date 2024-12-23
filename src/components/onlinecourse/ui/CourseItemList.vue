<script setup lang="ts">
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ref } from "vue"
import { lessonData } from '@/constants/LessonData'

const data = ref<any>(lessonData)
</script>

<template>
    <Accordion class="mt-5" type="single" collapsible>
        <AccordionItem class="border-b  border-gray-400 dark:border-gray-700" v-for="item in data" :key="item.value"
            :value="item.value">
            <AccordionTrigger
                class="px-4 flex justify-between items-center dark:bg-gray-800 dark:data-[state=open]:bg-gray-800 data-[state=open]:bg-slate-200 data-[state=open]:border-b data-[state=open]:border-gray-400 dark:data-[state=open]:border-gray-800 hover:no-underline">
                <div class="flex w-full justify-between">
                    <h1>{{ item.modul }}</h1>
                    <p>{{ item.lessonTime }}</p>
                </div>
            </AccordionTrigger>
            <AccordionContent
                class="p-3 bg-slate-100  dark:bg-gray-700/30  border-white dark:border-gray-700 cursor-pointer  dark:hover:bg-gray-700 w-full flex items-center justify-between"
                v-for="subLesson in item.lessonData" :key="subLesson.id">
                <span class="flex justify-between items-center  ">
                    <svg class="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                            clip-rule="evenodd" />
                    </svg>
                    <div>
                        {{ subLesson.title }}
                    </div>
                </span>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</template>
