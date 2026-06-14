import i18next, { t } from "i18next";
import { APP_LANGUAGES, type AppLanguage } from "./config";
//@ts-ignore

export function getNextPage(currentPage: number, lastPage: number): number | undefined {
    const nextPage = currentPage < lastPage ? currentPage + 1 : undefined
    return nextPage;
}

export function getDir(): ("ltr" | "rtl") {
    if (i18next.language == "ar")
        return "rtl"
    return "ltr"
}

export function getCssVariableValue(variableName: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

export function transFieldLabel(baseKey: string, lang: AppLanguage) {
    const langName = t(lang);
    const baseLabel = t(baseKey);

    return `${baseLabel} (${langName})`;
}

export function transformLangFields<T extends Record<string, any>>(
    data: T,
    prefixes: string[]
) {
    const result: any = {};

    Object.entries(data).forEach(([key, value]) => {
        for (const prefix of prefixes) {
            const prefixWithUnderscore = `${prefix}_`;

            // Skip if key doesn't start with prefix_
            if (!key.startsWith(prefixWithUnderscore)) {
                result[key] = value;
                continue;
            };

            // Extract the language code
            const lang = key.replace(prefixWithUnderscore, "") as AppLanguage;

            // Skip if lang is not in APP_LANGUAGES
            if (!APP_LANGUAGES.includes(lang)) continue;

            // Initialize nested object
            if (!result[prefix]) result[prefix] = {};

            // Assign value
            result[prefix][lang] = value;
        }
    });

    return result;
}

export function getMultilingualDisplay(item: any, prefix: string) {
    return APP_LANGUAGES
        .map((lang) => item[`${prefix}_${lang}`])
        .filter(Boolean)
        .join(" / ");
}

export function formatPrice(
    number?: number,
    round?: number
): string {
    if (number === undefined) return "";
    // Apply rounding if needed
    if (round !== undefined && round !== null) {
        number = Number(number.toFixed(round));
    }

    // Convert to string with high precision (similar to PHP's "%.10f")
    let formatted = number.toFixed(10);

    // Trim trailing zeros and possible trailing dot
    formatted = formatted.replace(/\.?0+$/, "");

    // Split integer and decimal parts
    const [integerPart, decimalPart] = formatted.split(".");

    // Format integer part with commas
    const formattedInteger = Number(integerPart).toLocaleString("en-US");

    // Rebuild final output
    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

export function normalizeWeekDays(input: any): number[] {
    if (!input) return [];

    // Case C: JSON string
    if (typeof input === "string") {
        try {
            const parsed = JSON.parse(input);
            return parsed.map((v: any) => Number(v));
        } catch {
            return [];
        }
    }

    // Case A or B: array of strings or numbers
    if (Array.isArray(input)) {
        return input.map((v: any) => Number(v));
    }

    return [];
}

export function formatMinutes(minutes?: number): string {
    if (minutes == null) return "";
    const total = Math.floor(minutes);

    if (total < 60) {
        return `${total} ${total < 11 ? t("minutes") : t('minute')}`;
    }

    const hours = Math.floor(total / 60);
    const remaining = total % 60;

    return `${hours}:${remaining.toString().padStart(2, "0")} ${t("hour")}`;
}