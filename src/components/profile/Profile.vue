<template>
    <div class="w-full flex flex-col justify-center items-center custom-container">
        <UserInfo/>
        <UserHistory/>
    </div>
</template>
<script>
import UserInfo from './ProfileInfo.vue'
import UserHistory from './UserHistory.vue'
export default {
    components: {
        UserInfo,
        UserHistory,
    }
    
}
</script>
<style>

</style>