<script setup lang="ts">
import { useForm, FieldArray } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {Separator} from '@/components/ui/separator'

const formSchema = toTypedSchema(z.object({
  title: z.string().min(2, { message: 'Iltimos kurs nomini kiriting'}).max(50, { message: 'Kurs nomi 50 ta belgidan oshmasligi kerak'}),
  description: z.string().min(2).max(50, { message: 'Kurs haqidagi malumot 50 ta belgidan oshmasligi kerak'}),
  studentWillLearn: z.string(),
  requirements: z.string(),
  level: z.string(),
  category: z.string(),
  language: z.string(),
  oldPrice: z.string().min(0),
  currentPrice: z.string().min(0),
}))

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values);
});
</script>

<template>
    <div class="bg-white dark:bg-gray-800 p-4">
        <div>
            <h3 class="text-lg font-medium">
            Kurs yaratish
            </h3>
            <p class="text-sm text-muted-foreground">
            Kurs yaratish uchun ma'lumotlarni kiriting.
            </p>
        </div>
        <Separator class="my-4" />
        <form @submit.prevent="onSubmit">
            <div class="space-y-3" >
                <FormField  
                    v-slot="{ field, errors }"    
                    name="title"
                >
                    <FormItem>
                        <FormLabel>Kurs nomi <span class="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Kurs nomini kiriting" v-bind="field" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField  v-slot="{ field, errors }" name="description" class="h-[200px]"> 
                    <FormItem>
                        <FormLabel>Qisqacha malumot <span class="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Textarea v-bind="field" placeholder="Kurs haqida qisqacha malumot" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                    <FormField  v-slot="{ field, errors }" name="studentWillLearn">
                        <FormItem>
                            <FormLabel>Sizning kursingizda nimalarni o'rganadi? <span class="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Textarea v-bind="field" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField  v-slot="{ field, errors }" name="requirements">
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
                    <FormField  v-slot="{ field, errors }" name="level">
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
                                        <SelectItem value="beginner">
                                            Boshlang'ich
                                        </SelectItem>
                                        <SelectItem value="middle">
                                            O'rta
                                        </SelectItem>
                                        <SelectItem value="high">
                                            Yuqori
                                        </SelectItem>
                                    </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField  v-slot="{ field, errors }" name="category">
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
                                        <SelectItem value="grammatika">
                                            Gramatika
                                        </SelectItem>
                                        <SelectItem value="topik">
                                            Topik
                                        </SelectItem>
                                    </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField  v-slot="{ field, errors }" name="language">
                        <FormItem>
                            <FormLabel>Til<span class="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Select v-bind="field" >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Tanlang" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="uzb">
                                            O'zbekcha
                                        </SelectItem>
                                        <SelectItem value="eng">
                                            Inglizcha
                                        </SelectItem>
                                        <SelectItem value="kor">
                                            Korescha
                                        </SelectItem>
                                        <SelectItem value="rus">
                                            Ruscha
                                        </SelectItem>
                                    </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                
                <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                    <FormField  
                        v-slot="{ field, errors }"    
                        name="oldPrice"
                    >
                        <FormItem>
                            <FormLabel>Eski narx <span class="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Kurs eski narxini kiriting" v-bind="field" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField  
                        v-slot="{ field, errors }"    
                        name="currentPrice"
                    >
                        <FormItem>
                            <FormLabel>Yangi narx <span class="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Kurs yangi narxini kiriting" v-bind="field" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>

                <div class="flex gap-4 justify-end">
                    <Button variant="destructive" @click="resetForm">
                        Tozalash
                    </Button>
                    <Button type="submit">
                    Submit
                    </Button>
                </div>
            </div>
        </form>
    </div>
</template>