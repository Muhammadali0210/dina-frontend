<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { Input } from "@/components/ui/input";
import { Separator } from '@/components/ui/separator';
import { useCompleteLesson } from '../service';
import { useRoute } from 'vue-router';
import { useLessonStore } from '../store';
const courseStore = useLessonStore();

const props = defineProps({
    lesson: {
        type: Object,
        required: false
    }
})

const { isLoading, completeLesson } = useCompleteLesson()
const isCompleted = ref(false);
const route  = useRoute();

const checkAnswer = (index: number) => {
    const exercise = props.lesson?.tasks[index];    
    if (!exercise?.userAnswer.trim()) {
        exercise.errorMessage = "Javob yozing";
        return;
    }
    exercise.errorMessage = "";
    exercise.isCorrect = exercise.userAnswer.trim() === exercise.textUz;
    exercise.checked = true;
    if (!exercise.isCorrect) {
        exercise.errorMessage = "Noto‘g‘ri, qayta urinib ko‘ring.";
    }

    // @ts-ignore
    isCompleted.value = props.lesson?.tasks.every(ex => ex.isCorrect);
};

const saveResults = async() => {
    console.log(props.lesson);
    try {
        await completeLesson(Number(route.query.lessonid), { courseId: Number(route.params.id)});
        isCompleted.value = false     
    } catch (error) {
        console.error(error);   
    }
};
</script>



<template>
    <div
        class="mt-4 shadow-md rounded-md bg-gradient-to-b from-slate-100 to-white dark:from-[#0b0f1a] dark:to-secondary p-4 lg:p-6">
        <Separator class="my-2" />
        <h2 class='text-lg font-semibold'>Darsga oid mashqlar</h2>
        <div class="grid md:grid-cols-2 grid-cols-1 p-4 w-[90%] m-auto gap-20">
            <div v-if="courseStore.lessonLoading">
                Loading...
            </div>
            <div v-else v-for="(item, index) in props.lesson?.tasks" :key="index">
                <!-- <p>{{ item }}</p> -->
                <img v-if="item.image" :src="item.image" class="w-[200px] h-[200px]" alt="task img">
                <h1>{{ index + 1 }}-Savol: {{ item.text }}</h1>

                <Input 
                    v-if="!item.isCorrect && !props.lesson?.isCompleted"
                    v-model="item.userAnswer" 
                    class="mt-2"
                    :class="{ 'border-red-500': item.errorMessage || (!item.isCorrect && item.checked) }"
                    placeholder="Javob UZ/KR" 
                />
                <span v-if="item.errorMessage" class="text-red-500 block mt-1">{{ item.errorMessage }}</span>
               
                <button
                    v-if="!item.isCorrect && !props.lesson?.isCompleted"
                    @click="checkAnswer(index)"
                    class="px-2 bg-blue-600 py-1 mt-2 rounded-[7px]"
                >
                    Tekshirish
                </button>
                
                <span v-if="item.checked && item.isCorrect || props.lesson?.isCompleted" class="text-green-500 block mt-1">
                    Javob: {{ item.textUz }}
                </span>
            </div>

            <!-- <div v-for="(item, index) in exercises" :key="index">
                <img class="w-[200px] h-[200px]"
                    src="https://ik.imagekit.io/vtroph5l9/Product/Book%20image/SB%201B.jpeg?updatedAt=1737963612871"
                    alt="">
                <h1>{{ index + 1 }}-Savol: {{ item.question }}</h1>
                <Input v-model="item.userAnswer" class="mt-2"
                    :class="{ 'border-red-500': item.errorMessage || (!item.isCorrect && item.checked) }"
                    placeholder="Javob UZ/KR" />
                <span v-if="item.errorMessage" class="text-red-500 block mt-1">{{ item.errorMessage }}</span>
               
                <button v-if="!item.isCorrect" @click="checkAnswer(index)"
                    class="px-2 bg-blue-600 py-1 mt-2 rounded-[7px]">Tekshirish</button>
                <span v-if="item.checked && item.isCorrect" class="text-green-500 block mt-1">
                    To‘g‘ri! Haqiqiy javob: {{ item.answer }}
                </span>
               
            </div> -->
        </div>

        <button 
            v-if="isCompleted && !props.lesson?.isCompleted" 
            @click="saveResults"
            class="flex justify-end px-2 bg-blue-600 py-1 rounded-[7px]"
            :disabled="isLoading"
        >   
            <template v-if="isLoading">Saqlanmoqda...</template>
            <template v-else>Saqlash</template>
        </button>
    </div>
</template>
