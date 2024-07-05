import vuetify from "./vuetify";
import pinia from "./pinia";
import router from "./router";
import { Cache } from "./cache";
import { HttpInstance } from "./http";
import { useRouter, useRoute } from "vue-router";

export function registerPlugins(app) {
    app.config.globalProperties.$cache = new Cache();
    app.config.globalProperties.$http = HttpInstance;

    pinia.use(({ store }) => {
        store.$cache = app.config.globalProperties.$cache;
        store.$http = app.config.globalProperties.$http;
        store.$route = useRoute();
        store.$router = useRouter();
    });

    app.use(vuetify).use(pinia).use(router);
}
