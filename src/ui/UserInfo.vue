<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
const props = defineProps({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})
const router = useRouter();

const gotoProfile = () => {
    router.push(`/user-profile/${props.id}`);
}
</script>
<template>
    <div class="flex items-center text-gray-900  dark:text-white">
        <img class="shadow-[0_0_10px_5px] shadow-gray-300 dark:shadow-gray-700 w-10 h-10 rounded-full border-[2px] border-green-500 bg-white" :src="img" alt="Jese image">
        <div class="ps-3">
            <div class="text-base text-gray-600 dark:text-white font-semibold cursor-pointer" @click="gotoProfile()">{{ firstName }} {{ lastName }}</div>
            <div class="font-normal text-gray-500 dark:text-slate-100">{{ login }}</div>
        </div>  
    </div>
</template>
