import { useEffect } from "react";
import seo from "@/assets/json/seo.json";
import { useLangStore } from "@/store/useLangStore";
import type { PageSeo } from "@/utils/seo";

function setMeta(name: string, content: string) {
    let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

    if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
    }

    tag.content = content;
}

function setCanonical(href: string | null) {
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!href) {
        link?.remove();
        return;
    }

    if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
    }

    link.href = href;
}

// Keeps <title>, description, robots and canonical in sync with the page and language.
// The static HTML from scripts/seo-pages.mjs has the same values, so crawlers that
// don't run JavaScript still get them.
export function useSeo({ title, description, path, noindex = false }: PageSeo) {
    const language = useLangStore((s) => s.language);

    useEffect(() => {
        document.title = title;
        setMeta("description", description);
        setMeta("robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");

        const url = `${seo.siteUrl}/${path}`;
        setCanonical(noindex ? null : language === "ar" ? `${url}?lang=ar` : url);
    }, [title, description, path, noindex, language]);
}
