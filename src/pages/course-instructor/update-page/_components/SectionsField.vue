<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useForm } from "vee-validate";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { useUpdateCourseInfo } from "../service";
import { Skeleton } from "@/components/ui/skeleton";
import SubmitButton from "../shared/SubmitButton.vue";
import { ref } from "vue";
import { X, BadgePlus } from "lucide-vue-next";
import useToggleEdit from "@/hooks/use-toggle-edit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionList from "../shared/SectionList.vue";
const { state, onToggle } = useToggleEdit();

const sections = ref([
  {
    path: "1-Module",
  },
  {
    path: "2-Module",
  },
  {
    path: "3-Module",
  },
  {
    path: "4-Module",
  },
  {
    path: "5-Module",
  },
]);

const { isLoading, data, updateCourseInfo } = useUpdateCourseInfo();
const props = defineProps({
  state: Boolean,
  course: Object,
});

const formSchema = toTypedSchema(
  z.object({
    title: z.string().max(30, {
      message: "Kurs nomi 30 ta belgidan oshmasligi kerak",
    }),
  })
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
});

const emit = defineEmits<{
  (e: "onUpdated", data: any): void;
}>();

const onSubmit = handleSubmit(async (values) => {
  await updateCourseInfo(Number(props.course?._id), values);
  emit("onUpdated", data);
  resetForm();
});
</script>
<template>
  <Card>
    <CardHeader class="pb-2">
      <div class="flex items-center justify-between">
        <CardTitle>Bo'limlar</CardTitle>
        <Button variant="ghost" @click="onToggle()">
          <X v-if="state" />
          <BadgePlus v-else />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <Separator class="mb-2" />
      <div v-if="!state" class="flex">
        <Skeleton v-if="isLoading || !course" class="h-[22px] w-[190px]" />
        <div v-else class="w-full">
          <SectionList :sections="sections" />
        </div>
      </div>
      <div v-else>
        <form @submit.prevent="onSubmit">
          <div class="space-y-3">
            <FormField v-slot="{ field, errors }" name="title">
              <FormItem>
                <FormLabel>Bo'lim nomi <span class="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    :default-value="props.course?.title"
                    v-model="field.value"
                    v-bind="field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div class="flex">
              <SubmitButton :is-loading="isLoading" />
            </div>
          </div>
        </form>
      </div>
    </CardContent>
  </Card>
</template>
