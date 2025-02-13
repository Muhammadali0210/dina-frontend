import { ApiService } from "@/services/apiServices";
import type { Course } from "@/types";
import { ref } from 'vue'

function useGetStatistics(){
    const isLoading = ref<boolean>(false);
    const data = ref();
    const getStatistic = async () => {
        try {
          isLoading.value = true;
          const res: Course = await ApiService.get(`/statistics`);
          data.value = res;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, data, getStatistic }
}

export default useGetStatistics;