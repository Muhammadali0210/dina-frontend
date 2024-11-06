<template lang="">
  <component :is="layout">
    <RouterView />
  </component>
</template>
<script>
import { RouterView } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/DefaultLayout.vue'
export default {
  computed: {
    layout() {
      return this.$route.meta.layout === 'AuthLayout' ? AuthLayout : MainLayout
    }
  }
}
</script>
<style lang="">
  
</style>