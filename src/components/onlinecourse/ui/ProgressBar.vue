<script setup lang="ts">
import { Progress } from '@/components/ui/progress'


</script>
<template lang="">
   <div class="lg:mt-0 px-2 py-[11px] space-y-1  border-b border-gray-600">
    <div class="flex justify-between">
      <h1 class="dark:text-white text-[18px] font-bold leading-[18px]">O'zlashtirish</h1>
      <h1 class="dark:text-white text-[18px] font-bold leading-[18px]">64%</h1>
    </div>
      <Progress class="" :model-value="64" /> 
   </div>
</template>
