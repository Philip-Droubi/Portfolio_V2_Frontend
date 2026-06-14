// src/api/axios/error.ts
import { AxiosError } from "axios";
import i18n from "@/i18n/i18n";

export const getAxiosErrorMessage = (error: AxiosError<any>) => {
    if (error.code === "ERR_NETWORK") {
        return i18n.t("noInternetConnection");
    }

    return error.response?.data?.message ?? i18n.t("somethingWentWrong");
};