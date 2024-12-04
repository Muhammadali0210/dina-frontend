<template>
    <div class="dark:text-white">
        <h1 class="text-2xl font-bold mb-4">1-Dars uchun mashqlar</h1>
        <div v-for="(item, index) in testData" :key="index" class="mb-6">
            <h2 class="text-gray-700 dark:text-white text-xl mb-2">
                Savol {{ index + 1 }}: {{ item.quetion }}
            </h2>
            <ul class="list-disc pl-6">
                <li v-for="(answer, i) in item.answers" :key="i" class="text-gray-700 dark:text-white text-lg">
                    {{ String.fromCharCode(65 + i) }}) {{ answer }}
                </li>
            </ul>
        </div>
        <div class="flex justify-between w-[70%] m-auto">
            <button @click="closeBtn" class="p-[10px] bg-green-500 dark:text-white" type="">Orqaga...</button>
            <button @click="nextClick" class="p-[10px] bg-green-500 dark:text-white" type="">Keyingisi...</button>
        </div>

    </div>
</template>

<script>
import { reactive } from "vue";

export default {
    setup() {
        const testData = reactive([
            {
                quetion: "동생은 차를 타기만 하면 멀미를 한다",
                answers: ["탈 만해서", "타는 탓에", "탈 때마다", "타는 동안"],
            },
            {
                quetion: "동생은 차를 타기만 하면 멀미를 한다",
                answers: ["탈 만해서", "타는 탓에", "탈 때마다", "타는 동안"],
            },
            {
                quetion: "동생은 차를 타기만 하면 멀미를 한다",
                answers: ["탈 만해서", "타는 탓에", "탈 때마다", "타는 동안"],
            },
        ]);

        return { testData };
    },
    methods:{
    closeBtn(){
        this.$router.push('/onlinelesson')
        }, 
        nextClick() {
            this.$router.push('/onlinevideo')
        }
}
};
</script>

<style>
/* Qo'shimcha styling kerak bo'lsa, bu yerga yozing */
</style>
