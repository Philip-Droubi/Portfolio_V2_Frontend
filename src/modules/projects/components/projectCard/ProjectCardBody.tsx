import { Chip, Stack, Tooltip } from "@mui/material";
import type { ProjectType } from "../../types";

export default function ProjectCardBody({
    project,
    lang,
}: {
    project: ProjectType;
    lang: string;
}) {
    const description = project[`tiny_description_${lang}` as keyof ProjectType] as string;

    return (
        <div className="px-5 py-3">
            <div className="flex flex-wrap gap-2 mb-2">
                {
                    project.tags?.map((tag) => (
                        <Chip label={tag[`name_${lang}`]}
                            size="small"
                            sx={{
                                border: "1px solid",
                                borderColor: "var(--color-secondary)",
                                borderRadius: "8px"
                            }} />
                    ))
                }
            </div>
            {/* Description */}
            <p className="text-gray-400 h-17.25 text-sm leading-relaxed line-clamp-3">
                {description}
            </p>

            {/* TECHS */}
            <Stack direction="row" spacing={1.5} sx={{ my: 2, userSelect: "none" }}>
                {project.teches
                    ?.slice(0, 6)
                    .map(tech => (
                        <Tooltip key={tech.id} title={tech[`name_${lang}`]} placement="bottom">

                            <div key={tech.id}
                                className="w-12 h-12 rounded-md
                                    flex items-center justify-center
                                    bg-white/5
                                    border border-white/10
                                    transition
                                    hover:border-secondary/50
                                    hover:-translate-y-1"
                            >
                                <img src={tech.icon} className="w-7 h-7" />
                            </div>

                        </Tooltip>
                    ))}
                {project.teches &&
                    project.teches.length > 5 && (
                        <span className="text-md text-description self-center">
                            +{project.teches.length - 5}
                        </span>
                    )}
            </Stack>

            {/* FOOTER */}
            < div
                className="mt-6 text-lg flex items-center justify-between text-secondary font-semibold">
                <span>
                    View Project
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                </span>
            </div>

        </div>
    )
}
