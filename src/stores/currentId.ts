import { defineStore } from "pinia";
import { ref } from "vue";

export const useCurrentIdStore = defineStore("currentId",{
    state: () => ({
        currentId: 0
    }),
    actions: {
        setCurrentId(id: number) {
            this.currentId = id
        }
    },
    getters: {
        getCurrentId: (state) => state.currentId
    }
});