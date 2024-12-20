<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "vee-validate";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-vue-next";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { useUpdateCourseInfo } from "../service";

const { isLoading, data, updateCourseInfo } = useUpdateCourseInfo();
const props = defineProps({
  state: Boolean,
  course: Object
})

const formSchema = toTypedSchema(
  z.object({
    requirements: z.string().max(400, {
      message: "Kurs nomi 400 ta belgidan oshmasligi kerak",
    }),
  })
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    requirements: props.course?.requirements,
  },
});

const emit  = defineEmits<{
  (e: 'onUpdated', data: any): void;
}>()

const onSubmit = handleSubmit(async (values) => {
  await updateCourseInfo(Number(props.course?._id), values);
  emit('onUpdated', data);
  resetForm();
})

</script>
<template>
    <div v-if="!state">
      <div v-if="isLoading || !course">
        <Skeleton class="h-[22px] w-full mb-2" />
        <Skeleton class="h-[22px] w-[50%]" />
      </div>
      <h1 v-else class="font-normal max-h-[400px] overflow-y-auto">{{ props.course?.requirements }}</h1>
    </div>
    <div v-else>
      <form @submit.prevent="onSubmit">
        <div class="space-y-3">
          <FormField v-slot="{ field, errors }" name="requirements">
            <FormItem>
              <FormControl>
                <Textarea type="text" v-model="field.value" placeholder="Kurs nomini kiriting" v-bind="field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <div class="flex">
            <Button  type="submit">
              <template v-if="!isLoading">
                Saqlash
              </template>
              <template v-else>
                <Loader class="animate-spin" /> Yuborilmoqda...
              </template>
            </Button>
          </div>
        </div>
      </form>
    </div>
</template>