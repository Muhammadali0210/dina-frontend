<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal.vue";
import { useDeleteCourse } from "../service.ts";

const { isDeleting, data, deleteCourse } = useDeleteCourse();
const route = useRoute();
const router = useRouter();
const deletehandler = async () => {
    await deleteCourse(Number(route.params.id));
    router.push('/my-courses');
}
</script>
<template>
    <ConfirmDeleteModal @onConfirm="deletehandler" :is-loading="isDeleting" />
</template>
