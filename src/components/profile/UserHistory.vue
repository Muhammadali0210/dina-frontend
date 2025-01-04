<template>
    <div class="mt-[20px] w-full  h-auto rounded-[20px] bg-white dark:bg-gray-800 shadow-lg overflow-hidden relative">
        <h1 class="text-black m-5 p-[10px] dark:text-white font-bold text-[24px]">To'lov tarixi</h1>

        <div v-for="(payment, index) in peymentData" :key="index"
            class="flex items-center justify-start p-5 m-[10px]  gap-4">
            <img class="w-[56px] h-[56px]" src="../../assets/icons/peymet.svg" alt="Payment Icon" loading="lazy">
            <div class="flex justify-between w-[90%]">
                <h1 class="font-bold text-[18px] dark:text-white ">{{ payment.name }}</h1>
                <h3 class="text-gray-500 dark:text-gray-400 ">{{ payment.date }}</h3>
                <p class=" " :class="payment.status === 'Complete' ? 'text-green-500' : 'text-red-500'">
                    {{ payment.status }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            peymentData: [
                {
                    name: 'Abubakir Sobitov',
                    date: '2022-09-15',
                    status: 'Complete',
                },
                {
                    name: 'Abdulloh Karimov',
                    date: '2022-09-16',
                    status: 'Tolanmagan',
                },
               
            ],
        };
    },
};
</script>

<style scoped></style>
