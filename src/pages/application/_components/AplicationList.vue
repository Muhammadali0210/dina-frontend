<script setup lang="ts">
import { computed } from "vue";
import { defineProps } from "vue";
import dayjs from "dayjs";
import usegetAllOrder from "../servise";
import DeleteModal from './DeleteModal.vue'
import AplicationAdd from './AplicationAdd.vue'
const { deleteOrder  } = usegetAllOrder();

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";


const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    customFunction: {
        type: Function,
        required: true,
    },
    
});


const formattedDate = computed(() => {
    return props.item?.updatedAt
        ? dayjs(props.item.updatedAt).format("DD-MM-YYYY HH:mm")
        : "";
});


const handleDelete = async (id: number) => {
    try {
        await deleteOrder(id);
        console.log(`Order with ID ${id} deleted successfully`);
        await props.customFunction(); 
    } catch (error) {
        console.error(`Failed to delete order with ID ${id}:`, error);
    }
};
</script>

<template>
    <div class="w-full overflow-x-auto hide-scrollbar">
        <!-- Order ma'lumotlarini ko'rsatish -->
        <div v-if="props.item" class="dark:bg-slate-900 bg-slate-100 p-3 rounded-md my-1 grid grid-cols-1 min-w-max">
            <div class="flex   gap-4  items-center ">
                <!-- Foydalanuvchi ma'lumotlari -->
                <div class="grid sm:grid-cols-2">
                    <div class="w-[25%]">
                        <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-4 min-w-max">
                            <span class="text-sm dark:text-gray-300">
                                {{ props.item?.firstName }} {{ props.item?.lastName }}
                            </span>
                        </div>
                    </div>
                    <div class="w-[20%]">
                        <span class="text-sm dark:text-gray-300">{{ props.item?.phone }}</span>
                    </div>
                </div>

                <!-- Variant va Sana -->
                <div class="w-20% ">
                    <div class="grid grid-cols-1 gap-2 md:grid-cols-2 min-w-max">
                        <span class="text-sm dark:text-gray-300">{{ props.item?.variant }}</span>
                        <span class="text-sm dark:text-gray-300">{{ formattedDate }}</span>
                    </div>
                </div>

                <!-- Popover menyusi -->
                <div class="flex justify-end  md:grid-cols-2 sm:hidden w-[50%]">
                    <div class="grid grid-cols-1 gap-2 ">
                        <Popover>
                            <PopoverTrigger>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                        d="M12 6h.01M12 12h.01M12 18h.01" />
                                </svg>
                            </PopoverTrigger>
                            <PopoverContent class="w-[130px] bg-slate-900 p-2 mr-7 ">
                                <div class="flex items-center cursor-pointer hover:bg-gray-800 p-2 rounded">
                                    <AplicationAdd />
                                </div>
                                <div class="flex items-center cursor-pointer hover:bg-gray-800 p-2 rounded mt-1">
                                    <DeleteModal :handleDelete="handleDelete" :itemId="props.item._id" />
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div class="hidden sm:flex items-center   justify-end w-[50%]">
                    <AplicationAdd />
                    <DeleteModal :handleDelete="handleDelete" :itemId="props.item._id" />
                </div>


            </div>
        </div>
    </div>
</template>
