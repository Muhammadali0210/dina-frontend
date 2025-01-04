import { get } from "@vueuse/core";
import { defineStore } from "pinia";

export const useCourseStore = defineStore('online-course', {
    state: () => ({
        course: [],
    }),
    actions: {
        setCourse(data: any) {
            this.course = data
        },
        getById(id: number) {
            return this.course.find((item: any) => item._id === id)
        },
    },
    getters: {
        getAll(state) {
            return get(state, 'course')
        },
    }
})