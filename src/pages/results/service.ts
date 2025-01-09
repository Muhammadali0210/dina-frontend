import { ApiService } from "@/services/apiServices";
import { ref } from 'vue'
import { useResultsStore } from "./store";

function useResult(){
    const isLoading = ref<boolean>(false);
    const resultStore = useResultsStore()
    const getResults = async () => {
        try {
          isLoading.value = true;
          const res = await ApiService.getByIdToken(`/result`);
          resultStore.setResults(res);
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    const postResult = async (newData: any) => {
        try {
          isLoading.value = true;
          const res = await ApiService.postByToken(`/result`, newData);
          resultStore.setResults(res);
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }

    const deleteResult = async (id: number) => {
        try {
          isLoading.value = true;
          const res = await ApiService.deleteByToken(`/result/${id}`);
          resultStore.setResults(res);
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, getResults, postResult, deleteResult }
}

export default useResult;