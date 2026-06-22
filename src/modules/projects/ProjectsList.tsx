import data from "@/assets/json/data.json";
import { Link } from "react-router-dom";
import { fadeUpMotion } from "@/utils/motions";
import type { ProjectType } from "./types";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import ProjectCard from "./components/projectCard/ProjectCard";
import i18next from "i18next";

export default function ProjectsList({
    itemsLimit,
}: {
    itemsLimit?: number;
}) {

    let projects = data.projects as ProjectType[];
    const lang = i18next.language;

    if (itemsLimit) {
        projects = projects.slice(0, itemsLimit);
    }

    return (
        <section id="projects" className="pt-24">

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
                        Projects
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Projects that reflect my experience building modern web applications.
                    </p>

                </div>

                <Grid container spacing={4}>
                    {/* Projects */}
                    {projects.map((project) => {
                        return (
                            <Grid
                                key={project.id}
                                size={{ xs: 12, sm: 6, lg: 4, }}
                            >
                                <ProjectCard project={project} lang={lang} />
                            </Grid>
                        )
                    })}
                </Grid>

                {/* All projects button */}
                {itemsLimit && (
                    <div className="flex justify-center mt-12">
                        <Link
                            to="/projects"
                            className="group inline-flex items-center gap-2
                                bg-secondary/10
                                backdrop-blur-xs
                                px-6 py-3
                                rounded-xl border border-secondary/40
                                text-secondary font-medium
                                transition-all duration-300
                                hover:bg-secondary/10 hover:border-secondary
                                hover:px-8 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                            View All
                            <span className="text-lg opacity-70">
                                ({projects.length})
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