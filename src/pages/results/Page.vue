<script setup lang="ts">
import { ref, onMounted } from "vue"
import PageContainer from "@/components/PageContainer.vue";
import useResult from "./service"
import ResultCard from "./_components/ResultCard.vue";
import ResultLoading from "./_components/ResultLoading.vue";
import DeleteModal from "@/components/modals/DeleteModal.vue";
import ResultAddModal from "@/components/modals/ResultAddModal.vue";
import { useResultsStore } from "./store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const resultStore = useResultsStore();

const { isLoading, getResults, postResult, deleteResult } = useResult();

const data = ref([]);
const currentId = ref<number>();
const isOpen = ref<boolean>(false);
const isAdd = ref<boolean>(false);
const role = ref(localStorage.getItem('role'))
const deletePressed = (id: number) => {
    currentId.value = id;
    isOpen.value = true;
}

const deleteHandler = async () => {
    if (currentId.value) {
        await deleteResult(currentId.value);
        data.value = resultStore.getAll;
    }
    isOpen.value = false;
}

const addHandler = async (values: any) => {
    await postResult(values);
    data.value = resultStore.getAll;
    isAdd.value = false;
}

onMounted( async() => {
    await getResults();
    data.value = resultStore.getAll;
});
</script>
<template>
    <div class="bg-white dark:bg-gray-800 p-4 rounded-md max-w-[1400px] mx-auto max-sm:p-2 max-sm:min-h-[100vh] max-sm:rounded-none">
        <div>
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-4xl font-extrabold text-gray-700 dark:text-white max-sm:text-2xl">Natijalar</h3>
                    <p class="text-sm text-muted-foreground">
                        Bizning o'quvchilarimiz olgan natijalari
                    </p>
                </div>
                <Button v-if="role === 'admin' || role === 'teacher'" @click="isAdd = true">Qo'shish</Button>
            </div>
            <Separator class="my-2" />
        </div>
        <div>
            <ResultLoading v-if="isLoading && !data.length" />
            <div v-else class="grid  max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                <ResultCard v-for="(item, index) in data" :key="index" :result="item" @deleteResult="deletePressed($event)" />
            </div>
        </div>
    </div>

    <ResultAddModal @onOpenChange="isAdd = false" @on-confirm="addHandler" :is-open="isAdd" :is-loading="isLoading" />
    <DeleteModal v-if="data.length" @onOpenChange="isOpen = false" @on-confirm="deleteHandler" :is-open="isOpen" :is-loading="isLoading" />
</template>
