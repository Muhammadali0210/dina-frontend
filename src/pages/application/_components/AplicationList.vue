<script setup lang="ts">
import { computed, ref } from "vue";
import { defineProps } from "vue";
import dayjs from "dayjs";
import usegetAllOrder from "../servise";
import { Loader } from 'lucide-vue-next';
const { deleteOrder, isLoading, getAllOrder } = usegetAllOrder();


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
});

const formattedDate = computed(() => {
    return props.item?.updatedAt
        ? dayjs(props.item.updatedAt).format("DD-MM-YYYY HH:mm")
        : "";
});

const dataType = ref('/order');
const handleDelete = async (id: number) => {
    try {
        await deleteOrder(id);
        console.log(`Order with ID ${id} deleted successfully`);
        await getAllOrder(dataType.value as string);
    } catch (error) {
        console.error(`Failed to delete order with ID ${id}:`, error);
    }
};


const fetchOrders = async () => {
    try {
        await getAllOrder(dataType.value as string); 
    } catch (error) {
        console.error("Failed to fetch orders:", error);
    }
};




</script>

<template>
    <div class="w-full overflow-x-auto hide-scrollbar">
        <div v-if="props.item" class="dark:bg-slate-900 bg-slate-100 p-3 rounded-md my-1 grid grid-cols-1 min-w-max">
            <div class="flex flex-wrap gap-4 justify-between items-center min-w-max">
                <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-2 min-w-max">
                    <span class="text-sm dark:text-gray-300">{{ props.item?.firstName }} {{ props.item?.lastName
                        }}</span>
                    <span class="text-sm dark:text-gray-300">{{ props.item?.phone }}</span>
                </div>

                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 min-w-max">
                    <span class="text-sm dark:text-gray-300">{{ props.item?.variant }}</span>
                    <span class="text-sm dark:text-gray-300">{{ formattedDate }}</span>
                </div>

                <div class="grid grid-cols-1 gap-2 md:grid-cols-2 sm:hidden">
                    <Popover>
                        <PopoverTrigger>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M12 6h.01M12 12h.01M12 18h.01" />
                            </svg>
                        </PopoverTrigger>
                        <PopoverContent class="max-w-[210px] bg-slate-100 dark:bg-gray-900 px-1 py-2">
                            <div class="flex gap-4 items-center justify-center">

                                <button type="button"
                                    class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">Qo'shish</button>
                                <template v-if="!isLoading">
                                    <button type="button" @click="handleDelete(props.item._id)"
                                        class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
                                        O'chirish
                                    </button>
                                </template>
                                <template v-else>
                                    <h1>O'chirilmoqda...</h1>
                                </template>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
                <div><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div class="flex max-sm:hidden gap-4 items-center min-w-max">
                    <template v-if="!isLoading">
                        <button type="button" @click="handleDelete(props.item._id)"
                            class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
                            O'chirish
                        </button>
                    </template>
                    <template v-else>
                        <div class="bg-red-600 px-4 py-2 rounded-lg flex ">
                            <Loader />O'chirilmoqda
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
