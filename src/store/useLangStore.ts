import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppLangState {
    language: "en" | "ar";
    setLanguage: (lng: "en" | "ar") => void;
}

export const useLangStore = create<AppLangState>()(
    persist(
        (set) => ({
            language: "en",

            // Update language
            setLanguage: (lng) => set({ language: lng }),
        }),
        {
            name: "language",
            partialize: (state) => ({ language: state.language }),
        }
    )
);