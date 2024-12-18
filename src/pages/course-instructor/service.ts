import { ref } from 'vue'
import type { Course } from '@/types/index'
import { ApiService } from '@/services/apiServices';
import { useRouter } from 'vue-router';
const router = useRouter()

function useGetCourseInfo() {
    const isLoading = ref<boolean>(false);
    const data = ref();
    const getCourseInfo = async () => {
        try {
          isLoading.value = true;
          console.log(router);
          
        //   const res: Course = await ApiService.getByIdToken(`/course/${router.params.id}`);
          data.value = 1000000;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, data, getCourseInfo }
}

export default useGetCourseInfo;