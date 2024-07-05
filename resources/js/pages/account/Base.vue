<template>
    <v-app :class="`bg-${theme}-darken-2`">
        <v-navigation-drawer
            color="transparent"
            class="py-1 pl-1"
            width="300"
            disable-resize-watcher
            permanent
        >
            <v-sheet :color="theme" class="rounded-lg overflow-hidden h-100">
                <v-toolbar color="transparent">
                    <v-avatar class="ml-4 mr-1" color="white">
                        <v-img
                            class="adjust-40-width"
                            height="40"
                            src="./../../../assets/bank-logo.svg"
                        ></v-img>
                    </v-avatar>

                    <v-toolbar-title class="font-brand text-h5">
                        Bank <span class="text-deep-orange">UJE</span>
                    </v-toolbar-title>
                </v-toolbar>

                <v-sheet
                    :color="`${theme}-lighten-5`"
                    class="position-relative rounded-lg overflow-hidden px-2"
                    height="calc(100% - 64px)"
                >
                    <v-list
                        :active-class="`bg-${theme}-lighten-5`"
                        class="bg-transparent"
                    >
                        <v-list-item
                            :color="theme"
                            :to="{ name: 'account-dashboard' }"
                            rounded
                        >
                            <template v-slot:prepend="{ isActive }">
                                <v-icon
                                    :color="
                                        isActive
                                            ? `${theme}-darken-2`
                                            : `${theme}-darken-1`
                                    "
                                    icon="space_dashboard"
                                ></v-icon>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-list-item-title
                                    :class="
                                        isActive
                                            ? `text-${theme}-darken-2`
                                            : `text-${theme}-darken-1`
                                    "
                                    >Beranda</v-list-item-title
                                >
                            </template>
                        </v-list-item>

                        <v-list-item
                            :color="theme"
                            :to="{ name: 'account-criteria' }"
                            rounded
                        >
                            <template v-slot:prepend="{ isActive }">
                                <v-icon
                                    :color="
                                        isActive
                                            ? `${theme}-darken-2`
                                            : `${theme}-darken-1`
                                    "
                                    icon="flaky"
                                ></v-icon>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-list-item-title
                                    :class="
                                        isActive
                                            ? `text-${theme}-darken-2`
                                            : `text-${theme}-darken-1`
                                    "
                                    >Kreteria</v-list-item-title
                                >
                            </template>
                        </v-list-item>

                        <v-list-item
                            :color="theme"
                            :to="{ name: 'account-evaluation' }"
                            rounded
                        >
                            <template v-slot:prepend="{ isActive }">
                                <v-icon
                                    :color="
                                        isActive
                                            ? `${theme}-darken-2`
                                            : `${theme}-darken-1`
                                    "
                                    icon="rocket_launch"
                                ></v-icon>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-list-item-title
                                    :class="
                                        isActive
                                            ? `text-${theme}-darken-2`
                                            : `text-${theme}-darken-1`
                                    "
                                    >Penilaian</v-list-item-title
                                >
                            </template>
                        </v-list-item>
                    </v-list>
                </v-sheet>
            </v-sheet>
        </v-navigation-drawer>

        <v-main>
            <v-responsive
                class="pa-1"
                :content-class="`bg-${theme} rounded-lg overflow-hidden`"
                height="100%"
            >
                <router-view key="userbase" />
            </v-responsive>
        </v-main>
    </v-app>
</template>

<script>
import { useAppStore } from "@store/appStore";
import { storeToRefs } from "pinia";

export default {
    setup() {
        const store = useAppStore();

        const { snackbar, theme } = storeToRefs(store);

        return {
            snackbar,
            theme,
        };
    },

    data: () => ({
        auth: {},
    }),

    created() {
        this.auth = this.$cache.getItem("auth");
    },
};
</script>
