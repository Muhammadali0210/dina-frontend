<template>
    <AuthLayout>
        <Login />
    </AuthLayout>
</template>
<script>
import AuthLayout from '@/layouts/AuthLayout.vue';
import Login from '@/components/auth/Login.vue'

export default {
    components: {
        AuthLayout,
        Login
    }
}
</script>
<style></style>