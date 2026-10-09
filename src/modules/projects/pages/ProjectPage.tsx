import { useNavigate, useParams } from "react-router-dom";
import data from "@/assets/json/data.json";
import ProjectsList from "../components/ProjectsList";
import type { ProjectType } from "../types";
import { useSeo } from "@/hooks/useSeo";
import { useLangStore } from "@/store/useLangStore";
import { pageSeo, projectSeo } from "@/utils/seo";

export default function ProjectPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const lang = useLangStore((s) => s.language);

    // /projects/:slug opens that project's dialog, so every project has its own URL
    const project = slug
        ? (data.projects as ProjectType[]).find((p) => p.slug === slug)
        : undefined;

    useSeo(project ? projectSeo(project, lang) : pageSeo("projects", lang));

    return (
        <ProjectsList
            fromProjectsPage
            hasFilters
            hasPagination
            openSlug={project?.slug}
            onProjectClose={() => navigate("/projects", { replace: true })}
        />
    )
}
