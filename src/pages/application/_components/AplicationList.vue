<script setup lang="ts">
import { computed,  } from "vue";
import { defineProps } from 'vue';
import dayjs from 'dayjs'; 

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import AplicationAdd from '../_components/AplicationAdd.vue'
const props = defineProps({
    item: {
        type: Object
    }
});


const formattedDate = computed(() => {
  return props.item ? dayjs(props.item.updatedAt).format('DD-MM-YYYY HH:mm') : '';
});


</script>


<template>

    <div class="w-full overflow-x-auto hide-scrollbar">
        <div v-if="props.item" class="dark:bg-slate-900 bg-slate-100 p-3 rounded-md my-1 grid grid-cols-1 min-w-max">
            <div class="flex flex-wrap gap-4 justify-between items-center min-w-max">
                <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-2 m:grid-cols-2 min-w-max">
                    <span class="text-sm dark:text-gray-300">{{props.item?.firstName}} {{ props.item?.lastName}}</span>
                    <span class="text-sm dark:text-gray-300">{{ props.item?.phone}}</span>
                </div>

                <!-- Contact Info Section -->
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 min-w-max">
                    <span class="text-sm dark:text-gray-300">{{props.item?.variant}}</span>
                    <span class="text-sm dark:text-gray-300">10-01-2025</span>
                </div>

                <!-- Date and Time Section -->
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 sm:hidden">
                    <Popover class="">
                        <PopoverTrigger>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M12 6h.01M12 12h.01M12 18h.01" />
                            </svg>
                        </PopoverTrigger>
                        <PopoverContent class="max-w-[210px] bg-slate-100 dark:bg-gray-900  mr-5 px-1 py-2">
                            <div class="justify-center flex">
                                <AplicationAdd />
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>


                <div class="max-sm:hidden  flex gap-4 items-center min-w-max">
                    <AplicationAdd />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
