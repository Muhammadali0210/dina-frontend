<script setup lang="ts">
import CourseApplicationModal from '@/components/modals/CourseApplicationModal.vue';
import { Button } from '@/components/ui/button';
import { ref } from 'vue';
import { useCreateApplication } from '../service';


const isOpen = ref(false);
const { isLoading, data, createApplication } = useCreateApplication();

const createHandler = async (values: any) => {
  await createApplication(values);
  isOpen.value = false;
}
</script>
<template>
  <div
    class="h-full p-4 space-x-4 w-full flex flex-col items-start shadow-lg justify-center border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 z-20"
  >
    <div class="w-full h-full space-y-3">
      <h2 class="text-center font-semibold">
        Onlide darslarimizga qo'shilish istagingiz bo'lsa bizga murojaat qiling
      </h2>
      <a href="https://dinakoreanmasterclass.uz" target="_blank">
        <Button
          class="w-full relative px-5 py-2 mt-4 font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg shadow-blue-500/50 hover:from-blue-500 hover:to-purple-500 hover:scale-105 transform transition duration-500 ease-in-out focus:ring-4 focus:ring-blue-300 focus:outline-none animate-bounce"
        >
          Ariza qoldirish
        </Button>
      </a>
      <!-- <Button
          @click="isOpen = true"
          class="w-full relative px-5 py-2 font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg shadow-blue-500/50 hover:from-blue-500 hover:to-purple-500 hover:scale-105 transform transition duration-500 ease-in-out focus:ring-4 focus:ring-blue-300 focus:outline-none animate-bounce"
        >
          Ariza qoldirish
        </Button> -->
    </div>
  </div>

  <CourseApplicationModal :is-loading="isLoading"  :isOpen="isOpen" @onOpenChange="isOpen = $event" @onConfirm="createHandler" />
</template>
