<template>
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <div role="tablist" class="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Naqd" />
                <div role="tabpanel" class="tab-content">
                    <h3 class="font-bold text-lg mt-3">{{ data.first_name }} {{ data.last_name }}</h3>
                    <div  class="w-full py-4">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To'ov miqdori</label>
                        <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="To'ov miqdorini kiriting" required="">
                    </div>
                    <form method="dialog" class="flex items-center justify-end gap-4">
                        <button 
                            class="px-4 py-2 btn h-auto min-h-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
                        >
                            Bekor qilish
                        </button>

                        <button type="button" class="inline-flex items-center px-4 py-2 mt-0 sm:mt-0 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800">
                            To'lash
                        </button>
                    </form>
                </div>

                <input
                    type="radio"
                    name="my_tabs_1"
                    role="tab"
                    class="tab"
                    aria-label="Karta"
                    checked="checked" />
                <div role="tabpanel" class="tab-content pt-4">
                Karta orqali to'lash
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quia ad incidunt nesciunt quo repudiandae voluptatibus aspernatur facere, magnam deserunt maxime minus. Commodi necessitatibus similique fugiat? Veritatis adipisci repellendus quos.
                </div>
            </div>
            
        </div>
    </dialog>
</template>
<script>
export default {
    props: {
        data: Object,
        required: true
    }
}
</script>
<style>
    
</style>