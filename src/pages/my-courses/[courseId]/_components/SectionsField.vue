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
import { Skeleton } from "@/components/ui/skeleton";
import SubmitButton from "../shared/SubmitButton.vue";
import { ref, onMounted } from "vue";
import { X, BadgePlus } from "lucide-vue-next";
import useToggleEdit from "@/hooks/use-toggle-edit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionList from "./SectionList.vue";
import { useCreateSection } from "../service";

const { state, onToggle } = useToggleEdit();

const sections = ref([]);

// const { isLoading, data, updateCourseInfo } = useUpdateCourseInfo();
const { sectionLoading, sectionData, getSection, createSection } = useCreateSection()
const props = defineProps({
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

const onSubmit = handleSubmit(async (values) => {
  console.log(values.title);
  await createSection(Number(props.course?._id), values.title);
  sections.value = sectionData.value
  onToggle();
  resetForm();
});

onMounted(async () => {
  await getSection();
  sections.value = sectionData.value;
  console.log(sections.value);
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
      <div v-if="!state">
        <Skeleton v-if="sectionLoading" class="w-full h-[30px]" />
        <SectionList v-else :sections="sections" />
      </div>
      <div v-else>
        <form @submit.prevent="onSubmit">
          <div class="space-y-3">
            <FormField v-slot="{ field }" name="title">
              <FormItem>
                <FormLabel>Bo'lim nomi <span class="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    v-model="field.value"
                    v-bind="field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div class="flex">
              <SubmitButton :is-loading="sectionLoading" />
            </div>
          </div>
        </form>
      </div>
    </CardContent>
  </Card>
</template>
