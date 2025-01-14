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

    const deleteOrder = async (id: number) => {
    try {
        isLoading.value = false;
        const res = await ApiService.deleteByToken(`/order/${id}`);         
        
    } catch (error) {
        console.error('Error deleting order:', error);
    } finally {
        isLoading.value = false;
    }
};


//     function deleteOrder() {
//     const isDeleting = ref<boolean>(false);
//     const data = ref();
//     const deleteCourse = async (id: number) => {
//       try {
//         isDeleting.value = true;
//         await ApiService.deleteByToken(`/order/${id}`);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         isDeleting.value = false;
//       }
//     }
//     return { isDeleting, deleteCourse }
// }

    return { isLoading, getAllOrder , deleteOrder};
}
