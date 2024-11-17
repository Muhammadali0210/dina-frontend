<template>
    <div class="container mx-auto p-4">
        <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 " v-if="isAdmin">
            <div v-for="(cardData, index) in cardsData" :key="index"
                class="bg-base-100 w-full shadow-xl rounded-lg overflow-hidden dark:bg-gray-900 dark:border-gray-700 border-gray-200 bg-white">
                <div class="p-4">
                    <h2 class="text-lg font-semibold mb-2">{{ cardData.title }}</h2>
                    <div class="flex justify-between">
                        <img class="w-[50px] h-[50px]" src="../../assets/icons/groups.svg" alt="card-image">
                        <h1 class="text-white text-[50px]">20</h1>
                    </div>
                    <p class="text-gray-600 text-white">{{ cardData.content }}</p>

                </div>
            </div>
        </div>
    </div>
</template>



<script>
import { computed } from "vue";
import { useUserStore } from "@/stores/userStore";

export default {
    setup() {

        const userStore = useUserStore();
        const isAdmin = computed(() => userStore.currentRole === "admin")
        const cardsData = [
            {
                title: "Guruhlar soni",
                content: "If a dog chews s?",
                buttonText: "Buy Now",
                src: '../../assets/icons/groups.svg'
            },
            {
                title: "O'quvchilar soni",
                content: "Lorem ipsum dolor sit ame",
                buttonText: "Learn More",
            },
            {
                title: "Card 3",
                content: "Quisquam quae quia nemo,",
                buttonText: "Subscribe",
            },
            {
                title: "Card 4",
                content: "Et praesentium ",
                buttonText: "Read More",
            },
        ];

        return {
            isAdmin,
            cardsData,
        };
    },
};
</script>

<style lang="">
/* Stilni qo'shishingiz mumkin */
</style>
