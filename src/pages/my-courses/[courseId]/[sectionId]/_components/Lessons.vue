<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useForm } from "vee-validate";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { Skeleton } from "@/components/ui/skeleton";
import SubmitButton from "@/ui/SubmitButton.vue";
import { ref, onMounted, defineProps, defineEmits } from "vue";
import { X, BadgePlus } from "lucide-vue-next";
import useToggleEdit from "@/hooks/use-toggle-edit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRoute } from "vue-router";
import { useCreateLesson } from "../services/lesson-service";
import { useGetLessonInfo } from "../services/lesson-service";
import { useLessonStore } from "../stores/lesson-store";
import LessonList from "./LessonList.vue";

const route = useRoute();
const lessonStore = useLessonStore();
const { state, onToggle } = useToggleEdit();

const { createLoading, createLesson } = useCreateLesson();
const { getLoading, getLessonInfo } = useGetLessonInfo();

const props = defineProps({
  course: Object,
});

const formSchema = toTypedSchema(
  z.object({
    title: z.string().max(30, {
      message: "Kurs nomi 30 ta belgidan oshmasligi kerak",
    }),
    videoUrl: z.string().url(),
    hours: z.number(),
    minutes: z.number(),
    seconds: z.number(),
  }),
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  const newData = {
    title: values.title,
    videoUrl: values.videoUrl,
    duration: {
      hours: values.hours,
      minutes: values.minutes,
      seconds: values.seconds,
    },
    sectionId: Number(route.params.sectionId),
  };
  await createLesson(`/lesson`, newData);
  onToggle();
  resetForm();
});

const lessons = ref([]);

onMounted(async () => {
  lessons.value = await lessonStore.getLesson;
  // if(lessons.value.length > 0 && route.params.sectionId != lessons.value[0]?.sectionId) {
  //   await getLessonInfo(Number(route.params.sectionId));
  // } else {
  //   await getLessonInfo(Number(route.params.sectionId));
  // }
  await getLessonInfo(Number(route.params.sectionId));
});
</script>
<template>
  <Card>
    <CardHeader class="pb-2">
      <div class="flex items-center justify-between">
        <CardTitle>Video darsliklar</CardTitle>
        <Button variant="ghost" @click="onToggle()">
          <X v-if="state" />
          <BadgePlus v-else />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <Separator class="mb-2" />
      <div v-if="!state">
        <LessonList :is-loading="getLoading" />
      </div>
      <div v-else>
        <form @submit.prevent="onSubmit">
          <div class="space-y-3">
            <FormField v-slot="{ field }" name="title">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    v-model="field.value"
                    v-bind="field"
                    placeholder="Nomi"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ field }" name="videoUrl">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    v-model="field.value"
                    v-bind="field"
                    placeholder="Video URL"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div class="grid grid-cols-3 gap-4">
              <FormField v-slot="{ field }" name="hours">
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      v-model="field.value"
                      v-bind="field"
                      placeholder="Soat"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ field }" name="minutes">
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      v-model="field.value"
                      v-bind="field"
                      placeholder="Minut"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ field }" name="seconds">
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      v-model="field.value"
                      v-bind="field"
                      placeholder="Sekund"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>

            <div class="flex">
              <SubmitButton :isLoading="createLoading" />
            </div>
          </div>
        </form>
      </div>
    </CardContent>
  </Card>
</template>
