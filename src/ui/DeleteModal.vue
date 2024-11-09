<template>
  <div
    v-if="modal"
    class="fixed z-99999 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <div
      class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300"
    >
      <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
        O'chirishni tasdiqlang
      </h3>
      <p class="text-gray-700 dark:text-gray-300">
        Ushbu elementni o'chirishni istaysizmi?
      </p>

      <div class="flex justify-between mt-4">
        <button
          @click="confirmDelete"
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        >
          Ha, o'chirish
        </button>
        <button
          @click="closeModal"
          class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-400 focus:outline-none"
        >
          Bekor qilish
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService } from "@/services/apiServices";
export default {
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  props: {
    modal: {
      type: Boolean,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    id: {
      type: [Number, String],
      required: true,
    },
    dmtt_id: {
      type: [Number, String],
    }
  },
  methods: {
    async confirmDelete() {
      try {
        // O'chirish so'rovi
        console.log(this.url + '/' + this.id + '/');
        
        // await ApiService.deleteByToken(this.url + '/' + this.id + '/', this.token);

        // const toastStore = useToastStore();
        // toastStore.showSuccess("Element muvaffaqiyatli o'chirildi");
        // // O'chirilganidan keyin modalni yopish va boshqa amallar
        // this.$emit("deleted", this.id);
        // this.closeModal();
      } catch (error) {
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(5px);
}
</style>
