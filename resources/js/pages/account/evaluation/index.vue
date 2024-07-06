<template>
    <v-toolbar color="transparent">
        <v-btn icon>
            <v-icon>arrow_back</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
    </v-toolbar>

    <v-sheet
        color="transparent"
        class="position-relative rounded-lg overflow-hidden"
        height="calc(100% - 64px)"
    >
        <v-sheet
            :color="theme"
            class="position-absolute rounded-b-lg w-100"
            height="200"
            style="z-index: 1"
        ></v-sheet>

        <v-sheet
            :color="`${theme}-lighten-5`"
            class="position-absolute w-100"
            height="calc(100% - 12px)"
            style="top: 12px; z-index: 0"
        ></v-sheet>

        <v-responsive
            class="overflow-y-auto overflow-x-hidden"
            height="calc(100vh - 72px)"
            style="z-index: 2"
        >
            <v-sheet
                class="bg-transparent mx-auto pt-10 position-relative"
                max-width="800px"
                min-height="calc(100% - 16px)"
            >
                <v-sheet
                    class="bg-transparent position-absolute d-flex align-center justify-center w-100"
                    style="top: 0"
                >
                    <v-avatar :color="theme" class="pa-1" size="80">
                        <v-avatar color="white" size="72">
                            <v-icon size="x-large">flaky</v-icon>
                        </v-avatar>
                    </v-avatar>
                </v-sheet>

                <v-fab
                    class="me-4"
                    color="deep-orange"
                    icon
                    size="64"
                    absolute
                    offset
                    style="top: 158px; right: -100px"
                >
                    <v-icon>add</v-icon>

                    <v-dialog activator="parent" max-width="600">
                        <template v-slot:default="{ isActive }">
                            <v-card title="Tambah Kreditur">
                                <v-card-text>
                                    <v-row dense>
                                        <v-col cols="12">
                                            <v-text-field
                                                label="Nama Kreditur"
                                                v-model="name"
                                                hide-details
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="6">
                                            <v-text-field
                                                label="Jaminan Nasabah"
                                                v-model="evaluation_c1"
                                                hide-details
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="6">
                                            <v-text-field
                                                label="Kondisi Ekonomi"
                                                v-model="evaluation_c2"
                                                hide-details
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="6">
                                            <v-text-field
                                                label="Karakter Nasabah"
                                                v-model="evaluation_c3"
                                                hide-details
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="6">
                                            <v-text-field
                                                label="Kelayakan Usaha"
                                                v-model="evaluation_c4"
                                                hide-details
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                        text="Close"
                                        variant="plain"
                                        @click="isActive.value = false"
                                    ></v-btn>

                                    <v-btn
                                        color="primary"
                                        text="Save"
                                        variant="tonal"
                                        @click="
                                            postCreate(
                                                () => (isActive.value = false)
                                            )
                                        "
                                    ></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </v-fab>

                <v-sheet class="pt-10" elevation="1" rounded="lg">
                    <v-card-text>
                        <v-btn @click="getCalculate">KALKULASI RANGKING</v-btn>
                    </v-card-text>
                    <div class="mt-4">
                        <v-divider>
                            <v-chip variant="flat">Penilaian Kreditur</v-chip>
                        </v-divider>
                    </div>

                    <v-card-text>
                        <v-table>
                            <colgroup>
                                <col width="48px" />
                                <col width="auto" />
                                <col width="120px" />
                                <col width="120px" />
                                <col width="120px" />
                                <col width="120px" />
                            </colgroup>

                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th class="text-center">C1</th>
                                    <th class="text-center">C2</th>
                                    <th class="text-center">C3</th>
                                    <th class="text-center">C4</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr
                                    v-for="(record, index) in records"
                                    :key="index"
                                >
                                    <td>{{ index + 1 }}</td>

                                    <td>
                                        {{ record.name }}
                                    </td>

                                    <td class="text-center">
                                        {{ record.evaluation_c1 }}
                                    </td>

                                    <td class="text-center">
                                        {{ record.evaluation_c2 }}
                                    </td>

                                    <td class="text-center">
                                        {{ record.evaluation_c3 }}
                                    </td>

                                    <td class="text-center">
                                        {{ record.evaluation_c4 }}
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-sheet>
            </v-sheet>
        </v-responsive>
    </v-sheet>
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
        name: null,
        evaluation_c1: 0,
        evaluation_c2: 0,
        evaluation_c3: 0,
        evaluation_c4: 0,

        records: [],
    }),

    mounted() {
        this.getData();
    },

    methods: {
        getCalculate: function () {
            this.$http("api/creditor")
                .then(({ data }) => {
                    this.records = data;
                })
                .then(() => {
                    this.$router.push({ name: "account-dashboard" });
                });
        },

        getData: function () {
            this.$http("api/creditor").then(({ data }) => {
                this.records = data;
            });
        },

        postCreate: function (callback) {
            this.$http("api/creditor", {
                method: "POST",
                params: {
                    name: this.name,
                    evaluation_c1: this.evaluation_c1,
                    evaluation_c2: this.evaluation_c2,
                    evaluation_c3: this.evaluation_c3,
                    evaluation_c4: this.evaluation_c4,
                },
            }).then(() => {
                callback();

                this.getData();

                this.name = null;
                this.evaluation_c1 = 0;
                this.evaluation_c2 = 0;
                this.evaluation_c3 = 0;
                this.evaluation_c4 = 0;
            });
        },
    },
};
</script>
