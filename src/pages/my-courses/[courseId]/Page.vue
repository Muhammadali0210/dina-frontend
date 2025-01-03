<script setup lang="ts">
import { onMounted, ref } from "vue";
import PageContainer from "@/components/PageContainer.vue";
import CourseFieldCard from "./_components/CourseFieldCard.vue";
import { useRoute } from "vue-router";
import TitleField from "./_components/TitleField.vue";
import DescriptionField from "./_components/DescriptionField.vue";
import InformationField from "./_components/InformationField.vue";
import SelectFields from "./_components/SelectFields.vue";
import SectionsField from "./_components/SectionsField.vue";
import ImagesField from "./_components/ImagesField.vue";
import PriceField from "./_components/PriceField.vue";
import { useGetCourseInfo, useUpdateCourseInfo } from "./service";
import { RouterLink } from "vue-router";
import { Separator } from "radix-vue";
import { ChevronLeftCircle, Loader } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import Actions from "./_components/Actions.vue";
import { Skeleton } from "@/components/ui/skeleton";

const router = useRoute();
const { getLoading, courseInfo, getCourseInfo } = useGetCourseInfo();
const { isLoading, data, updateCourseInfo } = useUpdateCourseInfo();

const courseData = ref();
const isUpdated = ref(false);
const isPublished = ref<boolean>(false);

const onUpdate = async (newData: any) => {
  isUpdated.value = false;
  courseData.value = newData.value;
  isUpdated.value = true;
};

const onPublish = async () => {
 isPublished.value = !isPublished.value
 await updateCourseInfo(Number(router.params.id), {published: isPublished.value});
}

onMounted(async () => {
  await getCourseInfo(Number(router.params.id));
  courseData.value = courseInfo?.value;
  isPublished.value = courseInfo?.value.published;

});
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-4 rounded-md mx-auto custom-container">
    <div>
      <div class="grid grid-cols-6 md:grid-cols-12 gap-3 items-center">
        <div class="order-1 md:order-1 col-span-3 md:col-span-1">
          <RouterLink :to="`/my-courses`">
            <Button size="icon" variant="outline">
              <ChevronLeftCircle />
            </Button>
          </RouterLink>
        </div>

        <div class="order-3 md:order-2 col-span-6 md:col-span-8">
          <Skeleton v-if="getLoading" class="h-[31px] w-[250px] max-sm:w-[150px] mb-2" />
          <h3
            v-else
            class="text-4xl max-md:text-2xl font-extrabold text-gray-700 dark:text-white"
          >
            {{ courseData ? courseData.title : "Malumot yuklanmadi" }}
          </h3>
          <p class="text-sm text-muted-foreground">Modul haqida malumot</p>
        </div>

        <div class="order-2 md:order-3 col-span-3 md:col-span-3 flex gap-2 justify-end">
          <Button @click="onPublish">
            <template v-if="isLoading"><Loader class="animate-spin" /></template>
            <template v-else>
              <template v-if="!isPublished">Ochish</template>
              <template v-else>Yopish</template>
            </template>
          </Button>
          <Actions />
        </div>
      </div>
      <Separator class="my-2" />
    </div>
    <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <div class="space-y-3">
          <CourseFieldCard name="Nomi" #default="{ state }" :isUpdated="isUpdated">
            <TitleField :state="state" @onUpdated="onUpdate" :course="courseData" />
          </CourseFieldCard>

          <CourseFieldCard name="Kurs haqida" #default="{ state }" :isUpdated="isUpdated">
            <DescriptionField :state="state" @onUpdated="onUpdate" :course="courseData" />
          </CourseFieldCard>

          <CourseFieldCard
            name="Kurs malumotlari"
            #default="{ state }"
            :isUpdated="isUpdated"
          >
            <InformationField :state="state" @onUpdated="onUpdate" :course="courseData" />
          </CourseFieldCard>

          <CourseFieldCard
            name="Kurs malumotlari"
            #default="{ state }"
            :isUpdated="isUpdated"
          >
            <SelectFields :state="state" @onUpdated="onUpdate" :course="courseData" />
          </CourseFieldCard>
        </div>
        <div class="space-y-3">
          <SectionsField @onUpdated="onUpdate" :course="courseData" />

          <CourseFieldCard name="Narx" #default="{ state }" :isUpdated="isUpdated">
            <PriceField :state="state" @onUpdated="onUpdate" :course="courseData" />
          </CourseFieldCard>

          <CourseFieldCard name="Rasm" #default="{ state }" :isUpdated="isUpdated">
            <ImagesField :state="state" @onUpdated="onUpdate" :course="courseData" />
          </CourseFieldCard>
        </div>
    </div>
  </div>
</template>
