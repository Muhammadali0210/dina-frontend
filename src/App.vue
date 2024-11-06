<template lang="">
  <component :is="layout">
    <RouterView />
  </component>
</template>
<script>
import { RouterView } from 'vue-router'
import router from './router';
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/DefaultLayout.vue'
export default {
  computed: {
    layout() {
      return this.currentLayout === 'AuthLayout' ? AuthLayout : MainLayout
    }
  },
  data() {
    return {
     currentLayout: '', 
    }
  },
  watch: {
    '$route'(to) {
      this.currentLayout = to.meta.layout.__file.split('/').pop().split('.')[0]
    }
  }
}
</script>
<style lang="">
  
</style>