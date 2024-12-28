<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Edit2, X, Loader } from "lucide-vue-next";
import useToggleEdit from "@/hooks/use-toggle-edit";
const { state, onToggle } = useToggleEdit();
import { useUpdateSectionInfo } from "../services/service";
import * as z from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { defineProps, ref, watch, onMounted } from "vue";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const { isLoading, data, updateSectionInfo } = useUpdateSectionInfo();

const props = defineProps({
  state: Boolean,
  section: Object,
  dataLoading: Boolean,
});

const formSchema = toTypedSchema(
  z.object({
    title: z.string().max(30, {
      message: "Kurs nomi 30 ta belgidan oshmasligi kerak",
    }),
  })
);

const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: "", // Dastlab bo'sh
  },
});

const emit = defineEmits<{
  (e: "onUpdated", data: any): void;
}>();

// Form qiymatini `props.section?.title` ga ulash
onMounted(() => {
  if (props.section?.title) {
    setValues({ title: props.section.title });
  }
});

watch(
  () => props.section?.title,
  (newTitle) => {
    if (newTitle) {
      setValues({ title: newTitle });
    }
  }
);

const onSubmit = handleSubmit(async (values: any) => {
  await updateSectionInfo(`/sections/${20}`, values);
  emit("onUpdated", data);
  resetForm();
});
</script>

<template>
  <Card>
    <CardHeader class="pb-2">
      <div class="flex items-center justify-between">
        <CardTitle>Bo'lim nomi</CardTitle>
        <Button variant="ghost" @click="onToggle()">
          <X v-if="state" />
          <Edit2 v-else />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <Separator class="mb-2" />
      <div v-if="!state" class="flex">
        <Skeleton v-if="dataLoading || !section" class="h-[22px] w-[190px]" />
        <h1 v-else class="font-normal">{{ props.section?.title }}</h1>
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
                    v-model="field.value"
                    v-bind="field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div class="flex">
              <Button type="submit">
                <template v-if="!isLoading"> Saqlash </template>
                <template v-else>
                  <Loader class="animate-spin" /> Yuborilmoqda...
                </template>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </CardContent>
  </Card>
</template>
