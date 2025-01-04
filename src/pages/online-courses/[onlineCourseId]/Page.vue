<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useCourseStore } from '../store';
import useGetAllCourse from "../service"
import { useAttrs } from 'vue';

const attrs = useAttrs();
const route = useRoute();
const courseStore = useCourseStore();
const { isLoading, getAllCourse } = useGetAllCourse();

const onlineCourse = ref();
const getData = async () => {
    const data = courseStore.getAll;
    if(data.length == 0) await getAllCourse();
}

onMounted( async () => {
    await getData();
    const data = courseStore.getAll
    onlineCourse.value = data.find((item: any) => item._id == Number(route.params.id));
})
</script>

<template>
    <div v-bind="attrs">
        ---------------------------------------------
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <div v-if="onlineCourse">{{ onlineCourse }}</div>
            <div v-else> No data</div>
        </div>
        ---------------------------------------------
    </div>
</template>
