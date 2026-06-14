import { createTheme } from "@mui/material";

export const theme = (lang: string, mode: "light" | "dark") => {
    return createTheme({
        direction: lang === "ar" ? "rtl" : "ltr",

        typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
        },

        palette: {
            mode, // Mode "Dark" | "Light"

            primary: {
                main: "#6366F1",
            },
            secondary: {
                main: "#22D3EE",
            },

            ...(mode === "dark"
                ? {
                    background: {
                        // default: "#121212",
                        // paper: "#1e1e1e",
                    },
                }
                : {
                    background: {
                        // default: "#fafafa",
                        // paper: "#fff",
                    },
                }),
        },
    });
};
