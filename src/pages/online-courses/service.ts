import { ApiService } from "@/services/apiServices";
import type { Course } from "@/types";
import { ref } from 'vue'
import { useCourseStore } from "./store";

function useGetAllCourse(){
    const isLoading = ref<boolean>(false);
    // const data = ref();
    const courseStore = useCourseStore();   
    const getAllCourse = async () => {
        try {
          isLoading.value = true;
          const res: Course = await ApiService.getByIdToken('/online-courses');
          courseStore.setCourse(res);
        } catch (error) {
          console.log(error); 
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, getAllCourse }
}

export default useGetAllCourse;