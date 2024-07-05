import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
    state: () => ({
        snackbar: {
            color: "red",
            state: false,
            text: null,
        },

        theme: "blue-grey",
    }),
});
