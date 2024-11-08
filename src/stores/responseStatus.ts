import { defineStore } from "pinia";

export const useResponseStatusStore = defineStore('responseStatus', {
    state: () => ({
        status: 0
    }),
    actions: {
        setStatus(status: number) {
            this.status = status
        }
    },
    getters: {
        getStatus(state) {
            return state.status
        }
    }
})