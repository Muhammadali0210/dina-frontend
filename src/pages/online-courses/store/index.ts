import { defineStore } from "pinia";

export const useOnlineCourseStore = defineStore('online-course', {
    state: () => ({
        onlineCourses: []
    }),
    actions: {
        setCourse(data: any) {
            this.onlineCourses = data
        }
    },
    getters: {
        getAll(state) {
            return state.onlineCourses
        }
    }
})