<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { defineProps } from "vue";


const props = defineProps({
    handleDelete: {
        type: Function,
        required: true,
    },
    itemId: {
        type: Number,
        required: true,
    },
});

const callDelete = () => {
    props.handleDelete(props.itemId); // `itemId` ni `handleDelete` ga uzatish
};
</script>

<template>
    <AlertDialog>
        <AlertDialogTrigger class="flex ">
            <img class="w-6 h-6" src="" alt="E" />
            <span class="ml-2 block sm:hidden">O'chirish</span>
        </AlertDialogTrigger>
        <AlertDialogContent class="w-[350px]">
            <AlertDialogHeader class="flex-col gap-5 items-center">
                <div>
                    <p>O'chirishni tasdiqlang Ushbu elementni o'chirishni istaysizmi?</p>
                </div>
                <div class="flex gap-4">
                    <AlertDialogAction @click="callDelete"
                        class="bg-red-500 text-white px-4 py-2 text-md rounded hover:bg-red-600">
                        Ha, o'chiraman
                    </AlertDialogAction>
                    <AlertDialogAction class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Bekor qilish
                    </AlertDialogAction>
                </div>
            </AlertDialogHeader>
        </AlertDialogContent>
    </AlertDialog>
</template>