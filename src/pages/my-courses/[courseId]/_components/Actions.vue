<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal.vue";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-vue-next";
import { useDeleteCourse } from "../service";
import { ref, defineProps, defineEmits } from "vue";
import {useUpdateCourseInfo} from "../service";

const { isDeleting, deleteCourse } = useDeleteCourse();
const { isLoading, data, updateCourseInfo  } = useUpdateCourseInfo();
const route = useRoute();
const router = useRouter();

const props = defineProps({
    course: Object
})

const emit = defineEmits<{
    (e: 'onUpdated', value: any): void;
}>();

const onUpdate = async() => {
    await updateCourseInfo(Number(props.course?._id), {
        published: !props.course?.published as boolean
    });
    emit('onUpdated', data);
}
const deletehandler = async () => {
    await deleteCourse(Number(route.params.id));
    router.push('/my-courses');
}
</script>
<template>
    <Button 
        class="mr-2" 
        :class="[
            { 'bg-red-500 hover:bg-red-600': course?.published },
            { 'cursor-not-allowed': isLoading }    
        ]" 
        @click="onUpdate"
    >
        <Loader v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
        {{ props.course?.published ? 'Yopish' : 'Ochish' }}
    </Button>
    <ConfirmDeleteModal @onConfirm="deletehandler" :is-loading="isDeleting" />
</template>
