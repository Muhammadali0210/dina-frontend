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

function useUpdateSectionInfo() {
  const isLoading = ref<boolean>(false);
  const data = ref();
  const updateSectionInfo = async (url: string, data: any)  => {
    try {
      isLoading.value = true;
      const res: any = await ApiService.updateByIdToken(url, data);
      data.value = res;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }
  return { isLoading, data, updateSectionInfo }
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

export { useGetSectionInfo, useUpdateSectionInfo, useDeleteSection }