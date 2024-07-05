import axios from "axios";
import { useAppStore } from "@store/appStore";

export function HttpInstance(url, options) {
    let baseURL = import.meta.env.VITE_APP_URL;

    const store = useAppStore();
    store.overlay = true;

    /**
     * Override defaultOptions
     */
    const defaultOptions = Object.assign(
        {
            baseURL: baseURL,
            contentType: null,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
            method: "GET",
            onUploadProgress: null,
            params: null,
            responseType: "json",
        },
        options
    );

    /**
     * check defaultOptions contentType
     */
    if (defaultOptions.contentType) {
        defaultOptions.headers["Content-Type"] = defaultOptions.contentType;
    }

    /**
     * check for method === POST or responseType === blob
     */
    if (
        defaultOptions.method === "POST" &&
        defaultOptions.responseType === "blob"
    ) {
        defaultOptions.headers["Content-Type"] = "multipart/form-data";
    }

    /**
     * check if token exists
     */
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    /**
     * construct the request
     */
    let request = null;

    switch (defaultOptions.method) {
        case "DELETE":
            request = axios.delete(url, {
                baseURL: defaultOptions.baseURL,
                headers: defaultOptions.headers,
                data: defaultOptions.params,
                responseType: defaultOptions.responseType,
            });

            break;

        case "POST":
            request = axios.post(url, defaultOptions.params, {
                baseURL: defaultOptions.baseURL,
                headers: defaultOptions.headers,
                responseType: defaultOptions.responseType,

                onUploadProgress: defaultOptions.onUploadProgress,
            });

            break;

        case "PUT":
            request = axios.put(url, defaultOptions.params, {
                baseURL: defaultOptions.baseURL,
                headers: defaultOptions.headers,
                responseType: defaultOptions.responseType,
            });

            break;

        default:
            request = axios.get(url, {
                baseURL: defaultOptions.baseURL,
                headers: defaultOptions.headers,
                params: defaultOptions.params,
                responseType: defaultOptions.responseType,
            });

            break;
    }

    return request
        .then((response) => {
            store.overlay = false;

            let { status, message } = response.data;

            if (status === true && message) {
                store.snackbar.color = "green";
                store.snackbar.text = message;
                store.snackbar.state = true;
            }

            return response.data;
        })
        .catch((error) => {
            store.overlay = false;

            let status = error.response ? error.response.status : error.status;

            if (status === 401) {
                Object.keys(localStorage).forEach((key) => {
                    localStorage.removeItem(key);
                });

                window.location.replace("/");

                return;
            }

            if (error.response) {
                store.snackbar.color = "deep-orange";
                store.snackbar.text = error.response.data.message;
                store.snackbar.state = true;

                throw {
                    status: error.response.status,
                    message: error.response.data.message,
                };
            } else {
                error = error.toJSON();

                store.snackbar.color = "deep-orange";
                store.snackbar.text = error.message;
                store.snackbar.state = true;

                throw {
                    status: error.status,
                    message: error.message,
                };
            }
        });
}
