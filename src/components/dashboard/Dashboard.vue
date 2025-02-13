<script setup lang="ts">
import Banner from './Banner.vue';
import InformationSlider from './InformationSlider.vue';    
import Statistic from './Statistic.vue';
import StudentRanking from './StudentRanking.vue';
import useGetStatistics from './service';
import { onMounted } from 'vue';

const { isLoading, data, getStatistic } = useGetStatistics();

onMounted( async () => {
  await getStatistic();
})
</script>
<template>
  <div class="m-auto grid grid-cols-3 gap-[25px] w-full max-w-[1300px] border-spacing-2 max-xl:grid-cols-1">
    <main class="col-span-3 grid grid-cols-1 gap-4 px-4 sm:px-0">
      <Banner />
      <div class="grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-4">
        <template class="flex flex-col gap-2">
          <Statistic :data="data" />
          <InformationSlider />
        </template>
        <template class="flex flex-col gap-2">
          <StudentRanking :data="data" />
        </template>
      </div>
    </main>
  </div>

</template>
