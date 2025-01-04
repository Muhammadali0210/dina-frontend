<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
</script>
<template>
    <div>
        Publish qilingan kurslar
        <div @click="router.push('/online-courses/1')">
            Button
        </div>
    </div>
</template>