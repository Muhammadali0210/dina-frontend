import { ref } from "vue";
import { ApiService } from "@/services/apiServices";
import { useLessonStore } from "./store";
import { useDashboardCourseStore } from "../store";

export function useGetLesson(){
    const isLoading = ref(false);
    const lessonStore = useLessonStore();
    const getLesson = async (id: number) => {
        try {
          isLoading.value = true;
          lessonStore.lessonLoading = true;
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

export function useCompleteLesson(){
  const isLoading = ref(false);
  const courseStore = useDashboardCourseStore();
  const completeLesson = async (id: number, data: any) => {
      try {
        isLoading.value = true;
        const res: any = await ApiService.postByToken(`/complete-lesson/${id}`, data);
        courseStore.setCourse(res);
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
  }

  return { isLoading, completeLesson }
} 