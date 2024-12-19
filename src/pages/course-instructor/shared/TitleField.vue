<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
import { ApiService } from "@/services/apiServices";
const props = defineProps({
  state: Boolean,
  course: Object
})

const formSchema = toTypedSchema(
  z.object({
    title: z.string().max(30, {
      message: "Kurs nomi 30 ta belgidan oshmasligi kerak",
    }),
  })
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: props.course?.title,
  },
});

const emit  = defineEmits<{
  (e: 'onUpdated'): void;
}>()
const updateHandler = async (value: any) => {
  try {
    if(!props.course) return
    await ApiService.patchByToken(`/course/${props.course?._id}`, value);
    emit('onUpdated');
  } catch (error) {
    
  }
}


const onSubmit = handleSubmit(async (values) => {
  await updateHandler(values);
  resetForm();
})

</script>
<template>
    <div v-if="!state">
      <h1 class="font-bold">Kurs nomi: <span class="font-medium">{{ props.course?.title }}</span></h1>
    </div>
    <div v-else>
      <form @submit.prevent="onSubmit">
        <div class="space-y-3">
          <FormField v-slot="{ field, errors }" name="title">
            <FormItem>
              <FormLabel>Kurs nomi <span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input type="text" v-model="field.value" placeholder="Kurs nomini kiriting" v-bind="field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <div class="flex">
            <Button  type="submit">
                Saqlash
            </Button>
          </div>
        </div>
      </form>
    </div>
</template>