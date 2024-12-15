<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LoaderIcon, Images } from "lucide-vue-next";
import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast()
import { ref } from "vue";
import { ApiService } from "@/services/apiServices";

const formSchema = toTypedSchema(
  z.object({
    title: z
      .string()
      .max(50, { message: "Kurs nomi 50 ta belgidan oshmasligi kerak" }),
    description: z
      .string()
      .max(50, { message: "Kurs haqidagi malumot 50 ta belgidan oshmasligi kerak" }),
    learning: z.string(),
    requirements: z.string(),
    level: z.string(),
    category: z.string(),
    language: z.string(),
    oldPrice: z.number().min(0),
    currentPrice: z.number().min(0),
    previewImage: z.string(),
    published: z.boolean(),
  })
);

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  // defaultValues: {
  //   title: "",
  //   description: "",
  //   learning: "",
  //   requirements: "",
  //   level: "",
  //   language: "",
  //   category: "",
  //   oldPrice: "",
  //   currentPrice: "",
  // },
});

const uploadedUrl = ref('');
const isOpen = ref(false)
const isUploaded = ref(false)
const fileInput = ref<any>(null)

const onOpenChange = (value: boolean) => {
  isOpen.value = value
}

const onFileChange = async () => {
  isUploaded.value = false
  uploadedUrl.value = URL.createObjectURL(fileInput.value.files[0]);
};

const  uploadFile = async () => {
  isUploaded.value = true
  const formData = new FormData();
  formData.append("file", fileInput.value.files[0]);

  //   try {
  //       const response = await ApiService.postFileByToken("/upload/videoimg", formData);

  //       if (!response) {
  //           throw new Error("Rasm yuklashda xato");
  //       }
        
  //       toast({
  //         title: 'Rasm muvaffaqiyatli yuklandi',
  //         description: "Rasm muvaffaqiyatli yuklandi",
  //       });
  //       uploadedUrl.value = await response.url;
  //       console.log(response.url);
  //   } catch (error) {
  //       console.error(error);
  //   }
}


const onSubmit = handleSubmit((values) => {
  // values.previewImage = uploadedUrl.value
  console.log("Form submitted!", values);
});
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-4">
    <div>
      <h3 class="text-lg font-medium">Kurs yaratish</h3>
      <p class="text-sm text-muted-foreground">
        Kurs yaratish uchun ma'lumotlarni kiriting.
      </p>
    </div>
    <Separator class="my-4" />
    <form @submit.prevent="onSubmit">
      <div class="space-y-3">
        <FormField v-slot="{ field, errors }" name="title">
          <FormItem>
            <FormLabel>Kurs nomi <span class="text-red-500">*</span></FormLabel>
            <FormControl>
              <Input type="text" placeholder="Kurs nomini kiriting" v-bind="field" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ field, errors }" name="description" class="h-[200px]">
          <FormItem>
            <FormLabel>Qisqacha malumot <span class="text-red-500">*</span></FormLabel>
            <FormControl>
              <Textarea v-bind="field" placeholder="Kurs haqida qisqacha malumot" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <FormField v-slot="{ field, errors }" name="learning">
            <FormItem>
              <FormLabel
                >Sizning kursingizda nimalarni o'rganadi?
                <span class="text-red-500">*</span></FormLabel
              >
              <FormControl>
                <Textarea v-bind="field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="requirements">
            <FormItem>
              <FormLabel>Talablar <span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Textarea v-bind="field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          <FormField v-slot="{ field, errors }" name="level">
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
                      <SelectItem value="beginner"> Boshlang'ich </SelectItem>
                      <SelectItem value="middle"> O'rta </SelectItem>
                      <SelectItem value="high"> Yuqori </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="category">
            <FormItem>
              <FormLabel>Kategoriya<span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Select v-bind="field">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Tanlang" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="grammatika"> Gramatika </SelectItem>
                      <SelectItem value="topik"> Topik </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="language">
            <FormItem>
              <FormLabel>Til<span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Select v-bind="field">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Tanlang" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="uzb"> O'zbekcha </SelectItem>
                      <SelectItem value="eng"> Inglizcha </SelectItem>
                      <SelectItem value="kor"> Korescha </SelectItem>
                      <SelectItem value="rus"> Ruscha </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="oldPrice">
            <FormItem>
              <FormLabel>Eski narx <span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Kurs eski narxini kiriting"
                  v-bind="field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="currentPrice">
            <FormItem>
              <FormLabel>Yangi narx <span class="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Kurs yangi narxini kiriting"
                  v-bind="field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <div>
            <Label>Rasm yuklang<span class="text-red-500 text-sm mb-6">*</span></Label>
            <input
                type="file"
                placeholder="Rasm yuklang"
                accept="image/*"
                ref="fileInput"
                @change="onFileChange"
                class="block w-full mt-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-1"></div>

        <div class="flex gap-4 justify-end">
          <Button variant="destructive" @click="resetForm"> Tozalash </Button>
          <Button :disabled="uploadedUrl ? false : true" type="submit"> Saqlash </Button>
          <Button v-if="uploadedUrl" @click="isOpen = true" variant="outline" type="button"> <Images /> Rasm </Button>
        </div>
      </div>
    </form>
  </div>

  <Dialog :open="isOpen" @onOpenChange="onOpenChange" >
    <DialogContent class="sm:max-w-[425px] p-3">
      <DialogHeader v-if="uploadedUrl">
        <DialogTitle class="hidden">Yuklangan rasm</DialogTitle>
        <DialogDescription class="hidden">Yuklangan rasm</DialogDescription>
        <img :src="uploadedUrl" class="w-full max-h-[230px]" style="object-fit: cover;" alt="uploaded url">
      </DialogHeader>
      
      <DialogFooter>
        <Button type="button" @click="uploadFile">
          <template v-if="!isUploaded">
            Rasmni saqlash
          </template>
          <template v-else>
            <LoaderIcon class="animate-spin" /> Yuborilmoqda...
          </template>
        </Button>
        <Button type="button" variant="outline" @click="isOpen = false">
          Oynani yopish
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
