<script setup lang="ts">
import { ApiService } from "@/services/apiServices";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Loader from "@/ui/Loader.vue";
import PageContainer from "@/components/PageContainer.vue";
import type { Group } from "@/types/index";

const router = useRouter();
const groups = ref<Group[]>([]);
const isLoading = ref<boolean>(false);

const getgroups = async () => {
  try {
    isLoading.value = true;
    const response = await ApiService.getByIdToken("/group/teacher");
    groups.value = response;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

const goToPayment = (id: number) => {
  router.push(`/attendance/${id}`);
};
onMounted(async() => {
  await getgroups();
});
</script>
<template>
  <PageContainer
    title="Davomat"
    subtitle="Davomat olish uchun guruhni tanlang"
  >
    <template v-if="isLoading">
        <Loader />
    </template>
    <div
      v-else
      class="mt-4 grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-5 w-full"
    >
      <div
        v-for="(item, index) in groups"
        :key="index"
        @click="goToPayment(item._id as number)"
        :class="[
          { 'bg-orange-400': item.degree == 'c1' },
          { 'bg-orange-400': item.degree == 'c2' },
          { 'bg-[#60a5fa]': item.degree == 'a1' },
          { 'bg-[#60a5fa]': item.degree == 'a2' },
          { 'bg-green-400': item.degree == 'b1' },
          { 'bg-green-400': item.degree == 'b2' },
        ]"
        class="my-shadow text-black rounded-xl h-[140px] p-5 relative cursor-pointer md:hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <div class="text-[28px] font-bold text-gray-100">
          {{ item.name }}
        </div>
        <div
          class="absolute my-shadow2 right-5 top-[50%] translate-y-[-50%] w-[90px] h-[90px] bg-[#3d5a80] rounded-[100%] flex justify-center items-center"
        >
          <span
            class="text-[#fca311] text-[50px] items-center"
            style="
              line-height: 0;
              font-weight: 900;
              text-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 1);
            "
            >{{ item.studentCount }}</span
          >
        </div>
        <h1 class="text-[20px] font-bold text-[#003566]">O'quvchilar soni</h1>
      </div>
    </div>
  </PageContainer>
</template>
<style>
.my-shadow {
  box-shadow: 0px 0px 10px 6px #97979775;
}
.dark .my-shadow {
  box-shadow: 4px 3px 1px 1px transparent;
}
.my-shadow2 {
  box-shadow: inset 0px 0px 10px 10px #1c2a3b75;
}
</style>
