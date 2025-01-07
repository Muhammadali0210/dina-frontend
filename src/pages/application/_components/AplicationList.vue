<script setup lang="ts">

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import AplicationModal from '../_components/AplicationModal.vue'
import AplicationAdd from '../_components/AplicationAdd.vue'

</script>

<template>
    <div class="w-full overflow-x-auto hide-scrollbar">
        <div class="bg-slate-900 p-3 rounded-md my-1 grid grid-cols-1 min-w-max">
            <div class="flex flex-wrap gap-4 justify-between items-center min-w-max">
                <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-2 m:grid-cols-2 min-w-max">
                    <span class="text-sm text-gray-300">Abubakir Sobitov</span>
                    <span class="text-sm text-gray-300">+998933708598</span>
                </div>

                <!-- Contact Info Section -->
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 min-w-max">
                    <span class="text-sm text-gray-300">Gold</span>
                    <span class="text-sm text-gray-300">2025.01.05</span>
                </div>

                <!-- Date and Time Section -->
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 sm:hidden">
                    <Popover>
                        <PopoverTrigger>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M12 6h.01M12 12h.01M12 18h.01" />
                            </svg>
                        </PopoverTrigger>
                        <PopoverContent class="w-[180px] bg-slate-900 mr-2 px-1 py-2">
                            <div class="flex justify-center">
                                <AplicationAdd />
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>


                <div class="max-sm:hidden flex gap-4 items-center min-w-max">
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
