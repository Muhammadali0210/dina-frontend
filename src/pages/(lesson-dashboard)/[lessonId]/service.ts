import { ref } from "vue";
import { ApiService } from "@/services/apiServices";
import { useLessonStore } from "./store";

export function useGetLesson(){
    const isLoading = ref(false);
    const lessonStore = useLessonStore();
    const getLesson = async (id: number) => {
        try {
          isLoading.value = true;
          const res: any = await ApiService.getByIdToken(`/lesson/${id}`);
          lessonStore.setLesson(res);
          isLoading.value = false;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, getLesson }
}