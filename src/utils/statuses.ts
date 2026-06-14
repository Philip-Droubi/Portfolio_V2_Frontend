import { t } from "i18next";

export function getActiveStatusesOptions() {
    return [
        { label: t("all"), value: "1" },
        { label: t("active"), value: "2" },
        { label: t("inactive"), value: "3" },
    ]
}