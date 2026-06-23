import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectPagination({
    currentPage,
    totalPages,
    setCurrentPage,
}: {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}) {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const check = () => setIsSmall(window.innerWidth < 650);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const goTo = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const getPages = () => {
        const total = totalPages;
        const current = currentPage;
        const delta = isSmall ? 1 : 2;

        if (total <= 7) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        const pages: (number | "...")[] = [];

        const left = Math.max(2, current - delta);
        const right = Math.min(total - 1, current + delta);

        pages.push(1);

        if (left > 2) pages.push("...");

        for (let i = left; i <= right; i++) pages.push(i);

        if (right < total - 1) pages.push("...");

        pages.push(total);

        return pages;
    };

    return (
        <div className="flex justify-center mt-12 select-none">
            <div
                className="
                    flex items-center gap-1 p-1 
                    rounded rounded-tl-2xl rounded-br-2xl 
                    bg-white/5 border border-white/10 backdrop-blur-md
                    overflow-x-auto scrollbar-none px-2
                    snap-x snap-mandatory
                    w-max mx-auto
                "
            >

                {/* First (hidden on mobile) */}
                {!isSmall && (
                    <PaginationTab
                        disabled={currentPage === 1}
                        onClick={() => goTo(1)}
                        isSmall={isSmall}
                    >
                        «
                    </PaginationTab>
                )}

                {/* Prev */}
                <PaginationTab
                    disabled={currentPage === 1}
                    onClick={() => goTo(currentPage - 1)}
                    isSmall={isSmall}
                >
                    ‹
                </PaginationTab>

                {/* Pages */}
                {getPages().map((page, idx) => {
                    const key = typeof page === "number" ? `p-${page}` : `dots-${idx}`;

                    return page === "..." ? (
                        <span
                            key={key}
                            className="text-gray-500 px-3 py-2 snap-center"
                        >
                            ...
                        </span>
                    ) : (
                        <PaginationTab
                            key={key}
                            active={page === currentPage}
                            onClick={() => goTo(page)}
                            isSmall={isSmall}
                        >
                            {page}
                        </PaginationTab>
                    );
                })}

                {/* Next */}
                <PaginationTab
                    disabled={currentPage === totalPages}
                    onClick={() => goTo(currentPage + 1)}
                    isSmall={isSmall}
                >
                    ›
                </PaginationTab>

                {/* Last (hidden on mobile) */}
                {!isSmall && (
                    <PaginationTab
                        disabled={currentPage === totalPages}
                        onClick={() => goTo(totalPages)}
                        isSmall={isSmall}
                    >
                        »
                    </PaginationTab>
                )}
            </div>
        </div>
    );
}

function PaginationTab({
    children,
    onClick,
    active,
    disabled,
    isSmall,
}: {
    children: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    isSmall: boolean;
}) {
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            disabled={disabled}
            className={`
                snap-center
                ${isSmall ? "px-3 py-1.5 text-sm" : "px-4 py-2 text-base"}
                rounded rounded-tl-xl rounded-br-xl
                transition-all duration-300
                whitespace-nowrap
                ${active
                    ? "bg-secondary text-black shadow-md"
                    : "text-description hover:text-white"
                }
                ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
            `}
        >
            {children}
        </motion.button>
    );
}
