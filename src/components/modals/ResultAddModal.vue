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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
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
    (e: "onConfirm", values: { img: string; type: string }): void;
    (e: "onOpenChange", value: boolean): void;
}>();


const formSchema = toTypedSchema(
  z.object({
    img: z.string().url(),
    type: z.string(),
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
        <DialogTitle>Yangi natija qo'shish</DialogTitle>     
        <DialogDescription>
        </DialogDescription>
      </DialogHeader>

      <form @submit.prevent="onSubmit">
        <div class="space-y-3">
          <FormField v-slot="{ field, errors }" name="img">
            <FormItem>
              <FormLabel>Natija rasmini link sifatida kiriting<span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input type="text" placeholder="Kurs nomini kiriting" v-bind="field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="type">
              <FormItem>
                <FormLabel>Darajasi <span class="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Select v-bind="field">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Tanlang" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Topik">Topik</SelectItem>
                        <SelectItem value="Ielts">Ielts</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div class="flex">
                <DialogClose as-child>
                    <Button type="button" variant="outline" class="bg-slate-300"> Bekor qilish </Button>
                </DialogClose>
                <Button class="py-3">     
                    <template v-if="isLoading">
                        <Loader class="size-4 animate-spin" /> Yuklanmoqda...
                    </template>
                    <template v-else>Qo'shish</template>
                </Button>
            </div>
        </div>
      </form>
    </DialogContent>
  </Dialog>
</template>
