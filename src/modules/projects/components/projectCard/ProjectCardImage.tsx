import { Tooltip } from "@mui/material"
import type { ProjectType } from "../../types"
import { Apartment } from "@mui/icons-material"

export default function ProjectCardImage({
    project,
    name,
}: {
    project: ProjectType,
    name: string,
}) {
    return (
        <div className="relative h-50 overflow-hidden">
            <img src={project.main_image} alt={name}
                className="w-full h-full object-cover transition duration-400 group-hover:scale-110 select-none"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent" />

            {/* Comapny */}
            {
                project.is_company &&
                <Tooltip title='Company' >
                    <div className="absolute top-2 inset-e-4 border border-orange-700 rounded bg-black/70">
                        <Apartment fontSize="large" className="text-oranged" />
                    </div>
                </Tooltip>
            }

            <div className="absolute bottom-2 left-5">
                <h3 className="text-xl font-bold text-white">
                    {name}

                </h3>
            </div>
        </div>
    )
}
