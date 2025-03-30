<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useForm } from "vee-validate";
import { Textarea } from '@/components/ui/textarea'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import SubmitButton from "@/ui/SubmitButton.vue";
import { ref, onMounted, defineProps, defineEmits } from "vue";
import { X, BadgePlus,Loader } from "lucide-vue-next";
import useToggleEdit from "@/hooks/use-toggle-edit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRoute } from "vue-router";
import { useCreateLesson, useGetLessonInfo, useUpdateLesson } from "../services/lesson-service";
import { useLessonStore } from "../stores/lesson-store";
import LessonList from "./LessonList.vue";

const route = useRoute();
const lessonStore = useLessonStore();
const { state, onToggle } = useToggleEdit();

const { createLoading, createLesson } = useCreateLesson();
const { getLoading, getLessonInfo } = useGetLessonInfo();
const { updateLoading, updateLesson } = useUpdateLesson();

const questions = ref<{ image: string; text: string; textUz: string }[]>([]);
const newQuestion = ref({ image: "", text: "", textUz: "" });

const props = defineProps({
  course: Object,
});

const formSchema = toTypedSchema(
  z.object({
    title: z.string().max(30, {
      message: "Kurs nomi 30 ta belgidan oshmasligi kerak",
    }),
    videoUrl: z.string(),
    hours: z.number(),
    minutes: z.number(),
    seconds: z.number(),
    dictionary: z.string(),
    audioUrl: z.string(),
  }),
);

const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  const newData = {
    lesson: {
      title: values.title,
      videoUrl: values.videoUrl,
      duration: {
        hours: values.hours,
        minutes: values.minutes,
        seconds: values.seconds,
      },
      sectionId: Number(route.params.sectionId),
      dictionary: values.dictionary,
      audioUrl: values.audioUrl
    },
    tasks: questions.value
  };
  if (!isUpdate.value) {
    console.log(newData);
    
    await createLesson(`/lesson`, newData);
  } else {
    await editHandler(newData);
  }
  onToggle();
  resetForm();
});

interface ILesson {
  _id?: number;
  title: string;
  videoUrl: string;
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  sectionId: number;
  dictionary: string;
  audioUrl: string;
}

const lessons = ref<ILesson[]>([]);
const isUpdate = ref<boolean>(false);
const updateId = ref<number>();

const onEditStart = (etitItem: any) => {
  const values = {
    hours: etitItem.duration.hours,
    minutes: etitItem.duration.minutes,
    seconds: etitItem.duration.seconds,
    ...etitItem,
  };
  setValues(values);
  onToggle();
  isUpdate.value = true;
  updateId.value = etitItem._id;
}

const editHandler = async (editValue: any) => {
  await updateLesson(`/lesson/${updateId.value}`, editValue);
  isUpdate.value = false;
}

const closeEdit = () => {
  resetForm();
  onToggle();
  isUpdate.value = false;
  updateId.value =  0;
}


const addQuestion = () => {
  if (newQuestion.value.image && newQuestion.value.text && newQuestion.value.textUz) {
    questions.value.push({ ...newQuestion.value });
    console.log(questions.value);
    
    newQuestion.value = { image: "", text: "", textUz: "" }; 
  }
};
const removeQuestion = (index: number) => {
  questions.value.splice(index, 1);
};


