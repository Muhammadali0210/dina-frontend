import { defineStore } from "pinia";

export const useThemeColorsStore = defineStore('themeColors', {
    state: () => ({
        colors: [
            {
                id: 1,
                color: '#008577',
                name: 'Green'
            },
            {
                id: 2,
                color: '#2e84ec',
                name: 'Blue'
            }
        ],
        currentColor: '#2e84ec'
    }),
    actions: {
        changeColor(color: string) {
            this.currentColor = color
        }
    }
})