<script setup lang="ts">
import { ApiService } from "@/services/apiServices";
import { Loader } from "lucide-vue-next";
import { onMounted, ref, defineEmits } from "vue";
import { Button } from "@/components/ui/button";
import { useRoute } from "vue-router";
const router = useRoute()

const props = defineProps({
  paymentmodal: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["closePaymentModal", "reLoad"]);

const isSubmiting = ref(false);
const paymentData = ref({
  status: true,
  amount: null,
  month: "",
  payment_type: "",
  student_id: 0,
  group_id: 0,
});

const handleCreate = async () => {
  try {
    paymentData.value.group_id = parseInt(router.params.id as any);
    if (props.data) {
      paymentData.value.student_id = props.data.student_id;
    }
    paymentData.value.payment_type = "Naqd";
    isSubmiting.value = true;
    const response = await ApiService.postByToken(
      "/payment/create",
      paymentData.value
    );
    emit("closePaymentModal");
    emit("reLoad");
  } catch (error) {
    console.error(error);
  } finally {
    isSubmiting.value = false;
  }
};

onMounted(() => {
  paymentData.value.month = new Date().toISOString().slice(0, 7)
});
</script>

<template>
  <div
    v-if="props.paymentmodal"
    class="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <div
      class="h-[270px] modal-box bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg transition-all duration-300"
    >
      <div role="tablist" class="tabs tabs-boxed bg-transparent dark:bg-transparent">
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
              <Button
                type="submit"
                
              >
                <template v-if="isSubmiting">
                  <Loader class="animate-spin h-auto" />
                  Yuborilmoqda...
                </template>
                <template v-else> To'lovni amalga oshirish </template>
              </Button>
              <Button variant="outline" @click="$emit('closePaymentModal')" type="button" > Bekor qilish </Button />
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>


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
