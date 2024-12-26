<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useRoute, useRouter } from "vue-router";
import { useDeleteSection } from "../service";

const { isLoading, deleteSection } = useDeleteSection();
const router = useRoute();
const route = useRouter();
const deletehandler = async () => {
    await deleteSection(Number(router.params.id));
    route.push("/course-instructor/update-page");
}
</script>
<template>
    <div>
        <Button variant="destructive" @click="deletehandler">
            O'chirish
        </Button>
    </div>
</template>
