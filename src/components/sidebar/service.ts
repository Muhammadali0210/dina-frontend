import { ApiService } from "@/services/apiServices";
import { ref } from "vue";

export function useCreateApplication() {
    const isLoading = ref<boolean>(false);
    const data = ref();
    const createApplication = async (values: any) => {
        try {
            isLoading.value = true;
            const res: any = await ApiService.postByToken(`/order`, values);
            data.value = res;
        } catch (error) {
            console.log(error);
        } finally {
            isLoading.value = false;
        }
    }
    return { isLoading, data, createApplication }
}