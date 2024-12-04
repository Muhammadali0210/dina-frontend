<template lang="">
    <div>
        <h1>Reklama</h1>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import Reklama from '@/components/cards/';
export default {
    setup() {
        const route = useRoute();
        const id = route.params.id;
        return { id };
    }
};
</script>
<style lang="">
    
</style>