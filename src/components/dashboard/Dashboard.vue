<template>
  <div>
    <main>
      <Banner />
      <Statistic /> 
      <InformationSlider />
    </main>
    
    <div>
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