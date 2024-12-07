<template>
  <div class="custom-container grid grid-cols-3 gap-[25px] w-full max-w-[1300px] border-spacing-2 max-xl:grid-cols-1">
    <main class="col-span-3 grid grid-cols-1 gap-4">
      <Banner />
      <Statistic />
      <InformationSlider />
      <imageKit />
      <Button>Button</Button>
      <Alert />
    </main>

    <!-- <div class="h-full">
      <UserBanner />
    </div> -->
  </div>
 
</template>
<script>
import Statistic from './Statistic.vue';
import Banner from './Banner.vue';
import InformationSlider from './InformationSlider.vue';    
import UserBanner from './UserBanner.vue';
import imageKit from '../imageKit.vue';
import { Button } from '@/components/ui/button';
import Alert from './Alert.vue';

export default {
  components: {
    Button,
    Statistic,
    Banner,
    InformationSlider,
    UserBanner,
    imageKit,
    Alert
  },
}
</script>
<style >
  
</style>