import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as portfolioAr from "./ar/portfolio.json";
import * as portfolioEn from "./en/portfolio.json";
import * as heroAr from "./ar/hero.json";
import * as heroEn from "./en/hero.json";
import * as aboutAr from "./ar/about.json";
import * as aboutEn from "./en/about.json";
import * as educationAr from "./ar/education.json";
import * as educationEn from "./en/education.json";
import * as projectsAr from "./ar/projects.json";
import * as projectsEn from "./en/projects.json";
import * as contactAr from "./ar/contact.json";
import * as contactEn from "./en/contact.json";

// Detect browser language on first visit
const getInitialLanguage = (): "en" | "ar" => {
    try {
        const stored = localStorage.getItem("language");

        if (stored) {
            const parsed = JSON.parse(stored);
            return parsed.state.language;
        }
    } catch {
        // Ignore invalid localStorage data.
    }

    return navigator.language.startsWith("ar") ? "ar" : "en";
};

i18n
    .use(initReactI18next)
    .init({
        lng: getInitialLanguage(),
        fallbackLng: "en",
        interpolation: { escapeValue: false },
        resources: {
            en: {
                translation: {
                    ...portfolioEn,
                    ...heroEn,
                    ...aboutEn,
                    ...educationEn,
                    ...projectsEn,
                    ...contactEn
                }
            },
            ar: {
                translation: {
                    ...portfolioAr,
                    ...heroAr,
                    ...aboutAr,
                    ...educationAr,
                    ...projectsAr,
                    ...contactAr
                }
            },
        },
    });

export default i18n;