import { defineStore } from "pinia";

export const useLessonStore = defineStore('lesson', {
    state: () => ({
        lesson: null
    }),
    actions: {
        setLesson(data: any) {
            this.lesson = data
        }
    },
    getters: {
        getLesson(state) {
            return state.lesson
        }
    }
})