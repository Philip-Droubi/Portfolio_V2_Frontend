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
  }, [language]);

  //Handle Mode 
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  document.addEventListener("wheel", function () {
    if (document.activeElement instanceof HTMLInputElement &&
      document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  }, { passive: false });

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
