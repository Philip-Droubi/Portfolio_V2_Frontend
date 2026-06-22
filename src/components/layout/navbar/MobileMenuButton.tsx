import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function MobileMenuButton({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="
            md:hidden

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
    )
}
