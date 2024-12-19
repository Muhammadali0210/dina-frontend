<script setup lang="ts">
import { onMounted, ref } from "vue";
import PageContainer from "@/components/PageContainer.vue";
import CourseFieldCard from "./_components/CourseFieldCard.vue";
import useGetCourseInfo from "./service";
import TitleField from "./shared/TitleField.vue";
import { useRoute } from "vue-router";
const router = useRoute();
const { isLoading, data, getCourseInfo } = useGetCourseInfo();

const isUpdated = ref(false);
const onUpdate = async () => {
  await getCourseInfo(Number(router.params.id));
  isUpdated.value = !isUpdated.value;
};

onMounted( async () => {
  await getCourseInfo(Number(router.params.id));
});
</script>

<template>
  <PageContainer
    :title="isLoading ? 'Loading...' : data ? data.title : 'Kurs nomi bo\'sh'"
    :subtitle="isLoading ? 'Loading...' : data ? data.title : 'Kurs malumoti bo\'sh'"
  >
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-3">
        <CourseFieldCard name="Kurst nomi" #default="{ state }" :isUpdated="isUpdated">
          <TitleField :state="state" @onUpdated="onUpdate" :course="data" />
        </CourseFieldCard>

        <CourseFieldCard name="Qisqacha malumot" #default="{ state }">
          
        </CourseFieldCard>
      </div>
    </div>
  </PageContainer>
</template>
