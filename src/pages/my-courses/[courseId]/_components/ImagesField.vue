<script setup lang="ts">
import { nextTick, onMounted, ref, defineProps, defineEmits } from "vue";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader } from "lucide-vue-next";
import { useUpdateCourseInfo } from "../service";
import { Skeleton } from "@/components/ui/skeleton";
import { ApiService } from "@/services/apiServices";

// Service funksiyalar
const { isLoading, data, updateCourseInfo } = useUpdateCourseInfo();

const props = defineProps({
  state: Boolean,
  course: Object,
});

const emit = defineEmits<{
  (e: "onUpdated", data: any): void;
}>();

const isUploaded = ref(false);
const uploadedUrl = ref("");
const fileInput = ref<any>(null);
const loading = ref(false);
const imagekitUrl = ref("")

const onFileChange = () => {
  isUploaded.value = false;
  uploadedUrl.value = URL.createObjectURL(fileInput.value.files[0]);
  isUploaded.value = true;
};

const uploadFile = async () => {
  try {
    isUploaded.value = true;
    // console.log(fileInput.value);
    
    if (fileInput.value?.files[0]) {
      const formData = new FormData();
      formData.append("file", fileInput.value.files[0] as File);
      const response = await ApiService.postFileByToken("/upload/videoimg", formData);
      
      console.log(response);
      imagekitUrl.value = response.url
    } else {
      console.error("Fayl tanlanmagan");
    }
    isUploaded.value = false;
  } catch (error) {
    isUploaded.value = false;
    console.error("Fayl yuklashda xato:", error);
  }
};

const onSubmit = async() => {
  try {
    loading.value = true;
    await uploadFile();
    await updateCourseInfo(Number(props.course?._id), {
      previewImage: uploadedUrl.value
    });
    emit("onUpdated", data.value);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await nextTick();
});
</script>

<template>
  <!-- Tashqi rasm preview -->
  <div v-if="!state" class="flex">
    <Skeleton v-if="isLoading || !course" class="h-[250px] max-sm:h-[160px] w-full" />
    <div v-else class="w-full h-[250px] max-sm:h-[160px]">
      <img
        :src="course?.previewImage"
        class="w-full h-full object-cover"
        alt="Kurs image"
      />
    </div>
  </div>

  <!-- Ichki yuklash qismi -->
  <div v-else>
    <div class="space-y-3">
      <!-- Fayl tanlash -->
      <div>
        <Label>Rasm yuklang<span class="text-red-500 text-sm mb-6">*</span></Label>
        <input
          type="file"
          accept="image/*"
          ref="fileInput"
          @change="onFileChange"
          class="block w-full mt-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </div>

      <!-- Rasm preview va saqlash -->
      <div class="flex flex-col space-y-3">
        <div class="w-full h-[250px] max-sm:h-[160px]">
          <img :src="uploadedUrl" class="w-full h-full object-cover" alt="Kurs image" />
        </div>
        <div class="flex gap-2">
          <Button @click="onSubmit">
            <template v-if="!loading">Saqlash</template>
            <template v-else><Loader class="animate-spin" /> Yuborilmoqda...</template>
          </Button>
          <Button variant="outline" @click="isUploaded = false, loading = false">Tozalash</Button>
        </div>
      </div>
    </div>
  </div>
</template>
