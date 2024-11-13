<template lang="">
    <div>
        <h1 class="text-3xl font-bold text-green-500">
            Kitoblar
        </h1>
    </div>
    <div class="books-board w-[100%] max-h-[450px] p-[20px] mb-[15px] dark:bg-gray-800 bg-white rounded-lg">
      <StudentBooks/>
    </div>
     <div class="books-board w-[100%] max-h-[450px] p-[20px] mb-[15px] dark:bg-gray-800 bg-white rounded-lg">
      <Workbooks/>
    </div>
   
  
   

    
  
</template>

<script>
import StudentBooks from './StudentBooks.vue';
import Workbooks from './Workbooks.vue';
export default {
  components: {
    StudentBooks,
    Workbooks,
  },
}
</script>


<style lang="">

</style>