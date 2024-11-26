<template>
  <div class="grid grid-cols-3 gap-[25px] w-full border-spacing-2 max-xl:grid-cols-1">
    <main class="col-span-2 grid grid-cols-1 gap-4">
      <Banner />
      <Statistic /> 
      <InformationSlider />
    </main>
    
    <div class="h-full">
      <UserBanner />
    </div>
  </div>
</template>
<script>
import Statistic from './Statistic.vue';
import Banner from './Banner.vue';
import InformationSlider from './InformationSlider.vue';    
import UserBanner from './UserBanner.vue';

export default {
  components: {
    Statistic,
    Banner,
    InformationSlider,
    UserBanner    
  },
}
</script>
<style >
  
</style>