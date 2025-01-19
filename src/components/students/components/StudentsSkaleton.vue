<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>
<template>
    <tbody class=" flex ">
        <tr
            class="bg-white w-[100%] flex justify-between items-center rounded-lg  border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white">
            <th class="px-2 py-2 md:px-6">
                <Skeleton class="w-[100px] h-5 rounded-full" />
            </th>
            <td class="px-0 py-4">
                <Skeleton class="w-[120px] h-5 rounded-full" />
            </td>
            <td class="px-1 py-4">
                <Skeleton class="w-[150px] h-5 rounded-full" />
            </td>
            <td class="px-0 py-4 max-md:hidden">
                <div class="flex items-center">
                    <Skeleton class="w-2.5 h-2.5 rounded-full bg-green-500 me-2" />
                    <Skeleton class="w-[50px] h-5 rounded-full" />
                </div>
            </td>
            <td class="px-2 py-4 relative">
                <div class="flex gap-3 h-[18px]">
                    <Skeleton class="w-[18px] h-[18px] rounded-full" />
                    <Skeleton class="w-[18px] h-[18px] rounded-full" />
                </div>
            </td>
        </tr>
    </tbody>

</template>