<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border bg-slate-50 dark:bg-gray-900 shadow-sm text-card-foreground',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
