import { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";
import './App.css'

// Axios interceptors (load once globally)
import "@/api/axios/interceptors";

// Zustand
import { useLangStore } from "./store/useLangStore";
import { useThemeStore } from "@/store/useThemeStore";

// i18n
import "./i18n/i18n";
import i18n from "i18next";

// React Query
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient";
import { CacheProvider } from "@emotion/react";
import { theme } from "@/theme/muiStyle";
import { cacheRtl } from "./theme/rtlCache";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const language = useLangStore((s) => s.language);
  const mode = useThemeStore((s) => s.mode);

  // Sync Zustand language with i18next only when language changes
  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
  }, [language]);

  //Handle Mode 
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  useEffect(() => {
    const handler = () => {
      if (
        document.activeElement instanceof HTMLInputElement &&
        document.activeElement.type === "number"
      ) {
        document.activeElement.blur();
      }
    };
    document.addEventListener("wheel", handler, { passive: false });
    return () => document.removeEventListener("wheel", handler);
  }, []);

  printPortfolioBanner();

  return (
    <>
      {language === "ar" ? (
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme(language, mode)}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </ThemeProvider>
        </CacheProvider>
      ) : (
        <ThemeProvider theme={theme(language, mode)}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App

const printPortfolioBanner = () => {
  console.log(
    "%c✨ Welcome to my portfolio. Thanks for checking the code!",
    `
    color: #fff;
    background: linear-gradient(90deg,#7c3aed,#2563eb);
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 8px;
    `
  );

  console.log(
    "██████╗ ██╗  ██╗██╗██╗     ██╗██████╗\n" +
    "██╔══██╗██║  ██║██║██║     ██║██╔══██╗\n" +
    "██████╔╝███████║██║██║     ██║██████╔╝\n" +
    "██╔═══╝ ██╔══██║██║██║     ██║██╔═══╝\n" +
    "██║     ██║  ██║██║███████╗██║██║\n" +
    "╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝╚═╝\n\n" +
    "██████╗ ██████╗  ██████╗ ██╗   ██╗██████╗ ██╗\n" +
    "██╔══██╗██╔══██╗██╔═══██╗██║   ██║██╔══██╗██║\n" +
    "██║  ██║██████╔╝██║   ██║██║   ██║██████╔╝██║\n" +
    "██║  ██║██╔══██╗██║   ██║██║   ██║██╔══██╗██║\n" +
    "██████╔╝██║  ██║╚██████╔╝╚██████╔╝██████╔╝██║\n" +
    "╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝\n"
  );
};