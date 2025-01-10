<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogClose,
    DialogHeader
} from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Trash2, Loader } from "lucide-vue-next";
import { defineProps, defineEmits } from "vue";

defineProps({
    isLoading: Boolean,
    isOpen: Boolean
})  
// const emit = defineEmits(["onConfirm", "onOpenChange"])
const emit = defineEmits<{
    (e: "onConfirm", values: any): void;
    (e: "onOpenChange", value: boolean): void;
}>();


const formSchema = toTypedSchema(
  z.object({
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
  })
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit((values) => {
  emit('onConfirm', values)
  resetForm()
})
</script>

<template>
  <Dialog @update:open="emit('onOpenChange', $event)" :open="isOpen">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Malumotlaringizni kiriting</DialogTitle>     
        <DialogDescription>
        </DialogDescription>
      </DialogHeader>

      <form @submit.prevent="onSubmit">
        <div class="space-y-3">
          <FormField v-slot="{ field, errors }" name="firstName">
            <FormItem>
              <FormLabel>Ism<span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input type="text" placeholder="Ismingizni kiriting" v-bind="field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="lastName">
            <FormItem>
              <FormLabel>Familiya<span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input type="text" placeholder="Familiyangizni kiriting" v-bind="field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="phone">
            <FormItem>
              <FormLabel>Telefon nomer<span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input type="text" placeholder="+998 xx xxx xx xx"  v-bind="field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

            <div class="flex">
                <DialogClose as-child>
                    <Button type="button" variant="outline" class="bg-slate-300 h-[42px] mr-3"> Bekor qilish </Button>
                </DialogClose>
                <Button class="h-10">     
                    <template v-if="isLoading">
                        <Loader class="size-4 animate-spin" /> Yuklanmoqda...
                    </template>
                    <template v-else>Yuborish</template>
                </Button>
            </div>
        </div>
      </form>
    </DialogContent>
  </Dialog>
</template>
