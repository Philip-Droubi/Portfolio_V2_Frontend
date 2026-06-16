import { INFO } from "@/utils/config";

export default function AboutTextSection() {
    return (
        <div className="space-y-6 text-center lg:text-start">
            <h3 className="text-2xl md:text-4xl font-semibold text-white">
                More Than Just Code.
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
                I'm <span className="text-secondary text-xl font-bold">{INFO.name}</span>, a Software Engineer passionate about
                building modern web applications and solving real-world
                problems through technology.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
                I focus on building software that is maintainable, scalable, and
                aligned with real business requirements. My interests extend beyond
                writing code to system design, database architecture, and software
                analysis.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
                Having worked on both professional and freelance projects, I value
                clear communication, thoughtful planning, and delivering practical
                solutions that create real impact.
            </p>
        </div>
    )
}
