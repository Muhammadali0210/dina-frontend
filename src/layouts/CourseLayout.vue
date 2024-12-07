<template lang="">
    <div class="antialiased bg-slate-200 dark:bg-gray-900 ">
         <Header/>
         <LessonSaidbar/>
         <main class="p-20 lg:ml-64 min-h-screen h-auto pt-20" @click="sidebarStore.closeSidebar">
              <CourseFullView/>
        </main>
      
    </div>
</template>
<script>
import Header from '@/components/header/Header.vue'
import LessonSaidbar from '@/components/onlinecourse/ui/LessonSaidbar.vue'
import CourseFullView from '@/views/onlinecourse/CourseFullView.vue'
import { RouterView } from 'vue-router';
export default {
    components:{
        CourseFullView,
        Header,
        LessonSaidbar
    }
}
</script>
<style lang="">
    
</style>