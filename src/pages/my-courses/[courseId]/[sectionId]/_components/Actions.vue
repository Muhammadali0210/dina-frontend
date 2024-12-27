<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useRoute, useRouter } from "vue-router";
import { useDeleteSection } from "../service";
import { Loader, Trash2 } from "lucide-vue-next";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal.vue";

const { isLoading, deleteSection } = useDeleteSection();
const router = useRoute();
const route = useRouter();
const deletehandler = async () => {
    await deleteSection(Number(router.params.sectionId));
    route.push(`/my-courses/${router.params.id}`);
}
</script>
<template>
    <ConfirmDeleteModal @onConfirm="deletehandler" :is-loading="isLoading" />
</template>
