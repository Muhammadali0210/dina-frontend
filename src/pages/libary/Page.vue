<script setup lang="ts">
import SoulteBook from './[components]/SoulteBook.vue';
import PageContainer from '@/components/PageContainer.vue'
import Separator from '@/components/ui/separator/Separator.vue';
import TopikBook from './[components]/TopikBook.vue'
import Vocabulary from './[components]/Vocabulary.vue'

</script>

<template>
    <PageContainer title="Kitoblar" subtitle="Kores tilil va Topik uchun barcha kitoblar">
        <div class="w-full ">
            <SoulteBook />
        </div>
        <div class="mt-4">
            <h1 class="text-4xl font-extrabold text-gray-700 dark:text-white max-sm:text-2xl">Topik</h1>
            <p class="text-sm text-muted-foreground">Topik uchun barcha ishlatiladigan kitoblar</p>
            <Separator class="my-2" />
            <TopikBook />
        </div>
        <div class="mt-4">
            <h1 class="text-4xl font-extrabold text-gray-700 dark:text-white max-sm:text-2xl">Lug'atlar</h1>
            <p class="text-sm text-muted-foreground">Topik uchun barcha Lug'at kitoblari</p>
            <Separator class="my-2" />
            <Vocabulary />
        </div>

    </PageContainer>
</template>
