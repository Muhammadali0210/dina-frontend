import { defineStore } from "pinia";

export const useGroupStore = defineStore('group', {
    state: () => ({
        groups: []
    }),
    actions: {
        setGroups(groups: any) {
            this.groups = groups
        }
    }
})