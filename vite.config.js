import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Laravel from "laravel-vite-plugin";
import ViteFonts from "unplugin-fonts/vite";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [
        Vue({
            template: { transformAssetUrls },
        }),
        Vuetify({
            autoImport: true,
            styles: {
                configFile: "resources/styles/settings.scss",
            },
        }),
        Laravel({
            input: ["resources/js/app.js"],
            refresh: true,
        }),
        ViteFonts({
            google: {
                families: ["Madimi One"],
            },
        }),
    ],

    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@pages": fileURLToPath(
                new URL("./resources/js/pages", import.meta.url)
            ),
            "@plugins": fileURLToPath(
                new URL("./resources/js/plugins", import.meta.url)
            ),
            "@pinia": fileURLToPath(
                new URL("./resources/js/plugins/pinia", import.meta.url)
            ),
            "@store": fileURLToPath(
                new URL("./resources/js/plugins/store", import.meta.url)
            ),
        },
        extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },

    server: {
        host: "bank-uje.test",
        https: false,
        port: 3000,
    },
});
