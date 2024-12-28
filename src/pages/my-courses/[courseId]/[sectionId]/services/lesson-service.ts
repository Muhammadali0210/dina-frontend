import { ApiService } from "@/services/apiServices";
import { ref } from "vue";
import { useLessonStore } from "../stores/lesson-store"

function useGetLessonInfo() {
  const lessonStore = useLessonStore()
  const getLoading = ref<boolean>(false);
  const getLessonInfo = async (id: number) => {
    try {
      getLoading.value = true;
      const res: any = await ApiService.getByIdToken(`/lesson-all/${id}`);
      lessonStore.setLesson(res);
    } catch (error) {
      console.log(error);
    } finally {
      getLoading.value = false;
    }
  }
  return { getLoading, getLessonInfo }
}

function useCreateLesson() {
  const lessonStore = useLessonStore()
  const createLoading = ref<boolean>(false);
  const createLesson = async (url: string, data: any) => {
    try {
      createLoading.value = true;
      const res: any = await ApiService.postByToken(url, data);
      lessonStore.setLesson(res);
    } catch (error) {
      console.log(error);
    } finally {
      createLoading.value = false;
    }
  }
  return { createLoading, createLesson }
}

function useUpdateLesson() {
  const isLoading = ref<boolean>(false);
  const data = ref();
  const updateLesson = async (url: string, data: any) => {
    try {
      isLoading.value = true;
      const res: any = await ApiService.updateByIdToken(url, data);
      data.value = res;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }
  return { isLoading, data, updateLesson }
}

function useDeleteLesson() {
  const lessonStore = useLessonStore()
  const isDeleting = ref<boolean>(false);
  const deleteLesson = async (id: number) => {
    try {
      isDeleting.value = true;
      const res: any = await ApiService.deleteByToken(`/lesson/${id}`);
      console.log("lesson o'chirildi");
      lessonStore.setLesson(res);
    } catch (error) {
      console.log(error);
    } finally {
      isDeleting.value = false;
    }
  }
  return { isDeleting, deleteLesson }
}

export { 
    useGetLessonInfo, 
    useCreateLesson, 
    useUpdateLesson, 
    useDeleteLesson 
}