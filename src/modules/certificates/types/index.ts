import type { TranslatedAttr } from "@/types"

export type CertificateType = {
    id: number,
    file_url: string,
    issue_date: string,
    source: string,
} & TranslatedAttr<'title'>
    & TranslatedAttr<'description'>