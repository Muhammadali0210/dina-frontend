<template>
  <div class="m-auto grid grid-cols-3 gap-[25px] w-full max-w-[1300px] border-spacing-2 max-xl:grid-cols-1">
    <main class="col-span-3 grid grid-cols-1 gap-4">
      <Banner />
      <div class="grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-4">
        <template class="flex flex-col gap-2">
          <Statistic />
          <InformationSlider />
        </template>
        <template class="flex flex-col gap-2">
          <StudentRanking />
          <StudentRanking />


        </template>
      </div>
    </main>
  </div>

</template>
<script>
import Banner from './Banner.vue';
import InformationSlider from './InformationSlider.vue';    
import Statistic from './Statistic.vue';
import StudentRanking from './StudentRanking.vue';

export default {
  components: {
    Statistic,
    Banner,
    InformationSlider,
    StudentRanking
  },
}
</script>
<style >
  
</style>