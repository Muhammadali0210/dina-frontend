<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent
} from '@/components/ui/alert-dialog'
import AplicationModal from '../_components/AplicationModal.vue'
</script>

<template>
    <div class="w-full overflow-x-auto hide-scrollbar">
        <div class="bg-slate-900 p-3 rounded-md my-1 grid grid-cols-1 min-w-max">
            <div class="flex flex-wrap gap-4 justify-between items-center min-w-max">
                <span class="text-sm text-gray-300">T/R: 1</span>

                <!-- Personal Info Section -->
                <div class="grid grid-cols-1 gap-2 m:grid-cols-2 min-w-max">
                    <span class="text-sm text-gray-300">Ism: Abubakir Sobitov</span>
                    <span class="text-sm text-gray-300">Familya: Sobitov</span>
                </div>

                <!-- Contact Info Section -->
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 min-w-max">
                    <span class="text-sm text-gray-300">Telefon raqam: +998933708598</span>
                    <span class="text-sm text-gray-300">Ta'rif turi: Gold</span>
                </div>

                <!-- Date and Time Section -->
                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 min-w-max">
                    <span class="text-sm text-gray-300">Sana: 2025-01-05 Gold</span>
                    <span class="text-sm text-gray-300">Vaqt: 22:39:44</span>
                </div>

                <!-- Action Buttons Section -->
                <div class="flex gap-4 items-center min-w-max">
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <button type="button" class="p-2 text-white">
                                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent class="bg-slate-900">
                            <AplicationModal />
                        </AlertDialogContent>
                    </AlertDialog>
                    <button type="button"
                        class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
                        O'chirish
                    </button>
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
