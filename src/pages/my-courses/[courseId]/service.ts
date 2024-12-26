import { ref } from 'vue'
import type { Course } from '@/types/index'
import { ApiService } from '@/services/apiServices';

function useGetCourseInfo() {
    const isLoading = ref<boolean>(false);
    const data = ref();
    const getCourseInfo = async (id: number) => {
        try {
          isLoading.value = true;
          const res: Course = await ApiService.getByIdToken(`/course/${id}`);
          data.value = res;
        } catch (error) {
          console.log(error);
        } finally {
          isLoading.value = false;
        }
    }
    return { isLoading, data, getCourseInfo }
}

function useUpdateCourseInfo() {
    const isLoading = ref<boolean>(false);
    const data = ref();
    const updateCourseInfo = async (id: number, value: any) => {
      try {
        isLoading.value = true;
        const res = await ApiService.patchByToken(`/course/${id}`, value);
        data.value = res;
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    }
    return { isLoading, data, updateCourseInfo }
}

function useCreateSection() {
  const sectionLoading = ref<boolean>(false);
  const sectionData = ref();

  const getSection = async () => {
    try {
      sectionLoading.value = true;
      const res = await ApiService.getByIdToken(`/section`);
      sectionData.value = res;
    } catch (error) {
      console.log(error);
    } finally {
      sectionLoading.value = false;
    }
  }

  const createSection = async (id: number, title: string) => {
    try {
      sectionLoading.value = true;
      const data = {
        courseId: id,
        title: title
      }
      console.log(data);
      
      const res = await ApiService.postByToken(`/section`, data);
      sectionData.value = res;
    } catch (error) {
      console.log(error);
    } finally {
      sectionLoading.value = false;
    }
  }

  return { sectionLoading, sectionData, getSection, createSection }
}

export { useGetCourseInfo, useUpdateCourseInfo, useCreateSection }; 