onMounted(async () => {
  lessons.value = await lessonStore.getLesson;
  
  
  if (lessons.value.length > 0 && String(route.params.sectionId) !== String(lessons.value[0].sectionId)) {
    await getLessonInfo(Number(route.params.sectionId));
  } else if (lessons.value.length === 0) {
    await getLessonInfo(Number(route.params.sectionId));
  } else if(lessons.value.length > 0 && String(route.params.sectionId) === String(lessons.value[0].sectionId)) {
    return;
  }
  lessons.value = await lessonStore.getLesson;
  console.log(lessons.value);
  
});
</script>
<template>
  <Card>
    <CardHeader class="pb-2">
      <div class="flex items-center justify-between">
        <CardTitle>Video darsliklar</CardTitle>
        <Button v-if="!isUpdate" variant="ghost" @click="onToggle()">
          <X v-if="state" />
          <BadgePlus v-else />
        </Button>
      </div>
    </CardHeader>

    <CardContent>
      <Separator class="mb-2" />
      <div v-if="!state">
        <LessonList :is-loading="getLoading"  @onEdit="onEditStart" />
      </div>
      <div v-else>
        <form @submit.prevent="onSubmit">
          <div class="space-y-3">
            <FormField v-slot="{ field }" name="title">
              <FormItem>
                <FormControl class="flex justify-center items-start texdnjfnjdfnjdfnjd ">
                  <Input type="text" v-model="field.value" v-bind="field" placeholder="Nomi" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ field }" name="videoUrl">
              <FormItem>
                <FormControl>
                  <Input type="text" v-model="field.value" v-bind="field" placeholder="Video Id" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div class="grid grid-cols-3 gap-4">
              <FormField v-slot="{ field }" name="hours">
                <FormItem>
                  <FormControl>
                    <Input type="number" v-model="field.value" v-bind="field" placeholder="Soat" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ field }" name="minutes">
                <FormItem>
                  <FormControl>
                    <Input type="number" v-model="field.value" v-bind="field" placeholder="Minut" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ field }" name="seconds">
                <FormItem>
                  <FormControl>
                    <Input type="number" v-model="field.value" v-bind="field" placeholder="Sekund" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

            </div>

            <FormField v-slot="{ field }" name="audioUrl">
              <FormItem>
                <FormControl>
                  <Input type="text" v-model="field.value" v-bind="field" placeholder="Audio url" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <!-- lug'tlar -->
            <FormField v-slot="{ field }" name="dictionary">
              <FormItem>
                <FormControl>
                  <Textarea class="bg-slate-700" v-model="field.value" v-bind="field" placeholder="So'zlar" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div>
              <CardTitle>Mashqlar</CardTitle>
              <Separator class="mt-2 mb-2" />
              <FormField name="">
                <FormItem>
                  <div class="space-y-2">
                    <div v-for="(q, index) in questions" :key="index" class="flex items-center gap-2">
                      <div class="w-6 text-center font-bold">{{ index + 1 }}</div>
                      <Input v-model="q.image" placeholder="Rasm uchun havola" disabled />
                      <Input v-model="q.text" placeholder="Savol UZ/KR" disabled />
                      <Input v-model="q.textUz" placeholder="Javob UZ/KR" disabled />
                      <Button variant="destructive" @click="removeQuestion(index)">
                        <X />
                      </Button>
                    </div>
                  </div>
                  <div class=" mt-2">
                    <Input class="mt-2" v-model="newQuestion.image" placeholder="Rasm uchun havola" />
                    <Input class="mt-2" v-model="newQuestion.text" placeholder="Savol UZ/KR" />
                    <Input class="mt-2" v-model="newQuestion.textUz" placeholder="Javob UZ/KR" />
                    <div class="flex justify-end mt-2">
                      <div @click="addQuestion"
                        class="cursor-pointer flex items-center justify-center  gap-2 px-1.5 py-1.5 text-slate-900 w-[100px] bg-blue-500 border rounded-md  hover:bg-blue-600">
                        <span>Qo'shish</span>
                      </div>
                    </div>
                  </div>
                </FormItem>
              </FormField>
            </div>

            <div class="flex">
              <SubmitButton v-if="!isUpdate" :isLoading="createLoading" />
              <div v-else>
                <Button type="submit">
                  <template v-if="!updateLoading">
                    Tahrirlash
                  </template>
                  <template v-else>
                    <Loader class="animate-spin" /> Tahrirlanmoqda...
                  </template>
                </Button>
                <Button type="button" @click="closeEdit" variant="outline"
                  class="ml-2 bg-slate-100 dark:bg-gray-800">Bekor qilish</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </CardContent>
  </Card>
</template>
