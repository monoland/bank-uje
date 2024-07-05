<template>
    <v-toolbar color="transparent">
        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>power_settings_new</v-icon>
        </v-btn>
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
                max-width="700px"
                min-height="calc(100% - 16px)"
            >
                <v-sheet
                    class="bg-transparent position-absolute d-flex align-center justify-center w-100"
                    style="top: 0"
                >
                    <v-avatar :color="theme" class="pa-1" size="80">
                        <v-avatar color="white" size="72">
                            <v-img
                                src="./../../../../assets/male-avatar.svg"
                            ></v-img>
                        </v-avatar>
                    </v-avatar>
                </v-sheet>

                <v-sheet class="pt-10" elevation="1" rounded="lg">
                    <div class="mt-4">
                        <v-divider>
                            <v-chip variant="flat">Beranda Aplikasi</v-chip>
                        </v-divider>
                    </div>

                    <v-card-text>
                        <v-table>
                            <colgroup>
                                <col width="48px" />
                                <col width="auto" />
                                <col width="120px" />
                                <col width="120px" />
                            </colgroup>

                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th class="text-center">
                                        Nilai Bobot <br />Prevensi (Vi)
                                    </th>
                                    <th class="text-center">Rangking</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Asep</td>
                                    <td class="text-center">0.8</td>
                                    <td class="text-center">4</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>Asep</td>
                                    <td class="text-center">0.8</td>
                                    <td class="text-center">4</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>Asep</td>
                                    <td class="text-center">0.8</td>
                                    <td class="text-center">4</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>Asep</td>
                                    <td class="text-center">0.8</td>
                                    <td class="text-center">4</td>
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
};
</script>
