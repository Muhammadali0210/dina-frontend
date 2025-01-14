<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PageContainer from '@/components/PageContainer.vue';
import { useOrderStore } from './store';
import AplicationList from './_components/AplicationList.vue';
import usegetAllOrder from './servise';
import ListSeleton from './_components/ListSeleton.vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const { isLoading, getAllOrder } = usegetAllOrder();
const orderStore = useOrderStore();
const data = ref<any[]>([]);

const dataType = ref('/order');
const getOrder = async (type: string) => {
    dataType.value = type;
    await getAllOrder(dataType.value as string);
    data.value = orderStore.getAll;
};

onMounted(async () => {
    await getOrder('/order-video');  // Set initial value to '/order-video'
    console.log();
});
</script>


<template>
    <PageContainer title="Murojatlar" subtitle="Kursga yozilmoqchi bo'lganlarning ro'yxati">
        <Tabs default-value="account" class="w-full">
            <TabsList>
                <TabsTrigger @click="getOrder('/order-video')" value="account">
                    Video Darslar
                </TabsTrigger>
                <TabsTrigger @click="getOrder('/order-lesson')" value="password">
                    Online Darslar
                </TabsTrigger>
            </TabsList>


            <TabsContent value="account">
                <ListSeleton v-if="isLoading" />

                <div v-else>
                    <AplicationList v-for="(item, index) in data" :key="index" :item="item" :isLoading="isLoading" />
                </div>
            </TabsContent>


            <TabsContent value="password">
                <ListSeleton v-if="isLoading" />
                <div v-else>
                    <AplicationList v-for="(item, index) in data" :key="index" :item="item" :isLoading="isLoading" />
                </div>
            </TabsContent>
        </Tabs>
    </PageContainer>
</template>
