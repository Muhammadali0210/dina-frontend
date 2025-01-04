<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useOnlineCourseStore } from '../store';
import { ref, onMounted } from 'vue';
import useGetAllCourse from '../service';
const route = useRoute();
const courseStore = useOnlineCourseStore();
const { isLoading, getAllCourse } = useGetAllCourse();

const courseDetail = ref<any>();


onMounted(async () => {
    const count = courseStore.getAll
    if(count.length == 0) await getAllCourse();

    const allData = await courseStore.getAll
    courseDetail.value = allData.find((item: any) => item._id == route.params.id);
})

</script>
<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            Page id {{  route.params.id }}
            <div v-if="courseDetail">
                {{ 
                    courseDetail
                }}
            </div>
        </div>
    </div>
</template>
