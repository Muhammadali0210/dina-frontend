import { ref } from "vue";
import { ApiService } from "@/services/apiServices";
import { useDashboardCourseStore } from "./store";

export function useGetDashboardCourse(){
    const isLoading = ref(false);
    const courseStore = useDashboardCourseStore();
    const getDashboardCourse = async (id: number) => {
        try {
          isLoading.value = true;
          const res: any = await ApiService.getByIdToken(`/dashboard-course/${id}`);
          courseStore.setCourse(res);
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, getDashboardCourse }
}
// export function useCheckboxClick(){
//   const isLoading = ref(false);
//   const courseStore = useDashboardCourseStore();
//   const completeLesson = async (id: number, data: any) => {
//       try {
//         isLoading.value = true;
//         const res: any = await ApiService.postByToken(`/complete-lesson/${id}`, data);
//         courseStore.setCourse(res);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         isLoading.value = false;
//       }
//   }

//   const unCompeteLesson = async (id: number, data: any) => {
//       try {
//         isLoading.value = true;
//         const res: any = await ApiService.postByToken(`/uncomplete-lesson/${id}`, data);
//         courseStore.setCourse(res);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         isLoading.value = false;
//       }
//   }


//   return { isLoading, completeLesson, unCompeteLesson }
// }