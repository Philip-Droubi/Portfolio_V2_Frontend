import data from "@/assets/json/data.json";
import { Link } from "react-router-dom";
import { fadeUpMotion } from "@/utils/motions";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import i18next from "i18next";
import type { ProjectType } from "../types";
import ProjectCard from "./projectCard/ProjectCard";
import ProjectFilters from "./ProjectFilters";
import ProjectPagination from "./ProjectPagination";
import { useMemo, useState } from "react";

export default function ProjectsList({
    itemsLimit,
    fromProjectsPage = false,
    hasFilters = false,
    hasPagination = false,
}: {
    itemsLimit?: number;
    fromProjectsPage?: boolean;
    hasFilters?: boolean;
    hasPagination?: boolean;
}) {
    const [selectedTag, setSelectedTag] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const lang = i18next.language;
    const pageSize = 16;

    const allProjects = data.projects as ProjectType[];

    // 1. FILTER
    const filteredProjects = useMemo(() => {
        if (!selectedTag) return allProjects;

        return allProjects.filter(project =>
            project.tags?.some(tag => tag.id === selectedTag)
        );
    }, [selectedTag, allProjects]);

    // 2. PAGINATION
    const totalPages = Math.ceil(filteredProjects.length / pageSize);

    let paginatedProjects = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return filteredProjects.slice(start, end);
    }, [filteredProjects, currentPage, pageSize]);

    if (!fromProjectsPage) {
        paginatedProjects = paginatedProjects.slice(0, itemsLimit);
    }

    return (
        <section id="projects" className={fromProjectsPage ? "" : "pt-18"}>
            <motion.div
                variants={fadeUpMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">
                        Projects & <span className="text-secondary">Experience</span>
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Projects that reflect my experience building modern web applications.
                    </p>
                </div>

                {/* Filters */}
                {hasFilters && (
                    <ProjectFilters
                        selectedTag={selectedTag}
                        setSelectedTag={(id) => {
                            setSelectedTag(id);
                            setCurrentPage(1); // reset page on filter change
                        }}
                    />
                )}

                {/* Grid */}
                <Grid container spacing={4}>
                    {paginatedProjects.map((project) => (
                        <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                            <ProjectCard project={project} lang={lang} />
                        </Grid>
                    ))}
                </Grid>

                {/* Pagination */}
                {hasPagination && totalPages > 1 && (
                    <ProjectPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                    />
                )}

                {/* View All */}
                {itemsLimit && (
                    <div className="flex justify-center mt-12">
                        <Link
                            to="/projects"
                            className="group inline-flex items-center gap-2
                                bg-secondary/10 backdrop-blur-xs
                                px-6 py-3 rounded-xl
                                border border-secondary/40
                                text-secondary font-medium
                                transition-all duration-300
                                hover:border-secondary
                                hover:px-8
                                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                        >
                            View All
                            <span className="text-lg opacity-70">
                                ({filteredProjects.length})
                            </span>
                            Projects
                            <span className="transition-transform duration-300 group-hover:translate-x-3">
                                →
                            </span>
                        </Link>
                    </div>
                )}
            </motion.div>
        </section>
    );
}