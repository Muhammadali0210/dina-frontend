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
        <div v-if="paymentData" role="tabpanel" class="tab-content">
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
                <div class="relative">
                  <input
                    type="month"
                    v-model="paymentData.month"
                    required
                    class="block w-full px-3 py-2 text-sm rounded-md shadow-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500 transition"
                  />
                  <span
                    class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-blue-500"
                  >
                    📅
                  </span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-start gap-4 w-full">
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 mt-0 sm:mt-0 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800"
              >
                <template v-if="isSubmiting">
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Yuborilmoqda...
                </template>
                <template v-else> To'lovni amalga oshirish </template>
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

        <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Karta" />
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
import { ApiService } from "@/services/apiServices";
export default {
  props: {
    paymentmodal: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isSubmiting: false,
      paymentData: {
        status: true,
        amount: null,
        month: "",
        payment_type: null,
        student_id: null,
        group_id: null,
      },
    };
  },
  methods: {
    async handleCreate() {
      try {
        this.paymentData.payment_type = "Naqd";
        this.isSubmiting = true;
        const response = await ApiService.postByToken(
          "/payment/create",
          this.paymentData,
          this.token
        );
        this.$emit("closePaymentModal");
        this.$emit("reLoad");
        // this.$router.push('/payment/group')
      } catch (error) {
        console.log(error);
      } finally {
        this.isSubmiting = false;
      }
    },
  },
  mounted() {
    this.paymentData.student_id = this.data.student_id;
    this.paymentData.group_id = parseInt(localStorage.getItem("groupId"));
    this.paymentData.month = this.data.month;
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
  background-color: #003478;
}

input[type="month"]::-webkit-calendar-picker-indicator {
  color: red; /* Icon rangini o'zgartiradi */
  cursor: pointer;
}
</style>
