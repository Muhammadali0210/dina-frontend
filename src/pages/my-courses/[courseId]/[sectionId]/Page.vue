<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircle } from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router"
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "./_components/Actions.vue"
import { useGetSectionInfo } from "./services/section-service";
import SectionField from "./_components/SectionField.vue";
import Lessons from "./_components/Lessons.vue";
const { isLoading, data, getSectionInfo } = useGetSectionInfo();

const router = useRoute()
const sectionData = ref();
const updateHandler = (newData: any) => {
    sectionData.value = newData.value;
    
}

onMounted(async() => {
    await getSectionInfo(Number(router.params.sectionId))
    sectionData.value = data.value;
})
</script>
<template>

    <div class="bg-white dark:bg-gray-800 p-4 rounded-md max-w-[1400px] mx-auto">
        <div>
            <div class="grid grid-cols-6 md:grid-cols-12 gap-3 items-center">
                <div class="order-1 md:order-1 col-span-3 md:col-span-1">
                    <RouterLink :to="`/my-courses/${router.params.id}`">
                        <Button size="icon" variant="outline">
                            <ChevronLeftCircle />
                        </Button>
                    </RouterLink>
                </div>
                
                <div class="order-3 md:order-2 col-span-6 md:col-span-8">
                    <Skeleton v-if="isLoading" class="h-[31px] w-[250px] max-sm:w-[150px] mb-2" />
                    <h3 v-else class="text-4xl max-md:text-2xl font-extrabold text-gray-700 dark:text-white">{{ sectionData ? sectionData.title : "Malumot yuklanmadi" }}</h3>
                    <p class="text-sm text-muted-foreground">
                        Modul haqida malumot
                    </p>
                </div>
                
                <div class="order-2 md:order-3 col-span-3 md:col-span-3 flex justify-end">
                    <Actions />
                </div>
            </div>
            <Separator class="my-2" />
        </div>
        <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <Lessons />
            <div>
                <SectionField :section="sectionData" :data-loading="isLoading" @onUpdated="updateHandler" />
            </div>
        </div>
    </div>
</template>
