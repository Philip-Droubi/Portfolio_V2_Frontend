export default function MobileNavMenu({
    isOpen,
    navItems,
    setIsOpen,
}: {
    isOpen: boolean;
    navItems: { label: string; href: string }[];
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div
            className={`
            md:hidden
            overflow-hidden
            transition-all duration-300 ease-in-out
          ${isOpen
                    ? "max-h-100 border-t border-white/10"
                    : "max-h-0"
                }
`}
        >
            <nav className="flex flex-col bg-mobile-navbar backdrop-blur-xl">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="
                px-6 py-4

                text-text
                font-medium

                border-b border-white/5

                transition-all duration-300

                hover:text-secondary
                hover:bg-white/5
              "
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    )
}
