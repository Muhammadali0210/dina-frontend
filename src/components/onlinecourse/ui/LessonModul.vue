<template lang="">
    
     <div class="collapse collapse-arrow bg-gray-900 rounded-none border-t border-gray-600">
       <input type="radio" name="my-accordion-2" checked="checked" />
       <div class="collapse-title text-[14px] dark:text-white text-gray-700 font-medium">1 - Modul. Kores tili alifbosi</div>
        <div class="collapse-content">
          <div :lessonCount="lessonCount" style="text-align: left;">
        <LessonItems />
    </div>
  </div>
</div>



</template>
<script>
import LessonItems from './LessonItems.vue'
export default {
       components:{
              LessonItems,
       },
       data(){
              return{
                     lessonCount:[
                            {
                                   id:1,
                                   title:'Dars 1',
                            },
                            {
                                   id:1,
                                   title:'Dars 2',
                            },
                            {
                                   id: 1,
                                   title: 'Dars 3',
                            },

                     ]
              }
       }
    
}
</script>
<style lang="">
    
</style>