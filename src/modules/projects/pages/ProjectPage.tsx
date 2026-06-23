import ProjectsList from "../components/ProjectsList";

export default function ProjectPage() {
    return (
        <ProjectsList
            fromProjectsPage
            hasFilters
            hasPagination
        />
    )
}
