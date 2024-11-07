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
    background-image: url('../../assets/image/marwan-XJVxilpjmjY-unsplash.jpg');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    opacity: 0.9;
    z-index: 11;
}

.login-form {
    position: relative;
    z-index: 10;
}
</style>
