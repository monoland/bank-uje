<template>
    <v-app>
        <v-main class="bg-blue-lighten-4">
            <div class="d-flex align-center justify-center h-100">
                <v-sheet
                    class="border-0 overflow-hidden position-relative pt-8"
                    color="blue-lighten-5"
                    elevation="4"
                    height="667"
                    rounded="lg"
                    width="375"
                >
                    <v-sheet
                        class="position-absolute"
                        color="blue"
                        elevation="2"
                        height="300"
                        width="100%"
                        rounded="b-xl"
                        style="top: 0; z-index: 0"
                    ></v-sheet>

                    <v-sheet
                        class="position-relative px-6 pt-16"
                        color="transparent"
                        height="100%"
                        width="100%"
                    >
                        <v-sheet
                            class="position-absolute d-flex align-center justify-center"
                            color="transparent"
                            style="top: 0"
                            width="calc(100% - 48px)"
                        >
                            <v-avatar color="blue" size="128">
                                <v-avatar class="px-5" color="white" size="112">
                                    <v-img
                                        height="96"
                                        src="./../../assets/bank_logo.png"
                                    ></v-img>
                                </v-avatar>
                            </v-avatar>
                        </v-sheet>

                        <v-sheet
                            class="pt-16"
                            color="white"
                            elevation="1"
                            height="546"
                            rounded="lg"
                        >
                            <v-card-text class="px-6">
                                <div
                                    class="text-h4 text-center font-weight-bold mt-2"
                                >
                                    Bank UJE
                                </div>

                                <div class="py-2">
                                    <v-divider>
                                        <v-chip size="small" variant="flat"
                                            >Trusted Creditur</v-chip
                                        >
                                    </v-divider>
                                </div>

                                <div
                                    class="text-h6 text-center font-weight-bold mt-9 mb-4"
                                >
                                    Let's sign you in.
                                </div>

                                <div
                                    class="text-subtitle-1 text-medium-emphasis"
                                >
                                    Account
                                </div>

                                <v-text-field
                                    density="comfortable"
                                    placeholder="Email address"
                                    prepend-inner-icon="mail"
                                    variant="outlined"
                                    v-model="email"
                                ></v-text-field>

                                <div
                                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                                >
                                    Password
                                </div>

                                <v-text-field
                                    :append-inner-icon="
                                        visible
                                            ? 'visibility_off'
                                            : 'visibility'
                                    "
                                    :type="visible ? 'text' : 'password'"
                                    density="comfortable"
                                    placeholder="Enter your password"
                                    prepend-inner-icon="lock"
                                    variant="outlined"
                                    v-model="password"
                                    @click:append-inner="visible = !visible"
                                ></v-text-field>

                                <v-btn
                                    class="mt-6"
                                    color="blue"
                                    size="large"
                                    variant="flat"
                                    rounded="lg"
                                    block
                                    @click="postLogin"
                                >
                                    Log In
                                </v-btn>
                            </v-card-text>
                        </v-sheet>
                    </v-sheet>
                </v-sheet>
            </div>
        </v-main>

        <v-snackbar :color="snackbar.color" v-model="snackbar.state" multi-line>
            {{ snackbar.text }}

            <template v-slot:actions>
                <v-btn
                    color="white"
                    variant="text"
                    @click="snackbar.state = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>

<script>
import { useAppStore } from "@store/appStore";
import { storeToRefs } from "pinia";

export default {
    setup() {
        const store = useAppStore();

        const { snackbar } = storeToRefs(store);

        return {
            snackbar,
        };
    },

    data: () => ({
        email: null,
        password: null,
        visible: false,
    }),

    created() {
        this.$http("sanctum/csrf-cookie");
    },

    methods: {
        getAuthentUser: function () {
            this.$http("api/user").then((response) => {
                this.$cache.setItem("auth", response);

                this.$router.push({
                    name: "account-dashboard",
                    params: { auth: response.username },
                });
            });
        },

        postLogin: function () {
            this.$http("login", {
                method: "POST",
                params: {
                    email: this.email,
                    password: this.password,
                },
            }).then(() => {
                this.getAuthentUser();
            });
        },
    },
};
</script>
