import { defineStore } from "pinia";

export const useLessonStore = defineStore('lesson', {
    state: () => ({
        lesson: null,
        lessonLoading: false
    }),
    actions: {
        setLessonLoading(data: boolean) {
            this.lessonLoading = data
        },
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