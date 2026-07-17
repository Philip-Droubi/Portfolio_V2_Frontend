export const BASE_URL = "";

export const APP_LANGUAGES = ['ar', 'en'];
export type AppLanguage = typeof APP_LANGUAGES[number];

export const INFO = {
    name: "Philip_Droubi",
    firstName: "Philip",
    lastName: "Droubi",
    job: "Software_Engineer",
    full_name: "Philip Marwan Droubi",
    address: "Syria_Damascus",
    birth_date: "29-08-2001",
    university: "Damascus_University",
    faculty: "Information_Technology_Engineering",
    citizenship: " Arab Syrian",
};

export const LANGUAGES = [
    {
        "lang": "Arabic",
        "description": "Native_Language",
    },
    {
        "lang": "English",
        "description": "Professional_Proficiency_Level",
    }
]

export const SOCIAL = {
    email: "philipdroubi@gmail.com",
    linkedIn: "https://www.linkedin.com/in/philip-droubi",
    github: "https://github.com/Philip-Droubi",
    phone_number: "+963 959 880 596",
    facebook: "https://www.facebook.com/philipp.droubi.1",
    dev_to: "https://dev.to/philipdroubi",
    telegram: "https://t.me/PhilipDroubi",
    whatsApp: "https://wa.me/963959880596",
};

export const languages = [
    {
        key: "ar",
        value: "Arabic",
    },
    {
        key: "en",
        value: "English",
    },
] as const;
export type Language = (typeof languages)[number]["key"];