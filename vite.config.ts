import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'serve' ? '/' : '/Portfolio_V2_Test/',

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    plugins: [
      react(),
      tailwindcss(),
    ],

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react")) return "react";
              if (id.includes("@mui")) return "mui";
              if (id.includes("@emotion")) return "emotion";
              if (id.includes("i18next") || id.includes("react-i18next")) return "i18n";
              if (id.includes("@tanstack/react-query")) return "react-query";
              if (id.includes("zustand")) return "zustand";
              if (id.includes("axios")) return "axios";
              if (id.includes("linkify")) return "linkify";
              if (id.includes("tailwind")) return "tailwind";
            }
            return null;
          }
        }
      }
    }
  }
})
