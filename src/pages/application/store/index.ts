import { defineStore } from "pinia";

export const useOrderStore = defineStore('order', {
    state: () => ({
        aplicationOrder: [],
        orderGet: null,
        detailLoader: false,
        category: ''
    }),
    actions: {
        setCourse(data: any) {
            this.aplicationOrder = data;
        },
        setCategory(category: string) {
            this.category = category; 
        }
    },
    getters: {
        getAll(state) {
            return state.aplicationOrder;
        },
        getCategory(state) {
            return state.category; 
        }
    }
});
