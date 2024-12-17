<template lang="">
    <div class="antialiased bg-slate-200 dark:bg-gray-900 ">
        <div class="grid grid-cols-2">
             <CourseHeader/>
             <LessonSaidbar/>
        </div>
         <main class=" p-0  pt-20  lg:ml-80 min-h-screen" @click="sidebarStore.closeSidebar">
              <CourseFullView/>
        </main>
      
    </div>
</template>
<script>
import CourseHeader from '@/components/onlinecourse/ui/CourseHeader.vue'
import LessonSaidbar from '@/components/onlinecourse/ui/LessonSaidbar.vue'
import CourseFullView from '@/views/onlinecourse/CourseFullView.vue'
import { RouterView } from 'vue-router';
export default {
    components:{
        CourseFullView,
        CourseHeader,
        LessonSaidbar
    }
}
</script>
<style lang="">
    
</style>