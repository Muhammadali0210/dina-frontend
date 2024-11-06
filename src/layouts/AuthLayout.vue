<template>
    <div class="  antialiased bg-slate-200 dark:bg-gray-900 flex items-center justify-center min-h-screen">
        <slot />

    </div>

</template>
<script>
import Sidebar from '../components/sidebar/Sidebar.vue';
import Header from '../components/header/Header.vue'

export default {
    components: {
        Sidebar,
        Header,

    },


}
</script>
<style scoped></style>