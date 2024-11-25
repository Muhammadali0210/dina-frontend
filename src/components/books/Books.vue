<template lang="">
    
    <div class="books-board w-[100%] max-h-[450px] p-[20px] mb-[15px] dark:bg-gray-800 bg-white rounded-lg">
      <StudentBooks/>
    </div>  
</template>

<script>
import StudentBooks from './StudentBooks.vue';

export default {
  components: {
    StudentBooks,
  },
};
</script>


<style lang="">

</style>