<template lang="">
  <component :is="layout">
    <RouterView />
  </component>
</template>
<script>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue';
import AuthLayout from '@/layouts/AuthLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout,
    AuthLayout
  },
  
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout || 'MainLayout');

    return { layout };
  },
}
</script>
<style lang="">
  
</style>