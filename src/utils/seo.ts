import seo from "@/assets/json/seo.json";
import type { ProjectType } from "@/modules/projects/types";

export type SeoLang = "en" | "ar";
export type SeoPageKey = keyof typeof seo.pages;

export type PageSeo = {
    title: string;
    description: string;
    path: string;
    noindex?: boolean;
};

// Plain text from the HTML descriptions, cut at a word so Google shows it whole.
export function toMetaDescription(html: string | null | undefined, max = 160): string {
    const text = (html ?? "")
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&#0?39;/g, "'")
        .replace(/\s+/g, " ")
        .trim();

    if (text.length <= max) return text;

    const cut = text.slice(0, max - 1);
    return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,.;:–-]+$/, "") + "…";
}

export function pageSeo(key: SeoPageKey, lang: SeoLang): PageSeo {
    const page = seo.pages[key];

    return {
        ...page[lang],
        path: page.path,
        noindex: key === "notFound",
    };
}

export function projectSeo(project: ProjectType, lang: SeoLang): PageSeo {
    const name = project[`name_${lang}`] || project.name_en;
    const summary = project[`tiny_description_${lang}`] || project.tiny_description_en;

    return {
        title: `${name} | ${seo.siteName[lang]}`,
        description: toMetaDescription(summary),
        path: `projects/${project.slug}/`,
    };
}
