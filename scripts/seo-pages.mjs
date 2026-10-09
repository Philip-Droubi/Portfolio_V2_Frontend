// Runs after `vite build` (see "build" in package.json).
//
// GitHub Pages only has files, so without this every page except the home page
// (/projects, /certificates, ...) is served through 404.html with an HTTP 404
// status and Google never indexes it. This script writes a real index.html for
// every route and every project, each with its own title, description, social
// preview tags, hreflang links, JSON-LD and a <noscript> copy of the content.
// It also writes sitemap.xml and 404.html.
//
// data.json is only read, never changed.
//
//   node scripts/seo-pages.mjs            -> fills dist/ (normal build step)
//   node scripts/seo-pages.mjs --source   -> refreshes the home block in ./index.html

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (p) => JSON.parse(fs.readFileSync(path.join(root, p), "utf8"));

const seo = readJson("src/assets/json/seo.json");
const data = readJson("src/assets/json/data.json");

const SITE = seo.siteUrl.replace(/\/$/, "");
const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

// ---------- helpers ----------
const esc = (s = "") =>
    String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const plain = (html = "") =>
    String(html ?? "")
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&#0?39;/g, "'")
        .replace(/\s+/g, " ")
        .trim();

// Same rule as toMetaDescription() in src/utils/seo.ts
function metaDescription(html, max = 160) {
    const text = plain(html);
    if (text.length <= max) return text;
    const cut = text.slice(0, max - 1);
    return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,.;:–-]+$/, "") + "…";
}

const url = (p = "") => `${SITE}/${p}`;
const arUrl = (p = "") => `${url(p)}?lang=ar`;
const jsonLd = (obj) =>
    `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

function replaceBetween(html, name, content) {
    const re = new RegExp(`(<!-- ${name}:start -->)[\\s\\S]*?(<!-- ${name}:end -->)`);
    if (!re.test(html)) throw new Error(`Marker "${name}" not found in index.html`);
    return html.replace(re, `$1\n${content}\n  $2`);
}

// ---------- structured data ----------
const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: seo.person.name,
    alternateName: seo.person.alternateName,
    givenName: seo.person.givenName,
    familyName: seo.person.familyName,
    jobTitle: seo.person.jobTitle,
    url: url(),
    image: url(seo.person.image),
    worksFor: { "@type": "Organization", name: seo.person.worksFor },
    alumniOf: { "@type": "CollegeOrUniversity", name: seo.person.alumniOf },
    address: { "@type": "PostalAddress", addressLocality: seo.person.locality, addressCountry: seo.person.country },
    knowsAbout: seo.person.knowsAbout,
    sameAs: seo.person.sameAs,
};

const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: url(),
    name: seo.siteName.en,
    alternateName: seo.siteName.ar,
    inLanguage: ["en", "ar"],
    author: { "@id": PERSON_ID },
};

const breadcrumb = (items) => ({
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: url(p) })),
});

// ---------- pages ----------
const projects = data.projects ?? [];
const pages = [];

const home = seo.pages.home;
pages.push({
    path: home.path,
    ...home.en,
    ogType: "profile",
    graph: [
        website,
        { "@type": "ProfilePage", url: url(home.path), name: home.en.title, mainEntity: { "@id": PERSON_ID }, isPartOf: { "@id": WEBSITE_ID } },
        person,
    ],
    noscript: `<h1>${esc(seo.person.name)} – ${esc(seo.person.jobTitle)}</h1>
      <p>${esc(home.en.description)}</p>
      <ul>
        <li><a href="${url("projects/")}">Projects &amp; Experience</a></li>
        <li><a href="${url("certificates/")}">Certificates &amp; Achievements</a></li>
        <li><a href="${url("cv/Philip_Droubi_Resume.pdf")}">Download CV</a></li>
      </ul>`,
});

const list = seo.pages.projects;
pages.push({
    path: list.path,
    ...list.en,
    graph: [
        {
            "@type": "CollectionPage",
            url: url(list.path),
            name: list.en.title,
            isPartOf: { "@id": WEBSITE_ID },
            about: { "@id": PERSON_ID },
            mainEntity: {
                "@type": "ItemList",
                itemListElement: projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: url(`projects/${p.slug}/`), name: p.name_en })),
            },
        },
        breadcrumb([["Home", ""], ["Projects", list.path]]),
        person,
    ],
    noscript: `<h1>Projects &amp; Experience</h1>
      <ul>
${projects.map((p) => `        <li><a href="${url(`projects/${p.slug}/`)}">${esc(p.name_en)}</a> – ${esc(plain(p.tiny_description_en))}</li>`).join("\n")}
      </ul>`,
});

const certs = seo.pages.certificates;
pages.push({
    path: certs.path,
    ...certs.en,
    graph: [
        { "@type": "CollectionPage", url: url(certs.path), name: certs.en.title, isPartOf: { "@id": WEBSITE_ID }, about: { "@id": PERSON_ID } },
        breadcrumb([["Home", ""], ["Certificates", certs.path]]),
        person,
    ],
    noscript: `<h1>Certificates &amp; Achievements</h1>
      <ul>
