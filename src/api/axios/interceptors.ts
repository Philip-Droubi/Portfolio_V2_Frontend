// src/api/axios/interceptors.ts
import { request } from "./axiosInstance";
import { getAxiosErrorMessage } from "./error";
import { AxiosError } from "axios";

/* ---------------------- REQUEST INTERCEPTOR ---------------------- */
request.interceptors.request.use(
    (config) => {

        return config;
    },
    (error) => Promise.reject(error)
);

/* ---------------------- RESPONSE INTERCEPTOR ---------------------- */
request.interceptors.response.use(
    (response) => response,

    (error: AxiosError<any>) => {
        const message = getAxiosErrorMessage(error);

        if (message) {
            console.log(message);
        }

        return Promise.reject(error);
    }
);