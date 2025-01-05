<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useRoute, useRouter } from "vue-router"
import { Checkbox } from '@/components/ui/checkbox';
import { PlayCircle } from 'lucide-vue-next';
import type { ISection } from '@/types';
const props = defineProps<{
    sections: ISection[]
}>();

const route  = useRoute();
const router = useRouter()

const LId = ref<number>(0);
const SId = ref<number>(0);
const onPressed = (l: number, s: number) => {
    router.push({
        name: 'LessonDashboard',
        params: { id: route.params.id },
        query: { sectionid: s, lessonid: l },
    })
    LId.value = l;
    SId.value = s;
}
</script>
<template>
    <Accordion v-if="props.sections" type="single" :collapsible="true">
        <AccordionItem v-bind:value="String(section._id)" v-if="props.sections" v-for="(section, index) in props.sections" :key="index">
            <AccordionTrigger class="text-left hover:no-underline hover:bg-slate-400/60 hover:dark:bg-gray-900/80 px-3 bg-slate-300 dark:bg-gray-900/60" >
                {{ section?.title }}
            </AccordionTrigger>
            <AccordionContent v-for="(lesson, index) in section.lessonId" :key="index" class="space-y-1 gap-0 p-0">
                <Button
                    class="border border-gray-300 dark:border-gray-700 transition-all duration-300 dark:hover:bg-gray-700 mx-auto my-1 flex h-12 w-[calc(100%-10px)] items-center justify-between gap-x-2 rounded-none p-0 px-2 text-sm"
                    variant="ghost"
                    @click="onPressed(lesson._id as number, section._id as number)"
                    :class="{'bg-slate-300 dark:bg-gray-700': LId == lesson._id && SId == section._id}"
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
