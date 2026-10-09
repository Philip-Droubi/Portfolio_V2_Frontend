import ProjectsList from "../projects/components/ProjectsList";
import AboutMe from "./about/AboutMe";
import EducationSkills from "./educationSkills/EducationSkills";
import Hero from "./hero/Hero";
import { useSeo } from "@/hooks/useSeo";
import { useLangStore } from "@/store/useLangStore";
import { pageSeo } from "@/utils/seo";

export default function HomePage() {
    const lang = useLangStore((s) => s.language);
    useSeo(pageSeo("home", lang));

    return (
        <>
            {/* Hero Section  */}
            <Hero />

            {/* About Me Section */}
            <AboutMe />

            {/* Education & Skills */}
            <EducationSkills />

            {/* Projects */}
            <ProjectsList itemsLimit={6} />
        </>
    )
}
