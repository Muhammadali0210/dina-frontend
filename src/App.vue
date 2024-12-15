<template>
  <component :is="layout">
    <RouterView />
  </component>
  <Toaster />
</template>
<script>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue';
import AuthLayout from '@/layouts/AuthLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import CourseLayout from '@/layouts/CourseLayout.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'

export default {
  components: {
    DefaultLayout,
    AuthLayout,
    CourseLayout,
    Toaster
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