import type { AppLanguage } from "@/utils/config";

export type PaginatedResponse<T> = Response<T> & {
    pagination_data: PaginateData
};

export type AutocompleteOption = {
    value: string | number | null;
    label: string;
};

export type PaginateData = {
    total: number;
    per_page: number;
    current_page: number;
    first_page_url: string | null;
    prev_page_url: string | null;
    next_page_url: string | null;
    last_page_url: string | null;
};

export type Response<T> = {
    status_code: number,
    message: string,
    data: T,
};

export type OrderType = ("desc" | "asc" | "");

export type KeyValueType = {
    key: string;
    value: string;
};

export type TableColumn<T> = {
    key: keyof T | string;
    label: string;
    width?: string | number;
    align?: "left" | "right" | "center";
    render?: (row: T) => React.ReactNode;
};

export type TranslatedAttr<T extends string> = {
    [L in AppLanguage as `${T}_${L}`]: string | null;
};

