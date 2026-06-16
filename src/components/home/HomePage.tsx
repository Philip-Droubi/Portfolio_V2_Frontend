import AboutMe from "./about/AboutMe";
import EducationSkills from "./educationSkills/EducationSkills";
import Hero from "./hero/Hero";

export default function HomePage() {
    return (
        <>
            {/* Hero Section  */}
            <Hero />

            {/* About Me Section */}
            <AboutMe />

            {/* Education & Skills */}
            <EducationSkills />
        </>
    )
}
