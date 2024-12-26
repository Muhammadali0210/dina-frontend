<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useRoute, useRouter } from "vue-router";
import { useDeleteSection } from "../service";
import { Loader } from "lucide-vue-next";

const { isLoading, deleteSection } = useDeleteSection();
const router = useRoute();
const route = useRouter();
const deletehandler = async () => {
    await deleteSection(Number(router.params.sectionId));
    route.push(`/my-courses/${router.params.id}`);
}
</script>
<template>
    <div>
        <Button variant="destructive" @click="deletehandler">
            <template v-if="isLoading">
                <Loader class="size-4 animate-spin" /> O'chirilmoqda...
            </template>
            <template v-else>O'chirish</template>
        </Button>
    </div>
</template>
