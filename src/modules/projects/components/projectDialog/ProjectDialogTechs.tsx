import { Box, Divider, Typography } from "@mui/material";
import type { TechType } from "../../types";


export default function ProjectDialogTechs({
    techs,
    lang
}: {
    techs: TechType[],
    lang: string,
}) {
    return (
        <div className="border-2 border-dashed rounded-xl border-description px-6 py-4 mt-10">
            <Box>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 1,
                        fontWeight: 500,
                        color: "var(--color-secondary)"
                    }}
                >
                    Technologies Used
                </Typography>

                <Divider />

                <div className="flex flex-wrap gap-2 mt-4 justify-around lg:justify-start">
                    {
                        techs?.map(tech => (
                            <div
                                className="
                                    border rounded-xl border-t border-gray-600 h-22 min-w-22
                                    flex flex-col items-center justify-center
                                    transition
                                    hover:bg-white/10
                                    hover:border-primary
                                    ">
                                <Box
                                    component="img"
                                    src={tech.icon}
                                    sx={{
                                        userSelect: "none",
                                        width: 34,
                                        height: 34,
                                        objectFit: "contain",
                                    }}
                                />
                                <p className="text-sm mt-1 text-description px-1">
                                    {tech[`name_${lang}`]}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </Box >
        </div>
    )
}