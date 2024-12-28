import { defineStore } from "pinia";

export const useLessonStore = defineStore('lessonStore', {
    state: () => ({
      lesson: [],
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
    },
})