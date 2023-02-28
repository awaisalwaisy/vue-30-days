import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    counter: false,
  }),
  actions: {
    toggleCounter(payload: boolean) {
      this.counter = payload;
    },
  },
});
