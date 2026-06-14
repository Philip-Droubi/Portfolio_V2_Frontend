import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as generalAr from "./ar/general.json";
import * as generalEn from "./en/general.json";

import * as portfolioAr from "./ar/portfolio.json";
import * as portfolioEn from "./en/portfolio.json";


// Detect browser language on first visit
const browserLang = navigator.language.startsWith("ar") ? "ar" : "en";

i18n
    .use(initReactI18next)
    .init({
        lng: browserLang,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
        resources: {
            en: {
                translation: {
                    ...generalEn,
                    ...portfolioEn
                }
            },
            ar: {
                translation: {
                    ...generalAr,
                    ...portfolioAr
                }
            },
        },
    });

export default i18n;