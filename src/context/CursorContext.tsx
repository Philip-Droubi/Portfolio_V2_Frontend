import { createContext, useContext } from "react";

type CursorContextType = {
    registerZone: (el: HTMLElement | null) => void;
    unregisterZone: (el: HTMLElement | null) => void;
    isInZone: (target: HTMLElement | null) => boolean;
};

export const CursorContext = createContext<CursorContextType | null>(null);

export const useCursor = () => {
    const ctx = useContext(CursorContext);
    if (!ctx) throw new Error("CursorProvider missing");
    return ctx;
};