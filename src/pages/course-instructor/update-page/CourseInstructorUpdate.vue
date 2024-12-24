<script setup lang="ts">
import { onMounted, ref } from "vue";
import PageContainer from "@/components/PageContainer.vue";
import CourseFieldCard from "./_components/CourseFieldCard.vue";
import { useRoute } from "vue-router";
import TitleField from "./_components/TitleField.vue";
import DescriptionField from "./_components/DescriptionField.vue";
import InformationField from "./_components/InformationField.vue";
const router = useRoute();
import { useGetCourseInfo } from "@/pages/course-instructor/update-page/service";

const { isLoading, data, getCourseInfo } = useGetCourseInfo();
const courseData = ref();
const isUpdated = ref(false);

const onUpdate = async (newData: any) => {
  isUpdated.value = false;
  courseData.value = newData.value;
  isUpdated.value = true;
};

onMounted( async () => {
  await getCourseInfo(Number(router.params.id));
  courseData.value = data?.value;
});
</script>

<template>
  <PageContainer
    :title="isLoading ? 'Loading...' : courseData ? courseData.title : 'Kurs nomi bo\'sh'"
    :subtitle="isLoading ? 'Loading...' : courseData ? courseData.description : 'Kurs malumoti bo\'sh'"
  >
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-3">
        <CourseFieldCard name="Kurst nomi" #default="{ state }" :isUpdated="isUpdated">
          <TitleField :state="state" @onUpdated="onUpdate" :course="courseData" />
        </CourseFieldCard>

        <CourseFieldCard name="Qisqacha malumot" #default="{ state }" :isUpdated="isUpdated">
          <DescriptionField :state="state" @onUpdated="onUpdate" :course="courseData" />
        </CourseFieldCard>

        <CourseFieldCard name="Kurs nimalarni o'rgatadi?" #default="{ state }" :isUpdated="isUpdated">
          <InformationField :state="state" @onUpdated="onUpdate" :course="courseData" />
        </CourseFieldCard>
      </div>
    </div>
  </PageContainer>
</template>
