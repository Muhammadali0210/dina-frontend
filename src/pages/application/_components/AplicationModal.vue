<script setup lang="ts">
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { useGroupStore } from '@/stores/groupStore'

const groupStore = useGroupStore();
const groups = groupStore.groups;
console.log(groups);

</script>

<template>
    <AlertDialogHeader>
        <AlertDialogTitle>Qo'shish</AlertDialogTitle>
        <AlertDialogDescription>
            <form class="grid gap-4 mt-4">
                <!-- T/R -->
                <div>
                    <label for="tr" class="block text-sm font-medium text-gray-700 dark:text-gray-300">T/R</label>
                    <input id="tr" type="text" value="1"
                        class="block w-full px-3 py-2 mt-1 text-sm border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <!-- Ism familya -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Ism</label>
                    <input id="name" type="text" value="Abubakir"
                        class="block w-full px-3 py-2 mt-1 text-sm border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Familya</label>
                    <input id="name" type="text" value="Sobitov"
                        class="block w-full px-3 py-2 mt-1 text-sm border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <!-- Telefon raqam -->
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefon
                        raqam</label>
                    <input id="phone" type="text" value="+998933708598"
                        class="block w-full px-3 py-2 mt-1 text-sm border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <!-- Ta'rif turi -->
                <div>
                    <label for="tariff" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Ta'rif
                        turi</label>
                    <Popover class="dropdown dropdown-bottom w-full">
                        <PopoverTrigger tabindex="0" role="button"
                            class="w-full text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-between items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 border-0">
                            Guruhni tanlang
                            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </PopoverTrigger>

                        <PopoverContent class="w-full rounded-lg">
                            <ul class="space-y-2">
                                <div v-if="groups.length" v-for="(group, index) in groups" :key="index"
                                    class="flex items-center p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 ease-in-out">
                                    <a class="flex items-center gap-3 w-full cursor-pointer">
                                        <input type="checkbox"
                                            class="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 transition duration-200 ease-in-out" />
                                        <label class="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            {{ group }}
                                        </label>
                                    </a>
                                </div>
                               
                                <li v-if="!groups.length" class="flex justify-center items-center h-10">
                                    <p class="text-gray-500 dark:text-gray-400">Yuklanmoqda...</p>
                                </li>
                            </ul>
                        </PopoverContent>
                    </Popover>
                </div>
            </form>
        </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter class="mt-6 flex justify-end gap-4">
        <AlertDialogCancel type="button"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Bekor qilish
        </AlertDialogCancel>
        <AlertDialogAction type="submit"
            class="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
            Saqlash
        </AlertDialogAction>
    </AlertDialogFooter>
</template>
