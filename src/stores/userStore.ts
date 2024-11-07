import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
      count: 2,
      userInfo: {
        firstName: '',
        lastName: '',
        role: '',        
      }
    }),
    actions: {
      setUserInfo(data: any) {
        this.userInfo = data
      }
    },
    getters: {
      doubleCount(state) {
        return state.count * 2
      },
      doublePlusOne(): number {
        return this.doubleCount + 1
      },

      getUserInfo(state) {
        return state.userInfo
      }
    },
})