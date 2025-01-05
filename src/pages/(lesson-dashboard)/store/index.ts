import { defineStore } from "pinia";

export const useDashboardCourseStore = defineStore('dashboard-course', {
    state: () => ({
        dashboardCourses: []
    }),
    actions: {
        setCourse(data: any) {
            this.dashboardCourses = data
        }
    },
    getters: {
        getAll(state) {
            return state.dashboardCourses
        }
    }
})