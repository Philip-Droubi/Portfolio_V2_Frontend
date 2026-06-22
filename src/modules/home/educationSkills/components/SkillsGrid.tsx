import data from "@/assets/json/data.json";
import i18next from "i18next";

export default function SkillsGrid() {
    const teches = data.teches;
    const lang = i18next.language;

    return (
        <div className="space-y-6">

            <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {teches.map((tech) => (
                    <div
                        key={tech.id}
                        className="group rounded-xl border border-white/10 bg-[#162449] md:bg-white/5
                            backdrop-blur-md
                            p-4
                            flex flex-col
                            items-center
                            gap-3
                            transition-all duration-300
                            hover:border-secondary/50
                            hover:-translate-y-1">
                        <img
                            src={tech.icon}
                            //@ts-ignore
                            alt={tech[`name_${lang}` as keyof typeof tech]}
                            className="w-10 h-10 select-none"
                        />

                        <span className="text-sm text-gray-300">
                            {tech[`name_${lang}` as keyof typeof tech]}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    );
}