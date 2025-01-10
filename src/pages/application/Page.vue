<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import AplicationList from './_components/AplicationList.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

</script>
<template >
    <PageContainer title="Murojatlar" subtitle="Kursga yozilmoqchi bo'lganlarning ro'yxati">
        <Tabs default-value="account" class="w-full">
            <TabsList>
                <TabsTrigger value="account">
                    Video Darslar
                </TabsTrigger>
                <TabsTrigger value="password">
                    Online Darslar
                </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <AplicationList />
                <AplicationList />
                <AplicationList />
                <AplicationList />
                <AplicationList />
                <AplicationList />
                <AplicationList />
            </TabsContent>
            <TabsContent value="password">
                <AplicationList />
            </TabsContent>
        </Tabs>

    </PageContainer>
</template>

