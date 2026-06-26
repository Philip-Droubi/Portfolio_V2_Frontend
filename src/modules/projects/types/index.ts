import type { TranslatedAttr } from "@/types"

export type ProjectType = {
    id: number,
    main_image: string,
    slug: string,
    start_date: string,
    end_date: string | null,
    url: string | null,
    live_url: string | null,
    is_company: boolean,
    teches?: TechType[],
    tags?: TagType[],
    media?: mediaType[],
} & TranslatedAttr<'name'>
    & TranslatedAttr<'description'>
    & TranslatedAttr<'tiny_description'>

export type TechType = {
    id: number
    icon: string
} & TranslatedAttr<'name'>

export type TagType = {
    id: number,
} & TranslatedAttr<'name'>

export type mediaType = {
    id: number,
    media_url: string
}