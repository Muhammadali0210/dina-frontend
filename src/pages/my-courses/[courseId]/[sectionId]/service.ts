import { ApiService } from "@/services/apiServices";
import { ref } from "vue";

function useDeleteSection() {
    const isLoading = ref<boolean>(false);
    const deleteSection = async (id: number) => {
      try {
        isLoading.value = true;
        await ApiService.deleteByToken(`/section/${id}`);
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    }
    return { isLoading, deleteSection }
}

export { useDeleteSection }