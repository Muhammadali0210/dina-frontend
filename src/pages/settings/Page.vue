<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue';
import PasswordStepper from './_components/PasswordStepper.vue';

</script>

<template>
  <PageContainer class="" title="Sozlamalar" subtitle="Dastur uchun sozlamalar bo'limi">
    <div class="flex justify-center min-h-[70vh] items-center">
      <PasswordStepper />
    </div>
  </PageContainer>
</template>
