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
import SubmitButton from "@/ui/SubmitButton.vue";
import { ref, onMounted, defineProps, defineEmits } from "vue";
import { X, BadgePlus } from "lucide-vue-next";
import useToggleEdit from "@/hooks/use-toggle-edit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionList from "./SectionList.vue";
// import { useCreateSection } from "../service";
import { useRoute } from "vue-router";

const route = useRoute();
const { state, onToggle } = useToggleEdit();

// const { sectionLoading, sectionData, getSection, createSection } = useCreateSection()
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
    seconds: z.number()
  })
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  console.log(values.title);
  console.log(values);

  //   await createSection(Number(props.course?._id), values.title);
  onToggle();
  resetForm();
});

onMounted(async () => {
  //   await getSection(Number(route.params.id));
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
        Lessons
        <!-- <SectionList :sections="sectionData" :is-loading="sectionLoading" />    -->
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
                      placeholder="Secund"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>

            <div class="flex">
              <SubmitButton />
            </div>
          </div>
        </form>
      </div>
    </CardContent>
  </Card>
</template>
