import data from "@/assets/json/data.json";
import i18next from "i18next";
import type { TagType } from "../types";

export default function ProjectFilters({
    selectedTag,
    setSelectedTag,
}: {
    selectedTag: number | null;
    setSelectedTag: (id: number | null) => void;
}) {
    const lang = i18next.language;
    const tags = data.tags as TagType[];
    const projects = data.projects;

    // Count projects per tag
    const projectCounts = projects.reduce((acc, project) => {
        project.tags.forEach((tag) => {
            acc[tag.id] = (acc[tag.id] || 0) + 1;
        });
        return acc;
    }, {} as Record<number, number>);

    const totalProjects = projects.length;

    return (
        <div className="flex justify-center mb-10">
            <div
                className="
                    flex items-center gap-1 p-1 rounded rounded-tl-2xl rounded-br-2xl 
                    bg-white/5 border border-white/10 backdrop-blur-md
                    overflow-x-auto scrollbar-none px-2
                    snap-x snap-mandatory
                "
            >

                {/* All */}
                <FilterTab
                    active={selectedTag === null}
                    onClick={() => setSelectedTag(null)}
                >
                    All ({totalProjects})
                </FilterTab>

                {/* Tags */}
                {tags.map((tag) => (
                    <FilterTab
                        key={tag.id}
                        active={selectedTag === tag.id}
                        onClick={() => setSelectedTag(tag.id)}
                    >
                        {tag[`name_${lang}`]} ({projectCounts[tag.id] || 0})
                    </FilterTab>
                ))}
            </div>
        </div>
    );
}

function FilterTab({
    active,
    onClick,
    children,
}: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            onClick={onClick}
            className={`
                snap-center
                relative px-3 py-2 sm:px-4 sm:py-2
                rounded rounded-tl-xl rounded-br-xl 
                transition-all duration-300
                text-sm sm:text-base
                whitespace-nowrap
                cursor-pointer
                ${active
                    ? "bg-secondary text-black shadow-md"
                    : "text-description hover:text-white"
                }
            `}
        >
            {children}
        </button>
    );
}