${(data.certificate ?? []).map((c) => `        <li>${esc(c.title_en)}${c.source ? ` – ${esc(c.source)}` : ""}</li>`).join("\n")}
      </ul>`,
});

for (const p of projects) {
    const p_path = `projects/${p.slug}/`;
    const title = `${p.name_en} | ${seo.siteName.en}`;
    const description = metaDescription(p.tiny_description_en || p.description_en);
    const techs = (p.techs ?? []).map((t) => t.name_en);

    const main = p.is_company
        ? { "@type": "Organization", name: p.name_en, ...(p.live_url ? { url: p.live_url } : {}) }
        : {
            "@type": "CreativeWork",
            name: p.name_en,
            description,
            image: p.main_image,
            author: { "@id": PERSON_ID },
            ...(p.start_date ? { dateCreated: p.start_date } : {}),
            ...(techs.length ? { keywords: techs.join(", ") } : {}),
            ...(p.live_url ? { url: p.live_url } : p.url ? { url: p.url } : {}),
        };

    pages.push({
        path: p_path,
        title,
        description,
        image: p.main_image,
        imageAlt: p.name_en,
        graph: [
            {
                "@type": "ItemPage",
                url: url(p_path),
                name: title,
                description,
                isPartOf: { "@id": WEBSITE_ID },
                ...(p.is_company ? { about: main, mentions: { "@id": PERSON_ID } } : { mainEntity: main }),
            },
            breadcrumb([["Home", ""], ["Projects", "projects/"], [p.name_en, p_path]]),
            person,
        ],
        noscript: `<h1>${esc(p.name_en)}</h1>
      <p>${esc(plain(p.tiny_description_en))}</p>
      ${p.description_en ?? ""}
      ${techs.length ? `<p>Tech: ${esc(techs.join(", "))}</p>` : ""}
      <p><a href="${url("projects/")}">All projects</a> · <a href="${url()}">Philip Droubi</a></p>`,
    });
}

// ---------- head block ----------
function headBlock(page) {
    const image = page.image ?? url(seo.image);
    const imageAlt = page.imageAlt ?? seo.imageAlt;
    const ogType = page.ogType ?? "website";

    return [
        `  <title>${esc(page.title)}</title>`,
        `  <meta name="description" content="${esc(page.description)}" />`,
        `  <meta name="robots" content="index, follow, max-image-preview:large" />`,
        `  <meta name="author" content="${esc(seo.person.name)}" />`,
        `  <meta name="theme-color" content="${esc(seo.themeColor)}" />`,
        `  <link rel="alternate" hreflang="en" href="${url(page.path)}" />`,
        `  <link rel="alternate" hreflang="ar" href="${arUrl(page.path)}" />`,
        `  <link rel="alternate" hreflang="x-default" href="${url(page.path)}" />`,
        `  <meta property="og:type" content="${ogType}" />`,
        `  <meta property="og:site_name" content="${esc(seo.siteName.en)}" />`,
        `  <meta property="og:url" content="${url(page.path)}" />`,
        `  <meta property="og:title" content="${esc(page.title)}" />`,
        `  <meta property="og:description" content="${esc(page.description)}" />`,
        `  <meta property="og:image" content="${esc(image)}" />`,
        `  <meta property="og:image:alt" content="${esc(imageAlt)}" />`,
        ...(page.image ? [] : [`  <meta property="og:image:width" content="1200" />`, `  <meta property="og:image:height" content="630" />`]),
        `  <meta property="og:locale" content="en_US" />`,
        `  <meta property="og:locale:alternate" content="ar_AR" />`,
        ...(ogType === "profile"
            ? [
                `  <meta property="profile:first_name" content="${esc(seo.person.givenName)}" />`,
                `  <meta property="profile:last_name" content="${esc(seo.person.familyName)}" />`,
            ]
            : []),
        `  <meta name="twitter:card" content="summary_large_image" />`,
        `  <meta name="twitter:title" content="${esc(page.title)}" />`,
        `  <meta name="twitter:description" content="${esc(page.description)}" />`,
        `  <meta name="twitter:image" content="${esc(image)}" />`,
        `  ${jsonLd({ "@context": "https://schema.org", "@graph": page.graph })}`,
    ].join("\n");
}

const noscriptBlock = (page) => `  <noscript>
    <main>
      ${page.noscript}
    </main>
  </noscript>`;

function render(template, page) {
    let html = replaceBetween(template, "seo", headBlock(page));
    html = replaceBetween(html, "seo-noscript", noscriptBlock(page));
    return html;
}

// ---------- --source: keep ./index.html in sync with the home page ----------
if (process.argv.includes("--source")) {
    const file = path.join(root, "index.html");
    fs.writeFileSync(file, render(fs.readFileSync(file, "utf8"), pages[0]));
    console.log("seo: refreshed the home block in index.html");
    process.exit(0);
}

// ---------- dist ----------
const dist = path.resolve(root, process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

for (const page of pages) {
    const file = path.join(dist, page.path, "index.html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, render(template, page));
}

// 404.html is the SPA fallback for any other URL. GitHub Pages sends it with
// status 404, so it is marked noindex and carries no page-specific tags.
const nf = seo.pages.notFound.en;
let notFound = replaceBetween(
    template,
    "seo",
    [
        `  <title>${esc(nf.title)}</title>`,
        `  <meta name="description" content="${esc(nf.description)}" />`,
        `  <meta name="robots" content="noindex, follow" />`,
    ].join("\n"),
);
notFound = replaceBetween(notFound, "seo-noscript", "");
fs.writeFileSync(path.join(dist, "404.html"), notFound);

// sitemap.xml – every page in both languages, linked to each other with hreflang
const today = new Date().toISOString().slice(0, 10);
const alternates = (p) =>
    [
        `    <xhtml:link rel="alternate" hreflang="en" href="${url(p)}" />`,
        `    <xhtml:link rel="alternate" hreflang="ar" href="${esc(arUrl(p))}" />`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(p)}" />`,
    ].join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
        .flatMap((page) => [url(page.path), esc(arUrl(page.path))].map((loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
${alternates(page.path)}
  </url>`))
        .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

console.log(`seo: wrote ${pages.length} pages, 404.html and sitemap.xml (${pages.length * 2} URLs)`);
