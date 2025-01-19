<script setup lang="ts">
import AplicationModal from '../_components/AplicationModal.vue'
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent
} from '@/components/ui/alert-dialog'
</script>
<template>
    <div class="flex gap-4 p-0">
        <AlertDialog class="">
            <AlertDialogTrigger>
                <button type="button"
                    class="px-4 sm:hidden block max-w-full py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-red-700">
                    Qo'shish
                </button>
                <button type="button" class="p-2 sm:block hidden  text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent class="dark:bg-gray-800 bg-white">
                <AplicationModal />
            </AlertDialogContent>
        </AlertDialog>
        <button type="button" class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
            O'chirish
        </button>
    </div>

</template>