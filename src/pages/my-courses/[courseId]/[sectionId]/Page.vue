<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircle } from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router"
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "./_components/Actions.vue"
import { useGetSectionInfo } from "./services/service";
import SectionField from "./_components/SectionField.vue";
import Lessons from "./_components/Lessons.vue";

const router = useRoute()

const { isLoading, data, getSectionInfo } = useGetSectionInfo()

onMounted(() => {
    getSectionInfo(Number(router.params.sectionId))
})
</script>
<template>
    <div class="bg-white dark:bg-gray-800 p-4 rounded-md max-w-[1400px] mx-auto">
        <div>
            <div class="flex items-center gap-3">
                <RouterLink :to="`/my-courses/${router.params.id}`">
                    <Button size="icon" variant="outline">
                        <ChevronLeftCircle />
                    </Button>
                </RouterLink>
                <div>
                    <Skeleton v-if="isLoading" class="h-[31px] max-w-[400px] w-[250px] mb-2" />
                    <h3 v-else class="text-4xl font-extrabold text-gray-700 dark:text-white">{{ data ? data.title : "Malumot yuklanmadi" }}</h3>
                    <p class="text-sm text-muted-foreground">
                        Bo'limlar haqida malumot
                    </p>
                </div>
                <div class="ml-auto">
                    <Actions />
                </div>
            </div>
            <Separator class="my-2" />
        </div>
        <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <Lessons />
            <div>
                <SectionField :section="data" :data-loading="isLoading" />
            </div>
        </div>
    </div>
</template>
