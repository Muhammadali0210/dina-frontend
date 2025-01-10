import { ref } from "vue";
import { ApiService } from "@/services/apiServices";
import { useOrderStore } from './store/index';

export default function usegetAllOrder() {
    const isLoading = ref<boolean>(false);
    const orderStore = useOrderStore();

    const getAllOrder = async (category:string) => {
        try {
            isLoading.value = true;
            orderStore.setCategory(category);
            const res = await ApiService.getByIdToken(category); 
            orderStore.setCourse(res); 
            
        } catch (error) {
            console.log(error);
        } finally {
            isLoading.value = false;
        }
    };

    return { isLoading, getAllOrder };
}
