import { create } from "zustand";

type Mode = "light" | "dark";

export const useThemeStore = create<{
    mode: Mode;
    toggleMode: () => void;
}>((set) => ({
    mode: (localStorage.getItem("theme") as Mode) || "dark",

    toggleMode: () =>
        set((state) => {
            const next = state.mode === "light" ? "dark" : "light";
            localStorage.setItem("theme", next);
            return { mode: next };
        }),
}));
