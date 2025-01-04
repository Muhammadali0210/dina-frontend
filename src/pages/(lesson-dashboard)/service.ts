import { ref } from "vue";
import { ApiService } from "@/services/apiServices";

export function useGetDashboardCourse(){
    const isLoading = ref(false);
    const course = ref<any>(null);
    const getDashboardCourse = async (id: number) => {
        try {
          isLoading.value = true;
          const res: any = await ApiService.getByIdToken(`/dashboard-course/${id}`);
          course.value = res;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, course, getDashboardCourse }
}