import { defineStore } from "pinia";

export const useResultsStore = defineStore('results', {
    state: () => ({
        results: [] as any,
    }),
    getters: {
        getAll(state) {
            return state.results
        }
    },
    actions: {
        setResults(results: any) {
            this.results = results
        }
    }

});