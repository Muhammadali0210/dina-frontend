<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/utils'
import { CalendarDate } from '@internationalized/date'
import { toDate } from 'radix-vue/date'
import { watch, ref } from 'vue'
import { z } from 'zod'
import { CalendarIcon } from 'lucide-vue-next'

const props = defineProps<{
  modelValue?: string
}>()

const today = new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());

const emit = defineEmits<{
  (e: 'onDatePicked', value: string | any): void
}>()

const value = ref<CalendarDate | undefined>()

watch(
  () => props.modelValue,
  (v) => {
    if (v) {
      const dateParts = v.split('-');
      value.value = new CalendarDate(
        parseInt(dateParts[0]), // year
        parseInt(dateParts[1]), // month
        parseInt(dateParts[2]) // day
      );
    } else {
      value.value = undefined
    }
  },
  { immediate: true },
)
const open = ref<boolean>(false)

const datePicked = (value: CalendarDate | undefined | string | any) => {
  if (value) {
    const date = toDate(value);
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    emit('onDatePicked', formattedDate)
    console.log(formattedDate);
  }
  open.value = false
}
</script>

<template>
  <Popover :open="open">
    <PopoverTrigger as-child class="max-w-[150px] bg-white dark:bg-gray-700 dark:border-gray-600" @click.stop="open = true">
      <Button
        variant="outline"
        class="w-[240px] ps-3 text-start font-normal"
        :class="{ 'text-muted-foreground': !value }"
      >
        <span>{{ value ? value.toLocaleString() : "Sanani tanlang" }}</span>
        <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />

      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0 dark:bg-gray-800">
        <Calendar
            v-model="value"
            :min-value="new CalendarDate(1900, 1, 1)"
            :max-value="today"
            @update:model-value="datePicked"
        />
    </PopoverContent>
  </Popover>
</template>

