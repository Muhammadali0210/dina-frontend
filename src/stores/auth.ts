import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
      }),
      actions: {
        setToken(newToken: string | null) {
          this.token = newToken;
          if (newToken) {
            localStorage.setItem('token', newToken);
          } else {
            localStorage.removeItem('token');
          }
        },
      },
})