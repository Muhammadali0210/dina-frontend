<script setup lang="ts">
import SoulteBook from './[components]/SoulteBook.vue';
import PageContainer from '@/components/PageContainer.vue'
import Separator from '@/components/ui/separator/Separator.vue';
import TopikBook from './[components]/TopikBook.vue'
import Vocabulary from './[components]/Vocabulary.vue'
import Dorama from './[components]/Dorama.vue'
import Chanel from './[components]/Chanel.vue'

</script>

<template>
    <PageContainer class="my-4" title="Drama va kinolar" subtitle="Kino va drama orqali kores tilini o'rganamiz! ">
        <div class="w-full ">
            <Dorama />
        </div>
        <div class="mt-4">
            <h1 class="text-4xl font-extrabold text-gray-700 dark:text-white max-sm:text-2xl">Foydali kanallar</h1>
            <p class="text-sm text-muted-foreground">Kores tili uchun foydali youtebe kanallar</p>
            <Separator class="my-2" />
            <Chanel />
        </div>
    </PageContainer>
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
