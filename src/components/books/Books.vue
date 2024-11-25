<template lang="">
    <div >
        <h1 class="text-3xl font-bold text-green-500">
            Kitoblar
        </h1>
    </div>
    <div class="books-board w-[100%] max-h-[450px] p-[20px] mb-[15px] dark:bg-gray-800 bg-white rounded-lg">
      <StudentBooks/>
    </div>  
     <PDFFlipBook  /> 
</template>

<script>
import StudentBooks from './StudentBooks.vue';
import PDFFlipBook from './PDFFlipBook.vue';

export default {
  components: {
    StudentBooks,
    PDFFlipBook,
  },

  data(){
    return{
      pdfUrl: '@/' 
    }
  }
  };
</script>


<style lang="">

</style>