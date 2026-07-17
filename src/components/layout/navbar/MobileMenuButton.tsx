import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LanguageButton from "./LanguageButton";

export default function MobileMenuButton({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div className="flex gap-1 md:hidden">
            <LanguageButton />
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
                className="
            w-11 h-11
            flex items-center justify-center
            text-title
            transition-all duration-300
            hover:text-secondary
            hover:bg-white/5
          "
            >
                {isOpen ? (
                    <CloseRoundedIcon sx={{ fontSize: 30 }} />
                ) : (
                    <MenuRoundedIcon sx={{ fontSize: 30 }} />
                )}
            </button>
        </div>
    )
}
