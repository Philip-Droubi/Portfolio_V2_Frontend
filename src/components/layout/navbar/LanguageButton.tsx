import { useState } from "react";
import {
    IconButton,
    Menu,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Tooltip,
    Fade,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import CheckIcon from "@mui/icons-material/Check";

import i18n from "@/i18n/i18n";
import { useLangStore } from "@/store/useLangStore";
import { languages, type Language } from "@/utils/config";
import { t } from "i18next";
import { getDir } from "@/utils/functions";

export default function LanguageButton() {
    const language = useLangStore((s) => s.language);
    const setLanguage = useLangStore((s) => s.setLanguage);

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const open = Boolean(anchorEl);

    const handleChangeLanguage = async (lang: Language) => {
        await i18n.changeLanguage(lang);
        setLanguage(lang);
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip title={t("language")}>
                <IconButton
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    sx={{
                        color: "white",
                        // width: 42,
                        height: 42,
                        borderRadius: "14px",
                        border: "1px solid rgba(255,255,255,.12)",
                        bgcolor: "rgba(255,255,255,.04)",
                        backdropFilter: "blur(12px)",
                        transition: ".15s",
                        "&:hover": {
                            color: "#00E5FF",
                            bgcolor: "rgba(255,255,255,.08)",
                            boxShadow: "0 0 18px rgba(0,229,255,.35)",
                        },
                    }}
                >
                    <LanguageIcon /> <p className="uppercase text-sm ms-2 text-secondary">{language}</p>
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                slots={{
                    transition: Fade,
                }}
                slotProps={{
                    paper: {
                        sx: {
                            mt: 1,
                            borderRadius: 3,
                            minWidth: 180,
                            bgcolor: "rgba(20,20,20,.92)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255,255,255,.08)",
                        },
                    },
                }}
            >
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.key}
                        selected={language === lang.key}
                        onClick={() => handleChangeLanguage(lang.key)}
                        dir={getDir()}
                        sx={{
                            py: 1.2,
                            transition: ".25s",
                            "&:hover": {
                                bgcolor: "rgba(0,229,255,.12)",
                            },
                        }}
                    >
                        <ListItemText>{t(lang.value)}</ListItemText>

                        {language === lang.key && (
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                <CheckIcon color="info" fontSize="small" />
                            </ListItemIcon>
                        )}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}