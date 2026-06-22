import { Chip } from "@mui/material"
import type { ProjectType } from "../../types"

export default function ProjectCardImage({
    project,
    name,
    lang,
}: {
    project: ProjectType,
    name: string,
    lang: string,
}) {
    return (
        <div className="relative h-50 overflow-hidden">
            <img src={project.main_image} alt={name}
                className="w-full h-full object-cover transition duration-400 group-hover:scale-110 select-none"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent" />

            <div className="absolute bottom-5 left-5">
                <h3 className="text-xl font-bold text-white">
                    {name}
                    <div className="flex flex-wrap gap-2 mt-1">
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
                </h3>
            </div>
        </div>
    )
}
