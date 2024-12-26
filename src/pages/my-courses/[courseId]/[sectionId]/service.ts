import { ApiService } from "@/services/apiServices";
import { ref } from "vue";

function useGetSectionInfo() {
  const isLoading = ref<boolean>(false);
  const data = ref();
  const getSectionInfo = async (id: number) => {
    try {
      isLoading.value = true;
      const res: any = await ApiService.getByIdToken(`/section/${id}`);
      data.value = res;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }
  return { isLoading, data, getSectionInfo }
}

function useDeleteSection() {
    const isLoading = ref<boolean>(false);
    const deleteSection = async (id: number) => {
      try {
        isLoading.value = true;
        await ApiService.deleteByToken(`/section/${id}`);
        console.log("section o'chirildi");
        
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    }
    return { isLoading, deleteSection }
}

export { useGetSectionInfo, useDeleteSection }