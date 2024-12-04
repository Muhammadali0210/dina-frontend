<template lang="">
<div class="navbar w-full m-auto">
  <div class="flex-1">
    <a class="btn btn-ghost text-[24px] dark:text-white">Kurslar</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
     <div class="relative max-md:w-full">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id=""  class="block max-md:w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 max-sm:w-[100%] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for lesson...">
                </div>
    </div>
    </div>
</div>

    <div class="w-full  grid grid-cols-3">
       <div class="card bg-base-100 w-96 ">
        <figure class="h-[200px]">
      <img 
      src="../../assets/image/topik.jpg"
      alt="Shoes" />
        </figure>
         <div class="card-body">
                 <h2 class="card-title dark:text-white">Shoes!</h2>
                    
         </div>
</div>
</div>

</template>
<script>
export default {

}
</script>
<style lang="">

</style>