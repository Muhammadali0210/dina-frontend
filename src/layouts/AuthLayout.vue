<template>
    <div class="antialiased  flex items-center justify-center min-h-screen bg-slate-900 login-bg">
        <RouterView />
    </div>
</template>
<script>
import { RouterView } from 'vue-router';
export default {
}
</script>
<style scoped>
.login-bg{
    background-image: url(https://ik.imagekit.io/vtroph5l9/Product/Group%201%204.png?tr=cmpr,q-80,w-800);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>