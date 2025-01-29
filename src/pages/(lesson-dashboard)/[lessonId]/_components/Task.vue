<script setup lang="ts">
import { ref } from 'vue';
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';

// Define the type for exercise result
interface ExerciseResult {
    question: string;
    userAnswer: string;
    isCorrect: boolean;
}


const exercises = ref([
    { question: "Maktabga boraman", answer: "학교에 가요", userAnswer: "", isCorrect: false, checked: false, errorMessage: "" },
    { question: "Maktabdan kelaman", answer: "학교에서 와요", userAnswer: "", isCorrect: false, checked: false, errorMessage: "" },
    { question: "Men talabaman (Rasmiy)", answer: "저는 학생입니다", userAnswer: "", isCorrect: false, checked: false, errorMessage: "" },
    { question: "Bu kitob (Rasmiy)", answer: "이것은 책입니다", userAnswer: "", isCorrect: false, checked: false, errorMessage: "" }
]);

const isCompleted = ref(false);

const results = ref<ExerciseResult[]>([]);

const checkAnswer = (index: number) => {
    const exercise = exercises.value[index];
    if (!exercise.userAnswer.trim()) {
        exercise.errorMessage = "Javob yozing";
        return;
    }
    exercise.errorMessage = "";
    exercise.isCorrect = exercise.userAnswer.trim() === exercise.answer;
    exercise.checked = true;
    if (!exercise.isCorrect) {
        exercise.errorMessage = "Noto‘g‘ri, qayta urinib ko‘ring.";
    }

    isCompleted.value = exercises.value.every(ex => ex.isCorrect);
};

const saveResults = () => {
    results.value = exercises.value.map(ex => ({
        question: ex.question,
        userAnswer: ex.userAnswer,
        isCorrect: ex.isCorrect
    }));
    console.log("Barcha natijalar saqlandi", results.value);
};
</script>



<template>
    <div
        class="mt-4 shadow-md rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-[#0b0f1a] dark:to-secondary p-4 lg:p-6">
        <Separator class="my-2" />
        <h2 class='text-lg font-semibold'>Darsga oid mashqlar</h2>
        <div class="grid md:grid-cols-2 grid-cols-1 p-4 w-[90%] m-auto gap-20">
            <div v-for="(item, index) in exercises" :key="index">
                <img class="w-[200px] h-[200px]"
                    src="https://ik.imagekit.io/vtroph5l9/Product/Book%20image/SB%201B.jpeg?updatedAt=1737963612871"
                    alt="">
                <h1>{{ index + 1 }}-Savol: {{ item.question }}</h1>
                <Input v-model="item.userAnswer" class="mt-2"
                    :class="{ 'border-red-500': item.errorMessage || (!item.isCorrect && item.checked) }"
                    placeholder="Javob UZ/KR" />
                <span v-if="item.errorMessage" class="text-red-500 block mt-1">{{ item.errorMessage }}</span>
                <!-- Tekshirish tugmasi faqat javob noto'g'ri bo'lsa ko'rinadi -->
                <button v-if="!item.isCorrect" @click="checkAnswer(index)"
                    class="px-2 bg-blue-600 py-1 mt-2 rounded-[7px]">Tekshirish</button>
                <span v-if="item.checked && item.isCorrect" class="text-green-500 block mt-1">
                    To‘g‘ri! Haqiqiy javob: {{ item.answer }}
                </span>
               
            </div>
        </div>
        <button v-if="isCompleted" @click="saveResults"
            class="flex justify-end px-2 bg-blue-600 py-1 rounded-[7px]">Saqlash</button>
    </div>
</template>
