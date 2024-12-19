import { ref } from 'vue'
import type { Course } from '@/types/index'
import { ApiService } from '@/services/apiServices';

function useGetCourseInfo() {
    const isLoading = ref<boolean>(false);
    const data = ref();
    const getCourseInfo = async (id: number) => {
        try {
          isLoading.value = true;
          const res: Course = await ApiService.getByIdToken(`/course/${id}`);
          data.value = res;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, data, getCourseInfo }
}

export default useGetCourseInfo;

function useUpdateCourseInfo() {
    const isLoading = ref<boolean>(false);
    const data = ref();
    const updateCourseInfo = async (id: number) => {
        try {
          isLoading.value = true;
          const res: Course = await ApiService.patchByToken(`/course/${id}`, data);
          data.value = res;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, data, updateCourseInfo }
}

