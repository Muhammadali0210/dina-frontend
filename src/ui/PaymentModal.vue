<template>
  <div
    v-if="paymentmodal"
    class="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <div
      class="h-[270px] modal-box bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg transition-all duration-300"
    >
      <div role="tablist" class="tabs tabs-boxed bg-transparent dark:bg-transparent">
        <input 
         type="radio" 
         name="my_tabs_1" 
         role="tab" 
         checked
         class="tab"
         aria-label="Naqd"
          />
        <div role="tabpanel" class="tab-content">
          <form @submit.prevent="handleCreate()">
            <h3 class="font-bold text-lg mt-3">
              {{ data.first_name }} {{ data.last_name }}
            </h3>
            <div class="w-full py-4 flex gap-4">
              <div class="w-[50%]">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >To'ov miqdori</label
                >
                <input
                  type="number"
                  name="price"
                  id="price"
                  v-model="paymentData.amount"
                  class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="250 000"
                  required
                />
              </div>

              <div class="w-[50%]">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Oyni tanlang</label
                >
                <div class="relative ">
                  <input type="month" 
                  v-model="paymentData.month"
                  required
                  class="block w-full px-3 py-2 text-sm rounded-md shadow-sm border border-gray-300 dark:border-gray-600 
                            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                            focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500 transition" />
                  <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-blue-500">
                    📅
                  </span>
                  <input type="hidden" v-model="paymentData.payment_type">
                </div>
              </div>

            </div>
            
            <div class="flex items-center justify-start gap-4 w-full">
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 mt-0 sm:mt-0 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800"
              >
                To'lash
              </button>

              <button
                @click="$emit('closePaymentModal')"
                type="button"
                class="inline-flex items-center px-4 py-2 h-auto min-h-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              >
                Bekor qilish
              </button>
            </div>
          </form>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab"
          aria-label="Karta"
          
        />
        <div role="tabpanel" class="tab-content pt-4">
          Karta orqali to'lash Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus, quia ad incidunt nesciunt quo repudiandae voluptatibus aspernatur
          facere, magnam deserunt maxime minus.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paymentmodal: {
      type: Boolean,
      required: true,
    },
    data:{
        type: Object,
        required: true
    }
  },
  data() {
    return {
      paymentData: {
        status: true,
        amount: 0,
        month: "",
        payment_type: "Naqd",
        student_id: this.data.student_id,
        group_id: this.data.attendance.group_id
      }
    }
  },
  methods: {
    async handleCreate() {
        try {
            this.isSubmiting = true
            console.log(this.paymentData);
            
            // const response = await ApiService.postByToken('/payment/create', this.paymentData, this.token);
            // this.$router.push('/payment')
        } catch (error) {
            console.log(error);
        } finally {
            this.isSubmiting = false;
        }
    }
  },

};
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(5px);
}

.tab:is(input:checked) {
  background-color: transparent;
  border-radius: 5px;
  color: white;
  background-color: #008577;
}

input[type="month"]::-webkit-calendar-picker-indicator {
    color: red; /* Icon rangini o'zgartiradi */
    cursor: pointer;
}
</style>
