import { ApiService } from "@/services/apiServices";
import type { Course } from "@/types";
import { ref } from 'vue'

function useResult(){
    const isLoading = ref<boolean>(false);
    const data = ref();
    const getResults = async () => {
        try {
          isLoading.value = true;
          const res: Course = await ApiService.getByIdToken(`/result`);
          data.value = res;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    const postResult = async (newData: any) => {
        try {
          isLoading.value = true;
          const res: Course = await ApiService.postByToken(`/result`, newData);
          data.value = res;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }

    const deleteResult = async (id: number) => {
        try {
          isLoading.value = true;
          const res: Course = await ApiService.deleteByToken(`/result/${id}`);
          data.value = res;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, data, getResults, postResult, deleteResult }
}

export default useResult;