import { defineStore } from "pinia";

export const useOnlineCourseStore = defineStore('online-course', {
    state: () => ({
        onlineCourses: [],
        courseDetail: null,
        detailLoader: false
    }),
    actions: {
        setCourse(data: any) {
            this.onlineCourses = data
        },
        setCourseDetail(data: any) {
            this.courseDetail = data
        }
    },
    getters: {
        getAll(state) {
            return state.onlineCourses
        },
        getCourseDetail(state) {
            return state.courseDetail
        }
    }
})