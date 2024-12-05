<template lang="">
    <div class="custom-container grid grid-cols-1 gap-4">
        <CourseBanner/>
    <div class="grid md:grid-cols-12 gap-4 grid-cols-1">
    <div class="md:col-span-8 col-span-6">
        <CourseDetail />
    </div>
    <div class="md:col-span-4 col-span-6">
        <CoursePrice />
    </div>
    </div>
    <div class="grid grid-cols-12 gap-4">
    <div class="md:col-span-8 col-span-12 "> 
        <CourseProgramm/>
        <CourseForWho />
    </div>
</div>

    </div>
</template>
<script>
import CourseBanner from '../onlinecourse/ui/CourseBanner.vue'
import CourseDetail from '../onlinecourse/ui/CourseDetail.vue';
import CoursePrice from '../onlinecourse/ui/CoursePrice.vue'
import CourseProgramm from '../onlinecourse/ui/CourseProgramm.vue'
import CourseForWho from '../onlinecourse/ui/CourseForWho.vue'
export default {
    components:{
        CourseBanner,
        CourseDetail,
        CoursePrice,
        CourseForWho,
        CourseProgramm
    }
}
</script>
<style lang="">

</style>