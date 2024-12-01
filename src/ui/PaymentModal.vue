<template>
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <h3 class="text-lg font-bold">Hello!</h3>
                <div role="tablist" class="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 1" />
                    <div role="tabpanel" class="tab-content p-10">Tab content 1</div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        class="tab"
                        aria-label="Tab 2"
                        checked="checked" />
                    <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

                    <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 3" />
                    <div role="tabpanel" class="tab-content p-10">Tab content 3</div>
                </div>
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
        </div>
    </dialog>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>