<script setup lang="ts">
import { defineProps } from 'vue';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useRoute } from "vue-router"
import { Checkbox } from '@/components/ui/checkbox';
import { PlayCircle } from 'lucide-vue-next';
interface ISection {
    _id?: number,
    title: string,
    lessonId?: [
        {
            title: String
        }
    ]
}
const props = defineProps<{
    sections: ISection[]
}>();

const route  = useRoute()

</script>
<template>
    <Accordion v-if="props.sections" type="single" :collapsible="true">
        <AccordionItem v-bind:value="String(section._id)" v-if="props.sections" v-for="(section, index) in props.sections" :key="index">
            <AccordionTrigger class="text-left hover:no-underline hover:bg-gray-50 hover:dark:bg-gray-800 px-3 bg-gray-100 dark:bg-black/20" >
                {{ section?.title }}
            </AccordionTrigger>
            <AccordionContent v-for="(lesson, index) in section.lessonId" :key="index" class="space-y-1 gap-0 p-0">
                <Button
                    class="mx-auto my-1 flex h-12 w-[calc(100%-10px)] items-center justify-between gap-x-2 rounded-none p-0 px-2 text-sm"
                    variant="ghost"
                >
                    <div
                        class='flex size-full justify-start px-3'
                    >
                        <div class='flex max-w-[90%] items-center justify-start gap-x-2'>
                            <div class='flex-1'>
                                <PlayCircle />
                            </div>
                            {{lesson?.title.length > 30
                                ? `${lesson.title.slice(0, 30)}...`
                                : lesson.title}}
                        </div>
                    </div>
                    <div class='w-[10%]'>
                        <Checkbox />
                    </div>
                </Button>
			</AccordionContent>
        </AccordionItem>
    </Accordion>
</template>
