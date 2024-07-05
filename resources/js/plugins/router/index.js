import { createRouter, createWebHistory } from "vue-router";
import { Cache } from "@plugins/cache";

const routes = [
    {
        path: "/",
        name: "home-page",
        component: () => import("@pages/HomeRoute.vue"),
    },

    {
        path: "/:auth",
        meta: { requiredAuth: true },
        component: () => import("@pages/account/Base.vue"),
        children: [
            {
                path: "",
                redirect: { name: "account-dashboard" },
            },

            // dashboard
            {
                path: "dashboard",
                name: "account-dashboard",
                component: () => import("@pages/account/dashboard/index.vue"),
            },

            // criteria
            {
                path: "criteria",
                name: "account-criteria",
                component: () => import("@pages/account/criteria/index.vue"),
            },

            // evaluation
            {
                path: "evaluation",
                name: "account-evaluation",
                component: () => import("@pages/account/evaluation/index.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

const cache = new Cache();

router.beforeEach(async (to, from, next) => {
    const authent = cache.getItem("auth");

    if (to.meta.requiredAuth && !authent) {
        next({ name: "home-page" });
    } else if (to.name === "home-page" && authent) {
        next({ name: "account-dashboard", params: { auth: authent.username } });
    } else {
        next();
    }
});

export default router;
