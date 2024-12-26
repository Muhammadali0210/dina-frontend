<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { ChevronLeftCircle } from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router"
import { Separator } from "@/components/ui/separator";
import Actions from "./_components/Actions.vue"

const router = useRoute()
const props = defineProps({
    sections: Array,
    courseId: Number
})

onMounted(() => {
    
})
</script>
<template>
    <div class="bg-white dark:bg-gray-800 p-4 rounded-md max-w-[1400px] mx-auto">
        <div>
            <div class="flex items-center gap-3">
                <RouterLink :to="`/course-instructor/update/${router.query.courseId}`">
                    <Button size="icon" variant="outline">
                        <ChevronLeftCircle />
                    </Button>
                </RouterLink>
                <div>
                    <h3 class="text-4xl font-extrabold text-gray-700 dark:text-white">{{ "Section title" }}</h3>
                    <p class="text-sm text-muted-foreground">
                        Kurs bo'limlari haqida malumot
                    </p>
                </div>
                <div class="ml-auto">
                    <Actions />
                </div>
            </div>
            <Separator class="my-2" />
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt maxime, voluptas illum laudantium suscipit exercitationem veniam sint sed soluta, harum atque! Nostrum beatae sint ducimus veniam accusantium, tenetur rem.
    </div>
</template>
