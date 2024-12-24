<template>
    <div class="flex items-center gap-2 max-md:w-full">
        <input
            id="date-input"
            type="date"
            v-model="selectedDate"
            class="block w-full px-3 py-2 text-sm rounded-md shadow-sm border border-gray-300 dark:border-gray-600 
                bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500 transition"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
        selectedDate: "", // date input uchun model
        };
    },
    watch: {
        selectedDate() {
            this.$emit("dateSelected", this.selectedDate);
        },
    }
};
</script>

<style scoped>
/* Qo'shimcha hover va transition uchun */
input[type="date"]::-webkit-calendar-picker-indicator {
filter: invert(1); /* Dark mode uchun kalendar iconni invert qilish */
cursor: pointer;
}
</style>
  