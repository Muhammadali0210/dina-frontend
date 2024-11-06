<template>
    <AuthLayout class="login-page">
        <Login class="login-form" />
    </AuthLayout>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue';
import Login from '@/components/auth/Login.vue';

export default {
    components: {
        AuthLayout,
        Login
    },

}
</script>

<style scoped>
.login-page {
    background-image: url('../../assets/icons/logo.png');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    opacity: 0.7;
    z-index: -1;
}

.login-form {
    position: relative;
    z-index: 10;
}
</style>
