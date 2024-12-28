<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
// import { useDeleteSection } from "../services/service";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal.vue";

// const { isLoading, deleteSection } = useDeleteSection();
const router = useRoute();
const route = useRouter();
const deletehandler = async () => {
    // await deleteSection(Number(router.params.sectionId));
    route.push(`/my-courses/${router.params.id}`);
}
</script>
<template>
    <ConfirmDeleteModal @onConfirm="deletehandler" :is-loading="false" />
</template>
