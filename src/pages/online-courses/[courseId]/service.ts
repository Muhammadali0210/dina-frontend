import { ref } from "vue";
import { ApiService } from "@/services/apiServices";
import { useOnlineCourseStore } from "../store";

export function useGetDashboardCourse(){
    const isLoading = ref(false);
    const data = ref();     
    const courseStore = useOnlineCourseStore();
    const getDashboardCourse = async (id: number) => {
        try {
          isLoading.value = true;
          courseStore.detailLoader = true;
          const res: any = await ApiService.getByIdToken(`/course/${id}`);
          data.value = res;
          courseStore.setCourseDetail(res);
          courseStore.detailLoader = false;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, data, getDashboardCourse }
}