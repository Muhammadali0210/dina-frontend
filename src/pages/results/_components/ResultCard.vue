<script setup lang="ts">
import { defineProps } from 'vue';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Trash2 } from "lucide-vue-next"
import { ref } from 'vue'

const role = ref(localStorage.getItem('role'))

const props = defineProps({
    result: {
        type: Object,
        required: true
    }
})
</script>

<template>
  <div
    class="h-[350px] max-sm:h-[240px] group relative rounded-xl overflow-hidden card w-full"
  >
    <img
      :src="result?.img"
      alt="result image"
      class="w-full h-full object-cover"
      loading="lazy"
    />

    <Trash2 v-if="role === 'admin' || role === 'teacher'" @click="$emit('deleteResult', result?._id)"  class="size-5 text-red-700 absolute bottom-2 right-2 opacity-0 group-hover:opacity-100" />

    <Dialog class="p-0">
      <DialogTrigger
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm px-5 py-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <h2>
            Ko'rish
        </h2>
      </DialogTrigger>
      <DialogContent class="p-0 max-md:h-full">
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
        <img class="p-0" :src="result?.img" alt="result image" loading="lazy" />
      </DialogContent>
    </Dialog>
  </div>
</template>
