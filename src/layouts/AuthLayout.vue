<template>
    <div class="antialiased  flex items-center justify-center min-h-screen login-bg">
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
    background-image: url(../assets/image/bg2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>